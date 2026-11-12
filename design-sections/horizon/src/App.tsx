import { useEffect, useMemo, useRef, useState } from 'react'
import type { ChangeEvent, DragEvent, FormEvent, PointerEvent as RPointerEvent } from 'react'

/* Horizon — a prediction-model hero over a misty valley at dawn. Type what to
   predict (or drop a real CSV) and a forecast is drawn across the horizon:
   history in white, the forecast in amber with a widening confidence band.
   The forecast is a small trend + seasonality fit, computed in the browser. */

const valley = new URL('./assets/valley.webp', import.meta.url).href

const HORIZONS = { '7d': { label: '7 days', n: 7 }, '30d': { label: '30 days', n: 14 }, '90d': { label: '90 days', n: 22 } } as const
type Horizon = keyof typeof HORIZONS
const LINES = ['Predict the quietest week in October', 'Predict room rates over the holidays', 'Predict which trail is dry by Saturday', 'Predict how full the cove gets at noon']

function useReduced() {
  const [r, setR] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const f = () => setR(mq.matches)
    mq.addEventListener('change', f)
    return () => mq.removeEventListener('change', f)
  }, [])
  return r
}

function useTypewriter(lines: string[], active: boolean, reduced: boolean) {
  const [text, setText] = useState('')
  useEffect(() => {
    if (!active) return
    if (reduced) {
      setText(lines[0])
      return
    }
    let line = 0, i = 0, dir = 1, id = 0
    const tick = () => {
      const full = lines[line]
      i += dir
      setText(full.slice(0, i))
      let wait = dir > 0 ? 45 + Math.random() * 45 : 18
      if (dir > 0 && i >= full.length) { dir = -1; wait = 2000 }
      else if (dir < 0 && i <= 0) { dir = 1; line = (line + 1) % lines.length; wait = 400 }
      id = window.setTimeout(tick, wait)
    }
    id = window.setTimeout(tick, 900)
    return () => clearTimeout(id)
  }, [lines, active, reduced])
  return text
}

/** a seeded, plausible-looking series for when no CSV is given */
function synth(seed: string, n = 40) {
  let h = 2166136261
  for (let i = 0; i < seed.length; i++) h = Math.imul(h ^ seed.charCodeAt(i), 16777619)
  const rnd = () => ((h = Math.imul(h ^ (h >>> 15), 2246822507) ^ Math.imul(h ^ (h >>> 13), 3266489909)) >>> 0) / 4294967296
  const base = 40 + rnd() * 60
  const slope = (rnd() - 0.35) * 1.2
  const amp = 4 + rnd() * 10
  return Array.from({ length: n }, (_, t) => base + slope * t + amp * Math.sin((t / 12) * Math.PI * 2 + rnd() * 0.3) + (rnd() - 0.5) * amp * 0.7)
}

/** the last mostly-numeric column of a CSV */
function parseCsv(text: string): { name: string; values: number[] } | null {
  const rows = text.trim().split(/\r?\n/).map((r) => r.split(/[,;\t]/).map((c) => c.trim().replace(/^"|"$/g, '')))
  if (rows.length < 4) return null
  const header = rows[0].some((c) => c && isNaN(Number(c))) ? rows.shift()! : null
  const cols = Math.max(...rows.map((r) => r.length))
  for (let c = cols - 1; c >= 0; c--) {
    const vals = rows.map((r) => Number(r[c])).filter((v) => Number.isFinite(v))
    if (vals.length >= rows.length * 0.8 && vals.length >= 4) return { name: header?.[c] || `column ${c + 1}`, values: vals.slice(-60) }
  }
  return null
}

