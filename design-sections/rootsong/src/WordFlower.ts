/**
 * WordFlower
 * Canvas-2D particle system where every particle is a word. Particles are "grown" into a
 * procedurally generated flower (stems, blades, petals, a drooping bud), follow a spring
 * towards targets that change with scroll (bloom → scatter → morph into a typographic word),
 * and are pushed away by the pointer.
 */

export const MEMORIES = [
  'first light', 'the lawn tree', 'fog on the lake', 'warm towels', 'the boardwalk', 'sea glass',
  'ridge trail', 'pinot at noon', 'room 14', 'the bell desk', 'late check-out', 'bare feet',
  'fireflies', 'the cove', 'a long bath', 'piano at eight', 'sunset dinner', 'fresh sheets',
  'the arboretum', 'wet grass', 'postcards', 'slow mornings', 'the keyhole', 'cedar smoke',
  'quiet evenings', 'paper maps', 'honey toast', 'the porch light', 'cold sauvignon', 'open windows',
  'pressed ferns', 'thunder', 'first swim', 'road trips', 'room service', 'moss', 'poppies',
  'no alarms', 'the garden', 'tide pools', 'robes', 'photographs', 'slow dances',
  'tea steam', 'kites', 'hugs', 'laughter', 'stargazing', 'home', 'blankets', 'songs', 'stars',
  'the concierge', 'canoes', 'honeymoon', 'birthdays', 'together', 'the vineyard', 'family',
]

type Recipe =
  | { kind: 'curve'; curve: number; t: number; lane: number }
  | { kind: 'petal'; petal: number; u: number; v: number; bud: boolean }
  | { kind: 'center'; ang: number; rad: number }

type Particle = {
  text: string
  size: number
  recipe: Recipe
  x: number
  y: number
  vx: number
  vy: number
  rot: number
  alpha: number
  delay: number // growth stagger (s)
  seed: number
  user: boolean
  tone: number // per-word opacity variation, precomputed
  // cached targets
  fx: number
  fy: number
  frot: number
  mx: number
  my: number
  mDelay: number
}

type Vec = { x: number; y: number }
type Bezier = [Vec, Vec, Vec, Vec]

const bez = (c: Bezier, t: number): Vec => {
  const it = 1 - t
  const a = it * it * it, b = 3 * it * it * t, d = 3 * it * t * t, e = t * t * t
  return {
    x: a * c[0].x + b * c[1].x + d * c[2].x + e * c[3].x,
    y: a * c[0].y + b * c[1].y + d * c[2].y + e * c[3].y,
  }
}
const bezTan = (c: Bezier, t: number): Vec => {
  const it = 1 - t
  return {
    x: 3 * it * it * (c[1].x - c[0].x) + 6 * it * t * (c[2].x - c[1].x) + 3 * t * t * (c[3].x - c[2].x),
    y: 3 * it * it * (c[1].y - c[0].y) + 6 * it * t * (c[2].y - c[1].y) + 3 * t * t * (c[3].y - c[2].y),
  }
}

// Flower in "flower units": origin at root, +y is up, total height ≈ 1.
const STEM: Bezier = [{ x: 0, y: 0 }, { x: -0.03, y: 0.28 }, { x: 0.07, y: 0.5 }, { x: 0.035, y: 0.74 }]
const SIDE_FROM_T = 0.6
const CURVES: { c: Bezier; width: number; lanes: number; density: number; from?: number }[] = [
  { c: STEM, width: 0.013, lanes: 3, density: 1 },
  // left branch with drooping bud (start point patched at runtime from STEM)
  { c: [{ x: 0, y: 0 }, { x: -0.08, y: 0.66 }, { x: -0.2, y: 0.73 }, { x: -0.27, y: 0.72 }], width: 0.007, lanes: 2, density: 0.8, from: SIDE_FROM_T },
  // long blades
  { c: [{ x: 0.01, y: 0 }, { x: 0.09, y: 0.16 }, { x: 0.16, y: 0.33 }, { x: 0.25, y: 0.5 }], width: 0.012, lanes: 2, density: 0.9 },
  { c: [{ x: -0.01, y: 0 }, { x: -0.06, y: 0.12 }, { x: -0.1, y: 0.24 }, { x: -0.09, y: 0.37 }], width: 0.011, lanes: 2, density: 0.8 },
]
{
  const s = bez(STEM, SIDE_FROM_T)
  CURVES[1].c[0] = s
}
const HEAD = bez(STEM, 1)
const BUD = CURVES[1].c[3]
const PETALS = 6

