import { useEffect, useLayoutEffect, useRef, useState, type KeyboardEvent } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import { PrintEngine } from './PrintEngine'
import { SPECIMENS, START_DESK, START_MOBILE, type Place } from './specimens'

gsap.registerPlugin(ScrollTrigger)

const smooth = (a: number, b: number, v: number) => {
  const t = Math.max(0, Math.min(1, (v - a) / (b - a)))
  return t * t * (3 - 2 * t)
}
const RINSED_AT = 0.5
const MOBILE = 700
const AUTO_SECONDS = 9

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReduced(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return reduced
}

type Rect = { x: number; y: number; w: number; h: number }

const PATHS = SPECIMENS.map((s) => ({
  fill: new Path2D(s.fill),
  strokes: s.strokes.map((k) => ({ p: new Path2D(k.d), w: k.w })),
}))

export default function CyanotypeHero() {
  const trackRef = useRef<HTMLElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const paperRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const specRefs = useRef<(HTMLDivElement | null)[]>([])
  const sunRef = useRef<HTMLElement>(null)
  const ringRef = useRef<SVGCircleElement>(null)
  const engineRef = useRef<PrintEngine | null>(null)
  const lenisRef = useRef<Lenis | null>(null)
  const stRef = useRef<ScrollTrigger | null>(null)
  const deskRef = useRef<Rect>({ x: 0, y: 0, w: 1, h: 1 })
  const placesRef = useRef<Place[]>(START_DESK.map((p) => ({ ...p })))
  const modeRef = useRef<'desk' | 'mobile' | null>(null)
  const zRef = useRef(SPECIMENS.map((_, i) => i + 1))
  const autoRef = useRef(false)
  const reduced = usePrefersReducedMotion()

  const [exposing, setExposing] = useState(false)
  const [autoExposed, setAutoExposed] = useState(false)
  const [saving, setSaving] = useState(false)
  const [isTouch] = useState(() => typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches)

  /* ------------------------------------------------ layout */
  const place = (i: number) => {
    const el = specRefs.current[i]
    if (!el) return
    const d = deskRef.current
    const p = placesRef.current[i]
    const s = SPECIMENS[i]
    const hPx = p.size * d.h
    const wPx = hPx * (s.w / s.h)
    const cx = d.x + d.w / 2 + p.u * d.h
    const cy = d.y + d.h / 2 + p.v * d.h
    el.style.width = `${wPx}px`
    el.style.height = `${hPx}px`
    el.style.transform = `translate3d(${(cx - wPx / 2).toFixed(1)}px, ${(cy - hPx / 2).toFixed(1)}px, 0) rotate(${p.rot}deg)`
    ;(el.parentElement as HTMLElement).style.zIndex = String(10 + zRef.current[i])
  }

  const layout = () => {
    const stage = stageRef.current
    const paper = paperRef.current
    if (!stage || !paper) return
    const w = stage.clientWidth
    const h = stage.clientHeight
    const mode = w < MOBILE ? 'mobile' : 'desk'
    if (mode !== modeRef.current) {
      modeRef.current = mode
      placesRef.current = (mode === 'mobile' ? START_MOBILE : START_DESK).map((p) => ({ ...p }))
    }
    let pw: number, ph: number, x: number, y: number
    if (mode === 'mobile') {
      pw = Math.min(w * 0.7, h * 0.34)
      ph = pw * 1.25
      x = (w - pw) / 2
      y = h * 0.21
    } else {
      ph = Math.min(h * 0.74, w * 0.36 * 1.25)
      pw = ph * 0.8
      x = w * 0.585 - pw / 2
      y = (h - ph) / 2 + 22
    }
    deskRef.current = { x, y, w: pw, h: ph }
    paper.style.left = `${x}px`
    paper.style.top = `${y}px`
    paper.style.width = `${pw}px`
    paper.style.height = `${ph}px`
    SPECIMENS.forEach((_, i) => place(i))
  }

  /* shadows of the cuttings, in print pixels */
  const drawShadows = (ctx: CanvasRenderingContext2D) => {
    const d = deskRef.current
    const k = PrintEngine.W / d.w
    placesRef.current.forEach((p, i) => {
      const s = SPECIMENS[i]
      const hPx = p.size * d.h
      const sc = hPx / s.h
      const cx = d.x + d.w / 2 + p.u * d.h
      const cy = d.y + d.h / 2 + p.v * d.h
      ctx.setTransform(k, 0, 0, k, -d.x * k, -d.y * k)
      ctx.translate(cx, cy)
      ctx.rotate((p.rot * Math.PI) / 180)
      ctx.scale(sc, sc)
      ctx.translate(-s.w / 2, -s.h / 2)
      ctx.globalAlpha = s.shade
      ctx.fill(PATHS[i].fill)
      ctx.lineCap = 'round'
      for (const st of PATHS[i].strokes) {
        ctx.lineWidth = st.w
        ctx.strokeStyle = '#000'
        ctx.stroke(st.p)
      }
    })
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.globalAlpha = 1
  }

  /* ------------------------------------------------ engine */
  useEffect(() => {
    const stage = stageRef.current
    const canvas = canvasRef.current
    if (!stage || !canvas) return
    layout()
    const engine = new PrintEngine(canvas, drawShadows)
    engineRef.current = engine
    engine.onSeconds = (s) => {
      if (sunRef.current) sunRef.current.textContent = `${String(Math.floor(s)).padStart(2, '0')} min`
      if (ringRef.current) ringRef.current.style.strokeDashoffset = String(1 - Math.min(1, s / 12))
    }

    let running = false
    let inView = true
    const tick = (_t: number, dtMs: number) => engine.step(Math.min(0.1, dtMs / 1000))
    const sync = () => {
      const want = inView && !document.hidden
      if (want && !running) gsap.ticker.add(tick)
      if (!want && running) gsap.ticker.remove(tick)
      running = want
    }
    const io = new IntersectionObserver(([e]) => {
      inView = e.isIntersecting
      sync()
    })
    if (trackRef.current) io.observe(trackRef.current)
    const hide = () => {
      if (document.hidden) engine.exposing = false
      sync()
    }
    document.addEventListener('visibilitychange', hide)
    sync()
    const ro = new ResizeObserver(() => {
      layout()
      ScrollTrigger.refresh()
    })
    ro.observe(stage)
    return () => {
      gsap.ticker.remove(tick)
      io.disconnect()
      ro.disconnect()
      document.removeEventListener('visibilitychange', hide)
      engineRef.current = null
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  /* ------------------------------------------------ the sun */
  const sun = (on: boolean) => {
    const eng = engineRef.current
    if (!eng) return
    eng.exposing = on
    setExposing(on)
  }
  useEffect(() => {
    const stop = () => sun(false)
    window.addEventListener('pointerup', stop)
    window.addEventListener('blur', stop)
    return () => {
      window.removeEventListener('pointerup', stop)
      window.removeEventListener('blur', stop)
    }
  }, [])

  /* ------------------------------------------------ dragging cuttings */
  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return
    let drag: { i: number; id: number; dx: number; dy: number; sx: number; sy: number; moved: boolean } | null = null
    const local = (e: PointerEvent) => {
      const r = stage.getBoundingClientRect()
      return { x: e.clientX - r.left, y: e.clientY - r.top }
    }
    const down = (e: PointerEvent) => {
      const el = (e.target as Element).closest<HTMLElement>('[data-spec]')
      if (!el || e.button > 0) return
      const i = Number(el.dataset.spec)
      const d = deskRef.current
      const p = placesRef.current[i]
      const m = local(e)
      const cx = d.x + d.w / 2 + p.u * d.h
      const cy = d.y + d.h / 2 + p.v * d.h
      drag = { i, id: e.pointerId, dx: m.x - cx, dy: m.y - cy, sx: m.x, sy: m.y, moved: false }
      zRef.current[i] = Math.max(...zRef.current) + 1
      el.classList.add('is-lifted')
      el.setPointerCapture(e.pointerId)
      place(i)
      e.preventDefault()
    }
    const move = (e: PointerEvent) => {
      if (!drag || e.pointerId !== drag.id) return
      const m = local(e)
      if (Math.hypot(m.x - drag.sx, m.y - drag.sy) > 6) drag.moved = true
      if (!drag.moved) return
      const d = deskRef.current
      const w = stage.clientWidth, h = stage.clientHeight
      const x = Math.max(0, Math.min(w, m.x - drag.dx))
      const y = Math.max(0, Math.min(h, m.y - drag.dy))
      placesRef.current[drag.i].u = (x - d.x - d.w / 2) / d.h
      placesRef.current[drag.i].v = (y - d.y - d.h / 2) / d.h
      place(drag.i)
    }
    const up = (e: PointerEvent) => {
      if (!drag || e.pointerId !== drag.id) return
      const el = specRefs.current[drag.i]
      el?.classList.remove('is-lifted')
      if (!drag.moved) turn(drag.i, 30)
      drag = null
    }
    stage.addEventListener('pointerdown', down)
    stage.addEventListener('pointermove', move)
    stage.addEventListener('pointerup', up)
    stage.addEventListener('pointercancel', up)
    return () => {
      stage.removeEventListener('pointerdown', down)
      stage.removeEventListener('pointermove', move)
      stage.removeEventListener('pointerup', up)
      stage.removeEventListener('pointercancel', up)
    }
  }, [])

  const turn = (i: number, deg: number) => {
    const el = specRefs.current[i]
    placesRef.current[i].rot += deg
    if (el && !reduced) {
      el.classList.add('is-turning')
      window.setTimeout(() => el.classList.remove('is-turning'), 360)
    }
    place(i)
  }
  const nudge = (i: number, e: KeyboardEvent) => {
    const step = e.shiftKey ? 0.08 : 0.02
    const p = placesRef.current[i]
    const k = e.key
    if (k === 'ArrowLeft') p.u -= step
    else if (k === 'ArrowRight') p.u += step
    else if (k === 'ArrowUp') p.v -= step
    else if (k === 'ArrowDown') p.v += step
    else if (k === 'r' || k === 'R') return turn(i, e.shiftKey ? -30 : 30)
    else return
    e.preventDefault()
    place(i)
  }

  /* ------------------------------------------------ smooth scroll */
  useEffect(() => {
    if (reduced) return
    const lenis = new Lenis({ lerp: 0.085 })
    lenisRef.current = lenis
    lenis.on('scroll', ScrollTrigger.update)
    const tick = (t: number) => lenis.raf(t * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)
    return () => {
      gsap.ticker.remove(tick)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [reduced])

  /* ------------------------------------------------ intro + scroll story */
  useLayoutEffect(() => {
    const track = trackRef.current
    const stage = stageRef.current
    if (!track || !stage) return
    const ctx = gsap.context(() => {
      if (!reduced) {
        gsap.timeline({ defaults: { ease: 'expo.out' }, delay: 0.15 })
          .from('.cy-top > *', { opacity: 0, y: -8, duration: 1, stagger: 0.08 })
          .from('.cy-head .li', { yPercent: 110, duration: 1.6, stagger: 0.1 }, 0.2)
          .from('.cy-paper__in', { opacity: 0, y: 30, rotate: -2, duration: 1.6 }, 0.3)
          .from('.cy-spec__in', { opacity: 0, y: -40, rotate: -8, duration: 1.3, stagger: 0.07 }, 0.55)
          .from('.cy-sub__in, .cy-dock__in', { opacity: 0, y: 10, duration: 1.2, stagger: 0.1 }, 0.9)
      }

      const target = { p: 0 } // fresh per run: a StrictMode revert can't zero a shared object
      const apply = (p: number) => {
        const eng = engineRef.current
        if (!eng) return
        if (p > 0.09 && !autoRef.current) {
          autoRef.current = true
          if (eng.exposureMean() < 0.1) {
            eng.exposing = false
            eng.exposeInstant(AUTO_SECONDS) // it can't go in the water blank
            setAutoExposed(true)
          }
        } else if (p < 0.03 && autoRef.current) autoRef.current = false
        eng.setRinse(smooth(0.13, 0.36, p))
      }
      const hung = () => {
        const d = deskRef.current
        const w = stage.clientWidth, h = stage.clientHeight
        const mobile = w < MOBILE
        const s = mobile ? (w * 0.78) / d.w : (h * 0.8) / d.h
        const cx = mobile ? w * 0.5 : w * 0.66
        const cy = mobile ? h * 0.36 : h * 0.5
        return { s, x: cx - (d.x + d.w / 2), y: cy - (d.y + d.h / 2) }
      }
      const tl = gsap.timeline({ paused: true, defaults: { ease: 'none' } })
      tl.to(target, { p: 1, duration: 1, onUpdate: () => apply(target.p) }, 0)
        .to('.cy-head, .cy-sub, .cy-dock, .cy-sunbtn', { opacity: 0, y: -20, duration: 0.06, stagger: 0.012 }, 0.03)
        .to('.cy-specwrap', { yPercent: -110, rotate: (i) => (i % 2 ? 14 : -12), opacity: 0, duration: 0.07, stagger: 0.006, ease: 'power2.in' }, 0.05)
        .fromTo('.cy-tray', { opacity: 0 }, { opacity: 1, duration: 0.04 }, 0.08)
        .fromTo('.cy-water', { yPercent: 100 }, { yPercent: 0, duration: 0.2, ease: 'power1.inOut' }, 0.1)
        .fromTo('.cy-note', { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.05 }, 0.18)
        .to('.cy-note', { opacity: 0, y: -14, duration: 0.05 }, 0.44)
        .to('.cy-water', { yPercent: 100, duration: 0.08, ease: 'power1.in' }, 0.4)
        .to('.cy-tray', { opacity: 0, duration: 0.04 }, 0.48)
        .to(stage, { backgroundColor: '#0f1830', duration: 0.18 }, 0.54)
        .to('.cy-table', { opacity: 0, duration: 0.14 }, 0.54)
        .to('.cy-top', { color: '#f5f1e6', borderColor: 'rgba(245,241,230,0.2)', duration: 0.1 }, 0.6)
        .to('.cy-paper', {
          x: () => hung().x,
          y: () => hung().y,
          scale: () => hung().s,
          duration: 0.3,
          ease: 'power2.inOut',
        }, 0.55)
        .fromTo('.cy-peg', { opacity: 0, y: -30 }, { opacity: 1, y: 0, duration: 0.06, stagger: 0.02 }, 0.8)
        .fromTo('.cy-final', { opacity: 0, y: 30, pointerEvents: 'none' }, { opacity: 1, y: 0, pointerEvents: 'auto', duration: 0.07 }, 0.9)

      stRef.current = ScrollTrigger.create({
        trigger: track,
        start: 'top top',
        end: 'bottom bottom',
        animation: reduced ? undefined : tl,
        scrub: reduced ? false : 0.6,
        invalidateOnRefresh: true,
        onUpdate(self) {
          if (!reduced) return
          // discrete states only: table → rinsed → hung
          const p = self.progress > 0.75 ? 1 : self.progress > 0.25 ? RINSED_AT : 0
          tl.progress(p)
          apply(p)
        },
      })
      apply(0)
    }, stageRef)
    return () => {
      stRef.current = null
      ctx.revert()
    }
  }, [reduced]) // eslint-disable-line react-hooks/exhaustive-deps

  const scrollToProgress = (p: number, then?: () => void) => {
    const st = stRef.current
    if (!st) return
    const y = st.start + (st.end - st.start) * p
    if (lenisRef.current) lenisRef.current.scrollTo(y, { duration: p === 0 ? 2.4 : 2, onComplete: then })
    else {
      window.scrollTo({ top: y, behavior: 'auto' })
      then?.()
    }
  }

  const newSheet = () => {
    engineRef.current?.reset()
    setAutoExposed(false)
  }
  const again = () => scrollToProgress(0, newSheet)

  const save = async () => {
    const eng = engineRef.current
    if (!eng || saving) return
    setSaving(true)
    try {
      const blob = await eng.toBlob()
      if (!blob) return
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'the-arboretum-sun-print.png'
      document.body.appendChild(a)
      a.click()
      a.remove()
      window.setTimeout(() => URL.revokeObjectURL(url), 4000)
    } finally {
      setSaving(false)
    }
  }

  return (
    <main className="cy-root">
      <section ref={trackRef} className="cy-track" aria-label="Sun print workshop at The Arboretum — make a cyanotype">
        <div ref={stageRef} className="cy-stage" data-sun={exposing ? 'on' : 'off'}>
          <div className="cy-table" aria-hidden="true" />

          <div ref={paperRef} className="cy-paper">
            <div className="cy-paper__in">
              <div className="cy-tray" aria-hidden="true" />
              <canvas
                ref={canvasRef}
                className="cy-print"
                role="img"
                aria-label="Your cyanotype print: cuttings leave white silhouettes wherever they blocked the sun"
              />
              <div className="cy-waterbox" aria-hidden="true">
                <div className="cy-water"><i className="cy-water__surface" /></div>
              </div>
              <i className="cy-peg cy-peg--l" aria-hidden="true" />
              <i className="cy-peg cy-peg--r" aria-hidden="true" />
            </div>
          </div>

          {SPECIMENS.map((s, i) => (
            <div key={s.id} className="cy-specwrap">
              <div
                ref={(el) => {
                  specRefs.current[i] = el
                }}
                data-spec={i}
                className="cy-spec"
                tabIndex={0}
                role="button"
                aria-label={`${s.name}, ${s.latin}. Drag to move, tap to turn. With the keyboard: arrow keys move it, R turns it.`}
                onKeyDown={(e) => nudge(i, e)}
              >
                <div className="cy-spec__in">
                  <svg viewBox={`0 0 ${s.w} ${s.h}`} aria-hidden="true">
                    <path d={s.fill} fill={s.color} />
                    {s.strokes.map((k, j) => (
                      <path key={j} d={k.d} fill="none" stroke={s.color} strokeWidth={k.w} strokeLinecap="round" />
                    ))}
                  </svg>
                </div>
              </div>
            </div>
          ))}

          <div className="cy-sun" aria-hidden="true" />

          <header className="cy-top">
            <span>The Arboretum</span>
            <span className="cy-top__c">Sun prints <em>Workshop</em></span>
            <span className="cy-top__r">
              Sun <b ref={sunRef}>00 min</b>
            </span>
          </header>

          <h1 className="cy-head">
            <span className="ln"><span className="li">Printed by</span></span>
            <span className="ln"><span className="li"><em>the sun.</em></span></span>
          </h1>

          <div className="cy-sub">
            <p className="cy-sub__in">
              {isTouch
                ? 'Drag the cuttings onto the coated paper, tap one to turn it, then hold the sun. Whatever you cover stays white.'
                : 'Drag the cuttings onto the coated paper, click one to turn it, then hold the sun. Whatever you cover stays white.'}
            </p>
          </div>

          <button
            type="button"
            className={`cy-sunbtn${exposing ? ' is-on' : ''}`}
            aria-pressed={exposing}
            onPointerDown={(e) => {
              e.preventDefault()
              sun(true)
            }}
            onKeyDown={(e) => {
              if ((e.key === ' ' || e.key === 'Enter') && !e.repeat) {
                e.preventDefault()
                sun(true)
              }
            }}
            onKeyUp={(e) => (e.key === ' ' || e.key === 'Enter') && sun(false)}
            onContextMenu={(e) => e.preventDefault()}
          >
            <svg viewBox="0 0 100 100" aria-hidden="true">
              <circle cx="50" cy="50" r="46" className="cy-sunbtn__track" />
              <circle ref={ringRef} cx="50" cy="50" r="46" pathLength={1} className="cy-sunbtn__ring" />
            </svg>
            <span className="cy-sunbtn__label">{exposing ? 'Exposing…' : 'Hold the sun'}</span>
          </button>

          <div className="cy-dock">
            <div className="cy-dock__in">
              <button type="button" onClick={newSheet}>New sheet</button>
              <button type="button" onClick={() => scrollToProgress(RINSED_AT)}>Rinse it ↓</button>
            </div>
          </div>

          <p className="cy-note" aria-hidden="true">
            Into cold water. <em>The yellow runs off; the blue stays.</em>
          </p>

          <div className="cy-final">
            <p className="cy-final__kicker">The Arboretum · garden workshops</p>
            <h2 className="cy-final__title">
              Yours, in <br />
              <em>Prussian blue.</em>
            </h2>
            <p className="cy-final__body">
              {autoExposed
                ? `Your sheet went in unexposed, so we gave it ${AUTO_SECONDS} minutes of sun. `
                : ''}
              Iron salts, paper and an afternoon on the terrace. Every guest takes one sheet of the garden home.
            </p>
            <div className="cy-final__row">
              <button type="button" className="cy-final__btn cy-final__btn--solid" onClick={save} disabled={saving}>
                {saving ? 'Saving…' : 'Save your print'}
              </button>
              <button type="button" className="cy-final__btn" onClick={again}>
                Make another <span aria-hidden="true">↑</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