/** trend + seasonality, with a band that widens with distance */
function forecast(y: number[], k: number) {
  const n = y.length
  const w = Math.min(n, 24)
  const xs = y.slice(-w).map((_, i) => n - w + i)
  const ys = y.slice(-w)
  const mx = xs.reduce((a, b) => a + b) / w
  const my = ys.reduce((a, b) => a + b) / w
  let num = 0, den = 0
  xs.forEach((x, i) => { num += (x - mx) * (ys[i] - my); den += (x - mx) ** 2 })
  const b = den ? num / den : 0
  const a = my - b * mx
  const P = 12
  const season = Array(P).fill(0)
  const cnt = Array(P).fill(0)
  if (n >= P * 2) y.forEach((v, t) => { season[t % P] += v - (a + b * t); cnt[t % P]++ })
  season.forEach((_, i) => (season[i] = cnt[i] ? season[i] / cnt[i] : 0))
  const resid = y.map((v, t) => v - (a + b * t + season[t % P]))
  const sd = Math.sqrt(resid.reduce((s, r) => s + r * r, 0) / Math.max(1, n - 2)) || 1
  return Array.from({ length: k }, (_, i) => {
    const t = n + i
    const m = a + b * t + season[t % P]
    const band = 1.64 * sd * Math.sqrt(1 + (i + 1) / 4)
    return { m, lo: m - band, hi: m + band }
  })
}

type Data = { name: string; values: number[]; file?: string }
type Phase = 'idle' | 'running' | 'done'

