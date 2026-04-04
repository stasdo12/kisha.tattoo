'use client'
import type React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { GHeader } from '@/components/graphic/GHeader'
import { GFooter } from '@/components/graphic/GFooter'
import s from './contact.module.css'

export default function GraphicContactPage() {
  const t = useTranslations('contact')
  const [experience, setExperience] = useState<'yes' | 'no' | null>(null)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [copied, setCopied] = useState(false)

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

  function handleCopyAddress() {
    navigator.clipboard.writeText(t('location.address')).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <main id="main-content">

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className={s.hero} aria-label={t('hero.h1')}>
        <GHeader theme="light" />

        <div className={s.heroBody}>

          {/* Left: H1 + Working Hours */}
          <div className={s.heroLeft}>
            <h1 className={s.h1}>{t('hero.h1')}</h1>
            <div className={s.hours}>
              <span className={s.hoursLabel}>{t('hours.label')}</span>
              <p className={s.hoursLine}>{t('hours.weekdays')}</p>
              <p className={s.hoursLine}>{t('hours.saturday')}</p>
              <p className={s.hoursLine}>{t('hours.sunday')}</p>
            </div>
          </div>

          {/* Right: Form */}
          <div className={s.heroRight}>
            <form className={s.form} onSubmit={handleSubmit}>

              <div className={s.formFields}>

                {/* Name */}
                <div className={s.row}>
                  <label htmlFor="c-name" className={s.label}>{t('form.name')}</label>
                  <div className={s.underline}>
                    <input id="c-name" name="name" type="text" placeholder={t('form.name_ph')} required className={s.input} />
                    <span className={s.asterisk}>*</span>
                  </div>
                </div>

                {/* Email */}
                <div className={s.row}>
                  <label htmlFor="c-email" className={s.label}>{t('form.email')}</label>
                  <div className={s.underline}>
                    <input id="c-email" name="email" type="email" placeholder={t('form.email_ph')} className={s.input} />
                  </div>
                </div>

                {/* Phone */}
                <div className={s.row}>
                  <label htmlFor="c-phone" className={s.label}>{t('form.phone')}</label>
                  <div className={s.underline}>
                    <input id="c-phone" name="phone" type="tel" placeholder={t('form.phone_ph')} required className={s.input} />
                    <span className={s.asterisk}>*</span>
                  </div>
                </div>

                {/* Idea */}
                <div className={s.row}>
                  <label htmlFor="c-idea" className={s.label}>{t('form.idea')}</label>
                  <div className={s.underline}>
                    <input id="c-idea" name="idea" type="text" placeholder={t('form.idea_ph')} className={s.input} />
                  </div>
                </div>

                {/* Experience toggle */}
                <div className={s.stacked}>
                  <span className={s.label}>{t('form.experience')}</span>
                  <div className={s.toggleRow}>
                    <button
                      type="button"
                      aria-pressed={experience === 'yes'}
                      onClick={() => setExperience('yes')}
                      className={s.toggle}
                    >
                      {t('form.yes')}
                    </button>
                    <button
                      type="button"
                      aria-pressed={experience === 'no'}
                      onClick={() => setExperience('no')}
                      className={s.toggle}
                    >
                      {t('form.no')}
                    </button>
                  </div>
                </div>

                {/* Reference / file upload */}
                <div className={s.stacked}>
                  <span className={s.label}>{t('form.reference')}</span>
                  <div className={s.fileHint}>
                    <p className={s.fileNote}>{t('form.reference_note')}</p>
                    <span className={s.fileSize}>{t('form.file_size')}</span>
                  </div>
                  <label htmlFor="c-files" className={s.fileBtn}>{t('form.upload')}</label>
                  <input id="c-files" name="files" type="file" multiple className={s.fileInput} />
                </div>

              </div>{/* /formFields */}

              {/* Submit */}
              <div className={s.submitArea}>
                {status === 'error' && (
                  <p className={s.error}>{t('form.error')}</p>
                )}
                {status === 'success' ? (
                  <p className={s.success}>{t('form.success')}</p>
                ) : (
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className={s.submit}
                  >
                    {status === 'submitting' ? t('form.submitting') : t('form.submit')}
                  </button>
                )}
              </div>

            </form>
          </div>

        </div>
      </section>

      {/* ── MAP ───────────────────────────────────────────────────────────── */}
      <section className={s.mapSection}>
        <a
          href="https://www.google.com/maps/search/?api=1&query=Bahnhofstra%C3%9Fe+1%2C+85375+Neufahrn+bei+Freising%2C+Deutschland"
          target="_blank"
          rel="noopener noreferrer"
          className={s.mapLink}
          aria-label="Open studio location in Google Maps"
        >
          <div className={s.mapWrap}>
            <Image
              src="/images/contact/map.jpg"
              alt="Studio location map — Bahnhofstraße 1, Neufahrn bei Freising"
              className={s.mapImg}
              width={7360}
              height={3120}
              sizes="(max-width: 767px) 100vw, calc(100vw - 80px)"
              priority
            />
          </div>
        </a>
      </section>

      {/* ── LOCATION + COPY ───────────────────────────────────────────────── */}
      <section className={s.locationSection}>
        <div className={s.locationInfo}>
          <span className={s.locationLabel}>{t('location.label')}</span>
          <address className={s.locationAddress}>{t('location.address')}</address>
        </div>
        <button className={s.copyBtn} onClick={handleCopyAddress} type="button">
          {copied ? t('location.copied') : t('location.copy')}
        </button>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <GFooter />

    </main>
  )
}