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
  title: 'Awards & Ausbildung — KishaTattoo München',
  description:
    'KishaTattoo — ausgezeichnete Tattoo-Künstlerin und Ausbilderin in München. Preise auf Tattooconventions 2025, über 10 ausgebildete Tätowierer — Tattoo Schule München.',
  path: '/awards',
  keywords: [
    'Tattoo Award München',
    'Tattooconvention Eggenfelden',
    'Tattooconvention Burgkirchen',
    'Tattoo Ausbildung München',
    'Tattoo Schule München',
    'beste Tattoo Künstlerin München',
  ],
})

const AWARDS = [
  {
    year: '2025',
    event: 'Tattooconvention Burgkirchen',
    eventUrl: 'https://www.instagram.com/tattoo_art.ist.ink/p/DLS7qH2N0hO/',
    category: 'Best of Show',
    description: 'Höchste Auszeichnung der Convention — vergeben für das beste Tattoo des gesamten Wettbewerbs.',
    placement: 'Best of Show',
  },
  {
    year: '2025',
    event: 'Tattooconvention Burgkirchen',
    eventUrl: 'https://www.instagram.com/tattoo_art.ist.ink/p/DLS7qH2N0hO/',
    category: 'Best of Day',
    description: 'Tagespreis für das herausragendste Tattoo des Wettkampftages.',
    placement: 'Best of Day',
  },
  {
    year: '2025',
    event: 'Tattooconvention Burgkirchen',
    eventUrl: 'https://www.instagram.com/tattoo_art.ist.ink/p/DLS7qH2N0hO/',
    category: 'Black & Grey',
    description: 'Auszeichnung in der Kategorie Black & Grey für präzise Schattierung und Komposition.',
    placement: 'Auszeichnung',
  },
  {
    year: '2025',
    event: 'Tattooconvention Eggenfelden',
    eventUrl: 'https://www.instagram.com/tattoo_convention_eggenfelden/',
    category: 'Black & Grey',
    description: 'Preis in der Kategorie Black & Grey auf der Tattooconvention Eggenfelden.',
    placement: 'Auszeichnung',
  },
  {
    year: '2025',
    event: 'Tattooconvention Eggenfelden',
    eventUrl: 'https://www.instagram.com/tattoo_convention_eggenfelden/',
    category: 'Fineline / Dotwork',
    description: 'Auszeichnung für präzises Fineline- und Dotwork-Tattoo in München.',
    placement: 'Auszeichnung',
  },
]

const SCHOOL_STATS = [
  {
    number: '10+',
    label: 'Ausgebildete Tattoo Artists',
    body: 'Absolventinnen und Absolventen der Schule sind heute selbst erfolgreiche Tätowierer in Deutschland und Europa.',
  },
  {
    number: '5+',
    label: 'Jahre Ausbildungserfahrung',
    body: 'Kisha gibt ihr Wissen in Einzelcoachings und intensiven Ausbildungsprogrammen in München weiter.',
  },
  {
    number: '100%',
    label: 'Praxisbasiert',
    body: 'Anatomie, Komposition, Maschinenkunde, Hygiene, Irezumi-Tradition — eine vollständige Ausbildung zum Tattoo Artist.',
  },
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
          Auszeichnungen auf Tattooconventions 2025 und über 10 ausgebildete
          Tattoo Artists — Kisha setzt Maßstäbe in München.
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
              Tattoo Convention Awards
            </h2>
            <span style={{ fontSize: 'var(--g-tag)', color: '#0D0D0D' }}>
              [ 2025 ]
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
                  <a
                    href={award.eventUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: 'var(--g-s)', lineHeight: 'var(--g-lh-s)', color: '#0D0D0D', textDecoration: 'none', borderBottom: '1px solid rgba(13,13,13,0.3)' }}
                  >
                    {award.event}
                  </a>
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

      {/* ── SCHULE & AUSBILDUNG ────────────────────────────────────────────── */}
      <section
        aria-labelledby="schule-heading"
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
              id="schule-heading"
              style={{
                fontSize: 'var(--g-l)',
                lineHeight: 'var(--g-lh-l)',
                color: '#0D0D0D',
              }}
            >
              Tattoo-Ausbildung München —<br />eine Schule, die Meister formt
            </h2>
            <a
              href="https://www.instagram.com/kisha.tattoo/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: 'var(--g-tag)', color: '#0D0D0D', textDecoration: 'none', whiteSpace: 'nowrap', borderBottom: '1px solid rgba(13,13,13,0.4)' }}
            >
              [ @kisha.tattoo ]
            </a>
          </div>

          {/* Intro text */}
          <p style={{
            fontSize: 'var(--g-bm)',
            lineHeight: 'var(--g-lh-bm)',
            color: '#0D0D0D',
            maxWidth: 'clamp(24rem, 55vw, 820px)',
            marginBottom: 'clamp(2rem, 3.5vw, 4rem)',
          }}>
            Kisha ist nicht nur Tattoo Artist — sie ist Ausbilderin. Über Jahre hat sie in ihrer
            Tattoo-Schule in München mehr als 10 professionelle Tätowierer ausgebildet, die heute
            selbst etablierte Karrieren in Deutschland und Europa führen. Ihre Ausbildung vereint
            die Disziplin des japanischen Irezumi mit modernem Handwerk — und hat in der deutschen
            Tattoo-Szene Maßstäbe gesetzt.
          </p>

          {/* Three stats columns */}
          <div
            style={{ display: 'flex' }}
          >
            {SCHOOL_STATS.map((s, i) => (
              <div
                key={i}
                style={{
                  flex: '1 1 0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  padding: i === 0
                    ? '0 clamp(1rem, 2vw, 2rem) 0 0'
                    : i === 1
                    ? '0 clamp(1rem, 2vw, 2rem)'
                    : '0 0 0 clamp(1rem, 2vw, 2rem)',
                  borderLeft: i > 0 ? '1px solid #0D0D0D' : 'none',
                }}
              >
                <span style={{ fontSize: 'clamp(2rem, 3.5vw, 3.5rem)', lineHeight: 1, color: '#0D0D0D' }}>
                  {s.number}
                </span>
                <span style={{ fontSize: 'var(--g-s)', lineHeight: 'var(--g-lh-s)', color: '#0D0D0D' }}>
                  {s.label}
                </span>
                <p style={{ fontSize: 'var(--g-tag)', lineHeight: 1.5, color: 'rgba(13,13,13,0.65)' }}>
                  {s.body}
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