const rand = (seed: number) => {
  const x = Math.sin(seed * 127.1 + 311.7) * 43758.5453
  return x - Math.floor(x)
}
const clamp01 = (v: number) => Math.max(0, Math.min(1, v))
const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)

export type FlowerState = {
  bloom: number // 0 closed bud → 1 fully open
  scatter: number // 0 → 1 words lift off like pollen
  morph: number // 0 flower → 1 typographic word
}

export class WordFlower {
  private ctx: CanvasRenderingContext2D
  private particles: Particle[] = []
  private W = 1
  private H = 1
  private dpr = 1
  private scale = 1 // flower units → px
  private fontScale = 1
  private sprites = new Map<string, { c: HTMLCanvasElement; hw: number; hh: number }>()
  private root: Vec = { x: 0, y: 0 }
  private pointer: Vec & { active: boolean } = { x: -9999, y: -9999, active: false }
  private shock: { x: number; y: number; t: number } | null = null
  private raf = 0
  private running = false
  private start = performance.now()
  private last = performance.now()
  private word: string
  private font: string
  private staticMode = false
  private needsDraw = true
  state: FlowerState = { bloom: 0.5, scatter: 0, morph: 0 }
  color = '239, 233, 196'
  accent = '214, 240, 107'

  constructor(private canvas: HTMLCanvasElement, opts: { word: string; font: string }) {
    const ctx = canvas.getContext('2d')
    if (!ctx) throw new Error('Canvas 2D unavailable')
    this.ctx = ctx
    this.word = opts.word
    this.font = opts.font
  }

  get count() {
    return this.particles.length
  }

  setStatic(v: boolean) {
    this.staticMode = v
    this.needsDraw = true
  }

  setState(s: Partial<FlowerState>) {
    Object.assign(this.state, s)
    this.needsDraw = true
  }

  resize(w: number, h: number) {
    const isSmall = w < 700
    // cap the backing store at ~4.2M pixels: big 2x screens otherwise paint a 4K canvas every frame
    const dprMax = Math.min(window.devicePixelRatio || 1, isSmall ? 1.5 : 2)
    this.dpr = Math.max(1, Math.min(dprMax, Math.sqrt(4.2e6 / Math.max(1, w * h))))
    this.sprites.clear()
    this.W = w
    this.H = h
    this.canvas.width = Math.round(w * this.dpr)
    this.canvas.height = Math.round(h * this.dpr)
    this.scale = Math.min(h * 0.78, w * (isSmall ? 1.25 : 0.95))
    this.fontScale = Math.max(0.8, Math.min(1.45, this.scale / 620))
    this.root = { x: w * (isSmall ? 0.52 : 0.54), y: h * 0.99 }
    const fresh = this.particles.length === 0
    if (fresh) this.build(isSmall ? 0.6 : 1)
    this.computeMorphTargets()
    if (fresh) {
      // each word starts just below its own spot; staggered delays make the flower draw upwards
      for (const p of this.particles) {
        p.x = p.fx + (rand(p.seed) - 0.5) * 30
        p.y = p.fy + 30 + rand(p.seed + 1) * 50
      }
    }
    this.needsDraw = true
  }

