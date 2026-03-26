/**
 * GRAFIK TATTOO MÜNCHEN — Style landing page
 * Target keyword: "grafik tattoo münchen" + "blackwork tattoo münchen"
 * Design: Graphic design system — matches existing pages
 */
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { serviceSchema, breadcrumbSchema } from '@/lib/structured-data'
import { GLogoBar } from '@/components/graphic/GLogoBar'
import { GNav } from '@/components/graphic/GNav'
import { GFooter } from '@/components/graphic/GFooter'

export const metadata: Metadata = buildMetadata({
  title: 'Grafik Tattoo München — Blackwork & Illustration | KishaTattoo',
  description:
    'Grafik Tattoo in München — Blackwork, geometrische Designs, Illustration. KishaTattoo: präzise Linienführung, klare Kontraste, individuelle Designs. Jetzt Termin buchen.',
  path: '/grafik-tattoo-muenchen',
  keywords: [
    'grafik tattoo münchen',
    'graphik tattoo münchen',
    'blackwork tattoo münchen',
    'geometric tattoo münchen',
    'illustratives tattoo münchen',
    'graphic tattoo artist munich',
    'blackwork künstlerin münchen',
    'geometric tattoo münchen',
    'contemporary tattoo münchen',
    'fine line tattoo münchen',
  ],
})

const GALLERY = [
  { src: 'https://picsum.photos/seed/gr-1/600/700', alt: 'Grafik Tattoo München — geometrisches Blackwork Design' },
  { src: 'https://picsum.photos/seed/gr-2/600/700', alt: 'Blackwork Tattoo München — Illustration KishaTattoo' },
  { src: 'https://picsum.photos/seed/gr-3/600/700', alt: 'Geometrisches Tattoo München — präzise Linien' },
  { src: 'https://picsum.photos/seed/gr-4/600/700', alt: 'Grafik Tattoo Sleeve München — KishaTattoo' },
  { src: 'https://picsum.photos/seed/gr-5/600/700', alt: 'Illustratives Tattoo München — contemporary style' },
  { src: 'https://picsum.photos/seed/gr-6/600/700', alt: 'Blackwork Brust Tattoo München — grafisch' },
]

