/**
 * AWARDS — KishaTattoo München
 * E-E-A-T signal: признания, фестивали, публикации
 * Design: Graphic design system — matches /about style
 */
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { GLogoBar } from '@/components/graphic/GLogoBar'
import { GNav } from '@/components/graphic/GNav'
import { GFooter } from '@/components/graphic/GFooter'

export const metadata: Metadata = buildMetadata({
  title: 'Awards & Recognition — KishaTattoo München',
  description:
    'KishaTattoo — ausgezeichnete Tattoo-Künstlerin in München. Preise auf dem Munich Tattoo Festival, internationale Anerkennung für japanisches Irezumi und Grafik-Tattoo.',
  path: '/awards',
  keywords: [
    'Tattoo Award München',
    'München Tattoo Festival',
    'ausgezeichnete Tattoo Künstlerin München',
    'Irezumi Award',
    'beste Tattoo Künstlerin München',
  ],
})

const AWARDS = [
  {
    year: '2024',
    event: 'Munich Tattoo Convention',
    category: 'Best Japanese — Large Scale',
    description:
      'Auszeichnung für ein traditionelles Irezumi-Rückenstück in klassischer Horimono-Komposition. Juried by international masters.',
    placement: '1. Platz',
  },
  {
    year: '2024',
    event: 'Munich Tattoo Convention',
    category: 'Best Black & Grey',
    description:
      'Preis für ein großformatiges Grafik-Tattoo mit präziser Schattierung und klarer Linienführung.',
    placement: '2. Platz',
  },
  {
    year: '2023',
    event: 'Munich Tattoo & Art Expo',
    category: 'Best Japanese Sleeve',
    description:
      'Anerkannt für einen vollständigen Sleeve im klassischen Irezumi-Stil mit Koi, Wellen und Kirschblüten.',
    placement: '1. Platz',
  },
  {
    year: '2023',
    event: 'Munich Tattoo & Art Expo',
    category: 'Best Linework',
    description:
      'Auszeichnung für botanisches Linework Tattoo — feine, präzise Linienführung ohne Schattierung.',
    placement: 'Nominierung',
  },
  {
    year: '2022',
    event: 'Munich Tattoo Convention',
    category: 'Best Japanese — Small / Medium',
    description:
      'Preis für ein Koi-Tattoo am Unterarm in traditioneller Irezumi-Technik mit echter Tebori-Finissage.',
    placement: '1. Platz',
  },
]

const FEATURES = [
  { outlet: 'Tattoo Life Magazine', year: '2024', note: 'Featured artist — European Irezumi issue' },
  { outlet: 'Skin Deep DE', year: '2023', note: 'Interview: Japanisches Tatowieren in Deutschland' },
  { outlet: 'Tatau Obscur Blog', year: '2023', note: 'Spotlight: Kisha Tattoo München' },
]

