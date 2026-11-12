import { useCallback, useEffect, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { createOrb } from './Orb'
import type { Orb, OrbState, Palette } from './Orb'

/* Murmur — a voice-first assistant hero. Tap the mic (or hold Space) and the
   orb listens: with microphone access it reacts to your real voice and, where
   the browser supports it, transcribes you live. Without it, a sample request
   is "heard" instead. Murmur then thinks, and answers word by word — out loud
   too if you turn the sound on. */

const VOICES: Record<string, { label: string; palette: Palette; dot: string }> = {
  ember: { label: 'Ember', palette: ['#ff3d7f', '#8a5cff', '#ffd9b0'], dot: 'linear-gradient(135deg,#ff3d7f,#8a5cff)' },
  tide: { label: 'Tide', palette: ['#2b5cff', '#36e0ff', '#dff8ff'], dot: 'linear-gradient(135deg,#2b5cff,#36e0ff)' },
  moss: { label: 'Moss', palette: ['#1aa36b', '#d8f05a', '#f2ffe0'], dot: 'linear-gradient(135deg,#1aa36b,#d8f05a)' },
}
type Voice = keyof typeof VOICES

const SAMPLES = ['Book a table for two at sunset', 'Is the ridge trail open today?', 'What time does the piano start?']
const REPLIES: [RegExp, string][] = [
  [/table|dinner|book|restaurant|eat/i, 'Done: a table for two on the terrace at 7:40, ten minutes before sunset. I’ve asked for the corner one, away from the heaters.'],
  [/trail|hike|ridge|walk/i, 'The ridge trail is open and dry this morning. Go before eleven; the boardwalk loop is the shady way back.'],
  [/piano|music|bar|lobby/i, 'The piano starts at eight in the lobby bar. Requests are welcome after nine.'],
  [/spa|bath|massage|pool/i, 'There’s an opening at four for a sixty-minute massage. Want me to hold it and send towels up after?'],
  [/hello|hi|hey/i, 'Good evening. I’m the house concierge. Ask me for a table, a trail, a late check-out, anything at all.'],
]
const reply = (q: string) => REPLIES.find(([r]) => r.test(q))?.[1] ?? 'Leave it with me. I’ll check with the front desk and send the details to your room in a few minutes.'

type Phase = OrbState
type Rec = { lang: string; interimResults: boolean; continuous: boolean; start(): void; stop(): void; abort(): void; onresult: ((e: { results: ArrayLike<ArrayLike<{ transcript: string }> & { isFinal: boolean }> }) => void) | null; onend: (() => void) | null; onerror: (() => void) | null }

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

export default function App() {
  const reduced = useReduced()
  const canvas = useRef<HTMLCanvasElement>(null)
  const orb = useRef<Orb | null>(null)
  const [noGL, setNoGL] = useState(false)
  const [phase, setPhaseState] = useState<Phase>('idle')
  const phaseRef = useRef<Phase>('idle')
  const [voice, setVoice] = useState<Voice>('ember')
  const [sound, setSound] = useState(false)
  const [heard, setHeard] = useState('')
  const [said, setSaid] = useState('')
  const [typed, setTyped] = useState('')
  const [live, setLive] = useState(false)
  const [level, setLevel] = useState(0)
  const heardRef = useRef('')
  const timers = useRef<number[]>([])
  const audio = useRef<{ stream?: MediaStream; ctx?: AudioContext; raf?: number; rec?: Rec; sim?: number }>({})
  const sample = useRef(0)

  const setPhase = (p: Phase) => {
    phaseRef.current = p
    setPhaseState(p)
    orb.current?.setState(p)
  }
  const later = (fn: () => void, ms: number) => timers.current.push(window.setTimeout(fn, reduced ? Math.min(ms, 30) : ms))
  const clearTimers = () => {
    timers.current.forEach(clearTimeout)
    timers.current = []
  }

  useEffect(() => {
    const o = createOrb(canvas.current!)
    if (!o) setNoGL(true)
    orb.current = o
    return () => o?.dispose()
  }, [])
  useEffect(() => orb.current?.setPalette(VOICES[voice].palette), [voice, noGL])
  useEffect(() => orb.current?.setReduced(reduced), [reduced, noGL])

  const stopAudio = () => {
    const a = audio.current
    if (a.raf) cancelAnimationFrame(a.raf)
    if (a.sim) clearInterval(a.sim)
    a.stream?.getTracks().forEach((t) => t.stop())
    a.ctx?.close().catch(() => {})
    try { a.rec?.abort() } catch { /* already stopped */ }
    audio.current = {}
    setLive(false)
    if (orb.current) orb.current.level = 0
    setLevel(0)
  }

  const speak = useCallback((q: string) => {
    clearTimers()
    stopAudio()
    setPhase('thinking')
    setSaid('')
    const text = reply(q)
    later(() => {
      setPhase('speaking')
      if (sound && 'speechSynthesis' in window) {
        const u = new SpeechSynthesisUtterance(text)
        u.rate = 1.02
        u.pitch = voice === 'tide' ? 0.9 : voice === 'moss' ? 1.05 : 1.15
        window.speechSynthesis.cancel()
        window.speechSynthesis.speak(u)
      }
      const words = text.split(' ')
      words.forEach((_, i) =>
        later(() => {
          setSaid(words.slice(0, i + 1).join(' '))
          orb.current?.pulse(0.6 + Math.random() * 0.5)
        }, i * 190),
      )
      later(() => setPhase('idle'), words.length * 190 + 900)
    }, 1200)
  }, [sound, voice, reduced]) // the helpers it calls only touch refs

  /** no microphone or no recognition: "hear" a sample, word by word */
  const simulate = (withLevels: boolean) => {
    const text = SAMPLES[sample.current++ % SAMPLES.length]
    const words = text.split(' ')
    if (withLevels) {
      const t0 = performance.now()
      audio.current.sim = window.setInterval(() => {
        const t = (performance.now() - t0) / 1000
        const v = Math.max(0, Math.sin(t * 11) * 0.4 + Math.sin(t * 4.3) * 0.35 + 0.25)
        if (orb.current) orb.current.level = v
        setLevel(v)
      }, 50)
    }
    words.forEach((_, i) => later(() => {
      heardRef.current = words.slice(0, i + 1).join(' ')
      setHeard(heardRef.current)
    }, 350 + i * 230))
    later(() => speak(text), 350 + words.length * 230 + 500)
  }

  const listen = async () => {
    if (phaseRef.current === 'listening') return
    clearTimers()
    window.speechSynthesis?.cancel()
    setHeard('')
    setSaid('')
    heardRef.current = ''
    setPhase('listening')
    let stream: MediaStream | null = null
    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: true })
    } catch {
      stream = null
    }
    // the user may have stopped while the permission prompt was open
    if ((phaseRef.current as Phase) !== 'listening') {
      stream?.getTracks().forEach((t) => t.stop())
      return
    }
    if (!stream) {
      simulate(true)
      return
    }
    // real microphone: drive the orb from its loudness
    const ctx = new AudioContext()
    const an = ctx.createAnalyser()
    an.fftSize = 512
    ctx.createMediaStreamSource(stream).connect(an)
    const buf = new Uint8Array(an.fftSize)
    const loop = () => {
      an.getByteTimeDomainData(buf)
      let sum = 0
      for (const b of buf) sum += ((b - 128) / 128) ** 2
      const v = Math.min(1, Math.sqrt(sum / buf.length) * 5)
      if (orb.current) orb.current.level = v
      setLevel(v)
      audio.current.raf = requestAnimationFrame(loop)
    }
    audio.current = { stream, ctx, raf: requestAnimationFrame(loop) }
    setLive(true)
    const W = window as unknown as { SpeechRecognition?: new () => Rec; webkitSpeechRecognition?: new () => Rec }
    const Ctor = W.SpeechRecognition ?? W.webkitSpeechRecognition
    if (!Ctor) {
      simulate(false)
      return
    }
    const rec = new Ctor()
    rec.lang = navigator.language || 'en-US'
    rec.interimResults = true
    rec.continuous = false
    rec.onresult = (e) => {
      heardRef.current = Array.from(e.results).map((r) => r[0].transcript).join(' ')
      setHeard(heardRef.current)
    }
    rec.onend = () => {
      if (phaseRef.current === 'listening') {
        if (heardRef.current) speak(heardRef.current)
        else simulate(false)
      }
    }
    rec.onerror = () => {}
    audio.current.rec = rec
    try { rec.start() } catch { simulate(false) }
  }

  const finish = () => {
    if (phaseRef.current !== 'listening') return
    const rec = audio.current.rec
    if (rec && heardRef.current) {
      rec.stop()
      return
    }
    if (heardRef.current && !rec) {
      // a simulated sample is mid-sentence: let it end on its own
      return
    }
    if (rec) rec.stop()
  }

  const cancel = () => {
    clearTimers()
    stopAudio()
    window.speechSynthesis?.cancel()
    setPhase('idle')
  }

  const toggle = () => {
    if (phaseRef.current === 'listening') finish()
    else if (phaseRef.current === 'speaking' || phaseRef.current === 'thinking') cancel()
    else listen()
  }

  // hold Space to talk
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.code !== 'Space' || e.repeat || (e.target as Element).closest('input, textarea, button')) return
      e.preventDefault()
      listen()
    }
    const up = (e: KeyboardEvent) => {
      if (e.code !== 'Space' || (e.target as Element).closest('input, textarea, button')) return
      finish()
    }
    window.addEventListener('keydown', down)
    window.addEventListener('keyup', up)
    return () => {
      window.removeEventListener('keydown', down)
      window.removeEventListener('keyup', up)
    }
  })

  useEffect(() => () => { clearTimers(); stopAudio() }, [])

  const ask = (q: string) => {
    if (!q.trim()) return
    clearTimers()
    stopAudio()
    heardRef.current = q.trim()
    setHeard(q.trim())
    setTyped('')
    speak(q.trim())
  }
  const submit = (e: FormEvent) => {
    e.preventDefault()
    ask(typed)
  }

  const status = { idle: 'Tap to talk', listening: live ? 'Listening' : 'Listening (demo)', thinking: 'Thinking', speaking: 'Speaking' }[phase]

  return (
    <main className={`mm is-${phase} v-${voice}`} style={{ ['--lvl' as string]: level.toFixed(3) }}>
      <div className="mm-stars" aria-hidden="true" />
      <div className="mm-halo" aria-hidden="true" />

      <header className="mm-nav">
        <a className="mm-logo" href="/">
          <span aria-hidden="true">{[0, 1, 2, 3, 4].map((i) => <i key={i} style={{ animationDelay: `${i * 0.12}s` }} />)}</span>
          concierge
        </a>
        <nav aria-label="Main">
          <a href="#">Your stay</a>
          <a href="#">Dining</a>
          <a href="#">Spa</a>
        </nav>
        <a className="mm-dl" href="#"><span>Book a stay</span></a>
      </header>

      <section className="mm-hero">
        <h1>Just ask.</h1>
        <p>A voice concierge that knows the house, the trails and the kitchen. Ask for anything during your stay.</p>
      </section>

      <div className="mm-stage">
        <canvas ref={canvas} className="mm-orb" role="img" aria-label={`Voice orb, ${status}`} onClick={toggle} />
        {noGL && <div className="mm-orb-css" aria-hidden="true" />}
        <p className="mm-status" aria-live="polite"><i />{status}</p>
      </div>

      <div className="mm-words" aria-live="polite">
        <p className="mm-heard">{heard ? `“${heard}”` : <span>Try “{SAMPLES[sample.current % SAMPLES.length]}”</span>}</p>
        <p className="mm-said">{said}</p>
      </div>

      <div className="mm-controls">
        <button type="button" className={`mm-sound ${sound ? 'is-on' : ''}`} aria-pressed={sound} onClick={() => setSound((s) => !s)} aria-label="Speak replies out loud">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9Z" />{sound ? <path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" /> : <path d="m16 9 5 6m0-6-5 6" />}</svg>
        </button>
        <button type="button" className="mm-mic" onClick={toggle} aria-label={phase === 'listening' ? 'Stop listening' : phase === 'idle' ? 'Start talking' : 'Stop'}>
          <span className="mm-ring" aria-hidden="true" />
          {phase === 'listening' ? (
            <span className="mm-bars" aria-hidden="true">{[0, 1, 2, 3].map((i) => <i key={i} />)}</span>
          ) : phase === 'idle' ? (
            <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21" /></svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2.5" /></svg>
          )}
        </button>
        <form className="mm-type" onSubmit={submit}>
          <input value={typed} onChange={(e) => setTyped(e.target.value)} placeholder="or type…" aria-label="Type instead" />
        </form>
      </div>
      <p className="mm-hint"><kbd>Space</kbd> hold to talk</p>

      <div className="mm-voices" role="radiogroup" aria-label="Voice">
        {(Object.keys(VOICES) as Voice[]).map((v) => (
          <button key={v} type="button" role="radio" aria-checked={voice === v} onClick={() => setVoice(v)}>
            <i style={{ background: VOICES[v].dot }} />
            {VOICES[v].label}
          </button>
        ))}
      </div>
    </main>
  )
}
