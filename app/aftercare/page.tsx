/**
 * AFTERCARE — Tattoo Pflege Guide
 * Target keyword: "tattoo aftercare münchen" / "tattoo pflege münchen"
 * Design: Graphic design system
 */
import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/structured-data'
import { GLogoBar } from '@/components/graphic/GLogoBar'
import { GNav } from '@/components/graphic/GNav'
import { GFooter } from '@/components/graphic/GFooter'

export const metadata: Metadata = buildMetadata({
  title: 'Tattoo Aftercare — Pflegeanleitung | KishaTattoo München',
  description:
    'Tattoo-Pflege nach der Sitzung: Schritt-für-Schritt-Anleitung von KishaTattoo München. Richtige Heilung, Pflegeprodukte und was du unbedingt vermeiden solltest.',
  path: '/aftercare',
  keywords: [
    'tattoo aftercare münchen',
    'tattoo pflege münchen',
    'tattoo heilung tipps',
    'irezumi pflege',
    'tattoo eincremen',
    'tattoo nach der sitzung',
  ],
})

const DAYS = [
  {
    period: 'Tag 1',
    title: 'Direkt nach der Sitzung',
    steps: [
      'Abdeckung (Folie oder Verband) 2–4 Stunden belassen, wie von Kisha angewiesen',
      'Danach sanft mit lauwarmem Wasser und mildem, parfümfreiem Seifenwasser waschen',
      'Vorsichtig trockentupfen — niemals reiben',
      'Dünne Schicht empfohlener Wundsalbe auftragen (z.B. Bepanthen, Tattoo Goo)',
    ],
  },
  {
    period: 'Tage 2–7',
    title: 'Erste Woche',
    steps: [
      '2–3 × täglich sanft waschen und dünn eincremen',
      'Das Tattoo muss atmen können — keine dicken Crème-Schichten',
      'Keine Plastikfolie dauerhaft drüber — Feuchtigkeit verursacht Mazerationen',
      'Lockere, weiche Kleidung über dem Tattoo tragen — kein Reiben',
      'Nicht am Schorf kratzen oder ihn abziehen — Farbe geht verloren',
    ],
  },
  {
    period: 'Woche 2–3',
    title: 'Schuppung & Heilung',
    steps: [
      'Das Tattoo beginnt zu schuppen — das ist normal und Teil der Heilung',
      'Weiter eincremen bei Trockenheitsgefühl',
      'UV-Schutz noch immer meiden — kein direktes Sonnenbad',
      'Schwimmbad, Sauna und Baden weiterhin vermeiden',
    ],
  },
]

const AVOID = [
  { icon: '☀', label: 'Direkte Sonne', note: 'Mind. 3–4 Wochen, danach immer LSF 50+' },
  { icon: '🏊', label: 'Schwimmen / Baden', note: 'Pool, Meer, Badewanne — mind. 3 Wochen' },
  { icon: '🧖', label: 'Sauna & Dampfbad', note: 'Ausdehnung der Haut stört die Heilung' },
  { icon: '✋', label: 'Kratzen & Reiben', note: 'Schorf entfernt Pigment — Geduld!' },
  { icon: '🏋', label: 'Intensiver Sport', note: 'Schweiß und Dehnung der Haut: mind. 1 Woche Pause' },
  { icon: '🍺', label: 'Alkohol', note: '24h vor und nach der Sitzung — verdünnt das Blut' },
]

const PRODUCTS = [
  { name: 'Bepanthen Wund- & Heilsalbe', note: 'Klassiker — günstig, wirksam, überall erhältlich' },
  { name: 'Tattoo Goo Original Salbe', note: 'Speziell für Tattoos, keine Parfumstoffe' },
  { name: 'Hustle Butter Deluxe', note: 'Vegan, ideal für die ersten Tage und Langzeitpflege' },
  { name: 'Lubriderm Unscented', note: 'Leichte Feuchtigkeitspflege für Woche 2+' },
]

