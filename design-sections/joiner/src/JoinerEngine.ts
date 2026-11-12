// Joiner — one photograph cut into rectangles, each laid down a little off,
// like prints taken a moment apart. Drives the fragments' DOM directly.

export type Tile = { x: number; y: number; w: number; h: number } // 0..1 of the photo

export function rng(seed: number) {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/** guillotine cuts: big pieces always split, medium ones sometimes */
export function makeTiles(seed: number, aspect: number): Tile[] {
  const r = rng(seed)
  const out: Tile[] = []
  const go = (t: Tile, depth: number) => {
    const pw = t.w * aspect
    const ph = t.h
    const big = pw > 0.21 || ph > 0.17
    const may = pw > 0.11 && ph > 0.085 && r() < 0.45
    if (depth < 14 && (big || may)) {
      const cutX = pw > ph * 1.1 ? true : pw * 1.1 < ph ? false : r() < 0.5
      const k = 0.32 + r() * 0.36
      if (cutX) {
        go({ x: t.x, y: t.y, w: t.w * k, h: t.h }, depth + 1)
        go({ x: t.x + t.w * k, y: t.y, w: t.w * (1 - k), h: t.h }, depth + 1)
      } else {
        go({ x: t.x, y: t.y, w: t.w, h: t.h * k }, depth + 1)
        go({ x: t.x, y: t.y + t.h * k, w: t.w, h: t.h * (1 - k) }, depth + 1)
      }
    } else out.push(t)
  }
  go({ x: 0, y: 0, w: 1, h: 1 }, 0)
  return out
}

type Pose = { ox: number; oy: number; rot: number; sc: number; cx: number; cy: number; inset: number; b: number; s: number; sep: number }

const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v))
const lerp = (a: number, b: number, t: number) => a + (b - a) * t
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3)

type Frag = {
  el: HTMLElement
  img: HTMLElement
  flash: HTMLElement | null
  stamp: HTMLElement | null
  tile: Tile
  vis: boolean
  depth: number
  delay: number
  cur: Pose
  tgt: Pose
  flashT: number
  out: { x: number; y: number }
}

export class JoinerEngine {
  reduced = false
  private bw = 1
  private bh = 1
  private a = 0
  private t = 0
  private ptr = { x: 0, y: 0 }
  private ptrS = { x: 0, y: 0 }
  private ptrOn = 0
  private ptrSeen = -99
  private lastA = -1
  private frags: Frag[]
  private whole: HTMLElement | null = null
  private r = rng(Date.now() % 100000)

  constructor(els: HTMLElement[], tiles: Tile[], whole: HTMLElement | null = null) {
    this.whole = whole
    this.frags = els.map((el, i) => {
      const tile = tiles[i]
      const cxN = tile.x + tile.w / 2 - 0.5
      const cyN = tile.y + tile.h / 2 - 0.5
      const len = Math.hypot(cxN, cyN) || 1
      const f: Frag = {
        el,
        img: el.querySelector<HTMLElement>('[data-img]')!,
        flash: el.querySelector<HTMLElement>('[data-flash]'),
        stamp: el.querySelector<HTMLElement>('[data-stamp]'),
        tile,
        vis: true,
        depth: this.r() * 2 - 1,
        delay: 0.25 + (1 - (tile.y + tile.h)) * 1.1 + this.r() * 0.25, // laid down from the ground up
        cur: this.jitter(),
        tgt: this.jitter(),
        flashT: 0,
        out: { x: cxN / len, y: cyN / len },
      }
      f.cur = { ...f.tgt }
      return f
    })
  }

  private jitter(): Pose {
    const r = this.r
    return {
      ox: (r() - 0.5) * 0.026,
      oy: (r() - 0.5) * 0.02,
      rot: (r() - 0.5) * 4.4,
      sc: 0.975 + r() * 0.05,
      cx: (r() - 0.5) * 0.03,
      cy: (r() - 0.5) * 0.024,
      inset: 1.5 + r() * 2.5,
      b: 0.9 + r() * 0.22,
      s: 0.82 + r() * 0.4,
      sep: r() < 0.3 ? r() * 0.18 : 0,
    }
  }

  /** which pieces make it into the joiner (the rest wait off the page until it's joined up) */
  setVisibility(vis: boolean[]) {
    this.frags.forEach((f, i) => (f.vis = vis[i]))
    this.lastA = -1
  }

  resize(bw: number, bh: number) {
    this.bw = Math.max(1, bw)
    this.bh = Math.max(1, bh)
    for (const f of this.frags) {
      const { x, y, w, h } = f.tile
      f.el.style.left = `${x * this.bw}px`
      f.el.style.top = `${y * this.bh}px`
      f.el.style.width = `${w * this.bw}px`
      f.el.style.height = `${h * this.bh}px`
      f.img.style.width = `${this.bw}px`
      f.img.style.height = `${this.bh}px`
    }
    this.lastA = -1
  }

  setAssemble(a: number) {
    this.a = clamp(a, 0, 1)
  }

  pointer(x: number, y: number) {
    this.ptr = { x, y }
    this.ptrSeen = this.t
  }

  leave() {
    this.ptrSeen = -99
  }