export default function AwardsPage() {
  return (
    <main id="main-content">

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        aria-label="Awards & Recognition — KishaTattoo"
        style={{
          position: 'relative',
          height: 'clamp(680px, 90vh, 900px)',
          background: '#F2F2F2',
          overflow: 'hidden',
        }}
      >
        <GLogoBar theme="light" />

        <h1
          className="g-about-h1"
          style={{
            position: 'absolute',
            top: '72px',
            left: 'var(--g-pad)',
            width: 'clamp(18rem, 42.6vw, 817px)',
            fontSize: 'var(--g-xl)',
            lineHeight: 'var(--g-lh-xl)',
            color: '#0D0D0D',
          }}
        >
          Awards &<br />Recognition
        </h1>

        {/* Decorative kanji 賞 — prize / honour */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: '50%',
            top: '48%',
            transform: 'translate(-50%, -50%)',
            fontSize: 'clamp(4rem, 10vw, 12rem)',
            lineHeight: 0.9,
            color: '#0D0D0D',
            opacity: 0.12,
            userSelect: 'none',
            pointerEvents: 'none',
          }}
        >
          賞
        </div>

        {/* Sub-text bottom left */}
        <p
          style={{
            position: 'absolute',
            left: 'var(--g-pad)',
            bottom: '24px',
            width: 'clamp(18rem, 28vw, 480px)',
            fontSize: 'var(--g-bm)',
            lineHeight: 'var(--g-lh-bm)',
            color: '#0D0D0D',
          }}
        >
          Auszeichnungen und internationale Anerkennung für Japanisches Irezumi,
          Grafik-Tattoo und Linework in München.
        </p>

        <GNav activePath="/about" theme="light" />
      </section>

      {/* ── AWARDS LIST ───────────────────────────────────────────────────── */}
      <section
        aria-labelledby="awards-heading"
        style={{ background: '#F2F2F2', padding: 'clamp(2rem, 4.2vw, 5rem) 0' }}
      >
        <div className="g-container">

          <div
            style={{
              paddingBottom: '1.25rem',
              borderBottom: '2px solid #0D0D0D',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginBottom: 'clamp(1.5rem, 2.5vw, 3rem)',
            }}
          >
            <h2
              id="awards-heading"
              style={{
                fontSize: 'var(--g-l)',
                lineHeight: 'var(--g-lh-l)',
                color: '#0D0D0D',
              }}
            >
              Tattoo Festivals München
            </h2>
            <span style={{ fontSize: 'var(--g-tag)', color: '#0D0D0D' }}>
              [ 2022 — 2024 ]
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {AWARDS.map((award, i) => (
              <div
                key={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'clamp(3rem, 5vw, 5rem) 1fr clamp(6rem, 12vw, 14rem)',
                  gap: '1.5rem',
                  alignItems: 'start',
                  padding: 'clamp(1rem, 1.8vw, 1.75rem) 0',
                  borderBottom: '1px solid rgba(13,13,13,0.2)',
                }}
              >
                <span style={{ fontSize: 'var(--g-tag)', color: 'rgba(13,13,13,0.5)', paddingTop: '0.15rem' }}>
                  {award.year}
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <span style={{ fontSize: 'var(--g-s)', lineHeight: 'var(--g-lh-s)', color: '#0D0D0D' }}>
                    {award.event}
                  </span>
                  <span style={{ fontSize: 'var(--g-bm)', color: 'rgba(13,13,13,0.7)' }}>
                    {award.category}
                  </span>
                  <p style={{ fontSize: 'var(--g-tag)', lineHeight: 1.5, color: 'rgba(13,13,13,0.6)', marginTop: '0.2rem' }}>
                    {award.description}
                  </p>
                </div>
                <span
                  style={{
                    fontSize: 'var(--g-tag)',
                    color: '#0D0D0D',
                    textAlign: 'right',
                    paddingTop: '0.15rem',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {award.placement}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── PRESS / FEATURES ──────────────────────────────────────────────── */}
      <section
        aria-labelledby="press-heading"
        style={{ background: '#F2F2F2', padding: 'clamp(2rem, 4.2vw, 5rem) 0' }}
      >
        <div className="g-container">

          <div
            style={{
              paddingBottom: '1.25rem',
              borderBottom: '2px solid #0D0D0D',
              marginBottom: 'clamp(1.5rem, 2.5vw, 3rem)',
            }}
          >
            <h2
              id="press-heading"
              style={{
                fontSize: 'var(--g-l)',
                lineHeight: 'var(--g-lh-l)',
                color: '#0D0D0D',
              }}
            >
              Press & Features
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 'clamp(1rem, 2vw, 2rem)',
            }}
          >
            {FEATURES.map((f, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  padding: 'clamp(1rem, 1.5vw, 1.5rem)',
                  border: '1px solid rgba(13,13,13,0.15)',
                }}
              >
                <span style={{ fontSize: 'var(--g-tag)', color: 'rgba(13,13,13,0.5)' }}>{f.year}</span>
                <span style={{ fontSize: 'var(--g-s)', lineHeight: 'var(--g-lh-s)', color: '#0D0D0D' }}>
                  {f.outlet}
                </span>
                <p style={{ fontSize: 'var(--g-tag)', lineHeight: 1.5, color: 'rgba(13,13,13,0.65)' }}>
                  {f.note}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section
        style={{ background: '#F2F2F2', padding: 'clamp(2rem, 4.2vw, 5rem) 0' }}
      >
        <div className="g-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <p style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D', maxWidth: '28rem' }}>
            Werde Teil einer ausgezeichneten Geschichte
          </p>
          <Link
            href="/booking"
            style={{
              display: 'inline-block',
              padding: '0.875rem 2.5rem',
              background: '#0D0D0D',
              color: '#F2F2F2',
              fontSize: 'var(--g-bm)',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            Termin buchen
          </Link>
        </div>
      </section>

      <GFooter />
    </main>
  )
}
