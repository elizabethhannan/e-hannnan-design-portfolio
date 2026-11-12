// Phototropism — an ink-drawn meadow that turns toward the light (you).
// Plain canvas 2D. Time of day comes from scroll; the light comes from the pointer.

type Kind = 'daisy' | 'tulip' | 'bell' | 'dandelion' | 'bud'
type Leaf = { k: number; side: 1 | -1; len: number; wid: number; ang: number }
type Plant = {
  x: number
  front: boolean
  N: number
  seg: number
  curv: number
  phase: number
  bendMax: number
  resp: number
  g: number
  dur: number
  delay: number
  leaves: Leaf[]
  kind: Kind
  size: number
  open: number
  bloom: number
  dir: number
  seeds: number
  planted: boolean
  tip: { x: number; y: number; a: number }
}
type Blade = { x: number; h: number; lean: number; phase: number; front: boolean }
type Fly = { x: number; y: number; vx: number; vy: number; phase: number; life: number }
type Seed = { x: number; y: number; vx: number; vy: number; life: number; rot: number; falling?: { to: number; plant: Plant } }

const TAU = Math.PI * 2
const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v))
const smooth = (a: number, b: number, v: number) => {
  const t = clamp((v - a) / (b - a), 0, 1)
  return t * t * (3 - 2 * t)
}
const damp = (dt: number, r: number) => 1 - Math.exp(-dt * r)

type RGB = [number, number, number]
const hex = (h: string): RGB => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)]
const mix = (a: RGB, b: RGB, t: number): RGB => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t]
const css = (c: RGB, a = 1) => `rgba(${c[0] | 0},${c[1] | 0},${c[2] | 0},${a})`

// morning → dusk → night
const KEYS: { t: number; top: RGB; bot: RGB; ink: RGB; fill: RGB; glow: RGB; ga: number }[] = [
  { t: 0, top: hex('#f7f0e3'), bot: hex('#f1dfc4'), ink: hex('#3b2f22'), fill: hex('#f8f2e6'), glow: hex('#ffd38a'), ga: 0.8 },
  { t: 0.45, top: hex('#6d5c88'), bot: hex('#f2a578'), ink: hex('#2c2231'), fill: hex('#f3d2bb'), glow: hex('#ffb07a'), ga: 0.65 },
  { t: 0.75, top: hex('#0c1122'), bot: hex('#1c2340'), ink: hex('#ece3cc'), fill: hex('#121830'), glow: hex('#b9d0ff'), ga: 0.22 },
  { t: 1, top: hex('#0a0e1c'), bot: hex('#171d36'), ink: hex('#ece3cc'), fill: hex('#10152a'), glow: hex('#c6d8ff'), ga: 0.2 },
]
const LIME: RGB = hex('#d6f06b')

function palette(t: number) {
  let i = 0
  while (i < KEYS.length - 2 && t > KEYS[i + 1].t) i++
  const a = KEYS[i], b = KEYS[i + 1]
  const k = smooth(a.t, b.t, t)
  return {
    top: mix(a.top, b.top, k),
    bot: mix(a.bot, b.bot, k),
    ink: mix(a.ink, b.ink, k),
    fill: mix(a.fill, b.fill, k),
    glow: mix(a.glow, b.glow, k),
    ga: a.ga + (b.ga - a.ga) * k,
  }
}

