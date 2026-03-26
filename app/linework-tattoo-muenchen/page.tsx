/**
 * LINEWORK TATTOO MÜNCHEN — Style landing page
 * Target keyword: "linework tattoo münchen" + "feine linien tattoo münchen"
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
  title: 'Linework Tattoo München — Feine Linien & Fineline | KishaTattoo',
  description:
    'Linework & Fineline Tattoo in München — botanische Motive, minimalistische Designs, präzise feine Linien. KishaTattoo München. Termin jetzt buchen.',
  path: '/linework-tattoo-muenchen',
  keywords: [
    'linework tattoo münchen',
    'feine linien tattoo münchen',
    'fineline tattoo münchen',
    'minimalistisches tattoo münchen',
    'botanisches tattoo münchen',
    'fine line tattoo munich',
    'linework künstlerin münchen',
    'thin line tattoo münchen',
    'zierliches tattoo münchen',
  ],
})

const GALLERY = [
  { src: 'https://picsum.photos/seed/lw-1/600/700', alt: 'Linework Tattoo München — botanische feine Linien' },
  { src: 'https://picsum.photos/seed/lw-2/600/700', alt: 'Fineline Tattoo München — minimalistisches Design' },
  { src: 'https://picsum.photos/seed/lw-3/600/700', alt: 'Botanisches Linework Tattoo München KishaTattoo' },
  { src: 'https://picsum.photos/seed/lw-4/600/700', alt: 'Feine Linien Tattoo München — Blumen Linework' },
  { src: 'https://picsum.photos/seed/lw-5/600/700', alt: 'Minimalistisches Tattoo München — single needle' },
  { src: 'https://picsum.photos/seed/lw-6/600/700', alt: 'Linework Sleeve München — feine Botanik' },
]

export default function LineworkTattooMuenchen() {
  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        serviceSchema({ name: 'Linework Tattoo München', description: 'Linework und Fineline Tattoo in München — botanische Motive, Minimalismus, feine Linien.', url: '/linework-tattoo-muenchen' })
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Linework Tattoo München', url: '/linework-tattoo-muenchen' }])
      )}} />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        aria-label="Linework Tattoo München — KishaTattoo"
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
          Linework Tattoo<br />München
        </h1>

        {/* Decorative kanji 線 — line */}
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
          線
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
          Feine Linien, klare Aussage. Linework und Fineline Tattoo —
          buchbar in München und Umgebung.
        </p>

        <GNav activePath="/" theme="light" />
      </section>

      {/* ── INTRO ─────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="lw-intro-heading"
        style={{ background: '#F2F2F2', padding: 'clamp(2rem, 4.2vw, 5rem) 0' }}
      >
        <div className="g-container">

          <div className="g-section-header" style={{ alignItems: 'center' }}>
            <span style={{ fontSize: 'var(--g-tag)', color: '#0D0D0D', whiteSpace: 'nowrap', flexShrink: 0 }}>
              [ Linework · Fineline · Botanik ]
            </span>
            <h2
              id="lw-intro-heading"
              style={{
                fontSize: 'var(--g-l)',
                lineHeight: 'var(--g-lh-l)',
                color: '#0D0D0D',
                textAlign: 'center',
                width: 'clamp(18rem, 32.6vw, 470px)',
                flexShrink: 0,
              }}
            >
              Feine Linien, tiefe Bedeutung
            </h2>
            <Link href="/works" style={{ fontSize: 'var(--g-tag)', color: '#0D0D0D', textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0 }}>
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
              Linework-Tattoos leben von Präzision. Eine einzige, perfekt gesetzte Linie kann mehr
              ausdrücken als ein ganzer Komplex aus Flächen und Farben. KishaTattoo setzt in München
              Linework-Designs um, die durch handwerkliche Akkuratheit überzeugen — vom minimalistischen
              Einzelmotiv bis zum botanischen Full-Sleeve.
            </p>
            <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D', width: 'clamp(16rem, 23.3vw, 448px)', flexShrink: 0 }}>
              Fineline-Tattoos sind anspruchsvoll: dünne Linien verzeihen keine Fehler. Die Erfahrung
              aus jahrelanger Irezumi-Praxis — wo Linienführung alles bedeutet — fließt direkt in
              jeden Linework-Auftrag ein. Das Ergebnis: klare, dauerhafte Linien, die auch nach Jahren
              scharf bleiben.
            </p>
          </div>

        </div>
      </section>

      {/* ── GALLERY ───────────────────────────────────────────────────────── */}
      <section
        aria-label="Linework Tattoo Portfolio München"
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
        aria-labelledby="lw-substyle-heading"
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
            <h2 id="lw-substyle-heading" style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D', textAlign: 'center' }}>
              Linework-Varianten
            </h2>
          </div>
          <div className="g-about-steps" style={{ display: 'flex' }}>
            {[
              { title: 'Botanical Linework', body: 'Blumen, Farne, Zweige, Blätter — ausgeführt in einzelnen, präzisen Linien ohne Füllung. Botanische Linework-Tattoos wirken zeitlos elegant und altern dank ihrer Klarheit besonders gut.' },
              { title: 'Fineline / Single Needle', body: 'Die dünnstmögliche Linie, oft mit Single-Needle-Technik gesetzt. Ideal für Details, Schriften, Portraits oder minimalistische Motive, die nah an der Haut bleiben sollen.' },
              { title: 'Minimalismus', body: 'Weniger ist mehr — ein Kreis, ein Strich, eine Form. Minimalistische Tattoos bestechen durch ihre Reduktion. KishaTattoo findet die Essenz deiner Idee und setzt sie mit einem Minimum an Mitteln um.' },
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
          <Link href="/grafik-tattoo-muenchen" style={{ fontSize: 'var(--g-bm)', color: '#0D0D0D', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}>Grafik Tattoo München</Link>
        </div>
      </section>

      <section data-nav-dark style={{ background: '#0D0D0D', padding: 'clamp(2rem, 4.2vw, 5rem) 0' }}>
        <div className="g-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <p style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#F2F2F2', maxWidth: '28rem' }}>
            Dein Linework Tattoo in München
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
