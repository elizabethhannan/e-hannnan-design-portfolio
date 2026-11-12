import { useEffect, useLayoutEffect, useMemo, useRef, useState, type MouseEvent } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import { JoinerEngine, makeTiles, rng } from './JoinerEngine'

gsap.registerPlugin(ScrollTrigger)

const SRC = new URL('./assets/tree.webp', import.meta.url).href
const ASPECT = 0.8 // photo width / height
const SEED = 1987
const ROLL = 36
const MOBILE = 700
const JOINED_AT = 0.48

const smooth = (a: number, b: number, v: number) => {
  const t = Math.max(0, Math.min(1, (v - a) / (b - a)))
  return t * t * (3 - 2 * t)
}
const assembleOf = (p: number) => smooth(0.08, 0.42, p)

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

/** which pieces show in the joiner: anything with tree or field in it, the empty sky stays out */
function pickVisible(img: HTMLImageElement, tiles: ReturnType<typeof makeTiles>) {
  const W = 120, H = 180
  const c = document.createElement('canvas')
  c.width = W
  c.height = H
  const ctx = c.getContext('2d', { willReadFrequently: true })
  if (!ctx) return tiles.map(() => true)
  ctx.drawImage(img, 0, 0, W, H)
  const d = ctx.getImageData(0, 0, W, H).data
  const r = rng(SEED + 3)
  return tiles.map((t) => {
    let n = 0, solid = 0
    for (let y = Math.floor(t.y * H); y < Math.ceil((t.y + t.h) * H); y++)
      for (let x = Math.floor(t.x * W); x < Math.ceil((t.x + t.w) * W); x++) {
        const i = (y * W + x) * 4
        const R = d[i], G = d[i + 1], B = d[i + 2]
        const luma = 0.3 * R + 0.59 * G + 0.11 * B
        const branch = luma > 22 && luma < 120 && B < R + 28 // dark, not blue: bark and twigs
        const field = y / H > 0.55 && R > B + 30 // the golden field
        n++
        if (branch || field) solid++
      }
    const f = n ? solid / n : 0
    const cy = t.y + t.h / 2
    if (cy > 0.9 && r() < 0.35) return false // a ragged bottom edge
    return f > 0.022 || (cy > 0.22 && r() < 0.1)
  })
}