  /* ---------------------------------------------------------- generation */
  private build(density: number) {
    let wi = 0
    const nextWord = () => MEMORIES[wi++ % MEMORIES.length]
    const shortWord = (i: number) => {
      const w = MEMORIES[(i * 7) % MEMORIES.length].split(' ')
      return w[i % w.length]
    }
    CURVES.forEach((cv, ci) => {
      const perLane = Math.round(34 * cv.density * density)
      for (let lane = 0; lane < cv.lanes; lane++) {
        for (let i = 0; i < perLane; i++) {
          const t = (i + (lane % 2) * 0.5) / perLane
          this.add({ kind: 'curve', curve: ci, t, lane: cv.lanes === 1 ? 0 : lane / (cv.lanes - 1) - 0.5 }, shortWord(i + lane * 13 + ci * 5), 11)
        }
      }
    })
    const perPetal = Math.round(38 * density)
    for (let p = 0; p < PETALS; p++) {
      for (let i = 0; i < perPetal; i++) {
        const s = p * 1000 + i
        this.add({ kind: 'petal', petal: p, u: Math.pow(rand(s), 0.8), v: i % 2 ? rand(s + 0.5) * 2 - 1 : (rand(s + 0.7) > 0.5 ? 1 : -1) * (0.75 + rand(s + 0.5) * 0.25), bud: false }, i % 3 === 0 ? nextWord() : shortWord(i + p * 7), 12.5)
      }
    }
    for (let i = 0; i < Math.round(40 * density); i++) {
      this.add({ kind: 'petal', petal: i % 3, u: rand(i + 77), v: rand(i + 78) * 2 - 1, bud: true }, shortWord(i + 3), 9)
    }
    for (let i = 0; i < Math.round(30 * density); i++) {
      this.add({ kind: 'center', ang: rand(i + 400) * Math.PI * 2, rad: Math.sqrt(rand(i + 401)) }, nextWord(), 10.5)
    }
  }

  private add(recipe: Recipe, text: string, size: number, user = false) {
    const seed = this.particles.length + 1 + (user ? 5000 + Math.random() * 1000 : 0)
    const p: Particle = {
      text, size, recipe, user, seed,
      tone: user ? 1 : 0.62 + rand(seed + 6) * 0.38,
      x: 0, y: 0, vx: 0, vy: 0, rot: 0, alpha: 0,
      delay: 0,
      fx: 0, fy: 0, frot: 0, mx: 0, my: 0, mDelay: 0,
    }
    this.particles.push(p)
    // grow from the root upwards
    this.flowerTarget(p, 0)
    p.delay = clamp01((this.root.y - p.fy) / (this.scale * 1.05)) * 1.6 + rand(seed + 9) * 0.35
    return p
  }

  /** Plant a user memory into a random petal; it flies in from (x, y). */
  plant(text: string, from: Vec) {
    const clean = text.trim().slice(0, 40)
    if (!clean) return
    const r = Math.random()
    const p = this.add({ kind: 'petal', petal: Math.floor(r * PETALS), u: 0.3 + Math.random() * 0.6, v: Math.random() * 1.6 - 0.8, bud: false }, clean, 14, true)
    p.x = from.x
    p.y = from.y
    p.delay = 0
    p.alpha = 1
    p.vy = -8
    this.computeMorphTargets()
    this.needsDraw = true
  }

  /* ------------------------------------------------------------- targets */
  private toScreen(v: Vec): Vec {
    return { x: this.root.x + v.x * this.scale, y: this.root.y - v.y * this.scale }
  }

  private flowerTarget(p: Particle, time: number) {
    const { bloom } = this.state
    const sway = (y: number) => (this.staticMode ? 0 : Math.sin(time * 0.55 + y * 2.2) * 0.012 * y)
    const r = p.recipe
    let pos: Vec
    let ang = 0
    if (r.kind === 'curve') {
      const cv = CURVES[r.curve]
      const q = bez(cv.c, r.t)
      const tan = bezTan(cv.c, r.t)
      const len = Math.hypot(tan.x, tan.y) || 1
      const nx = -tan.y / len, ny = tan.x / len
      const w = cv.width * (1 - r.t * 0.55) * 2
      pos = { x: q.x + nx * r.lane * w + sway(q.y), y: q.y + ny * r.lane * w }
      ang = -Math.atan2(tan.y, tan.x) // screen space (y flipped)
    } else if (r.kind === 'center') {
      const c = HEAD
      pos = { x: c.x + Math.cos(r.ang) * r.rad * 0.025 + sway(c.y), y: c.y + Math.sin(r.ang) * r.rad * 0.02 }
      ang = (r.ang - Math.PI) * 0.08
    } else {
      const b = r.bud ? 0.12 : bloom
      const n = r.bud ? 3 : PETALS
      const c = r.bud ? BUD : HEAD
      // closed: petals point up (or droop, for the bud); open: radial spread
      const baseUp = r.bud ? -Math.PI / 2 - 0.5 : Math.PI / 2
      const spread = (r.petal - (n - 1) / 2) * ((Math.PI * 2) / n)
      const a = baseUp + spread * (0.18 + 0.82 * ease(b)) * (r.bud ? 0.25 : 1)
      const L = r.bud ? 0.05 : 0.08 + 0.13 * b
      const curl = r.u * 0.35 * (spread >= 0 ? 1 : -1) * b
      const dir = { x: Math.cos(a + curl), y: Math.sin(a + curl) }
      const nrm = { x: -dir.y, y: dir.x }
      const width = Math.sin(Math.PI * Math.pow(r.u, 0.75)) * (r.bud ? 0.014 : 0.03 + 0.02 * b)
      pos = {
        x: c.x + dir.x * r.u * L + nrm.x * r.v * width + sway(c.y),
        y: c.y + dir.y * r.u * L + nrm.y * r.v * width,
      }
      ang = -(a + curl)
      if (Math.cos(ang) < 0) ang += Math.PI // keep words readable, never upside down
    }
    const s = this.toScreen(pos)
    p.fx = s.x
    p.fy = s.y
    p.frot = r.kind === 'curve' ? ang : ang
  }

