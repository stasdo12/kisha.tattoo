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
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { GHeader } from '@/components/graphic/GHeader'
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
  const t = useTranslations('contact')
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
        <GHeader theme="light" />

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
          {t('hero.h1')}
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
            <label htmlFor="c-name" style={LABEL}>{t('form.name')}</label>
            <div style={UNDERLINE_ROW}>
              <input id="c-name" name="name" type="text" placeholder={t('form.name_ph')} required style={INPUT} />
              <span style={{ fontSize: 'var(--g-tag)', color: '#0D0D0D' }}>*</span>
            </div>
          </div>

          {/* Email */}
          <div className="g-contact-row" style={{ display: 'flex', alignItems: 'flex-end', gap: '1rem' }}>
            <label htmlFor="c-email" style={LABEL}>{t('form.email')}</label>
            <div style={UNDERLINE_ROW}>
              <input id="c-email" name="email" type="email" placeholder={t('form.email_ph')} style={INPUT} />
            </div>
          </div>

          {/* Phone */}
          <div className="g-contact-row" style={{ display: 'flex', alignItems: 'flex-end', gap: '1rem' }}>
            <label htmlFor="c-phone" style={LABEL}>{t('form.phone')}</label>
            <div style={UNDERLINE_ROW}>
              <input id="c-phone" name="phone" type="tel" placeholder={t('form.phone_ph')} required style={INPUT} />
              <span style={{ fontSize: 'var(--g-tag)', color: '#0D0D0D' }}>*</span>
            </div>
          </div>

          {/* Idea */}
          <div className="g-contact-row" style={{ display: 'flex', alignItems: 'flex-end', gap: '1rem' }}>
            <label htmlFor="c-idea" style={LABEL}>{t('form.idea')}</label>
            <div style={UNDERLINE_ROW}>
              <input id="c-idea" name="idea" type="text" placeholder={t('form.idea_ph')} style={INPUT} />
            </div>
          </div>

          {/* Experience toggle */}
          <div className="g-contact-stacked" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <span style={LABEL}>{t('form.experience')}</span>
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
                  {val === 'yes' ? t('form.yes') : t('form.no')}
                </button>
              ))}
            </div>
          </div>

          {/* Reference / file upload */}
          <div className="g-contact-stacked" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <span style={LABEL}>{t('form.reference')}</span>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
              <p style={{ fontSize: 'var(--g-tag)', lineHeight: 1.4, color: '#0D0D0D', maxWidth: '26rem' }}>
                {t('form.reference_note')}
              </p>
              <span style={{ fontSize: 'var(--g-tag)', color: '#BFBFBF', whiteSpace: 'nowrap' }}>
                {t('form.file_size')}
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
              {t('form.upload')}
            </label>
            <input id="c-files" name="files" type="file" multiple style={{ display: 'none' }} />
          </div>

          {status === 'error' && (
            <p style={{ fontSize: 'var(--g-tag)', color: 'red' }}>{t('form.error')}</p>
          )}

          {status === 'success' ? (
            <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D', marginTop: '8px' }}>
              {t('form.success')}
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
              {status === 'submitting' ? t('form.submitting') : t('form.submit')}
            </button>
          )}

        </form>

        {/* ── Vertical nav ── */}

      </section>

      {/* ── QUICK LINKS ───────────────────────────────────────────────────── */}
      <section style={{ background: '#F2F2F2', padding: 'clamp(1.5rem, 2.5vw, 3rem) 0' }}>
        <div className="g-container" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <span style={{ fontSize: 'var(--g-tag)', color: 'rgba(13,13,13,0.5)' }}>{t('links.label')}</span>
          <Link href="/booking" style={{ fontSize: 'var(--g-bm)', color: '#0D0D0D', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}>{t('links.booking')}</Link>
          <Link href="/tattoo-preise-muenchen" style={{ fontSize: 'var(--g-bm)', color: '#0D0D0D', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}>{t('links.prices')}</Link>
          <Link href="/faq" style={{ fontSize: 'var(--g-bm)', color: '#0D0D0D', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}>{t('links.faq')}</Link>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <GFooter />

    </main>
  )
}
