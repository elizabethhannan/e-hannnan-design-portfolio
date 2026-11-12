import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import { Meadow } from './Meadow'

gsap.registerPlugin(ScrollTrigger)

const smooth = (a: number, b: number, v: number) => {
  const t = Math.max(0, Math.min(1, (v - a) / (b - a)))
  return t * t * (3 - 2 * t)
}
const todOf = (p: number) => smooth(0.06, 0.66, p)
const NIGHT_AT = 0.7

const HEAD = [['Everything'], ['here', 'leans'], ['toward', 'you.']]

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

function clock(tod: number) {
  const m = Math.round(6 * 60 + 40 + tod * 16 * 60)
  return `${String(Math.floor(m / 60) % 24).padStart(2, '0')}:${String(m % 60).padStart(2, '0')}`
}

export default function PhototropismHero() {
  const trackRef = useRef<HTMLElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const headRef = useRef<HTMLHeadingElement>(null)
  const clockRef = useRef<HTMLElement>(null)
  const meadowRef = useRef<Meadow | null>(null)
  const lenisRef = useRef<Lenis | null>(null)
  const stRef = useRef<ScrollTrigger | null>(null)
  const progressRef = useRef(0)
  const reduced = usePrefersReducedMotion()

  const [planted, setPlanted] = useState(0)
  const [isTouch] = useState(() => typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches)

  const measureLetters = () => {
    const stage = stageRef.current
    const m = meadowRef.current
    if (!stage || !m || !headRef.current) return
    const s = stage.getBoundingClientRect()
    const els = Array.from(headRef.current.querySelectorAll<HTMLElement>('.pt-l'))
    m.letters = els.map((el, i) => {
      const prev = el.style.transform
      el.style.transform = 'none'
      const r = el.getBoundingClientRect()
      el.style.transform = prev
      return { el, x: r.left + r.width / 2 - s.left, y: r.bottom - s.top, a: m.letters[i]?.a ?? 0 }
    })
  }

  const applyTime = (p: number) => {
    progressRef.current = p
    const m = meadowRef.current
    const tod = todOf(p)
    m?.setTime(tod)
    const stage = stageRef.current
    if (stage && m) stage.style.setProperty('--pt-ink', m.inkCss())
    if (stage) stage.dataset.night = tod > 0.55 ? 'on' : 'off'
    if (clockRef.current) clockRef.current.textContent = `${clock(tod)} ${tod > 0.52 ? '☾' : '☀'}`
  }

  /* ------------------------------------------------ engine */
  useEffect(() => {
    const stage = stageRef.current
    const canvas = canvasRef.current
    if (!stage || !canvas) return
    const m = new Meadow(canvas)
    m.reduced = reduced
    m.onPlanted = (n) => setPlanted(n)
    meadowRef.current = m
    m.resize(stage.clientWidth, stage.clientHeight)
    applyTime(progressRef.current)
    measureLetters()
    document.fonts?.ready.then(measureLetters).catch(() => {})

    let running = false
    let inView = true
    const tick = (_t: number, dtMs: number) => m.step(dtMs / 1000)
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
    document.addEventListener('visibilitychange', sync)
    sync()
    let rw = stage.clientWidth
    let rh = stage.clientHeight
    const ro = new ResizeObserver(() => {
      // a phone's URL bar sliding in and out shouldn't regrow the whole meadow
      const w = stage.clientWidth, h = stage.clientHeight
      if (Math.abs(w - rw) < 2 && Math.abs(h - rh) < 120 && m.mobile) return
      rw = w
      rh = h
      m.resize(w, h)
      measureLetters()
    })
    ro.observe(stage)
    return () => {
      gsap.ticker.remove(tick)
      io.disconnect()
      ro.disconnect()
      document.removeEventListener('visibilitychange', sync)
      meadowRef.current = null
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (meadowRef.current) meadowRef.current.reduced = reduced
  }, [reduced])

  /* ------------------------------------------------ pointer = the light; taps plant */
  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return
    const local = (x: number, y: number) => {
      const r = stage.getBoundingClientRect()
      return { x: x - r.left, y: y - r.top }
    }
    const onUi = (t: EventTarget | null) => t instanceof Element && !!t.closest('button, a')
    const move = (e: PointerEvent) => {
      if (e.pointerType === 'touch') return
      const p = local(e.clientX, e.clientY)
      meadowRef.current?.pointer(p.x, p.y)
    }
    const touch = (e: TouchEvent) => {
      const t = e.touches[0]
      if (!t || onUi(e.target)) return
      const p = local(t.clientX, t.clientY)
      meadowRef.current?.pointer(p.x, p.y)
    }
    const click = (e: MouseEvent) => {
      if (onUi(e.target) || progressRef.current > 0.86) return
      const p = local(e.clientX, e.clientY)
      meadowRef.current?.pointer(p.x, p.y)
      meadowRef.current?.plant(p.x, p.y)
    }
    stage.addEventListener('pointermove', move)
    stage.addEventListener('touchstart', touch, { passive: true })
    stage.addEventListener('touchmove', touch, { passive: true })
    stage.addEventListener('click', click)
    return () => {
      stage.removeEventListener('pointermove', move)
      stage.removeEventListener('touchstart', touch)
      stage.removeEventListener('touchmove', touch)
      stage.removeEventListener('click', click)
    }
  }, [])

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
    if (!track) return
    const ctx = gsap.context(() => {
      if (!reduced) {
        gsap.timeline({ defaults: { ease: 'expo.out' }, delay: 0.15 })
          .from('.pt-top > *', { opacity: 0, y: -8, duration: 1, stagger: 0.08 })
          .from('.pt-head .pt-w', { yPercent: 110, duration: 1.6, stagger: 0.07 }, 0.2)
          .from('.pt-sub__in, .pt-dock__in', { opacity: 0, y: 10, duration: 1.2, stagger: 0.1 }, 1)
      }
      const target = { p: 0 } // fresh per run: a StrictMode revert can't zero a shared object
      const tl = gsap.timeline({ paused: true, defaults: { ease: 'none' } })
      tl.to(target, { p: 1, duration: 1, onUpdate: () => applyTime(target.p) }, 0)
        .to('.pt-sub, .pt-dock', { opacity: 0, y: -16, duration: 0.05, stagger: 0.012 }, 0.05)
        .fromTo('.pt-note--dusk', { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.05 }, 0.26)
        .to('.pt-note--dusk', { opacity: 0, y: -14, duration: 0.05 }, 0.42)
        .fromTo('.pt-note--night', { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.05 }, 0.58)
        .to('.pt-note--night', { opacity: 0, y: -14, duration: 0.05 }, 0.78)
        .to('.pt-head', { opacity: 0, y: -24, duration: 0.06 }, 0.8)
        .fromTo('.pt-final', { opacity: 0, y: 30, pointerEvents: 'none' }, { opacity: 1, y: 0, pointerEvents: 'auto', duration: 0.07 }, 0.88)

      stRef.current = ScrollTrigger.create({
        trigger: track,
        start: 'top top',
        end: 'bottom bottom',
        animation: reduced ? undefined : tl,
        scrub: reduced ? false : 0.6,
        onUpdate(self) {
          if (!reduced) return
          // discrete states only: morning → night → the end
          const p = self.progress > 0.8 ? 1 : self.progress > 0.25 ? NIGHT_AT : 0
          tl.progress(p)
          applyTime(p)
        },
      })
      applyTime(0)
    }, stageRef)
    return () => {
      stRef.current = null
      ctx.revert()
    }
  }, [reduced]) // eslint-disable-line react-hooks/exhaustive-deps

  const scrollToProgress = (p: number) => {
    const st = stRef.current
    if (!st) return
    const y = st.start + (st.end - st.start) * p
    if (lenisRef.current) lenisRef.current.scrollTo(y, { duration: p === 0 ? 2.6 : 2.2 })
    else window.scrollTo({ top: y, behavior: 'auto' })
  }
  const plantSomewhere = () => {
    const s = stageRef.current
    if (!s) return
    const x = s.clientWidth * (0.15 + Math.random() * 0.7)
    meadowRef.current?.plant(x, s.clientHeight * 0.4)
  }

  let li = 0
  return (
    <main className="pt-root">
      <section ref={trackRef} className="pt-track" aria-label="Phototropism — a meadow that turns toward you">
        <div ref={stageRef} className="pt-stage" data-night="off">
          <canvas
            ref={canvasRef}
            className="pt-gl"
            role="img"
            aria-label="A hand-drawn meadow of daisies, tulips, bluebells and dandelions, every stem bending toward the light"
          />
          <div className="pt-paper" aria-hidden="true" />

          <header className="pt-top">
            <span>The Arboretum</span>
            <span className="pt-top__c">Photo<em>tropism</em></span>
            <span className="pt-top__r">
              <b ref={clockRef}>06:40 ☀</b>
              <span className="pt-top__n"> · Planted {String(planted).padStart(2, '0')}</span>
            </span>
          </header>

          <h1 ref={headRef} className="pt-head" aria-label="Everything here leans toward you.">
            {HEAD.map((line, i) => (
              <span key={i} className={`pt-ln${i === 2 ? ' pt-ln--em' : ''}`} aria-hidden="true">
                {line.map((word, j) => (
                  <span key={j} className="pt-wwrap">
                    <span className="pt-w">
                      {word.split('').map((ch) => (
                        <span key={li++} className="pt-l">{ch}</span>
                      ))}
                    </span>
                  </span>
                ))}
              </span>
            ))}
          </h1>

          <div className="pt-sub">
            <p className="pt-sub__in">
              {isTouch
                ? 'Plants turn toward the light. Here, the light is your finger. Tap the ground to plant something; it will start leaning too.'
                : 'Plants turn toward the light. Here, the light is you. Click anywhere to plant something; it will start leaning too.'}
            </p>
          </div>

          <div className="pt-dock">
            <div className="pt-dock__in">
              <button type="button" onClick={plantSomewhere}>Plant a seed</button>
              <button type="button" onClick={() => scrollToProgress(NIGHT_AT)}>Let the sun set ↓</button>
            </div>
          </div>

          <p className="pt-note pt-note--dusk" aria-hidden="true">
            By evening they <em>close up.</em>
          </p>
          <p className="pt-note pt-note--night" aria-hidden="true">
            At night they rest. <em>Mostly.</em>
          </p>

          <div className="pt-final">
            <p className="pt-final__kicker">The Arboretum · plants that pay attention</p>
            <h2 className="pt-final__title">
              Grow toward <br />
              <em>what you love.</em>
            </h2>
            <p className="pt-final__body">Houseplants, seedlings and slow-growing things, raised by people who turn them to the window every morning.</p>
            <button type="button" className="pt-final__btn" onClick={() => scrollToProgress(0)}>
              Back to morning <span aria-hidden="true">↑</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
