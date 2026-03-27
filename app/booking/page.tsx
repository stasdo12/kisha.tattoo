'use client'
import type React from 'react'
import { useState } from 'react'
import { GLogoBar } from '@/components/graphic/GLogoBar'
import { GNav } from '@/components/graphic/GNav'
import { GFooter } from '@/components/graphic/GFooter'
import s from './booking.module.css'

const STEPS = [
  { num: '01', title: 'Anfrage senden', body: 'Fülle das Formular aus — beschreibe deine Idee, das gewünschte Motiv, Stil und Platzierung. Füge Referenzbilder bei, falls vorhanden.' },
  { num: '02', title: 'Konsultation', body: 'Kisha meldet sich innerhalb von 48 Stunden. Gemeinsam besprechen wir dein Projekt, die Machbarkeit und den ungefähren Zeitaufwand.' },
  { num: '03', title: 'Design & Termin', body: 'Nach der Anzahlung wird das Custom-Design erstellt. Der finale Termin wird gemeinsam festgelegt — erste Sitzung startet mit dem Stencil-Check.' },
]

export default function BookingPage() {
  const [experience, setExperience] = useState<'yes' | 'no' | null>(null)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    const raw = new FormData(e.currentTarget)
    const fd = new FormData()
    fd.append('name',  raw.get('name')  as string)
    fd.append('email', raw.get('email') as string)
    fd.append('brief', `Phone: ${raw.get('phone') || '—'}\nStyle: ${raw.get('style') || '—'}\nPlacement: ${raw.get('placement') || '—'}\nIdea: ${raw.get('idea') || '—'}\nWorked together: ${experience ?? '—'}`)
    const file = raw.get('files') as File
    if (file && file.size > 0) fd.append('file', file)
    try {
      const res = await fetch('/api/contact', { method: 'POST', body: fd })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <main id="main-content">

      {/* ── HERO / FORM ──────────────────────────────────────────────── */}
      <section aria-label="Termin buchen — KishaTattoo" className={s.hero}>
        <GLogoBar theme="light" />

        <h1 className={s.h1}>Termin buchen</h1>

        <form className={s.form} onSubmit={handleSubmit}>

          <div className={s.row}>
            <label htmlFor="b-name" className={s.label}>My name is</label>
            <div className={s.underline}>
              <input id="b-name" name="name" type="text" placeholder="[ Name ]" required className={s.input} />
              <span style={{ fontSize: 'var(--g-tag)', color: '#0D0D0D' }}>*</span>
            </div>
          </div>

          <div className={s.row}>
            <label htmlFor="b-email" className={s.label}>My email is</label>
            <div className={s.underline}>
              <input id="b-email" name="email" type="email" placeholder="[ Email ]" required className={s.input} />
              <span style={{ fontSize: 'var(--g-tag)', color: '#0D0D0D' }}>*</span>
            </div>
          </div>

          <div className={s.row}>
            <label htmlFor="b-phone" className={s.label}>My phone number is</label>
            <div className={s.underline}>
              <input id="b-phone" name="phone" type="tel" placeholder="[ Number ]" required className={s.input} />
              <span style={{ fontSize: 'var(--g-tag)', color: '#0D0D0D' }}>*</span>
            </div>
          </div>

          <div className={s.row}>
            <label htmlFor="b-style" className={s.label}>Tattoo style</label>
            <div className={s.underline}>
              <input id="b-style" name="style" type="text" placeholder="[ Japanese · Graphic · Linework ]" className={s.input} />
            </div>
          </div>

          <div className={s.row}>
            <label htmlFor="b-placement" className={s.label}>Placement / body part</label>
            <div className={s.underline}>
              <input id="b-placement" name="placement" type="text" placeholder="[ Back · Sleeve · Ribs · etc. ]" className={s.input} />
            </div>
          </div>

          <div className={s.row}>
            <label htmlFor="b-idea" className={s.label}>My tattoo idea is</label>
            <div className={s.underline}>
              <input id="b-idea" name="idea" type="text" placeholder="[ Describe your vision ]" className={s.input} />
            </div>
          </div>

          <div className={s.stacked}>
            <span className={s.label}>Did we work together before?</span>
            <div className={s.toggles}>
              {(['yes', 'no'] as const).map((val) => (
                <button
                  key={val}
                  type="button"
                  aria-pressed={experience === val}
                  onClick={() => setExperience(val)}
                  className={s.toggle}
                >
                  {val === 'yes' ? 'Yes, I liked it' : "No, I'm new"}
                </button>
              ))}
            </div>
          </div>

          <div className={s.stacked}>
            <span className={s.label}>Reference images</span>
            <div className={s.fileHint}>
              <p style={{ fontSize: 'var(--g-tag)', lineHeight: 1.4, color: '#0D0D0D', maxWidth: '26rem' }}>
                *Send reference images and inspiration — the more context, the better the custom design
              </p>
              <span style={{ fontSize: 'var(--g-tag)', color: '#BFBFBF', whiteSpace: 'nowrap' }}>[ max 100 mb ]</span>
            </div>
            <label htmlFor="b-files" className={s.fileBtn}>Choose files</label>
            <input id="b-files" name="files" type="file" multiple style={{ display: 'none' }} />
          </div>

          {status === 'error' && <p className={s.error}>Something went wrong. Please try again.</p>}

          {status === 'success' ? (
            <p className={s.success}>
              Thank you — your vision has been received. Kisha will review it and get back to you within 48 hours.
            </p>
          ) : (
            <button type="submit" disabled={status === 'submitting'} className={s.submit}>
              {status === 'submitting' ? 'Sending…' : 'Send booking request'}
            </button>
          )}

        </form>

        <GNav activePath="/contact" theme="light" />
      </section>

      {/* ── STEPS ────────────────────────────────────────────────────── */}
      <section aria-labelledby="booking-steps-heading" className={s.steps}>
        <div className="g-container">
          <div className={s.stepsHeadingWrap}>
            <h2 id="booking-steps-heading" className={s.stepsHeading}>
              Wie funktioniert die Buchung?
            </h2>
          </div>

          <div className={s.stepsCols}>
            {STEPS.map((step, i) => (
              <div
                key={step.num}
                className={s.stepCol}
                style={{
                  padding: i === 0 ? '0 clamp(1rem, 2vw, 2rem) 0 0' : i === 1 ? '0 clamp(1rem, 2vw, 2rem)' : '0 0 0 clamp(1rem, 2vw, 2rem)',
                  borderLeft: i > 0 ? '1px solid #0D0D0D' : 'none',
                }}
              >
                <span style={{ fontSize: 'var(--g-tag)', color: 'rgba(13,13,13,0.4)' }}>{step.num}</span>
                <h3 style={{ fontSize: 'var(--g-s)', lineHeight: 'var(--g-lh-s)', color: '#0D0D0D' }}>{step.title}</h3>
                <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D' }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GFooter />
    </main>
  )
}