export default function App() {
  const reduced = useReduced()
  const [value, setValue] = useState('')
  const [horizon, setHorizon] = useState<Horizon>('30d')
  const [menu, setMenu] = useState(false)
  const [data, setData] = useState<Data | null>(null)
  const [error, setError] = useState('')
  const [dragging, setDragging] = useState(false)
  const [phase, setPhase] = useState<Phase>('idle')
  const [question, setQuestion] = useState('')
  const [hover, setHover] = useState<number | null>(null)
  const [count, setCount] = useState(0)
  const fileRef = useRef<HTMLInputElement>(null)
  const scene = useRef<HTMLElement>(null)
  const ghost = useTypewriter(LINES, !value && phase === 'idle', reduced)

  useEffect(() => {
    if (reduced) return
    const move = (e: PointerEvent) => {
      scene.current?.style.setProperty('--px', (e.clientX / window.innerWidth - 0.5).toFixed(3))
      scene.current?.style.setProperty('--py', (e.clientY / window.innerHeight - 0.5).toFixed(3))
    }
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [reduced])

  useEffect(() => {
    if (!menu) return
    const close = (e: PointerEvent) => { if (!(e.target as Element).closest('.hz-model')) setMenu(false) }
    window.addEventListener('pointerdown', close)
    return () => window.removeEventListener('pointerdown', close)
  }, [menu])

  const series = useMemo(() => {
    if (phase === 'idle') return null
    const hist = data?.values ?? synth(question)
    return { hist, fc: forecast(hist, HORIZONS[horizon].n), name: data?.name ?? question.replace(/^predict\s+/i, '') }
  }, [phase, data, question, horizon])

  const change = series ? ((series.fc.reduce((s, p) => s + p.m, 0) / series.fc.length - series.hist[series.hist.length - 1]) / Math.abs(series.hist[series.hist.length - 1] || 1)) * 100 : 0
  const conf = series ? Math.max(62, Math.min(97, Math.round(100 - ((series.fc[series.fc.length - 1].hi - series.fc[series.fc.length - 1].lo) / Math.abs(series.fc[series.fc.length - 1].m || 1)) * 60))) : 0

  // numbers count up when the forecast lands
  useEffect(() => {
    if (phase !== 'done') return
    if (reduced) { setCount(1); return }
    let raf = 0
    const t0 = performance.now()
    const f = (now: number) => {
      const p = Math.min(1, (now - t0) / 1200)
      setCount(1 - (1 - p) ** 3)
      if (p < 1) raf = requestAnimationFrame(f)
    }
    raf = requestAnimationFrame(f)
    return () => cancelAnimationFrame(raf)
  }, [phase, reduced, series])

  const run = (q: string) => {
    const text = q.trim() || (ghost && LINES.find((l) => l.startsWith(ghost))) || LINES[0]
    setQuestion(text)
    setValue(text)
    setPhase('running')
    setCount(0)
    window.setTimeout(() => setPhase('done'), reduced ? 0 : 1400)
  }
  const submit = (e: FormEvent) => { e.preventDefault(); run(value) }

  const readFile = (f: File | undefined) => {
    if (!f) return
    if (!/\.(csv|tsv|txt)$/i.test(f.name) && f.type !== 'text/csv') { setError('That doesn’t look like a CSV.'); return }
    f.text().then((t) => {
      const p = parseCsv(t)
      if (!p) { setError('Couldn’t find a numeric column in that file.'); return }
      setError('')
      setData({ ...p, file: f.name })
      if (!value) setValue(`Predict ${p.name}`)
    })
  }
  const onFile = (e: ChangeEvent<HTMLInputElement>) => { readFile(e.target.files?.[0]); e.target.value = '' }
  const onDrop = (e: DragEvent) => { e.preventDefault(); setDragging(false); readFile(e.dataTransfer.files?.[0]) }
  const sample = () => {
    const rows = ['week,bookings', ...synth('sample', 36).map((v, i) => `${i + 1},${v.toFixed(1)}`)]
    setData({ ...parseCsv(rows.join('\n'))!, file: 'sample-bookings.csv' })
    setValue('Predict weekly bookings')
    setError('')
  }

  // chart geometry
  const chart = useMemo(() => {
    if (!series) return null
    const all = [...series.hist, ...series.fc.flatMap((p) => [p.lo, p.hi])]
    const min = Math.min(...all), max = Math.max(...all)
    const N = series.hist.length + series.fc.length
    const X = (i: number) => (i / (N - 1)) * 1000
    const Y = (v: number) => 270 - ((v - min) / (max - min || 1)) * 240
    const h = series.hist.map((v, i) => `${i ? 'L' : 'M'}${X(i).toFixed(1)},${Y(v).toFixed(1)}`).join('')
    const last = series.hist.length - 1
    const f = `M${X(last)},${Y(series.hist[last])}` + series.fc.map((p, i) => `L${X(last + 1 + i).toFixed(1)},${Y(p.m).toFixed(1)}`).join('')
    const band = `M${X(last)},${Y(series.hist[last])}` + series.fc.map((p, i) => `L${X(last + 1 + i).toFixed(1)},${Y(p.hi).toFixed(1)}`).join('') + series.fc.slice().reverse().map((p, i) => `L${X(N - 1 - i).toFixed(1)},${Y(p.lo).toFixed(1)}`).join('') + 'Z'
    const area = h + `L${X(last)},300L0,300Z`
    return { h, f, band, area, X, Y, N, last }
  }, [series])

  const onChartMove = (e: RPointerEvent<SVGSVGElement>) => {
    if (!chart) return
    const r = e.currentTarget.getBoundingClientRect()
    setHover(Math.max(0, Math.min(chart.N - 1, Math.round(((e.clientX - r.left) / r.width) * (chart.N - 1)))))
  }
  const hoverVal = series && hover !== null ? (hover <= chart!.last ? { v: series.hist[hover], f: false } : { v: series.fc[hover - chart!.last - 1].m, f: true }) : null
  const fmt = (v: number) => (Math.abs(v) >= 1000 ? v.toLocaleString(undefined, { maximumFractionDigits: 0 }) : v.toFixed(1))

  return (
    <main
      ref={scene}
      className={`hz is-${phase} ${dragging ? 'is-drag' : ''}`}
      onDragOver={(e) => { e.preventDefault(); setDragging(true) }}
      onDragLeave={(e) => { if (e.currentTarget === e.target) setDragging(false) }}
      onDrop={onDrop}
    >
      <div className="hz-bg" aria-hidden="true">
        <div className="hz-photo" style={{ backgroundImage: `url(${valley})` }} />
        <div className="hz-rays" />
        <div className="hz-grid"><i /></div>
        <div className="hz-shade" />
      </div>

      <header className="hz-top">
        <div className="hz-model">
          <button type="button" aria-haspopup="listbox" aria-expanded={menu} onClick={() => setMenu((m) => !m)}>
            <span className="hz-dot" /> Compass-1 · {HORIZONS[horizon].label}
            <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 6l4 4 4-4" /></svg>
          </button>
          <ul role="listbox" className={menu ? 'is-open' : ''} aria-label="Forecast horizon">
            {(Object.keys(HORIZONS) as Horizon[]).map((k) => (
              <li key={k} role="option" aria-selected={k === horizon} tabIndex={menu ? 0 : -1} onClick={() => { setHorizon(k); setMenu(false) }} onKeyDown={(e) => { if (e.key === 'Enter') { setHorizon(k); setMenu(false) } }}>
                {HORIZONS[k].label}<small>{k === '7d' ? 'fastest' : k === '30d' ? 'default' : 'widest band'}</small>
              </li>
            ))}
          </ul>
        </div>
        <a className="hz-brand" href="#">ARBORETUM</a>
        <a className="hz-api" href="#"><span>Plan a stay</span><i aria-hidden="true">›</i></a>
      </header>

      <section className="hz-hero">
        <p className="hz-eyebrow">The trip forecaster</p>
        <h1>Know before you go.</h1>

        <form className="hz-panel" onSubmit={submit}>
          <i className="hz-c hz-c1" /><i className="hz-c hz-c2" /><i className="hz-c hz-c3" /><i className="hz-c hz-c4" />
          <div className="hz-field">
            <textarea
              rows={2}
              value={value}
              aria-label="What should Compass forecast for your trip?"
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); run(value) } }}
            />
            {!value && <span className="hz-ghost" aria-hidden="true">{ghost}<i /></span>}
          </div>
          <div className="hz-row">
            <input ref={fileRef} type="file" accept=".csv,.tsv,.txt,text/csv" hidden onChange={onFile} />
            {data ? (
              <span className="hz-file">
                <b>{data.file}</b> {data.values.length} rows · {data.name}
                <button type="button" aria-label="Remove file" onClick={() => setData(null)}>×</button>
              </span>
            ) : (
              <>
                <button type="button" className="hz-ghostbtn" onClick={() => fileRef.current?.click()}><span aria-hidden="true">⊕</span> Upload CSV</button>
                <button type="button" className="hz-link" onClick={sample}>or use sample</button>
              </>
            )}
            <button type="submit" className="hz-go" disabled={phase === 'running'}>
              <span>{phase === 'running' ? 'Predicting' : 'Predict'}</span>
              <i aria-hidden="true">{phase === 'running' ? <b className="hz-spin" /> : '›'}</i>
            </button>
          </div>
          {error && <p className="hz-err" role="alert">{error}</p>}
        </form>

        <p className="hz-tag">Forecasts for every stay.<br />No guesswork. No crowds.</p>
      </section>

      {series && chart && (
        <section className="hz-chart" aria-label={`Forecast for ${series.name}`}>
          <div className="hz-stats">
            <div>
              <small>{series.name}</small>
              <b className={change >= 0 ? 'is-up' : 'is-down'}>{change >= 0 ? '+' : ''}{(change * count).toFixed(1)}%</b>
              <span>next {HORIZONS[horizon].label}</span>
            </div>
            <div>
              <small>confidence</small>
              <b>{Math.round(conf * count)}%</b>
              <span>90% band shown</span>
            </div>
            {hoverVal && (
              <div className="hz-tip">
                <small>{hoverVal.f ? 'forecast' : 'actual'} · t{hover! - chart.last >= 0 ? '+' : ''}{hover! - chart.last}</small>
                <b>{fmt(hoverVal.v)}</b>
              </div>
            )}
          </div>
          <svg viewBox="0 0 1000 300" preserveAspectRatio="none" onPointerMove={onChartMove} onPointerLeave={() => setHover(null)}>
            <defs>
              <linearGradient id="hz-area" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fff" stopOpacity=".16" /><stop offset="1" stopColor="#fff" stopOpacity="0" /></linearGradient>
              <linearGradient id="hz-band" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#ffb257" stopOpacity=".05" /><stop offset="1" stopColor="#ffb257" stopOpacity=".32" /></linearGradient>
            </defs>
            <path className="hz-area" d={chart.area} fill="url(#hz-area)" />
            <path className="hz-hist" d={chart.h} pathLength={1} />
            {phase === 'done' && (
              <>
                <path className="hz-band" d={chart.band} fill="url(#hz-band)" />
                <path className="hz-fc" d={chart.f} pathLength={1} />
                <line className="hz-now" x1={chart.X(chart.last)} x2={chart.X(chart.last)} y1="0" y2="300" />
              </>
            )}
            {hover !== null && hoverVal && <line className="hz-cross" x1={chart.X(hover)} x2={chart.X(hover)} y1="0" y2="300" />}
          </svg>
          {phase === 'done' && <span className="hz-nowlabel" style={{ left: `${(chart.X(chart.last) / 1000) * 100}%` }}>now</span>}
        </section>
      )}

      <div className="hz-drop" aria-hidden={!dragging}><p>Drop your CSV anywhere</p></div>
    </main>
  )
}