export default function GrafikTattooMuenchen() {
  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        serviceSchema({ name: 'Grafik Tattoo München', description: 'Grafik-Tattoo in München — Blackwork, Geometrie, Illustration. Custom-Design, präzise Linienführung.', url: '/grafik-tattoo-muenchen' })
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Grafik Tattoo München', url: '/grafik-tattoo-muenchen' }])
      )}} />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        aria-label="Grafik Tattoo München — KishaTattoo"
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
          Grafik Tattoo<br />München
        </h1>

        {/* Decorative kanji 墨 — ink */}
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
            opacity: 0.1,
            userSelect: 'none',
            pointerEvents: 'none',
          }}
        >
          墨
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
          Präzise Linien, starke Kontraste, individuelle Komposition.
          Grafik-Tattoo nach Maß — buchbar in München und Umgebung.
        </p>

        <GNav activePath="/" theme="light" />
      </section>

      {/* ── INTRO ─────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="gr-intro-heading"
        style={{ background: '#F2F2F2', padding: 'clamp(2rem, 4.2vw, 5rem) 0' }}
      >
        <div className="g-container">

          <div className="g-section-header" style={{ alignItems: 'center' }}>
            <span style={{ fontSize: 'var(--g-tag)', color: '#0D0D0D', whiteSpace: 'nowrap', flexShrink: 0 }}>
              [ Blackwork · Geometrie · Illustration ]
            </span>
            <h2
              id="gr-intro-heading"
              style={{
                fontSize: 'var(--g-l)',
                lineHeight: 'var(--g-lh-l)',
                color: '#0D0D0D',
                textAlign: 'center',
                width: 'clamp(18rem, 32.6vw, 470px)',
                flexShrink: 0,
              }}
            >
              Grafisches Design auf der Haut
            </h2>
            <Link
              href="/works"
              style={{ fontSize: 'var(--g-tag)', color: '#0D0D0D', textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0 }}
            >
              [ Portfolio ansehen ]
            </Link>
          </div>

          <div
            className="g-text-cols"
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              gap: 'clamp(2rem, 4.2vw, 5rem)',
              marginTop: 'clamp(1.5rem, 2.5vw, 3rem)',
            }}
          >
            <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D', width: 'clamp(16rem, 23.3vw, 448px)', flexShrink: 0 }}>
              Grafik-Tattoo verbindet illustrative Präzision mit der Ausdruckskraft des Blackwork.
              In München setzt KishaTattoo grafische Designs um, die mit klaren Linien, starken
              Schwarzflächen und durchdachter Komposition überzeugen — vom kleinen Detail bis zum
              großformatigen Sleeve.
            </p>
            <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D', width: 'clamp(16rem, 23.3vw, 448px)', flexShrink: 0 }}>
              Jedes grafische Tattoo beginnt mit einem Custom-Design — kein Template, kein Katalog.
              Die Komposition wird auf deinen Körper und deine Geschichte zugeschnitten.
              Geometrie, Botanik, Illustration oder freies Blackwork: der Stil folgt deiner Vision.
            </p>
          </div>

        </div>
      </section>

      {/* ── GALLERY ───────────────────────────────────────────────────────── */}
      <section
        aria-label="Grafik Tattoo Portfolio München"
        style={{
          background: '#F2F2F2',
          paddingLeft: 'var(--g-pad)',
          paddingRight: 'var(--g-pad)',
          paddingBottom: 'clamp(2rem, 4.2vw, 5rem)',
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          {GALLERY.map((img) => (
            <div key={img.src} style={{ position: 'relative', aspectRatio: '6/7', overflow: 'hidden' }}>
              <Image src={img.src} alt={img.alt} fill style={{ objectFit: 'cover' }} sizes="33vw" />
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 'clamp(1.5rem, 2.5vw, 2.5rem)' }}>
          <Link href="/works" style={{ fontSize: 'var(--g-bm)', color: '#0D0D0D', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
            Alle Arbeiten ansehen →
          </Link>
        </div>
      </section>

      {/* ── SUBSTYLES ─────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="gr-substyle-heading"
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
            <h2 id="gr-substyle-heading" style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D', textAlign: 'center' }}>
              Grafik-Stile im Überblick
            </h2>
          </div>
          <div className="g-about-steps" style={{ display: 'flex' }}>
            {[
              { title: 'Blackwork', body: 'Kraftvolle Schwarzflächen, harte Kontraste, null Grau. Blackwork ist die direkteste Form des grafischen Tattoos — maximale Wirkung, minimale Kompromisse.' },
              { title: 'Geometrie', body: 'Präzise Formen, symmetrische Kompositionen, mathematische Schönheit. Geometrische Tattoos sind zeitlos — und durch KishasTattoos präzise Linienführung besonders langlebig.' },
              { title: 'Illustration', body: 'Freies illustratives Design: von botanischen Motiven bis zu figurativen Darstellungen. Jedes Motiv wird als eigenständiges Kunstwerk konzipiert und für deinen Körper adaptiert.' },
            ].map((col, i) => (
              <div
                key={col.title}
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
                <h3 style={{ fontSize: 'var(--g-s)', lineHeight: 'var(--g-lh-s)', color: '#0D0D0D' }}>{col.title}</h3>
                <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D' }}>{col.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED + CTA ─────────────────────────────────────────────────── */}
      <section style={{ background: '#F2F2F2', padding: 'clamp(1.5rem, 2.5vw, 3rem) 0' }}>
        <div className="g-container" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <span style={{ fontSize: 'var(--g-tag)', color: 'rgba(13,13,13,0.5)' }}>Weitere Stile →</span>
          <Link href="/japanisches-tattoo-muenchen" style={{ fontSize: 'var(--g-bm)', color: '#0D0D0D', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}>Japanisches Tattoo München</Link>
          <Link href="/linework-tattoo-muenchen" style={{ fontSize: 'var(--g-bm)', color: '#0D0D0D', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}>Linework Tattoo München</Link>
        </div>
      </section>

      <section data-nav-dark style={{ background: '#0D0D0D', padding: 'clamp(2rem, 4.2vw, 5rem) 0' }}>
        <div className="g-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <p style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#F2F2F2', maxWidth: '28rem' }}>
            Dein Grafik Tattoo in München
          </p>
          <Link href="/booking" style={{ display: 'inline-block', padding: '0.875rem 2.5rem', background: '#F2F2F2', color: '#0D0D0D', fontSize: 'var(--g-bm)', textDecoration: 'none', whiteSpace: 'nowrap' }}>
            Termin buchen
          </Link>
        </div>
      </section>

      <GFooter />
    </main>
  )
}
