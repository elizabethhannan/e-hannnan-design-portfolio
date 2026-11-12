import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import { PLATES, fmt, toMinutes } from './plates'

gsap.registerPlugin(ScrollTrigger)

const N = PLATES.length
const STRIP_END = 0.84 // share of the scroll used by the gallery; the rest expands the last plate
const MINUTES = PLATES.map((p) => toMinutes(p.time))

const clamp = (v: number, a = 0, b = 1) => Math.max(a, Math.min(b, v))
const lerp = (a: number, b: number, t: number) => a + (b - a) * t
const smooth = (a: number, b: number, v: number) => {
  const t = clamp((v - a) / (b - a))
  return t * t * (3 - 2 * t)
}

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

export default function FlorilegiumHero() {
  const trackRef = useRef<HTMLElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLButtonElement | null)[]>([])
  const imgsRef = useRef<(HTMLImageElement | null)[]>([])
  const timeRef = useRef<HTMLSpanElement>(null)
  const fillRef = useRef<HTMLElement>(null)
  const chromeRef = useRef<HTMLDivElement>(null)
  const finalRef = useRef<HTMLDivElement>(null)
  const introRef = useRef<HTMLParagraphElement>(null)
  const stRef = useRef<ScrollTrigger | null>(null)
  const lenisRef = useRef<Lenis | null>(null)
  const reduced = usePrefersReducedMotion()

  const [active, setActive] = useState(0)
  const [loaded, setLoaded] = useState<boolean[]>(() => PLATES.map(() => false))
  const [failed, setFailed] = useState<boolean[]>(() => PLATES.map(() => false))
  const loadedCount = loaded.filter(Boolean).length + failed.filter(Boolean).length
  const [ready, setReady] = useState(false)

  // Reveal once every plate settled (loaded or failed) – or after 6s, whichever first.
  useEffect(() => {
    if (loadedCount >= N) setReady(true)
  }, [loadedCount])
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 6000)
    return () => clearTimeout(t)
  }, [])

  /* ------------------------------------------------------ smooth scroll */
  useEffect(() => {
    if (reduced) return
    const lenis = new Lenis({ lerp: 0.08 })
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

  /* ------------------------------------------- per-frame fisheye layout */
  useLayoutEffect(() => {
    const track = trackRef.current
    const stage = stageRef.current
    if (!track || !stage) return

    const st = ScrollTrigger.create({ trigger: track, start: 'top top', end: 'bottom bottom' })
    stRef.current = st

    let vw = stage.clientWidth
    let vh = stage.clientHeight
    const ro = new ResizeObserver(() => {
      vw = stage.clientWidth
      vh = stage.clientHeight
    })
    ro.observe(stage)

    let skew = 0
    let lastActive = -1
    const X = new Array<number>(N).fill(0)
    const W = new Array<number>(N).fill(0)
    const H = new Array<number>(N).fill(0)

    const frame = () => {
      const p = st.progress
      const f = clamp(p / STRIP_END) * (N - 1)
      const e = reduced ? 0 : smooth(STRIP_END + 0.02, 0.995, p)
      const fade = reduced ? smooth(STRIP_END + 0.02, 0.95, p) : e
      const mobile = vw < 700
      const H0 = Math.min(vh * (mobile ? 0.5 : 0.48), (vw * (mobile ? 0.66 : 0.34)) / 0.75, 620)
      const gap = Math.max(12, vw * 0.018)
      const centerY = vh * (mobile ? 0.44 : 0.45)

      // sizes: gaussian falloff around the focused (continuous) index
      let acc = 0
      for (let i = 0; i < N; i++) {
        const d = i - f
        const s = 0.42 + 0.58 * Math.exp(-(d * d) / 0.7)
        H[i] = H0 * s
        W[i] = H[i] * 0.75
        X[i] = acc + W[i] / 2
        acc += W[i] + gap
      }
      const i0 = Math.floor(f)
      const i1 = Math.min(N - 1, i0 + 1)
      const focusX = lerp(X[i0], X[i1], f - i0)
      const offset = vw / 2 - focusX

      // velocity skew (Lenis velocity is px/frame)
      const v = lenisRef.current?.velocity ?? 0
      skew = lerp(skew, reduced ? 0 : clamp(v * 0.12, -6, 6), 0.1)

      for (let i = 0; i < N; i++) {
        const el = cardsRef.current[i]
        if (!el) continue
        let x = X[i] + offset
        let y = centerY
        let w = W[i]
        let h = H[i]
        let op = 1
        if (i === N - 1 && e > 0) {
          x = lerp(x, vw / 2, e)
          y = lerp(y, vh / 2, e)
          w = lerp(w, vw, e)
          h = lerp(h, vh, e)
        } else if (e > 0) {
          op = 1 - e * 1.6
          x += (x < vw / 2 ? -1 : 1) * e * vw * 0.2
        }
        el.style.width = `${w}px`
        el.style.height = `${h}px`
        el.style.opacity = `${clamp(op)}`
        el.style.transform = `translate3d(${x - w / 2}px, ${y - h / 2}px, 0) skewX(${(skew * (1 - e)).toFixed(2)}deg)`
        el.style.borderRadius = i === N - 1 ? `${lerp(2, 0, e)}px` : '2px'
        const img = imgsRef.current[i]
        if (img) img.style.transform = `translate3d(${clamp(-(i - f) * 7, -10, 10) * (1 - e)}%, 0, 0) scale(${lerp(1.22, 1, i === N - 1 ? e : 0)})`
      }

      // clock: interpolate minutes between plates
      const m = lerp(MINUTES[i0], MINUTES[i1], f - i0)
      if (timeRef.current) timeRef.current.textContent = fmt(m)
      if (fillRef.current) fillRef.current.style.transform = `scaleX(${f / (N - 1)})`
      if (chromeRef.current) chromeRef.current.style.opacity = `${1 - fade}`
      if (introRef.current) {
        const t = smooth(0, 0.05, p)
        introRef.current.style.opacity = `${1 - t}`
        introRef.current.style.transform = `translate3d(${-t * 40}px, -50%, 0)`
      }
      if (finalRef.current) {
        const t = smooth(0.93, 1, p)
        finalRef.current.style.opacity = `${reduced ? fade : t}`
        finalRef.current.style.transform = `translate3d(0, ${(1 - t) * 30}px, 0)`
        finalRef.current.style.pointerEvents = (reduced ? fade : t) > 0.5 ? 'auto' : 'none'
      }

      const idx = Math.round(f)
      if (idx !== lastActive) {
        lastActive = idx
        setActive(idx)
      }
    }

    gsap.ticker.add(frame)
    frame()
    return () => {
      gsap.ticker.remove(frame)
      ro.disconnect()
      st.kill()
      stRef.current = null
    }
  }, [reduced])

  /* ------------------------------------------------------------- intro */
  useLayoutEffect(() => {
    if (!ready || reduced) return
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: 'expo.out' } })
        .from('.fl-card__clip', { clipPath: 'inset(100% 0% 0% 0%)', duration: 1.6, stagger: { each: 0.06, from: 'center' } })
        .from('.fl-top > *', { opacity: 0, y: -10, duration: 1, stagger: 0.08 }, 0.3)
        .from('.fl-time > *', { yPercent: 100, opacity: 0, duration: 1.4, stagger: 0.08 }, 0.4)
        .from('.fl-caption, .fl-sub', { opacity: 0, duration: 1 }, 0.8)
    }, stageRef)
    return () => ctx.revert()
  }, [ready, reduced])

  /* ------------------------------------------------------------ actions */
  const scrollToProgress = (p: number) => {
    const st = stRef.current
    if (!st) return
    const y = st.start + p * (st.end - st.start)
    if (lenisRef.current) lenisRef.current.scrollTo(y, { duration: 1.4 })
    else window.scrollTo({ top: y, behavior: reduced ? 'auto' : 'smooth' })
  }
  const goTo = (i: number) => scrollToProgress((clamp(i, 0, N - 1) / (N - 1)) * STRIP_END)

  // arrow keys step through plates while the section is on screen
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const st = stRef.current
      if (!st || !st.isActive) return
      if ((e.target as HTMLElement).closest('input, textarea')) return
      if (e.key === 'ArrowRight') { e.preventDefault(); goTo(active + 1) }
      if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(active - 1) }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active])

  const plate = PLATES[active]

  return (
    <main className="fl-root" data-ready={ready}>
      <section ref={trackRef} className="fl-track" style={{ height: `${N * 42 + 170}vh` }} aria-label="Florilegium — one day away, ten moments">
        <div ref={stageRef} className="fl-stage">
          <div ref={chromeRef} className="fl-chrome">
            <header className="fl-top">
              <span className="fl-top__l">(Archive) <em>Vol. 01</em></span>
              <span className="fl-logo">Florilegium</span>
              <span className="fl-top__r">Ten moments · One day</span>
            </header>

            <div className="fl-caption" aria-live="polite">
              <span className="fl-caption__no">Plate {String(active + 1).padStart(2, '0')} / {N}</span>
              <span key={active} className="fl-caption__title">{plate.title}</span>
              <span className="fl-caption__note">{plate.note}</span>
            </div>

            <div className="fl-time" aria-hidden="true">
              <span className="fl-time__now" ref={timeRef}>{PLATES[0].time}</span>
              <span className="fl-time__line"><i ref={fillRef} /></span>
              <span className="fl-time__end">{PLATES[N - 1].time}</span>
            </div>
            <p ref={introRef} className="fl-intro">
              <span>A florilegium is a gathering of flowers.</span> This one gathers a single day away — ten moments, from first light to after dark.
            </p>
            <p className="fl-sub">Scroll to explore · ← → to step</p>
          </div>

          <div className="fl-strip">
            {PLATES.map((p, i) => (
              <button
                key={i}
                type="button"
                ref={(el) => { cardsRef.current[i] = el }}
                className={`fl-card${i === active ? ' is-active' : ''}`}
                style={{ background: p.tint }}
                aria-label={`Plate ${i + 1}: ${p.title}, ${p.time}`}
                aria-current={i === active ? 'true' : undefined}
                onClick={() => goTo(i)}
              >
                <span className="fl-card__clip">
                  {!failed[i] ? (
                    <img
                      ref={(el) => { imgsRef.current[i] = el }}
                      src={p.src}
                      alt=""
                      decoding="async"
                      loading="eager"
                      draggable={false}
                      style={p.focus ? { objectPosition: p.focus } : undefined}
                      className={loaded[i] ? 'is-loaded' : ''}
                      onLoad={() => setLoaded((l) => l.map((v, j) => (j === i ? true : v)))}
                      onError={() => setFailed((l) => l.map((v, j) => (j === i ? true : v)))}
                    />
                  ) : (
                    <span className="fl-card__fallback">Plate {i + 1}<br />{p.time}</span>
                  )}
                </span>
              </button>
            ))}
          </div>

          <div ref={finalRef} className="fl-final">
            <p className="fl-final__kicker">Plate 10 · 21:15 · Your room</p>
            <h1 className="fl-final__title">Plan your Day away<br /><em>Plan your Holiday here.</em></h1>
            <p className="fl-final__body">Florilegium, Vol. 01 — ten moments from a single day away: the trail, the beach, the vines and the room waiting at the end of it.</p>
            <button type="button" className="fl-final__btn" onClick={() => scrollToProgress(0)}>
              Back to first light <span aria-hidden="true">↑</span>
            </button>
          </div>

          {!ready && (
            <div className="fl-loader" role="status">
              Developing plates {String(loadedCount).padStart(2, '0')} / {N}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
