'use client'
import type React from 'react'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { GHeader } from '@/components/graphic/GHeader'
import { GFooter } from '@/components/graphic/GFooter'
import s from './booking.module.css'

export default function BookingPage() {
  const t = useTranslations('booking')
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
      <section aria-label={t('hero.h1')} className={s.hero}>
        <GHeader theme="light" />

        <h1 className={s.h1}>{t('hero.h1')}</h1>

        <form className={s.form} onSubmit={handleSubmit}>

          <div className={s.row}>
            <label htmlFor="b-name" className={s.label}>{t('form.nameLabel')}</label>
            <div className={s.underline}>
              <input id="b-name" name="name" type="text" placeholder={t('form.namePlaceholder')} required className={s.input} />
              <span style={{ fontSize: 'var(--g-tag)', color: '#0D0D0D' }}>*</span>
            </div>
          </div>

          <div className={s.row}>
            <label htmlFor="b-email" className={s.label}>{t('form.emailLabel')}</label>
            <div className={s.underline}>
              <input id="b-email" name="email" type="email" placeholder={t('form.emailPlaceholder')} required className={s.input} />
              <span style={{ fontSize: 'var(--g-tag)', color: '#0D0D0D' }}>*</span>
            </div>
          </div>

          <div className={s.row}>
            <label htmlFor="b-phone" className={s.label}>{t('form.phoneLabel')}</label>
            <div className={s.underline}>
              <input id="b-phone" name="phone" type="tel" placeholder={t('form.phonePlaceholder')} required className={s.input} />
              <span style={{ fontSize: 'var(--g-tag)', color: '#0D0D0D' }}>*</span>
            </div>
          </div>

          <div className={s.row}>
            <label htmlFor="b-style" className={s.label}>{t('form.styleLabel')}</label>
            <div className={s.underline}>
              <input id="b-style" name="style" type="text" placeholder={t('form.stylePlaceholder')} className={s.input} />
            </div>
          </div>

          <div className={s.row}>
            <label htmlFor="b-placement" className={s.label}>{t('form.placementLabel')}</label>
            <div className={s.underline}>
              <input id="b-placement" name="placement" type="text" placeholder={t('form.placementPlaceholder')} className={s.input} />
            </div>
          </div>

          <div className={s.row}>
            <label htmlFor="b-idea" className={s.label}>{t('form.ideaLabel')}</label>
            <div className={s.underline}>
              <input id="b-idea" name="idea" type="text" placeholder={t('form.ideaPlaceholder')} className={s.input} />
            </div>
          </div>

          <div className={s.stacked}>
            <span className={s.label}>{t('form.togetherLabel')}</span>
            <div className={s.toggles}>
              {(['yes', 'no'] as const).map((val) => (
                <button
                  key={val}
                  type="button"
                  aria-pressed={experience === val}
                  onClick={() => setExperience(val)}
                  className={s.toggle}
                >
                  {val === 'yes' ? t('form.yes') : t('form.no')}
                </button>
              ))}
            </div>
          </div>

          <div className={s.stacked}>
            <span className={s.label}>{t('form.filesLabel')}</span>
            <div className={s.fileHint}>
              <p style={{ fontSize: 'var(--g-tag)', lineHeight: 1.4, color: '#0D0D0D', maxWidth: '26rem' }}>
                {t('form.filesHint')}
              </p>
              <span style={{ fontSize: 'var(--g-tag)', color: '#BFBFBF', whiteSpace: 'nowrap' }}>{t('form.filesMax')}</span>
            </div>
            <label htmlFor="b-files" className={s.fileBtn}>{t('form.filesButton')}</label>
            <input id="b-files" name="files" type="file" multiple style={{ display: 'none' }} />
          </div>

          {status === 'error' && <p className={s.error}>{t('form.error')}</p>}

          {status === 'success' ? (
            <p className={s.success}>{t('form.success')}</p>
          ) : (
            <button type="submit" disabled={status === 'submitting'} className={s.submit}>
              {status === 'submitting' ? t('form.submitting') : t('form.submit')}
            </button>
          )}

        </form>

      </section>

      {/* ── STEPS ────────────────────────────────────────────────────── */}
      <section aria-labelledby="booking-steps-heading" className={s.steps}>
        <div className="g-container">
          <div className={s.stepsHeadingWrap}>
            <h2 id="booking-steps-heading" className={s.stepsHeading}>
              {t('steps.heading')}
            </h2>
          </div>

          <div className={s.stepsCols}>
            {(t.raw('steps.list') as Array<{ num: string; title: string; body: string }>).map((step, i) => (
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
