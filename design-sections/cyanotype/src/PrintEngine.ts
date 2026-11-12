// The print itself: a fixed-resolution sheet that accumulates UV exposure
// wherever the cuttings don't cover it, then gets rinsed from yellow-green
// sensitiser to Prussian blue.

const W = 800
const H = 1000
const K = 0.3 // exposure rate per second of "sun"
const PAPER = '#f5f1e6'
const COAT = '#cfc56b'
const RAW_BLUE = '#566b73' // exposed, unrinsed: a greyish bronze-blue
const PRUSSIAN = '#173b8a'

function canvas(w = W, h = H) {
  const c = document.createElement('canvas')
  c.width = w
  c.height = h
  return c
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

export type ShadowDrawer = (ctx: CanvasRenderingContext2D) => void

export class PrintEngine {
  static W = W
  static H = H
  exposing = false
  seconds = 0
  onSeconds?: (s: number) => void

  private exposure = canvas()
  private coatMask = canvas()
  private coat = canvas()
  private frame = canvas()
  private tmp = canvas()
  private acc = 0
  private front = 0
  private dirty = true
  private ex = this.exposure.getContext('2d')!

  constructor(
    private display: HTMLCanvasElement,
    private drawShadows: ShadowDrawer,
  ) {
    display.width = W
    display.height = H
    this.makeCoat()
    this.compose()
  }

  /** brushed-on sensitiser with ragged, bristly edges */
  private makeCoat() {
    const r = rng(42)
    const m = this.coatMask.getContext('2d')!
    m.lineCap = 'butt'
    for (let y = 100; y <= H - 100; y += 10) {
      const x0 = 70 + (r() - 0.5) * 46
      const x1 = W - 70 + (r() - 0.5) * 46
      m.strokeStyle = `rgba(255,255,255,${0.7 + r() * 0.3})`
      m.lineWidth = 18 + r() * 12
      m.beginPath()
      m.moveTo(x0, y + (r() - 0.5) * 6)
      m.bezierCurveTo(W * 0.35, y + (r() - 0.5) * 10, W * 0.65, y + (r() - 0.5) * 10, x1, y + (r() - 0.5) * 6)
      m.stroke()
    }
    // dry bristle streaks running past the edges
    for (let i = 0; i < 140; i++) {
      const y = 70 + r() * (H - 140)
      const left = r() < 0.5
      const x0 = left ? 28 + r() * 40 : W - 70 - r() * 60
      m.strokeStyle = `rgba(255,255,255,${0.15 + r() * 0.35})`
      m.lineWidth = 1 + r() * 3
      m.beginPath()
      m.moveTo(x0, y)
      m.lineTo(x0 + 40 + r() * 70, y + (r() - 0.5) * 4)
      m.stroke()
    }
    const c = this.coat.getContext('2d')!
    c.drawImage(this.coatMask, 0, 0)
    c.globalCompositeOperation = 'source-in'
    c.fillStyle = COAT
    c.fillRect(0, 0, W, H)
    c.globalCompositeOperation = 'source-atop'
    for (let i = 0; i < 220; i++) {
      c.strokeStyle = `rgba(150,140,60,${0.06 + r() * 0.12})`
      c.lineWidth = 1 + r() * 2
      const y = r() * H
      c.beginPath()
      c.moveTo(0, y)
      c.lineTo(W, y + (r() - 0.5) * 8)
      c.stroke()
    }
    c.globalCompositeOperation = 'source-over'
  }

  /** one slice of sunlight: light only reaches the coat where nothing covers it */
  private accumulate(dt: number) {
    const fr = this.frame.getContext('2d')!
    fr.setTransform(1, 0, 0, 1, 0, 0)
    fr.globalCompositeOperation = 'source-over'
    fr.globalAlpha = 1
    fr.clearRect(0, 0, W, H)
    fr.fillStyle = '#fff'
    fr.fillRect(0, 0, W, H)
    fr.globalCompositeOperation = 'destination-in'
    fr.drawImage(this.coatMask, 0, 0)
    fr.globalCompositeOperation = 'destination-out'
    this.drawShadows(fr)
    fr.setTransform(1, 0, 0, 1, 0, 0)
    fr.globalAlpha = 1
    fr.globalCompositeOperation = 'source-over'
    this.ex.globalAlpha = 1 - Math.exp(-dt * K)
    this.ex.drawImage(this.frame, 0, 0)
    this.ex.globalAlpha = 1
    this.dirty = true
  }

  step(dt: number) {
    if (this.exposing) {
      this.seconds += dt
      this.acc += dt
      // 10 Hz slices keep each 8-bit alpha step big enough to keep darkening
      while (this.acc >= 0.1) {
        this.acc -= 0.1
        this.accumulate(0.1)
      }
      this.onSeconds?.(this.seconds)
    }
    if (this.dirty) this.compose()
  }

  /** expose in one go (used when the sheet goes into the water unexposed) */
  exposeInstant(seconds: number) {
    for (let t = 0; t < seconds; t += 0.1) this.accumulate(0.1)
    this.seconds += seconds
    this.onSeconds?.(this.seconds)
  }

  /** mean exposure over the coated area, 0..1 */
  exposureMean() {
    const e = this.ex.getImageData(0, 0, W, H).data
    const m = this.coatMask.getContext('2d')!.getImageData(0, 0, W, H).data
    let s = 0, n = 0
    for (let i = 3; i < e.length; i += 4 * 37) {
      if (m[i] < 128) continue
      s += e[i] / 255
      n++
    }
    return n ? s / n : 0
  }

  reset() {
    this.ex.clearRect(0, 0, W, H)
    this.seconds = 0
    this.acc = 0
    this.onSeconds?.(0)
    this.dirty = true
  }

  /** rinse front, 0 → 1 from the bottom of the sheet up */
  setRinse(front: number) {
    if (Math.abs(front - this.front) < 1e-4) return
    this.front = front
    this.dirty = true
  }

  private tint(color: string) {
    const t = this.tmp.getContext('2d')!
    t.globalCompositeOperation = 'source-over'
    t.clearRect(0, 0, W, H)
    t.fillStyle = color
    t.fillRect(0, 0, W, H)
    t.globalCompositeOperation = 'destination-in'
    t.drawImage(this.exposure, 0, 0)
    t.globalCompositeOperation = 'source-over'
    return this.tmp
  }

  private drawVersion(ctx: CanvasRenderingContext2D, rinsed: boolean) {
    if (!rinsed) {
      ctx.globalAlpha = 0.92
      ctx.drawImage(this.coat, 0, 0)
      ctx.globalAlpha = 1
      ctx.drawImage(this.tint(RAW_BLUE), 0, 0)
    } else {
      const blue = this.tint(PRUSSIAN)
      ctx.drawImage(blue, 0, 0)
      ctx.globalAlpha = 0.85 // a second pass deepens the dense areas more than the thin ones
      ctx.drawImage(blue, 0, 0)
      ctx.globalAlpha = 1
    }
  }

  private paint(ctx: CanvasRenderingContext2D, front: number) {
    ctx.fillStyle = PAPER
    ctx.fillRect(0, 0, W, H)
    const split = Math.round(H * (1 - front))
    if (split > 0) {
      ctx.save()
      ctx.beginPath()
      ctx.rect(0, 0, W, split)
      ctx.clip()
      this.drawVersion(ctx, false)
      ctx.restore()
    }
    if (split < H) {
      ctx.save()
      ctx.beginPath()
      ctx.rect(0, split, W, H - split)
      ctx.clip()
      this.drawVersion(ctx, true)
      ctx.restore()
    }
  }

  private compose() {
    this.dirty = false
    this.paint(this.display.getContext('2d')!, this.front)
  }

  /** the finished, rinsed print as a PNG */
  toBlob(): Promise<Blob | null> {
    const out = canvas(W * 2, H * 2)
    const o = out.getContext('2d')!
    const sheet = canvas()
    this.paint(sheet.getContext('2d')!, 1)
    o.imageSmoothingQuality = 'high'
    o.drawImage(sheet, 0, 0, W * 2, H * 2)
    o.fillStyle = 'rgba(23,59,138,0.75)'
    o.font = '500 22px "IBM Plex Mono", monospace'
    o.fillText('OVERSIGHT SUPPLY · CYANOTYPE', 132, H * 2 - 110)
    o.textAlign = 'right'
    o.fillText(`${Math.round(this.seconds)} MIN OF SUN`, W * 2 - 132, H * 2 - 110)
    return new Promise((res) => out.toBlob(res, 'image/png'))
  }
}
