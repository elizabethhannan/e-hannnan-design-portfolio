import { useEffect, useLayoutEffect, useRef, useState, type FormEvent } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import { WordFlower } from './WordFlower'

gsap.registerPlugin(ScrollTrigger)

const FONT = '"Instrument Serif", "Times New Roman", serif'
const MORPH_WORD = 'return'
const STORE_KEY = 'rootsong:memories'

const smooth = (a: number, b: number, v: number) => {
  const t = Math.max(0, Math.min(1, (v - a) / (b - a)))
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

function readStored(): string[] {
  try {
    const raw = localStorage.getItem(STORE_KEY)
    const list = raw ? JSON.parse(raw) : []
    return Array.isArray(list) ? list.filter((s) => typeof s === 'string').slice(-24) : []
  } catch {
    return []
  }
}
function writeStored(list: string[]) {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(list.slice(-24)))
  } catch {
    /* storage unavailable (private mode / sandbox) – memories stay for this visit only */
  }
}

/** Tiny generated noise tile for the film-grain overlay (no image asset needed). */
function makeGrain(): string {
  try {
    const c = document.createElement('canvas')
    c.width = c.height = 160
    const g = c.getContext('2d')!
    const img = g.createImageData(160, 160)
    for (let i = 0; i < img.data.length; i += 4) {
      const v = Math.random() > 0.5 ? 255 : 0 // light + dark specks, normal blending (no mix-blend-mode)
      img.data[i] = img.data[i + 1] = img.data[i + 2] = v
      img.data[i + 3] = Math.random() * 22
    }
    g.putImageData(img, 0, 0)
    return `url(${c.toDataURL('image/png')})`
  } catch {
    return 'none'
  }
}