  /** index of the visible piece under a box-local point */
  hit(x: number, y: number) {
    for (let i = this.frags.length - 1; i >= 0; i--) {
      const f = this.frags[i]
      if (!f.vis && this.a < 0.5) continue
      const { x: tx, y: ty, w, h } = f.tile
      if (x >= tx * this.bw && x <= (tx + w) * this.bw && y >= ty * this.bh && y <= (ty + h) * this.bh) return i
    }
    return -1
  }

  retake(i: number) {
    const f = this.frags[i]
    if (!f) return
    f.tgt = this.jitter()
    f.flashT = 1
    this.lastA = -1
  }

  shuffle() {
    this.frags.forEach((f, i) => {
      f.tgt = this.jitter()
      f.flashT = 0.6 + (i % 5) * 0.08
    })
    this.lastA = -1
  }

  step(dt: number) {
    dt = Math.min(dt, 0.05)
    this.t += dt
    const a = this.a
    const loose = 1 - a
    const active = this.t - this.ptrSeen < 3
    this.ptrOn += ((active ? 1 : 0) - this.ptrOn) * (1 - Math.exp(-dt * 4))

    // pointer, normalised to the box; drifts gently when idle
    let px = 0, py = 0
    if (active) {
      px = clamp((this.ptr.x - this.bw / 2) / (this.bw / 2), -1.4, 1.4)
      py = clamp((this.ptr.y - this.bh / 2) / (this.bh / 2), -1.4, 1.4)
    } else if (!this.reduced) {
      px = Math.sin(this.t * 0.35) * 0.35
      py = Math.cos(this.t * 0.27) * 0.25
    }
    const k = 1 - Math.exp(-dt * 6)
    this.ptrS.x += (px - this.ptrS.x) * k
    this.ptrS.y += (py - this.ptrS.y) * k

    // filters / insets only need re-writing when the look changes noticeably
    const refreshLook = Math.abs(a - this.lastA) > 0.02
    if (refreshLook) this.lastA = a

    // once joined, one seamless photo replaces the pieces (no hairline seams)
    const wholeA = Math.min(1, Math.max(0, (a - 0.9) / 0.08))
    if (this.whole) this.whole.style.opacity = wholeA.toFixed(3)
    const spring = 1 - Math.exp(-dt * 7)
    for (const f of this.frags) {
      let settling = false
      for (const key of Object.keys(f.cur) as (keyof Pose)[]) {
        const d = f.tgt[key] - f.cur[key]
        if (Math.abs(d) > 1e-4) {
          f.cur[key] += d * spring
          settling = true
        }
      }
      const intro = this.reduced ? 1 : easeOut(clamp((this.t - f.delay) / 0.9, 0, 1))
      const c = f.cur
      const bw = this.bw, bh = this.bh
      const fcx = (f.tile.x + f.tile.w / 2) * bw
      const fcy = (f.tile.y + f.tile.h / 2) * bh

      // lift the pieces near the pointer
      const dd = Math.hypot(this.ptr.x - fcx, this.ptr.y - fcy) / Math.max(bw, bh)
      const lift = active ? Math.exp(-dd * dd * 30) * this.ptrOn : 0

      // hidden pieces wait off-page and fly in as it's joined up
      const show = f.vis ? 1 : a
      const away = f.vis ? 0 : (1 - a) * 0.5
      const par = f.depth * loose

      const tx = (c.ox * loose + f.out.x * away) * bw + par * this.ptrS.x * 5
      const ty = (c.oy * loose + f.out.y * away) * bh + par * this.ptrS.y * 5 - (1 - intro) * 40
      const rot = c.rot * loose + (1 - intro) * 8 * f.depth
      const sc = lerp(1, c.sc, loose) * (1 + 0.035 * lift * loose) * (f.vis ? 1 : lerp(0.92, 1, a))
      f.el.style.transform = `translate3d(${tx.toFixed(2)}px, ${ty.toFixed(2)}px, 0) rotate(${rot.toFixed(3)}deg) scale(${sc.toFixed(4)})`
      f.el.style.opacity = String(Math.min(intro, show).toFixed(3))

      // the photo inside each piece is "re-aimed" a little, and follows the pointer by its own depth
      const ix = -f.tile.x * bw + (c.cx * bw + par * this.ptrS.x * 9) * loose
      const iy = -f.tile.y * bh + (c.cy * bh + par * this.ptrS.y * 9) * loose
      f.img.style.transform = `translate3d(${ix.toFixed(2)}px, ${iy.toFixed(2)}px, 0)`

      if (refreshLook || settling) {
        const ins = Math.max(-0.5, c.inset * loose - 0.5 * a)
        f.el.style.clipPath = `inset(${ins.toFixed(2)}px)`
        f.img.style.filter =
          a > 0.98
            ? 'none'
            : `brightness(${lerp(c.b, 1, a).toFixed(3)}) saturate(${lerp(c.s, 1, a).toFixed(3)}) sepia(${(c.sep * loose).toFixed(3)})`
        if (f.stamp) f.stamp.style.opacity = String(clamp(1 - a * 3, 0, 1))
      }
      if (f.flash) {
        if (f.flashT > 0) {
          f.flashT = Math.max(0, f.flashT - dt * 2.6)
          f.flash.style.opacity = String((f.flashT * f.flashT).toFixed(3))
        } else if (f.flash.style.opacity !== '0') f.flash.style.opacity = '0'
      }
    }
  }
}
