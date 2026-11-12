// Procedural pressed botanicals, as SVG path data. The same paths draw the
// cuttings on the table (SVG) and their shadows on the print (Path2D).

export type Specimen = {
  id: string
  name: string
  latin: string
  w: number
  h: number
  fill: string
  strokes: { d: string; w: number }[]
  color: string
  /** how much light the cutting blocks, 0..1 (petals let some through) */
  shade: number
}

type P = [number, number]
const f = (n: number) => n.toFixed(1)
const { sin, cos, PI, pow, exp } = Math

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

const poly = (pts: P[]) => 'M' + pts.map((p) => `${f(p[0])} ${f(p[1])}`).join('L') + 'Z'
const circle = (cx: number, cy: number, r: number) =>
  `M${f(cx - r)} ${f(cy)}a${f(r)} ${f(r)} 0 1 0 ${f(2 * r)} 0a${f(r)} ${f(r)} 0 1 0 ${f(-2 * r)} 0Z`

/** a leaf along an axis from (x, y) at angle `a`: optional lobes for ferny / oaky edges */
function leaf(x: number, y: number, a: number, len: number, wid: number, lobes = 0, lobeAmt = 0, steps = 28) {
  const dx = cos(a), dy = sin(a)
  const nx = -dy, ny = dx
  const L: P[] = [], R: P[] = []
  for (let i = 0; i <= steps; i++) {
    const s = i / steps
    let hw = wid * pow(sin(PI * s), 0.7) * (1 - 0.25 * s)
    if (lobes) hw *= 1 + lobeAmt * sin(s * PI * lobes * 2 - PI / 2) * sin(PI * s)
    const cx = x + dx * len * s, cy = y + dy * len * s
    L.push([cx + nx * hw, cy + ny * hw])
    R.push([cx - nx * hw, cy - ny * hw])
  }
  return poly([...L, ...R.reverse()])
}

/** a small fan (ginkgo, maidenhair pinnule) opening along direction `a` */
function fan(x: number, y: number, a: number, R: number, spread: number, notch: number, wobble: number, freq: number) {
  const pts: P[] = [[x, y]]
  const n = 40
  for (let i = 0; i <= n; i++) {
    const t = -spread + (2 * spread * i) / n
    let r = R * (1 + wobble * sin(t * freq))
    r *= 1 - notch * exp(-pow(t / 0.09, 2))
    pts.push([x + cos(a + t) * r, y + sin(a + t) * r])
  }
  return poly(pts)
}

function quad(p0: P, c: P, p1: P) {
  return {
    at: (t: number): P => [
      (1 - t) * (1 - t) * p0[0] + 2 * (1 - t) * t * c[0] + t * t * p1[0],
      (1 - t) * (1 - t) * p0[1] + 2 * (1 - t) * t * c[1] + t * t * p1[1],
    ],
    dir: (t: number) => {
      const x = 2 * (1 - t) * (c[0] - p0[0]) + 2 * t * (p1[0] - c[0])
      const y = 2 * (1 - t) * (c[1] - p0[1]) + 2 * t * (p1[1] - c[1])
      return Math.atan2(y, x)
    },
    d: `M${f(p0[0])} ${f(p0[1])}Q${f(c[0])} ${f(c[1])} ${f(p1[0])} ${f(p1[1])}`,
  }
}

function fern(): Specimen {
  const st = quad([200, 990], [168, 520], [214, 40])
  const parts: string[] = []
  const N = 26
  for (let i = 0; i < N; i++) {
    const t = 0.07 + (i / N) * 0.9
    const [x, y] = st.at(t)
    const side = i % 2 ? 1 : -1
    const len = 180 * pow(1 - t, 0.75) + 16
    parts.push(leaf(x, y, st.dir(t) + side * 1.05, len, len * 0.15 + 3, 7, 0.38, 36))
  }
  const [tx, ty] = st.at(0.985)
  parts.push(leaf(tx, ty, st.dir(0.98), 34, 7))
  return {
    id: 'fern', name: 'Lady fern', latin: 'Athyrium filix-femina', w: 400, h: 1000,
    fill: parts.join(''), strokes: [{ d: st.d, w: 7 }], color: '#4c5a2a', shade: 0.96,
  }
}

function ginkgo(): Specimen {
  const parts = [fan(300, 560, -PI / 2, 300, 1.15, 0.4, 0.03, 23)]
  return {
    id: 'ginkgo', name: 'Ginkgo', latin: 'Ginkgo biloba', w: 600, h: 820,
    fill: parts.join(''), strokes: [{ d: 'M300 552 Q304 690 312 815', w: 8 }], color: '#c39a2c', shade: 0.9,
  }
}

function grass(): Specimen {
  const st = quad([180, 995], [206, 600], [168, 70])
  const parts: string[] = []
  const N = 18
  for (let i = 0; i < N; i++) {
    const t = 0.6 + (i / N) * 0.38
    const [x, y] = st.at(t)
    const side = i % 2 ? 1 : -1
    parts.push(leaf(x, y, st.dir(t) + side * 0.5, 62 - i * 1.4, 12))
  }
  parts.push(leaf(186, 905, -1.95, 520, 15))
  parts.push(leaf(190, 780, -1.18, 380, 12))
  return {
    id: 'grass', name: 'Wild oat', latin: 'Avena fatua', w: 360, h: 1000,
    fill: parts.join(''), strokes: [{ d: st.d, w: 4.5 }], color: '#9d8a55', shade: 0.85,
  }
}

