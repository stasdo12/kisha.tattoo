/**
 * BOOKING — Termin buchen
 * Same form as /contact + booking process steps
 * Design: Graphic design system — matches /contact
 */
'use client'
import type React from 'react'
import { useState } from 'react'
import { GLogoBar } from '@/components/graphic/GLogoBar'
import { GNav } from '@/components/graphic/GNav'
import { GFooter } from '@/components/graphic/GFooter'

const LABEL: React.CSSProperties = {
  fontSize: 'var(--g-s)',
  lineHeight: 'var(--g-lh-s)',
  color: '#0D0D0D',
  whiteSpace: 'nowrap',
  flexShrink: 0,
}

const UNDERLINE_ROW: React.CSSProperties = {
  flex: 1,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  borderBottom: '1px solid #0D0D0D',
  paddingBottom: '4px',
}

const INPUT: React.CSSProperties = {
  background: 'transparent',
  border: 'none',
  outline: 'none',
  fontFamily: 'var(--g-font)',
  fontSize: 'var(--g-bs)',
  fontWeight: 500,
  color: '#0D0D0D',
  width: '100%',
  letterSpacing: 'var(--g-ls)',
}

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

      {/* ── HERO / FORM ───────────────────────────────────────────────────── */}
      <section
        aria-label="Termin buchen — KishaTattoo"
        className="g-contact-hero"
        style={{
          position: 'relative',
          background: '#F2F2F2',
          minHeight: 'clamp(800px, 58vw, 900px)',
          paddingBottom: '3rem',
          overflow: 'hidden',
        }}
      >
        <GLogoBar theme="light" />

        <h1
          className="g-contact-h1"
          style={{
            position: 'absolute',
            top: '72px',
            left: 'var(--g-pad)',
            fontSize: 'var(--g-xl)',
            lineHeight: 'var(--g-lh-xl)',
            color: '#0D0D0D',
          }}
        >
          Termin buchen
        </h1>

        <form
          className="g-contact-form"
          style={{
            position: 'absolute',
            top: 'clamp(224px, calc(144px + 5.56vw), 244px)',
            left: 'var(--g-pad)',
            width: 'clamp(520px, 47.5vw, 912px)',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
          onSubmit={handleSubmit}
        >

          {/* Name */}
          <div className="g-contact-row" style={{ display: 'flex', alignItems: 'flex-end', gap: '1rem' }}>
            <label htmlFor="b-name" style={LABEL}>My name is</label>
            <div style={UNDERLINE_ROW}>
              <input id="b-name" name="name" type="text" placeholder="[ Name ]" required style={INPUT} />
              <span style={{ fontSize: 'var(--g-tag)', color: '#0D0D0D' }}>*</span>
            </div>
          </div>

          {/* Email */}
          <div className="g-contact-row" style={{ display: 'flex', alignItems: 'flex-end', gap: '1rem' }}>
            <label htmlFor="b-email" style={LABEL}>My email is</label>
            <div style={UNDERLINE_ROW}>
              <input id="b-email" name="email" type="email" placeholder="[ Email ]" required style={INPUT} />
              <span style={{ fontSize: 'var(--g-tag)', color: '#0D0D0D' }}>*</span>
            </div>
          </div>

          {/* Phone */}
          <div className="g-contact-row" style={{ display: 'flex', alignItems: 'flex-end', gap: '1rem' }}>
            <label htmlFor="b-phone" style={LABEL}>My phone number is</label>
            <div style={UNDERLINE_ROW}>
              <input id="b-phone" name="phone" type="tel" placeholder="[ Number ]" required style={INPUT} />
              <span style={{ fontSize: 'var(--g-tag)', color: '#0D0D0D' }}>*</span>
            </div>
          </div>

          {/* Style */}
          <div className="g-contact-row" style={{ display: 'flex', alignItems: 'flex-end', gap: '1rem' }}>
            <label htmlFor="b-style" style={LABEL}>Tattoo style</label>
            <div style={UNDERLINE_ROW}>
              <input id="b-style" name="style" type="text" placeholder="[ Japanese · Graphic · Linework ]" style={INPUT} />
            </div>
          </div>

          {/* Placement */}
          <div className="g-contact-row" style={{ display: 'flex', alignItems: 'flex-end', gap: '1rem' }}>
            <label htmlFor="b-placement" style={LABEL}>Placement / body part</label>
            <div style={UNDERLINE_ROW}>
              <input id="b-placement" name="placement" type="text" placeholder="[ Back · Sleeve · Ribs · etc. ]" style={INPUT} />
            </div>
          </div>

          {/* Idea */}
          <div className="g-contact-row" style={{ display: 'flex', alignItems: 'flex-end', gap: '1rem' }}>
            <label htmlFor="b-idea" style={LABEL}>My tattoo idea is</label>
            <div style={UNDERLINE_ROW}>
              <input id="b-idea" name="idea" type="text" placeholder="[ Describe your vision ]" style={INPUT} />
            </div>
          </div>

          {/* Experience toggle */}
          <div className="g-contact-stacked" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <span style={LABEL}>Did we work together before?</span>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              {(['yes', 'no'] as const).map((val) => (
                <button
                  key={val}
                  type="button"
                  aria-pressed={experience === val}
                  onClick={() => setExperience(val)}
                  className="g-contact-toggle"
                  style={{
                    padding: '8px 24px',
                    border: '1px solid #0D0D0D',
                    background: experience === val ? '#0D0D0D' : 'transparent',
                    color: experience === val ? '#F2F2F2' : '#0D0D0D',
                    fontFamily: 'var(--g-font)',
                    fontSize: 'var(--g-tag)',
                    fontWeight: 500,
                    letterSpacing: 'var(--g-ls)',
                    cursor: 'pointer',
                    minWidth: '175px',
                  }}
                >
                  {val === 'yes' ? 'Yes, I liked it' : "No, I'm new"}
                </button>
              ))}
            </div>
          </div>

          {/* Reference upload */}
          <div className="g-contact-stacked" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <span style={LABEL}>Reference images</span>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
              <p style={{ fontSize: 'var(--g-tag)', lineHeight: 1.4, color: '#0D0D0D', maxWidth: '26rem' }}>
                *Send reference images and inspiration — the more context, the better the custom design
              </p>
              <span style={{ fontSize: 'var(--g-tag)', color: '#BFBFBF', whiteSpace: 'nowrap' }}>[ max 100 mb ]</span>
            </div>
            <label
              htmlFor="b-files"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '32px',
                border: '1px solid #0D0D0D',
                fontSize: 'var(--g-tag)',
                fontWeight: 500,
                color: '#0D0D0D',
                cursor: 'pointer',
                letterSpacing: 'var(--g-ls)',
              }}
            >
              Choose files
            </label>
            <input id="b-files" name="files" type="file" multiple style={{ display: 'none' }} />
          </div>

          {status === 'error' && (
            <p style={{ fontSize: 'var(--g-tag)', color: 'red' }}>Something went wrong. Please try again.</p>
          )}

          {status === 'success' ? (
            <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D', marginTop: '8px' }}>
              Thank you — your vision has been received. Kisha will review it and get back to you within 48 hours.
            </p>
          ) : (
            <button
              type="submit"
              disabled={status === 'submitting'}
              style={{
                width: '100%',
                padding: '16px',
                background: '#0D0D0D',
                color: '#F2F2F2',
                border: 'none',
                fontFamily: 'var(--g-font)',
                fontSize: 'var(--g-s)',
                lineHeight: 'var(--g-lh-s)',
                fontWeight: 500,
                letterSpacing: 'var(--g-ls)',
                cursor: status === 'submitting' ? 'wait' : 'pointer',
                marginTop: '8px',
                opacity: status === 'submitting' ? 0.6 : 1,
              }}
            >
              {status === 'submitting' ? 'Sending…' : 'Send booking request'}
            </button>
          )}

        </form>

        <GNav activePath="/contact" theme="light" />
      </section>

      {/* ── BOOKING PROCESS ───────────────────────────────────────────────── */}
      <section
        aria-labelledby="booking-steps-heading"
        style={{ background: '#F2F2F2', padding: 'clamp(2rem, 4.2vw, 5rem) 0' }}
      >
        <div className="g-container">

          <div
            style={{
              paddingBottom: '1.25rem',
              borderBottom: '2px solid #0D0D0D',
              display: 'flex',
              justifyContent: 'center',
              marginBottom: 'clamp(1.5rem, 2.5vw, 3rem)',
            }}
          >
            <h2
              id="booking-steps-heading"
              style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D', textAlign: 'center' }}
            >
              Wie funktioniert die Buchung?
            </h2>
          </div>

          <div className="g-about-steps" style={{ display: 'flex' }}>
            {STEPS.map((step, i) => (
              <div
                key={step.num}
                className="g-about-step-col"
                style={{
                  flex: '1 1 0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
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
