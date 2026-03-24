'use client'
/**
 * GRAPHIC CONTACT — Kisha Irezumi
 * Design: Figma spec 1920 / 1440 / 390px
 *
 * Hero: light grey bg (#F2F2F2), form left (912px), vertical nav right
 * Form: inline label + underline input rows, toggle buttons, file upload
 * Footer: reused dark footer
 */
import type React from 'react'
import { useState } from 'react'
import { GLogoBar } from '@/components/graphic/GLogoBar'
import { GNav } from '@/components/graphic/GNav'
import { GFooter } from '@/components/graphic/GFooter'

/* ── Shared style tokens ──────────────────────────────────────────────────── */
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

export default function GraphicContactPage() {
  const [experience, setExperience] = useState<'yes' | 'no' | null>(null)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    const raw = new FormData(e.currentTarget)
    const fd = new FormData()
    fd.append('name',  raw.get('name')  as string)
    fd.append('email', raw.get('email') as string)
    fd.append('brief', `Phone: ${raw.get('phone') || '—'}\nIdea: ${raw.get('idea') || '—'}\nWorked together: ${experience ?? '—'}`)
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

      {/* ── HERO / FORM SECTION ───────────────────────────────────────────── */}
      <section
        aria-label="Book an experience"
        className="g-contact-hero"
        style={{
          position: 'relative',
          background: '#F2F2F2',
          minHeight: 'clamp(754px, 53.75vw, 774px)',
          paddingBottom: '3rem',
          overflow: 'hidden',
        }}
      >

        {/* ── Logo bar ── */}
        <GLogoBar theme="light" />

        {/* ── H1 ── */}
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
          Book experience
        </h1>

        {/* ── Form ── */}
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
            <label htmlFor="c-name" style={LABEL}>My name is</label>
            <div style={UNDERLINE_ROW}>
              <input id="c-name" name="name" type="text" placeholder="[ Name ]" required style={INPUT} />
              <span style={{ fontSize: 'var(--g-tag)', color: '#0D0D0D' }}>*</span>
            </div>
          </div>

          {/* Email */}
          <div className="g-contact-row" style={{ display: 'flex', alignItems: 'flex-end', gap: '1rem' }}>
            <label htmlFor="c-email" style={LABEL}>My email is</label>
            <div style={UNDERLINE_ROW}>
              <input id="c-email" name="email" type="email" placeholder="[ Email ]" style={INPUT} />
            </div>
          </div>

          {/* Phone */}
          <div className="g-contact-row" style={{ display: 'flex', alignItems: 'flex-end', gap: '1rem' }}>
            <label htmlFor="c-phone" style={LABEL}>My phone number is</label>
            <div style={UNDERLINE_ROW}>
              <input id="c-phone" name="phone" type="tel" placeholder="[ Number ]" required style={INPUT} />
              <span style={{ fontSize: 'var(--g-tag)', color: '#0D0D0D' }}>*</span>
            </div>
          </div>

          {/* Idea */}
          <div className="g-contact-row" style={{ display: 'flex', alignItems: 'flex-end', gap: '1rem' }}>
            <label htmlFor="c-idea" style={LABEL}>My tattoo idea is</label>
            <div style={UNDERLINE_ROW}>
              <input id="c-idea" name="idea" type="text" placeholder="[ Tattoo idea ]" style={INPUT} />
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

          {/* Reference / file upload */}
          <div className="g-contact-stacked" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <span style={LABEL}>Tattoo reference</span>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
              <p style={{ fontSize: 'var(--g-tag)', lineHeight: 1.4, color: '#0D0D0D', maxWidth: '26rem' }}>
                *Please send the tattoo references and inspiration images you&apos;d like to share with the artist
              </p>
              <span style={{ fontSize: 'var(--g-tag)', color: '#BFBFBF', whiteSpace: 'nowrap' }}>
                [ max file size 100 mb ]
              </span>
            </div>
            <label
              htmlFor="c-files"
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
            <input id="c-files" name="files" type="file" multiple style={{ display: 'none' }} />
          </div>

          {status === 'error' && (
            <p style={{ fontSize: 'var(--g-tag)', color: 'red' }}>Something went wrong. Please try again.</p>
          )}

          {status === 'success' ? (
            <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D', marginTop: '8px' }}>
              Thank you — every idea is a unique phenomenon. I will review yours shortly and get back to you.
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
              {status === 'submitting' ? 'Sending…' : 'Submit'}
            </button>
          )}

        </form>

        {/* ── Vertical nav ── */}
        <GNav activePath="/contact" theme="light" />

      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <GFooter />

    </main>
  )
}