  /** Sample the typographic word and assign points to particles in left→right order. */
  private computeMorphTargets() {
    const W = this.W, H = this.H
    if (!this.particles.length) return
    const k = 0.5
    const off = document.createElement('canvas')
    off.width = Math.max(2, Math.round(W * k))
    off.height = Math.max(2, Math.round(H * k))
    const g = off.getContext('2d')
    if (!g) return
    let fs = 100
    g.font = `${fs}px ${this.font}`
    const mw = g.measureText(this.word).width
    fs = Math.min((off.width * (W < 700 ? 0.92 : 0.8) / mw) * fs, off.height * 0.5)
    g.font = `${fs}px ${this.font}`
    g.textAlign = 'center'
    g.textBaseline = 'middle'
    g.fillStyle = '#fff'
    g.fillText(this.word, off.width / 2, off.height * 0.46)
    const data = g.getImageData(0, 0, off.width, off.height).data
    const pts: Vec[] = []
    const step = 2
    for (let y = 0; y < off.height; y += step) {
      for (let x = 0; x < off.width; x += step) {
        if (data[(y * off.width + x) * 4 + 3] > 140) pts.push({ x: x / k, y: y / k })
      }
    }
    if (!pts.length) return
    // pick an even subset
    const n = this.particles.length
    const picked: Vec[] = []
    for (let i = 0; i < n; i++) {
      const j = Math.floor(((i + rand(i) * 0.9) / n) * pts.length) % pts.length
      picked.push(pts[j])
    }
    picked.sort((a, b) => a.x - b.x)
    const order = this.particles.map((p, i) => ({ p, i, x: p.fx })).sort((a, b) => a.x - b.x)
    order.forEach(({ p }, i) => {
      const q = picked[i]
      p.mx = q.x + (rand(p.seed + 3) - 0.5) * 3
      p.my = q.y + (rand(p.seed + 4) - 0.5) * 3
      p.mDelay = (q.x / W) * 0.45
    })
  }

  /* ----------------------------------------------------------- pointer */
  setPointer(x: number, y: number, active: boolean) {
    this.pointer.x = x
    this.pointer.y = y
    this.pointer.active = active
    this.needsDraw = true
  }

  burst(x: number, y: number) {
    this.shock = { x, y, t: performance.now() }
    this.needsDraw = true
  }