function rng(seed: number) {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

export class Meadow {
  reduced = false
  planted = 0
  onPlanted?: (n: number) => void
  /** letters that lean too: element + its resting centre in stage px */
  letters: { el: HTMLElement; x: number; y: number; a: number }[] = []

  private ctx: CanvasRenderingContext2D
  private w = 1
  private h = 1
  private dpr = 1
  private ground = 1
  private plants: Plant[] = []
  private blades: Blade[] = []
  private flies: Fly[] = []
  private seeds: Seed[] = []
  private time = 0
  private tod = 0 // time of day 0 morning → 1 night
  private light = { x: 0, y: 0 }
  private target = { x: 0, y: 0 }
  private ptrSeen = -99
  private ptrV = 0
  private last = { x: 0, y: 0, t: 0 }
  private r = rng(11)

  constructor(private canvas: HTMLCanvasElement) {
    this.ctx = canvas.getContext('2d')!
  }

  get mobile() {
    return this.w < 700
  }

  resize(w: number, h: number) {
    const first = this.w === 1
    this.w = Math.max(1, w)
    this.h = Math.max(1, h)
    this.dpr = Math.min(window.devicePixelRatio || 1, this.mobile ? 2 : 1.5)
    this.canvas.width = Math.round(this.w * this.dpr)
    this.canvas.height = Math.round(this.h * this.dpr)
    this.ground = this.h * (this.mobile ? 0.86 : 0.87)
    if (first) {
      this.light = { x: this.w * 0.7, y: this.h * 0.28 }
      this.target = { ...this.light }
    }
    this.sow()
  }

  /** a fresh meadow, sprouting left to right */
  private sow() {
    const r = rng(20250928)
    const n = this.mobile ? 26 : 48
    const keep = this.plants.filter((p) => p.planted)
    this.plants = []
    for (let i = 0; i < n; i++) {
      const front = i % 3 !== 0
      const x = ((i + r() * 0.9) / n) * this.w * 1.04 - this.w * 0.02
      const p = this.genome(x, front, r)
      p.delay = (this.reduced ? 0 : 0.25) + (x / this.w) * (this.reduced ? 0 : 1.3) + r() * 0.5
      this.plants.push(p)
    }
    // back row first so the front row draws over it
    this.plants.sort((a, b) => Number(a.front) - Number(b.front))
    for (const p of keep) {
      p.x = Math.min(p.x, this.w)
      this.plants.push(p)
    }
    this.blades = []
    const nb = this.mobile ? 70 : 170
    for (let i = 0; i < nb; i++) {
      this.blades.push({
        x: r() * this.w,
        h: (this.mobile ? 16 : 22) + r() * (this.mobile ? 34 : 50),
        lean: (r() - 0.5) * 0.5,
        phase: r() * TAU,
        front: r() < 0.55,
      })
    }
  }

  private genome(x: number, front: boolean, r: () => number): Plant {
    const kinds: Kind[] = ['daisy', 'daisy', 'tulip', 'bell', 'dandelion', 'bud', 'daisy', 'dandelion']
    const kind = kinds[Math.floor(r() * kinds.length)]
    const H = this.h * (front ? 0.2 + r() * (this.mobile ? 0.26 : 0.34) : 0.14 + r() * 0.2)
    const N = 14
    const leaves: Leaf[] = []
    const nl = 1 + Math.floor(r() * 3)
    for (let j = 0; j < nl; j++) {
      leaves.push({
        k: 2 + Math.floor(r() * 6) + j * 2,
        side: j % 2 ? 1 : -1,
        len: H * (0.14 + r() * 0.1),
        wid: 0.26 + r() * 0.12,
        ang: 0.7 + r() * 0.5,
      })
    }
    return {
      x,
      front,
      N,
      seg: H / N,
      curv: (r() - 0.5) * 0.5,
      phase: r() * TAU,
      bendMax: 0.55 + r() * 0.45,
      resp: 0.7 + r() * 1.3,
      g: this.reduced ? 1 : 0,
      dur: 2 + r() * 1.6,
      delay: 0,
      leaves: leaves.filter((l) => l.k < N - 2),
      kind,
      size: (front ? 1 : 0.75) * (this.mobile ? 0.75 : 1) * (8 + r() * 7),
      open: 0,
      bloom: this.reduced ? 1 : 0,
      dir: 0,
      seeds: 26,
      planted: false,
      tip: { x, y: this.ground, a: 0 },
    }
  }

  setTime(t: number) {
    this.tod = clamp(t, 0, 1)
  }

  pointer(x: number, y: number) {
    const dt = Math.max(0.008, this.time - this.last.t)
    this.ptrV = Math.hypot(x - this.last.x, y - this.last.y) / dt
    this.last = { x, y, t: this.time }
    this.target = { x, y }
    this.ptrSeen = this.time
  }

  /** drop a seed from (x, y); it sprouts where it lands */
  plant(x: number, y: number) {
    const r = this.r
    const p = this.genome(clamp(x, 8, this.w - 8), true, r)
    p.g = 0
    p.bloom = 0
    p.planted = true
    p.delay = 1e9 // waits for its seed to land
    this.seeds.push({ x, y: Math.min(y, this.ground - 4), vx: 0, vy: 0, life: 1, rot: 0, falling: { to: this.ground, plant: p } })
    this.plants.push(p)
    const extra = this.plants.filter((q) => q.planted)
    if (extra.length > 30) this.plants.splice(this.plants.indexOf(extra[0]), 1)
    this.planted++
    this.onPlanted?.(this.planted)
    // also shake loose any dandelion seeds nearby
    for (const q of this.plants) if (q.kind === 'dandelion' && Math.hypot(q.tip.x - x, q.tip.y - y) < 80) this.blow(q, 8)
  }

  private blow(p: Plant, n: number) {
    const k = Math.min(n, Math.floor(p.seeds))
    for (let i = 0; i < k; i++) {
      const a = this.r() * TAU
      this.seeds.push({
        x: p.tip.x + Math.cos(a) * p.size,
        y: p.tip.y + Math.sin(a) * p.size,
        vx: (this.r() - 0.3) * 40,
        vy: -20 - this.r() * 30,
        life: 1,
        rot: this.r() * TAU,
      })
    }
    p.seeds -= k
  }

  step(dt: number) {
    dt = Math.min(dt, 1 / 30)
    this.time += dt
    const t = this.time
    const day = 1 - smooth(0.35, 0.7, this.tod) // how much sun there is
    const night = smooth(0.55, 0.8, this.tod)

    // ---- the light: pointer, or a slow drifting sun when idle
    const live = t - this.ptrSeen < 4
    if (!live && !this.reduced) {
      this.target = {
        x: this.w * (0.55 + 0.32 * Math.sin(t * 0.11)),
        y: this.h * (0.26 + 0.08 * Math.cos(t * 0.17)),
      }
    }
    const k = damp(dt, live ? 7 : 1.2)
    this.light.x += (this.target.x - this.light.x) * k
    this.light.y += (this.target.y - this.light.y) * k
    const L = this.light

    // ---- plants
    for (const p of this.plants) {
      if (t > p.delay && p.g < 1) p.g = Math.min(1, p.g + dt / p.dur)
      if (p.g >= 1 && p.bloom < 1) p.bloom = Math.min(1, p.bloom + dt / 0.9)
      const H = p.seg * p.N
      const mx = p.x, my = this.ground - H * 0.55
      let want = Math.atan2(L.x - mx, my - L.y) // angle from vertical toward the light
      if (L.y > this.ground) want = 0
      const reach = 0.35 + 0.65 * day // at night they relax
      want = clamp(want, -p.bendMax, p.bendMax) * reach
      p.dir += (want - p.dir) * damp(dt, this.reduced ? 6 : p.resp)
      const d = Math.hypot(p.tip.x - L.x, p.tip.y - L.y) / Math.max(this.w, this.h)
      const near = Math.exp(-d * d * 18)
      const wake = night * near * (live ? 1 : 0) // "mostly" asleep: the lantern wakes them
      const openT = clamp(day * (0.45 + 0.55 * near) + wake * 0.8, 0, 1)
      p.open += (openT - p.open) * damp(dt, 2.2)
      if (p.kind === 'dandelion') {
        p.seeds = Math.min(26, p.seeds + dt * 0.25)
        if (live && this.ptrV > 350 && Math.hypot(p.tip.x - L.x, p.tip.y - L.y) < 46 && p.bloom > 0.9) this.blow(p, 4)
      }
    }

    // ---- fireflies after dark
    const want = Math.round(night * (this.mobile ? 28 : 60))
    while (this.flies.length < want) {
      this.flies.push({ x: this.r() * this.w, y: this.ground - this.r() * this.h * 0.5, vx: 0, vy: 0, phase: this.r() * TAU, life: 0 })
    }
    this.flies = this.flies.filter((f, i) => {
      if (i >= want) f.life -= dt * 0.8
      else f.life = Math.min(1, f.life + dt * 0.6)
      const ang = Math.sin(t * 0.7 + f.phase) * 3 + f.phase
      f.vx += Math.cos(ang) * 30 * dt
      f.vy += Math.sin(ang * 1.3) * 22 * dt
      if (live) {
        const dx = L.x - f.x, dy = L.y - f.y
        const dd = Math.hypot(dx, dy) + 1
        if (dd < 260) {
          f.vx += (dx / dd) * 60 * dt
          f.vy += (dy / dd) * 60 * dt
        }
      }
      f.vx *= Math.exp(-dt * 1.2)
      f.vy *= Math.exp(-dt * 1.2)
      f.x += f.vx * dt
      f.y += f.vy * dt
      if (f.y > this.ground - 6) f.vy -= 40 * dt
      return f.life > 0
    })

    // ---- seeds (falling ones sprout; dandelion ones drift off)
    this.seeds = this.seeds.filter((s) => {
      if (s.falling) {
        s.vy += 900 * dt
        s.y += s.vy * dt
        if (s.y >= s.falling.to) {
          s.falling.plant.delay = t
          return false
        }
        return true
      }
      s.vx += (Math.sin(t * 1.3 + s.rot) * 18 + 10) * dt
      s.vy += (-8 + Math.cos(t + s.rot) * 6) * dt
      s.x += s.vx * dt
      s.y += s.vy * dt
      s.rot += dt
      s.life -= dt * 0.12
      return s.life > 0 && s.y > -40 && s.x < this.w + 40
    })

    this.draw(day, night)
    this.leanLetters(dt, day, night)
  }

  private leanLetters(dt: number, day: number, night: number) {
    const L = this.light
    const k = damp(dt, 3)
    for (const l of this.letters) {
      const dx = L.x - l.x, dy = L.y - l.y
      const d = Math.hypot(dx, dy)
      let a = Math.atan2(dx, -dy)
      a = clamp(a, -0.5, 0.5) * (0.25 + 0.75 * Math.exp(-d / 700)) * (0.3 + 0.7 * Math.max(day, night * 0.5))
      l.a += (a * 0.32 - l.a) * k
      l.el.style.transform = `rotate(${((l.a * 180) / Math.PI).toFixed(2)}deg)`
    }
  }

  /** current ink colour, for the DOM text */
  inkCss() {
    return css(palette(this.tod).ink)
  }

  // --------------------------------------------------------------- drawing
  private draw(day: number, night: number) {
    const ctx = this.ctx
    const pal = palette(this.tod)
    ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0)

    // sky
    const g = ctx.createLinearGradient(0, 0, 0, this.ground)
    g.addColorStop(0, css(pal.top))
    g.addColorStop(1, css(pal.bot))
    ctx.fillStyle = g
    ctx.fillRect(0, 0, this.w, this.h)

    // the light (sun by day, lantern by night)
    const L = this.light
    const R = Math.max(this.w, this.h) * (0.32 - 0.12 * night)
    const lg = ctx.createRadialGradient(L.x, L.y, 0, L.x, L.y, R)
    lg.addColorStop(0, css(pal.glow, pal.ga))
    lg.addColorStop(0.35, css(pal.glow, pal.ga * 0.35))
    lg.addColorStop(1, css(pal.glow, 0))
    ctx.fillStyle = lg
    ctx.fillRect(0, 0, this.w, this.h)
    // the light's own disc
    ctx.fillStyle = css(mix(pal.glow, [255, 255, 255], 0.5), 0.55 + 0.3 * day)
    ctx.beginPath()
    ctx.arc(L.x, L.y, 5 + 3 * day, 0, TAU)
    ctx.fill()

    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'

    for (const p of this.plants) if (!p.front) this.drawPlant(p, pal, 0.5)
    this.drawGrass(pal, false, day)
    for (const p of this.plants) if (p.front) this.drawPlant(p, pal, 1)
    this.drawGrass(pal, true, day)

    // soil
    const sg = ctx.createLinearGradient(0, this.ground, 0, this.h)
    const loam: RGB = [52, 40, 28]
    sg.addColorStop(0, css(mix(pal.bot, loam, 0.16)))
    sg.addColorStop(1, css(mix(pal.bot, loam, 0.3)))
    ctx.fillStyle = sg
    ctx.fillRect(0, this.ground, this.w, this.h - this.ground)
    ctx.strokeStyle = css(pal.ink, 0.8)
    ctx.lineWidth = 1.2
    ctx.beginPath()
    ctx.moveTo(0, this.ground)
    ctx.lineTo(this.w, this.ground)
    ctx.stroke()
    ctx.strokeStyle = css(pal.ink, 0.22)
    ctx.lineWidth = 1
    ctx.beginPath()
    const rr = rng(3)
    for (let i = 0; i < (this.mobile ? 40 : 110); i++) {
      const x = rr() * this.w, y = this.ground + 6 + rr() * (this.h - this.ground - 10)
      const l = 4 + rr() * 12
      ctx.moveTo(x, y)
      ctx.lineTo(x + l, y + 1)
    }
    ctx.stroke()

    // drifting seeds
    for (const s of this.seeds) {
      const a = s.falling ? 1 : s.life
      ctx.save()
      ctx.translate(s.x, s.y)
      ctx.rotate(s.rot)
      ctx.strokeStyle = css(pal.ink, a)
      ctx.fillStyle = css(night > 0.5 ? LIME : pal.ink, a)
      ctx.lineWidth = 0.8
      if (s.falling) {
        ctx.beginPath()
        ctx.ellipse(0, 0, 2.2, 3.4, 0, 0, TAU)
        ctx.fill()
      } else {
        ctx.beginPath()
        ctx.moveTo(0, 0)
        ctx.lineTo(0, -9)
        for (let i = 0; i < 6; i++) {
          const b = -Math.PI / 2 + (i - 2.5) * 0.35
          ctx.moveTo(0, -9)
          ctx.lineTo(Math.cos(b) * 5, -9 + Math.sin(b) * 5)
        }
        ctx.stroke()
        ctx.beginPath()
        ctx.arc(0, 1, 1.2, 0, TAU)
        ctx.fill()
      }
      ctx.restore()
    }

    // fireflies
    if (this.flies.length) {
      ctx.globalCompositeOperation = 'lighter'
      for (const f of this.flies) {
        const blink = 0.5 + 0.5 * Math.sin(this.time * 2.3 + f.phase * 3)
        const a = f.life * (0.25 + 0.75 * blink * blink)
        const fg = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, 14)
        fg.addColorStop(0, css(LIME, 0.9 * a))
        fg.addColorStop(0.25, css(LIME, 0.35 * a))
        fg.addColorStop(1, css(LIME, 0))
        ctx.fillStyle = fg
        ctx.fillRect(f.x - 14, f.y - 14, 28, 28)
      }
      ctx.globalCompositeOperation = 'source-over'
    }
  }

  private drawGrass(pal: ReturnType<typeof palette>, front: boolean, day: number) {
    const ctx = this.ctx
    const L = this.light
    ctx.strokeStyle = css(pal.ink, front ? 0.85 : 0.45)
    ctx.lineWidth = front ? 1.1 : 0.8
    ctx.beginPath()
    for (const b of this.blades) {
      if (b.front !== front) continue
      const toward = clamp(Math.atan2(L.x - b.x, this.ground - 60 - L.y), -0.5, 0.5) * 0.5 * (0.4 + 0.6 * day)
      const sway = this.reduced ? 0 : Math.sin(this.time * 1.1 + b.phase) * 0.08
      const a = b.lean + toward + sway
      const tx = b.x + Math.sin(a) * b.h
      const ty = this.ground - Math.cos(a) * b.h
      ctx.moveTo(b.x, this.ground + 1)
      ctx.quadraticCurveTo(b.x + Math.sin(a * 0.4) * b.h * 0.5, this.ground - b.h * 0.55, tx, ty)
    }
    ctx.stroke()
  }

  private drawPlant(p: Plant, pal: ReturnType<typeof palette>, alpha: number) {
    if (p.g <= 0) return
    const ctx = this.ctx
    const sway = this.reduced ? 0 : Math.sin(this.time * 0.9 + p.phase) * 0.035 + Math.sin(this.time * 2.1 + p.phase * 2) * 0.012
    const vis = p.g * p.N
    const pts: { x: number; y: number; a: number }[] = [{ x: p.x, y: this.ground, a: 0 }]
    let x = p.x, y = this.ground
    for (let i = 0; i < p.N && i < vis; i++) {
      const u = (i + 1) / p.N
      const a = p.curv * u + (p.dir + sway) * Math.pow(u, 1.25) * 1.15
      const len = p.seg * Math.min(1, vis - i)
      x += Math.sin(a) * len
      y -= Math.cos(a) * len
      pts.push({ x, y, a })
    }
    const tip = pts[pts.length - 1]
    p.tip = { x: tip.x, y: tip.y, a: tip.a }

    const ink = css(pal.ink, alpha)
    const fill = css(pal.fill, 1)
    const wBase = p.front ? 2.2 : 1.4

    // stem, tapering in three runs
    ctx.strokeStyle = ink
    const last = pts.length - 1
    if (last < 1) return
    const thirds = [0, Math.min(last, Math.ceil(pts.length / 3)), Math.min(last, Math.ceil((pts.length * 2) / 3)), last]
    for (let s = 0; s < 3; s++) {
      const a = thirds[s], b = thirds[s + 1]
      if (b <= a) continue
      ctx.lineWidth = wBase * (1 - s * 0.28)
      ctx.beginPath()
      ctx.moveTo(pts[a].x, pts[a].y)
      for (let i = a + 1; i <= b; i++) {
        const m = pts[i - 1], n = pts[i]
        ctx.quadraticCurveTo(m.x, m.y, (m.x + n.x) / 2, (m.y + n.y) / 2)
      }
      ctx.lineTo(pts[b].x, pts[b].y)
      ctx.stroke()
    }

    // leaves unfurl as the stem passes them
    for (const lf of p.leaves) {
      const unf = clamp((vis - lf.k - 1) / 2.5, 0, 1)
      if (unf <= 0 || !pts[lf.k]) continue
      const at = pts[lf.k]
      const ang = at.a + lf.side * lf.ang * (0.6 + 0.4 * unf) - Math.PI / 2
      this.leaf(at.x, at.y, ang, lf.len * unf, lf.wid, ink, fill, alpha)
    }

    // the flower
    if (p.g >= 1 && p.bloom > 0) this.flower(p, tip, pal, ink, fill, alpha)
  }

  private leaf(x: number, y: number, a: number, len: number, wid: number, ink: string, fill: string, alpha: number) {
    const ctx = this.ctx
    const w = len * wid
    ctx.save()
    ctx.translate(x, y)
    ctx.rotate(a)
    ctx.beginPath()
    ctx.moveTo(0, 0)
    ctx.quadraticCurveTo(len * 0.35, -w, len, 0)
    ctx.quadraticCurveTo(len * 0.35, w * 0.9, 0, 0)
    ctx.fillStyle = fill
    ctx.globalAlpha = alpha
    ctx.fill()
    ctx.globalAlpha = 1
    ctx.strokeStyle = ink
    ctx.lineWidth = 1
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(len * 0.05, 0)
    ctx.quadraticCurveTo(len * 0.5, -w * 0.12, len * 0.9, 0)
    // a few veins, engraving-style
    for (let i = 1; i <= 3; i++) {
      const u = i / 4.2
      ctx.moveTo(len * u, -w * 0.05)
      ctx.lineTo(len * (u + 0.12), -w * 0.55 * Math.sin(Math.PI * u))
    }
    ctx.lineWidth = 0.6
    ctx.stroke()
    ctx.restore()
  }

  private flower(p: Plant, tip: { x: number; y: number; a: number }, pal: ReturnType<typeof palette>, ink: string, fill: string, alpha: number) {
    const ctx = this.ctx
    const s = p.size * (0.3 + 0.7 * p.bloom)
    const o = p.open
    ctx.save()
    ctx.translate(tip.x, tip.y)
    ctx.rotate(tip.a)
    ctx.strokeStyle = ink
    ctx.lineWidth = 1
    ctx.fillStyle = fill
    const accent = css(mix(LIME, pal.ink, 0.15), alpha)
    switch (p.kind) {
      case 'daisy': {
        const n = 13
        for (let i = 0; i < n; i++) {
          const full = (i / n) * TAU
          const shut = -Math.PI / 2 + (i / (n - 1) - 0.5) * 0.9
          const ang = shut + (full - shut) * o
          const len = s * (0.9 + 1.2 * o)
          ctx.beginPath()
          ctx.ellipse(Math.cos(ang) * len * 0.55, Math.sin(ang) * len * 0.55 - s * 0.2, len * 0.5, s * 0.22, ang, 0, TAU)
          ctx.fill()
          ctx.stroke()
        }
        ctx.beginPath()
        ctx.arc(0, -s * 0.2, s * 0.38, 0, TAU)
        ctx.fillStyle = accent
        ctx.fill()
        ctx.stroke()
        break
      }
      case 'tulip': {
        const spread = 0.12 + 0.55 * o
        for (const side of [-1, 1, 0]) {
          ctx.save()
          ctx.rotate(side * spread)
          ctx.beginPath()
          ctx.moveTo(0, 0)
          ctx.bezierCurveTo(-s * 0.9, -s * 0.4, -s * 0.7, -s * 1.9, 0, -s * 2.3)
          ctx.bezierCurveTo(s * 0.7, -s * 1.9, s * 0.9, -s * 0.4, 0, 0)
          ctx.fill()
          ctx.stroke()
          ctx.beginPath()
          ctx.moveTo(0, -s * 0.3)
          ctx.lineTo(0, -s * 1.8)
          ctx.lineWidth = 0.6
          ctx.stroke()
          ctx.lineWidth = 1
          ctx.restore()
        }
        if (o > 0.4) {
          ctx.beginPath()
          ctx.arc(0, -s * 0.9, s * 0.22 * o, 0, TAU)
          ctx.fillStyle = accent
          ctx.fill()
        }
        break
      }
      case 'bell': {
        // a curled pedicel, the bell hanging from it
        ctx.beginPath()
        ctx.moveTo(0, 0)
        ctx.quadraticCurveTo(s * 1.2, -s * 1.1, s * 1.5, s * 0.2)
        ctx.stroke()
        ctx.translate(s * 1.5, s * 0.2)
        ctx.rotate(-tip.a * 0.6)
        const flare = s * (0.55 + 0.45 * o)
        ctx.beginPath()
        ctx.moveTo(-s * 0.35, 0)
        ctx.quadraticCurveTo(-s * 0.55, s * 1.1, -flare, s * 1.6)
        for (let i = 0; i < 4; i++) {
          const x0 = -flare + ((i + 0.5) / 4) * flare * 2
          ctx.quadraticCurveTo(x0, s * (1.45 + 0.25 * o), -flare + ((i + 1) / 4) * flare * 2, s * 1.6)
        }
        ctx.quadraticCurveTo(s * 0.55, s * 1.1, s * 0.35, 0)
        ctx.closePath()
        ctx.fill()
        ctx.stroke()
        if (o > 0.3) {
          ctx.beginPath()
          ctx.moveTo(0, s * 1.2)
          ctx.lineTo(0, s * (1.6 + 0.4 * o))
          ctx.strokeStyle = accent
          ctx.lineWidth = 1.4
          ctx.stroke()
        }
        break
      }
      case 'dandelion': {
        const n = Math.floor(p.seeds)
        const rad = s * (1.3 + 0.2 * o)
        ctx.beginPath()
        for (let i = 0; i < 26; i++) {
          if (i >= n) continue
          const a = (i / 26) * TAU + 0.1
          const ex = Math.cos(a) * rad, ey = Math.sin(a) * rad - rad * 0.9
          ctx.moveTo(0, -rad * 0.9)
          ctx.lineTo(ex, ey)
          for (let j = -1; j <= 1; j++) {
            const b = a + j * 0.35
            ctx.moveTo(ex, ey)
            ctx.lineTo(ex + Math.cos(b) * s * 0.35, ey + Math.sin(b) * s * 0.35)
          }
        }
        ctx.lineWidth = 0.6
        ctx.stroke()
        ctx.beginPath()
        ctx.arc(0, -rad * 0.9, s * 0.22, 0, TAU)
        ctx.fillStyle = accent
        ctx.fill()
        break
      }
      case 'bud': {
        const star = o
        ctx.beginPath()
        ctx.moveTo(0, 0)
        ctx.quadraticCurveTo(-s * 0.7, -s * 0.8, 0, -s * 1.7)
        ctx.quadraticCurveTo(s * 0.7, -s * 0.8, 0, 0)
        ctx.fill()
        ctx.stroke()
        if (star > 0.2) {
          for (let i = 0; i < 5; i++) {
            const a = -Math.PI / 2 + (i - 2) * 0.5 * star
            ctx.beginPath()
            ctx.moveTo(0, -s * 1.5)
            ctx.lineTo(Math.cos(a) * s * 1.1 * star, -s * 1.5 + Math.sin(a) * s * 1.1 * star)
            ctx.strokeStyle = accent
            ctx.stroke()
          }
        }
        break
      }
    }
    ctx.restore()
  }
}
