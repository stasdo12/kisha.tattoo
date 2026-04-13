'use client'
import { useState } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { GHeader } from '@/components/graphic/GHeader'
import { GFooter } from '@/components/graphic/GFooter'
import s from './contact.module.css'

export default function GraphicContactPage() {
  const t = useTranslations('contact')
  const [copied, setCopied] = useState(false)

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
          <h1 className={s.h1}>{t('hero.h1')}</h1>
          <div className={s.hours}>
            <span className={s.hoursLabel}>{t('hours.label')}</span>
            <p className={s.hoursLine}>{t('hours.weekdays')}</p>
            <p className={s.hoursLine}>{t('hours.saturday')}</p>
            <p className={s.hoursLine}>{t('hours.sunday')}</p>
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