export default function AftercarePage() {
  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(
          breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Aftercare', url: '/aftercare' }])
        )}}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        aria-label="Tattoo Aftercare — KishaTattoo München"
        style={{
          position: 'relative',
          height: 'clamp(680px, 90vh, 900px)',
          background: '#F2F2F2',
          overflow: 'hidden',
        }}
      >
        <GLogoBar theme="light" />

        <h1
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
          Tattoo<br />Aftercare
        </h1>

        {/* Kanji 癒 — healing */}
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
            opacity: 0.08,
            userSelect: 'none',
            pointerEvents: 'none',
          }}
        >
          癒
        </div>

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
          Ein Tattoo ist für das Leben — die Pflege entscheidet über die Qualität.
          Halte dich an diese Anleitung für optimale Heilung.
        </p>

        <GNav activePath="/" theme="light" />
      </section>

      {/* ── DAY BY DAY ────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="aftercare-guide-heading"
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
              id="aftercare-guide-heading"
              style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D' }}
            >
              Schritt-für-Schritt Pflegeanleitung
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {DAYS.map((day, i) => (
              <div
                key={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'clamp(5rem, 8vw, 9rem) 1fr',
                  gap: 'clamp(1.5rem, 3vw, 4rem)',
                  padding: 'clamp(1.5rem, 2.5vw, 3rem) 0',
                  borderBottom: '1px solid rgba(13,13,13,0.15)',
                }}
              >
                <div>
                  <span style={{ fontSize: 'var(--g-tag)', color: 'rgba(13,13,13,0.45)', display: 'block', marginBottom: '0.4rem' }}>{day.period}</span>
                  <h3 style={{ fontSize: 'var(--g-s)', lineHeight: 'var(--g-lh-s)', color: '#0D0D0D' }}>{day.title}</h3>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {day.steps.map((step, j) => (
                    <li
                      key={j}
                      style={{
                        fontSize: 'var(--g-bm)',
                        lineHeight: 'var(--g-lh-bm)',
                        color: '#0D0D0D',
                        paddingLeft: '1.2rem',
                        position: 'relative',
                      }}
                    >
                      <span aria-hidden="true" style={{ position: 'absolute', left: 0, color: 'rgba(13,13,13,0.35)' }}>–</span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── WHAT TO AVOID ─────────────────────────────────────────────────── */}
      <section
        aria-labelledby="avoid-heading"
        style={{ background: '#F2F2F2', padding: 'clamp(2rem, 4.2vw, 5rem) 0' }}
      >
        <div className="g-container">
          <div style={{ paddingBottom: '1.25rem', borderBottom: '2px solid #0D0D0D', marginBottom: 'clamp(1.5rem, 2.5vw, 3rem)' }}>
            <h2 id="avoid-heading" style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D' }}>
              Was du vermeiden musst
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 'clamp(1rem, 1.5vw, 1.5rem)',
            }}
          >
            {AVOID.map((item) => (
              <div
                key={item.label}
                style={{
                  padding: 'clamp(1rem, 1.5vw, 1.5rem)',
                  border: '1px solid rgba(13,13,13,0.15)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                }}
              >
                <span style={{ fontSize: '1.5rem', lineHeight: 1 }} aria-hidden="true">{item.icon}</span>
                <span style={{ fontSize: 'var(--g-s)', lineHeight: 'var(--g-lh-s)', color: '#0D0D0D' }}>{item.label}</span>
                <p style={{ fontSize: 'var(--g-tag)', lineHeight: 1.5, color: 'rgba(13,13,13,0.6)' }}>{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ──────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="products-heading"
        style={{ background: '#F2F2F2', padding: 'clamp(2rem, 4.2vw, 5rem) 0' }}
      >
        <div className="g-container">
          <div style={{ paddingBottom: '1.25rem', borderBottom: '2px solid #0D0D0D', marginBottom: 'clamp(1.5rem, 2.5vw, 3rem)' }}>
            <h2 id="products-heading" style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D' }}>
              Empfohlene Pflegeprodukte
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {PRODUCTS.map((p, i) => (
              <div
                key={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 'clamp(2rem, 4vw, 5rem)',
                  padding: 'clamp(0.75rem, 1.2vw, 1.25rem) 0',
                  borderBottom: '1px solid rgba(13,13,13,0.15)',
                  alignItems: 'center',
                }}
              >
                <span style={{ fontSize: 'var(--g-bm)', color: '#0D0D0D' }}>{p.name}</span>
                <span style={{ fontSize: 'var(--g-tag)', color: 'rgba(13,13,13,0.6)' }}>{p.note}</span>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 'var(--g-tag)', color: 'rgba(13,13,13,0.5)', marginTop: '1.5rem' }}>
            * Kisha empfiehlt spezifische Produkte nach der Sitzung — halte dich an die persönliche Anweisung.
          </p>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section style={{ background: '#F2F2F2', padding: 'clamp(1.5rem, 2.5vw, 3rem) 0' }}>
        <div className="g-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <p style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D', maxWidth: '28rem' }}>
            Fragen zur Pflege? Schreib Kisha direkt.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/faq" style={{ display: 'inline-block', padding: '0.875rem 2.5rem', border: '1px solid #0D0D0D', color: '#0D0D0D', fontSize: 'var(--g-bm)', textDecoration: 'none' }}>
              FAQ ansehen
            </Link>
            <Link href="/contact" style={{ display: 'inline-block', padding: '0.875rem 2.5rem', background: '#0D0D0D', color: '#F2F2F2', fontSize: 'var(--g-bm)', textDecoration: 'none' }}>
              Kontakt
            </Link>
          </div>
        </div>
      </section>

      <GFooter />
    </main>
  )
}