export default function JoinerHero() {
  const trackRef = useRef<HTMLElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const boxRef = useRef<HTMLDivElement>(null)
  const engineRef = useRef<JoinerEngine | null>(null)
  const lenisRef = useRef<Lenis | null>(null)
  const stRef = useRef<ScrollTrigger | null>(null)
  const progressRef = useRef(0)
  const boxRect = useRef({ x: 0, y: 0, w: 1, h: 1 })
  const reduced = usePrefersReducedMotion()

  const tiles = useMemo(() => makeTiles(SEED, ASPECT), [])
  const stamps = useMemo(() => {
    const r = rng(SEED + 9)
    const m = new Map<number, string>()
    tiles.forEach((t, i) => {
      if (t.w * ASPECT > 0.09 && t.y > 0.3 && r() < 0.16) {
        const mm = [11, 12, 1, 2][Math.floor(r() * 4)]
        m.set(i, `’${mm > 10 ? 97 : 98} ${String(mm).padStart(2, ' ')} ${String(1 + Math.floor(r() * 28)).padStart(2, '0')}`)
      }
    })
    return m
  }, [tiles])

  const [state, setState] = useState<'loading' | 'ready' | 'error'>('loading')
  const [left, setLeft] = useState(ROLL)
  const leftRef = useRef(ROLL)
  const [isTouch] = useState(() => typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches)

  /* ------------------------------------------------ layout */
  const layout = () => {
    const stage = stageRef.current
    const box = boxRef.current
    const wrap = wrapRef.current
    if (!stage || !box || !wrap) return
    const w = stage.clientWidth
    const h = stage.clientHeight
    let bw: number, bh: number, x: number, y: number
    if (w < MOBILE) {
      bw = Math.min(w * 0.94, h * 0.6 * ASPECT)
      bh = bw / ASPECT
      x = (w - bw) / 2
      y = h * 0.15
    } else {
      bh = Math.min(h * 0.84, (w * 0.46) / ASPECT)
      bw = bh * ASPECT
      x = w * 0.64 - bw / 2
      y = (h - bh) / 2 + 16
    }
    boxRect.current = { x, y, w: bw, h: bh }
    box.style.left = `${x}px`
    box.style.top = `${y}px`
    box.style.width = `${bw}px`
    box.style.height = `${bh}px`
    wrap.style.transformOrigin = `${x + bw / 2}px ${y + bh / 2}px`
    engineRef.current?.resize(bw, bh)
  }

  /* ------------------------------------------------ load + engine */
  useEffect(() => {
    let alive = true
    let cleanup = () => {}
    const img = new Image()
    img.onload = () => {
      const box = boxRef.current
      if (!alive || !box) return
      const els = Array.from(box.querySelectorAll<HTMLElement>('[data-frag]'))
      const engine = new JoinerEngine(els, tiles, box.querySelector<HTMLElement>('[data-whole]'))
      engine.reduced = reduced
      engine.setVisibility(pickVisible(img, tiles))
      engineRef.current = engine
      layout()
      engine.setAssemble(assembleOf(progressRef.current))
      setState('ready')

      let running = false
      let inView = true
      const tick = (_t: number, dtMs: number) => engine.step(dtMs / 1000)
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
      cleanup = () => {
        gsap.ticker.remove(tick)
        io.disconnect()
        document.removeEventListener('visibilitychange', sync)
        engineRef.current = null
      }
    }
    img.onerror = () => alive && setState('error')
    img.src = SRC
    const ro = new ResizeObserver(() => {
      layout()
      ScrollTrigger.refresh()
    })
    if (stageRef.current) ro.observe(stageRef.current)
    return () => {
      alive = false
      ro.disconnect()
      cleanup()
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (engineRef.current) engineRef.current.reduced = reduced
  }, [reduced, state])

  /* ------------------------------------------------ pointer + retakes */
  useEffect(() => {
    const stage = stageRef.current
    const box = boxRef.current
    if (!stage || !box) return
    const local = (x: number, y: number) => {
      const r = boxRect.current
      const s = stage.getBoundingClientRect()
      return { x: x - s.left - r.x, y: y - s.top - r.y }
    }
    const move = (e: PointerEvent) => {
      if (e.pointerType === 'touch') return
      const p = local(e.clientX, e.clientY)
      engineRef.current?.pointer(p.x, p.y)
    }
    const touch = (e: TouchEvent) => {
      const t = e.touches[0]
      if (!t) return
      const p = local(t.clientX, t.clientY)
      engineRef.current?.pointer(p.x, p.y)
    }
    const leave = (e: PointerEvent) => e.pointerType !== 'touch' && engineRef.current?.leave()
    stage.addEventListener('pointermove', move)
    stage.addEventListener('pointerleave', leave)
    stage.addEventListener('touchstart', touch, { passive: true })
    stage.addEventListener('touchmove', touch, { passive: true })
    return () => {
      stage.removeEventListener('pointermove', move)
      stage.removeEventListener('pointerleave', leave)
      stage.removeEventListener('touchstart', touch)
      stage.removeEventListener('touchmove', touch)
    }
  }, [])

  const onBoxClick = (e: MouseEvent) => {
    const eng = engineRef.current
    const stage = stageRef.current
    if (!eng || !stage || progressRef.current > 0.06) return
    const r = boxRect.current
    const s = stage.getBoundingClientRect()
    const i = eng.hit(e.clientX - s.left - r.x, e.clientY - s.top - r.y)
    if (i < 0) return
    if (leftRef.current <= 0) return
    eng.retake(i)
    leftRef.current -= 1
    setLeft(leftRef.current)
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
          .from('.jn-top > *', { opacity: 0, y: -8, duration: 1, stagger: 0.08 })
          .from('.jn-head .li', { yPercent: 110, duration: 1.6, stagger: 0.1 }, 0.2)
          .from('.jn-sub__in, .jn-dock__in', { opacity: 0, y: 10, duration: 1.2, stagger: 0.1 }, 0.8)
      }

      const target = { p: 0 } // fresh per run: a StrictMode revert can't zero a shared object
      const apply = (p: number) => {
        progressRef.current = p
        engineRef.current?.setAssemble(assembleOf(p))
      }
      const cover = () => {
        const r = boxRect.current
        const w = stage.clientWidth, h = stage.clientHeight
        return {
          s: Math.max(w / r.w, h / r.h) * 1.02,
          x: w / 2 - (r.x + r.w / 2),
          y: h / 2 - (r.y + r.h / 2),
        }
      }
      const tl = gsap.timeline({ paused: true, defaults: { ease: 'none' } })
      tl.to(target, { p: 1, duration: 1, onUpdate: () => apply(target.p) }, 0)
        .to('.jn-head, .jn-sub, .jn-dock', { opacity: 0, y: -20, duration: 0.06, stagger: 0.012 }, 0.03)
        .fromTo('.jn-note', { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.05 }, 0.38)
        .to('.jn-note', { opacity: 0, y: -14, duration: 0.05 }, 0.56)
        .to('.jn-boxwrap', { x: () => cover().x, y: () => cover().y, scale: () => cover().s, duration: 0.3, ease: 'power2.inOut' }, 0.58)
        .to('.jn-top', { color: '#f4f1ea', borderColor: 'rgba(244,241,234,0.25)', duration: 0.08 }, 0.74)
        .fromTo('.jn-final', { opacity: 0, y: 30, pointerEvents: 'none' }, { opacity: 1, y: 0, pointerEvents: 'auto', duration: 0.07 }, 0.9)

      stRef.current = ScrollTrigger.create({
        trigger: track,
        start: 'top top',
        end: 'bottom bottom',
        animation: reduced ? undefined : tl,
        scrub: reduced ? false : 0.6,
        invalidateOnRefresh: true,
        onUpdate(self) {
          if (!reduced) return
          // discrete states only: joiner → joined → inside
          const p = self.progress > 0.75 ? 1 : self.progress > 0.25 ? JOINED_AT : 0
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
  }, [reduced])

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

  const ready = state === 'ready'
  const shots = String(left).padStart(2, '0')

  return (
    <main className="jn-root" data-state={state}>
      <section ref={trackRef} className="jn-track" aria-label="Joiner — one tree, photographed in pieces">
        <div ref={stageRef} className="jn-stage">
          <div ref={wrapRef} className="jn-boxwrap">
            <div
              ref={boxRef}
              className="jn-box"
              onClick={onBoxClick}
              role="img"
              aria-label="A bare tree on a hill under a blue sky, assembled from dozens of separately taken photographs"
            >
              <img data-whole className="jn-whole" src={SRC} alt="" draggable={false} />
              {tiles.map((_, i) => (
                <div key={i} data-frag className="jn-frag">
                  <img data-img src={SRC} alt="" draggable={false} />
                  <i data-flash className="jn-flash" />
                  {stamps.has(i) && <span data-stamp className="jn-stamp">{stamps.get(i)}</span>}
                </div>
              ))}
            </div>
          </div>

          <header className="jn-top">
            <span>The Arboretum</span>
            <span className="jn-top__c">Joiner <em>No. 9</em></span>
            <span className="jn-top__r">
              Exposures <b>{shots}</b>/{ROLL}
            </span>
          </header>

          <h1 className="jn-head">
            <span className="ln"><span className="li">One tree,</span></span>
            <span className="ln"><span className="li"><em>many looks.</em></span></span>
          </h1>

          <div className="jn-sub">
            <p className="jn-sub__in">
              {state === 'error'
                ? 'The photograph didn’t load. Check your connection and reload.'
                : left === 0
                  ? 'That’s the roll finished. Load a new one, or scroll to join the pieces up.'
                  : isTouch
                    ? 'Every piece is its own photograph, taken a moment apart. Drag a finger to watch them disagree; tap one to retake it.'
                    : 'Every piece is its own photograph, taken a moment apart. Move to watch them disagree; click one to retake it.'}
            </p>
          </div>

          <div className="jn-dock">
            <div className="jn-dock__in">
              {left === 0 ? (
                <button type="button" onClick={() => {
                  leftRef.current = ROLL
                  setLeft(ROLL)
                }} disabled={!ready}>Load a new roll</button>
              ) : (
                <button type="button" onClick={() => engineRef.current?.shuffle()} disabled={!ready}>Shuffle the prints</button>
              )}
              <button type="button" onClick={() => scrollToProgress(JOINED_AT)}>Join them up ↓</button>
            </div>
          </div>

          <p className="jn-note" aria-hidden="true">
            {tiles.length} prints, <em>one afternoon.</em>
          </p>

          <div className="jn-final">
            <p className="jn-final__kicker">The Arboretum · field-grown trees</p>
            <h2 className="jn-final__title">
              Planted once. <br />
              <em>Looked at for good.</em>
            </h2>
            <p className="jn-final__body">Bare-root trees, lifted from our own fields in the dormant months and sent out while they sleep.</p>
            <button
              type="button"
              className="jn-final__btn"
              onClick={() => scrollToProgress(0, () => engineRef.current?.shuffle())}
            >
              Take it apart <span aria-hidden="true">↑</span>
            </button>
          </div>

          {state === 'loading' && (
            <div className="jn-loader" role="status">
              Developing…
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