  /* ------------------------------------------------------------- frame */
  private step(now: number) {
    const dt = Math.min(0.05, (now - this.last) / 1000)
    this.last = now
    const time = (now - this.start) / 1000
    const { scatter, morph } = this.state
    const R = Math.max(70, Math.min(this.W, this.H) * 0.12)
    const shockAge = this.shock ? (now - this.shock.t) / 1000 : 99
    if (shockAge > 1.2) this.shock = null

    for (const p of this.particles) {
      this.flowerTarget(p, time)
      const grow = this.staticMode ? 1 : clamp01((time - p.delay) / 0.9)
      if (grow <= 0) continue

      const m = this.staticMode ? (morph > 0.5 ? 1 : 0) : ease(clamp01((morph * 1.45 - p.mDelay)))
      let tx = p.fx + (p.mx - p.fx) * m
      let ty = p.fy + (p.my - p.fy) * m
      const trot = p.frot * (1 - m)

      if (scatter > 0 && !this.staticMode) {
        const s = scatter * (1 - m)
        tx += Math.sin(time * 0.6 + p.seed) * 60 * s + (rand(p.seed + 1) - 0.5) * this.W * 0.5 * s
        ty += -s * (120 + rand(p.seed + 2) * this.H * 0.45) + Math.cos(time * 0.5 + p.seed) * 30 * s
      }

      if (this.staticMode) {
        p.x = tx
        p.y = ty
        p.rot = trot
        p.alpha = 1
        continue
      }

      let ax = (tx - p.x) * 0.055
      let ay = (ty - p.y) * 0.055
      if (this.pointer.active) {
        const dx = p.x - this.pointer.x
        const dy = p.y - this.pointer.y
        const d = Math.hypot(dx, dy)
        if (d < R && d > 0.01) {
          const f = Math.pow(1 - d / R, 2) * 9
          ax += (dx / d) * f
          ay += (dy / d) * f
        }
      }
      if (this.shock) {
        const dx = p.x - this.shock.x
        const dy = p.y - this.shock.y
        const d = Math.hypot(dx, dy) || 1
        const ring = shockAge * 900
        const band = Math.abs(d - ring)
        if (band < 70) {
          const f = (1 - band / 70) * 6 * (1 - shockAge / 1.2)
          ax += (dx / d) * f
          ay += (dy / d) * f
        }
      }
      p.vx = (p.vx + ax) * 0.8
      p.vy = (p.vy + ay) * 0.8
      p.x += p.vx * dt * 60
      p.y += p.vy * dt * 60
      p.rot += (trot - p.rot) * 0.12
      p.alpha += (grow - p.alpha) * 0.08
    }
  }

  /**
   * Each word is rasterised once into a small bitmap (at device resolution) and then
   * stamped with drawImage. That is far cheaper than fillText, and it removes the font
   * re-parsing that happened every time the size changed while scrolling.
   */
  private sprite(p: Particle) {
    const key = `${p.user ? 1 : 0}|${p.size}|${p.text}`
    let s = this.sprites.get(key)
    if (s) return s
    const px = p.size * this.fontScale * this.dpr
    const c = document.createElement('canvas')
    const g = c.getContext('2d')!
    g.font = `${px}px ${this.font}`
    c.width = Math.max(1, Math.ceil(g.measureText(p.text).width + 4))
    c.height = Math.max(1, Math.ceil(px * 1.35))
    g.font = `${px}px ${this.font}` // resizing the canvas resets its state
    g.textBaseline = 'middle'
    g.fillStyle = `rgb(${p.user ? this.accent : this.color})`
    g.fillText(p.text, 2, c.height / 2)
    s = { c, hw: c.width / 2, hh: c.height / 2 }
    this.sprites.set(key, s)
    return s
  }

  private draw() {
    const { ctx, dpr } = this
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    const m = this.state.morph
    const kBase = 1 - m * 0.5
    const kUser = 1 - m * 0.25
    for (const p of this.particles) {
      if (p.alpha < 0.01) continue
      const sp = this.sprite(p)
      const k = p.user ? kUser : kBase
      const c = Math.cos(p.rot) * k
      const s = Math.sin(p.rot) * k
      ctx.setTransform(c, s, -s, c, p.x * dpr, p.y * dpr)
      ctx.globalAlpha = p.alpha * p.tone
      ctx.drawImage(sp.c, -sp.hw, -sp.hh)
    }
    ctx.globalAlpha = 1
  }

  renderOnce() {
    const now = performance.now()
    this.step(now)
    this.draw()
    this.needsDraw = false
  }

  private loop = (now: number) => {
    if (!this.running) return
    if (!this.staticMode || this.needsDraw) {
      this.step(now)
      this.draw()
      this.needsDraw = false
    }
    this.raf = requestAnimationFrame(this.loop)
  }

  play() {
    if (this.running) return
    this.running = true
    this.last = performance.now()
    this.raf = requestAnimationFrame(this.loop)
  }

  pause() {
    this.running = false
    cancelAnimationFrame(this.raf)
  }

  dispose() {
    this.pause()
    this.particles = []
  }
}