export default function RootsongHero() {
  const trackRef = useRef<HTMLElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const flowerRef = useRef<WordFlower | null>(null)
  const lenisRef = useRef<Lenis | null>(null)
  const reduced = usePrefersReducedMotion()

  const [status, setStatus] = useState<'loading' | 'ready' | 'failed'>('loading')
  const [count, setCount] = useState(0)
  const [draft, setDraft] = useState('')
  const [planted, setPlanted] = useState<string | null>(null)
  const [grain] = useState(makeGrain)

  /* ------------------------------------------------------------ engine */
  useEffect(() => {
    const canvas = canvasRef.current
    const stage = stageRef.current
    if (!canvas || !stage) return
    let disposed = false
    let flower: WordFlower
    try {
      flower = new WordFlower(canvas, { word: MORPH_WORD, font: FONT })
    } catch {
      setStatus('failed')
      return
    }
    flowerRef.current = flower

    const fontsReady = Promise.race([
      Promise.all([
        document.fonts.load(`16px ${FONT}`),
        document.fonts.load(`italic 100px ${FONT}`),
      ]),
      new Promise((r) => setTimeout(r, 2500)), // never block on fonts
    ])

    let ro: ResizeObserver | null = null
    let io: IntersectionObserver | null = null
    let inView = true
    const onVis = () => (document.hidden || !inView ? flower.pause() : flower.play())

    fontsReady.then(() => {
      if (disposed) return
      flower.resize(stage.clientWidth, stage.clientHeight)
      readStored().forEach((m) => flower.plant(m, { x: stage.clientWidth * 0.5, y: stage.clientHeight * 1.1 }))
      setCount(flower.count)
      setStatus('ready')
      ro = new ResizeObserver(() => flower.resize(stage.clientWidth, stage.clientHeight))
      ro.observe(stage)
      io = new IntersectionObserver(([e]) => {
        inView = e.isIntersecting
        onVis()
      })
      if (trackRef.current) io.observe(trackRef.current)
      document.addEventListener('visibilitychange', onVis)
      flower.play()
    })

    return () => {
      disposed = true
      ro?.disconnect()
      io?.disconnect()
      document.removeEventListener('visibilitychange', onVis)
      flower.dispose()
      flowerRef.current = null
    }
  }, [])

  useEffect(() => {
    flowerRef.current?.setStatic(reduced)
  }, [reduced, status])

  /* ----------------------------------------------------------- pointer */
  useEffect(() => {
    const stage = stageRef.current
    if (!stage || status !== 'ready') return
    const local = (e: PointerEvent) => {
      const r = stage.getBoundingClientRect()
      return { x: e.clientX - r.left, y: e.clientY - r.top }
    }
    const isUi = (e: PointerEvent) => !!(e.target as HTMLElement).closest('input, button, form')
    const move = (e: PointerEvent) => {
      if (isUi(e)) return flowerRef.current?.setPointer(0, 0, false)
      const p = local(e)
      flowerRef.current?.setPointer(p.x, p.y, e.pointerType === 'mouse' || e.buttons > 0)
    }
    const down = (e: PointerEvent) => {
      if (isUi(e)) return
      const p = local(e)
      flowerRef.current?.burst(p.x, p.y)
      flowerRef.current?.setPointer(p.x, p.y, true)
    }
    const up = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') flowerRef.current?.setPointer(0, 0, false)
    }
    const leave = () => flowerRef.current?.setPointer(0, 0, false)
    stage.addEventListener('pointermove', move)
    stage.addEventListener('pointerdown', down)
    stage.addEventListener('pointerup', up)
    stage.addEventListener('pointercancel', leave)
    stage.addEventListener('pointerleave', leave)
    return () => {
      stage.removeEventListener('pointermove', move)
      stage.removeEventListener('pointerdown', down)
      stage.removeEventListener('pointerup', up)
      stage.removeEventListener('pointercancel', leave)
      stage.removeEventListener('pointerleave', leave)
    }
  }, [status])

  /* ------------------------------------------------------ smooth scroll */
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

  /* ------------------------------------------------- intro + scroll story */
  useLayoutEffect(() => {
    const track = trackRef.current
    if (!track) return
    const ctx = gsap.context(() => {
      if (!reduced) {
        gsap.timeline({ defaults: { ease: 'expo.out' }, delay: 0.2 })
          .from('.rs-corner', { opacity: 0, scale: 0.6, duration: 1.6, stagger: 0.12 })
          .from('.rs-head .li', { yPercent: 110, duration: 1.6, stagger: 0.1 }, 0.3)
          .from('.rs-kicker, .rs-count__n, .rs-form, .rs-hint__in', { opacity: 0, y: 10, duration: 1.2, stagger: 0.08 }, 0.8)
      }

      const story = { p: 0 }
      const apply = (p: number) => {
        flowerRef.current?.setState({
          bloom: 0.5 + 0.5 * smooth(0.02, 0.42, p),
          scatter: smooth(0.4, 0.6, p),
          morph: smooth(0.56, 0.92, p),
        })
      }
      const tl = gsap.timeline({ paused: true, defaults: { ease: 'none' } })
      tl.to(story, { p: 1, duration: 1, onUpdate: () => apply(story.p) }, 0)
        .to('.rs-hint', { opacity: 0, duration: 0.05 }, 0)
        .to('.rs-head', { opacity: 0, y: -30, duration: 0.12 }, 0.38)
        .to('.rs-count', { opacity: 0, duration: 0.08 }, 0.5)
        .fromTo('.rs-outro', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.08 }, 0.88)

      ScrollTrigger.create({
        trigger: track,
        start: 'top top',
        end: 'bottom bottom',
        animation: reduced ? undefined : tl,
        scrub: reduced ? false : 0.8,
        onUpdate(self) {
          if (reduced) {
            // discrete states only: flower or word, no in-between motion
            const p = self.progress > 0.55 ? 1 : self.progress > 0.25 ? 0.42 : 0
            tl.progress(p)
          }
        },
      })
      apply(0)
    }, stageRef)
    return () => ctx.revert()
  }, [reduced])

  /* ---------------------------------------------------------- planting */
  const onPlant = (e: FormEvent) => {
    e.preventDefault()
    const text = draft.trim()
    const flower = flowerRef.current
    const stage = stageRef.current
    if (!text || !flower || !stage) return
    const ir = inputRef.current?.getBoundingClientRect()
    const sr = stage.getBoundingClientRect()
    flower.plant(text, ir ? { x: ir.left - sr.left + 40, y: ir.top - sr.top } : { x: sr.width / 2, y: sr.height })
    writeStored([...readStored(), text.slice(0, 40)])
    setCount(flower.count)
    setPlanted(text.slice(0, 40))
    setDraft('')
  }

  useEffect(() => {
    if (!planted) return
    const t = setTimeout(() => setPlanted(null), 3200)
    return () => clearTimeout(t)
  }, [planted])

  return (
    <main className="rs-root" data-status={status} style={{ ['--rs-grain' as string]: grain }}>
      <section ref={trackRef} className="rs-track" aria-label="Guestbook — a flower grown from guests’ memories of The Arboretum">
        <div ref={stageRef} className="rs-stage">
          <div className="rs-bg" aria-hidden="true">
            <span className="rs-blob rs-blob--a" />
            <span className="rs-blob rs-blob--b" />
            <span className="rs-blob rs-blob--c" />
            <span className="rs-blob rs-blob--d" />
          </div>

          <canvas ref={canvasRef} className="rs-canvas" aria-hidden="true" />
          <div className="rs-grain" aria-hidden="true" />

          <span className="rs-corner rs-corner--tl" aria-hidden="true">S</span>
          <span className="rs-corner rs-corner--tr" aria-hidden="true">T</span>
          <span className="rs-corner rs-corner--bl" aria-hidden="true">A</span>
          <span className="rs-corner rs-corner--br" aria-hidden="true">Y</span>

          <p className="rs-kicker">
            <span>The Arboretum</span>
            <span className="rs-kicker__sep" />
            <span>The guestbook — Vol. 01</span>
          </p>

          <h1 className="rs-head">
            <span className="ln"><span className="li">Grown from</span></span>
            <span className="ln"><span className="li">the stays</span></span>
            <span className="ln"><span className="li"><em>we keep.</em></span></span>
          </h1>

          <p className="rs-count" aria-live="polite">
            <span className="rs-count__n">{String(count).padStart(4, '0')}</span>
            <span>memories in bloom</span>
          </p>

          <div className="rs-outro" aria-hidden="false">
            <p>Every word here is a small memory a guest left behind.</p>
            <p className="rs-outro__sub">Scroll back up to watch them bloom again.</p>
          </div>

          <div className="rs-hint" aria-hidden="true">
            <span className="rs-hint__in">Scroll to bloom</span>
          </div>

          {status !== 'failed' && (
            <form className="rs-form" onSubmit={onPlant}>
              <label htmlFor="rs-memory" className="rs-form__label">
                {planted ? <>Planted: <em>“{planted}”</em></> : 'Leave a memory'}
              </label>
              <div className="rs-form__row">
                <input
                  id="rs-memory"
                  ref={inputRef}
                  value={draft}
                  maxLength={40}
                  autoComplete="off"
                  placeholder="e.g. fog on the lake"
                  onChange={(e) => setDraft(e.target.value)}
                  disabled={status !== 'ready'}
                />
                <button type="submit" disabled={!draft.trim() || status !== 'ready'} aria-label="Leave memory">
                  Plant <span aria-hidden="true">↵</span>
                </button>
              </div>
            </form>
          )}

          {status === 'failed' && (
            <p className="rs-error">This browser can’t draw the word flower. The story still reads top to bottom.</p>
          )}
        </div>
      </section>
    </main>
  )
}