function umbel(): Specimen {
  const r = rng(7)
  const cx = 350, cy = 400
  const strokes = [{ d: 'M350 915 Q336 650 350 400', w: 7 }]
  const dots: string[] = []
  const rays = 13
  let rayD = ''
  for (let i = 0; i < rays; i++) {
    const a = -2.55 + (i / (rays - 1)) * 1.96
    const len = 210 + r() * 60
    const ex = cx + cos(a) * len, ey = cy + sin(a) * len
    rayD += `M${cx} ${cy}L${f(ex)} ${f(ey)}`
    for (let k = 0; k < 9; k++) {
      const b = a - 0.9 + (k / 8) * 1.8
      const l2 = 34 + r() * 16
      const dx = ex + cos(b) * l2, dy = ey + sin(b) * l2
      rayD += `M${f(ex)} ${f(ey)}L${f(dx)} ${f(dy)}`
      dots.push(circle(dx, dy, 6 + r() * 3))
    }
    dots.push(circle(ex, ey, 5))
  }
  strokes.push({ d: rayD, w: 2.6 })
  return {
    id: 'umbel', name: 'Queen Anne’s lace', latin: 'Daucus carota', w: 700, h: 920,
    fill: dots.join(''), strokes, color: '#efe8d6', shade: 0.8,
  }
}

function daisy(): Specimen {
  const cx = 262, cy = 240
  const parts = [circle(cx, cy, 44)]
  const n = 22
  for (let i = 0; i < n; i++) {
    const a = (i / n) * PI * 2 + 0.1
    parts.push(leaf(cx + cos(a) * 36, cy + sin(a) * 36, a, 150 + (i % 3) * 10, 17, 0, 0, 16))
  }
  parts.push(leaf(250, 720, -2.55, 180, 26, 4, 0.3))
  parts.push(leaf(258, 560, -0.55, 150, 22, 3, 0.3))
  return {
    id: 'daisy', name: 'Oxeye daisy', latin: 'Leucanthemum vulgare', w: 520, h: 940,
    fill: parts.join(''), strokes: [{ d: 'M260 935 Q238 600 262 290', w: 6 }], color: '#f1ece0', shade: 0.72,
  }
}

function maidenhair(): Specimen {
  const r = rng(11)
  const st = quad([310, 855], [296, 520], [330, 110])
  let branches = ''
  const parts: string[] = []
  for (let b = 0; b < 7; b++) {
    const t = 0.25 + b * 0.105
    const [x, y] = st.at(t)
    const side = b % 2 ? 1 : -1
    const a0 = st.dir(t) + side * 1.15
    const len = 230 - b * 22
    const ex = x + cos(a0) * len, ey = y + sin(a0) * len - 40
    const c: P = [x + cos(a0) * len * 0.5, y + sin(a0) * len * 0.5 - 60]
    const br = quad([x, y], c, [ex, ey])
    branches += br.d
    for (let k = 1; k <= 5; k++) {
      const u = k / 5.4
      const [px, py] = br.at(u)
      const dir = br.dir(u)
      parts.push(fan(px, py, dir + (k % 2 ? 0.9 : -0.9), 30 + r() * 12, 1.0, 0.12, 0.14, 9))
    }
    parts.push(fan(ex, ey, br.dir(1), 36, 1.0, 0.12, 0.14, 9))
  }
  return {
    id: 'maidenhair', name: 'Maidenhair fern', latin: 'Adiantum capillus-veneris', w: 620, h: 860,
    fill: parts.join(''), strokes: [{ d: st.d, w: 3.4 }, { d: branches, w: 2.2 }], color: '#3f5a2e', shade: 0.9,
  }
}

function oak(): Specimen {
  return {
    id: 'oak', name: 'English oak', latin: 'Quercus robur', w: 520, h: 860,
    fill: leaf(260, 735, -PI / 2, 690, 175, 4.5, 0.5, 90),
    strokes: [{ d: 'M260 850 L260 700', w: 8 }], color: '#8a5a31', shade: 0.96,
  }
}

export const SPECIMENS: Specimen[] = [fern(), ginkgo(), umbel(), daisy(), grass(), maidenhair(), oak()]

/** where each cutting starts: u/v in paper heights from the paper centre, size in paper heights */
export type Place = { u: number; v: number; rot: number; size: number }
export const START_DESK: Place[] = [
  { u: -0.13, v: 0.02, rot: -9, size: 0.66 }, // fern, on the paper
  { u: 0.16, v: -0.25, rot: 14, size: 0.3 }, // ginkgo, on the paper
  { u: 0.14, v: 0.22, rot: -6, size: 0.36 }, // umbel, on the paper
  { u: -0.98, v: 0.24, rot: 18, size: 0.42 }, // daisy
  { u: 0.78, v: 0.06, rot: -12, size: 0.6 }, // grass
  { u: 0.72, v: -0.3, rot: 22, size: 0.36 }, // maidenhair
  { u: -0.66, v: 0.36, rot: -24, size: 0.34 }, // oak
]
export const START_MOBILE: Place[] = [
  { u: -0.12, v: 0.02, rot: -9, size: 0.66 },
  { u: 0.16, v: -0.25, rot: 14, size: 0.3 },
  { u: 0.14, v: 0.22, rot: -6, size: 0.36 },
  { u: -0.34, v: 0.8, rot: 70, size: 0.34 },
  { u: 0.36, v: 0.84, rot: -76, size: 0.46 },
  { u: 0.04, v: 0.86, rot: 12, size: 0.28 },
  { u: -0.02, v: 0.66, rot: -96, size: 0.26 },
]
