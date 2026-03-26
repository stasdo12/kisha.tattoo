/**
 * JAPANISCHES TATTOO MÜNCHEN — Style landing page
 * Target keyword: "japanisches tattoo münchen" + "irezumi münchen"
 * Design: Graphic design system — matches existing pages
 */
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/structured-data'
import { GLogoBar } from '@/components/graphic/GLogoBar'
import { GNav } from '@/components/graphic/GNav'
import { GFooter } from '@/components/graphic/GFooter'

export const metadata: Metadata = buildMetadata({
  title: 'Japanisches Tattoo München — Irezumi & Horimono | KishaTattoo',
  description:
    'Traditionelles japanisches Tattoo in München — Irezumi, Koi, Drachen, Oni-Masken. KishaTattoo: 5 Jahre Erfahrung in klassischer Irezumi-Technik. Termin jetzt buchen.',
  path: '/japanisches-tattoo-muenchen',
  keywords: [
    'japanisches tattoo münchen',
    'irezumi münchen',
    'japanisches tattoo künstlerin münchen',
    'horimono münchen',
    'koi tattoo münchen',
    'drachen tattoo münchen',
    'oni tattoo münchen',
    'japanisches sleeve tattoo münchen',
    'tebori münchen',
    'japanese tattoo munich',
  ],
})

const GALLERY = [
  { src: 'https://picsum.photos/seed/jp-1/600/700', alt: 'Japanisches Irezumi Rückenstück München — Drachen und Wellen' },
  { src: 'https://picsum.photos/seed/jp-2/600/700', alt: 'Koi Tattoo München — traditioneller Irezumi Stil' },
  { src: 'https://picsum.photos/seed/jp-3/600/700', alt: 'Oni Maske Tattoo München — japanisches Blackwork' },
  { src: 'https://picsum.photos/seed/jp-4/600/700', alt: 'Japanischer Sleeve München — Kirschblüten und Tiger' },
  { src: 'https://picsum.photos/seed/jp-5/600/700', alt: 'Irezumi Hannya Maske München' },
  { src: 'https://picsum.photos/seed/jp-6/600/700', alt: 'Japanisches Rückenstück München — Phönix Tattoo' },
]

const FAQ = [
  {
    question: 'Was kostet ein japanisches Tattoo in München?',
    answer: 'Japanische Irezumi-Arbeiten werden nach Stunden abgerechnet. Kleine Motive starten bei ca. 200–300 €, große Backpieces oder Sleeves ab 800 € pro Sitzung. Jedes Projekt wird individuell kalkuliert — kontaktiere uns für ein persönliches Angebot.',
  },
  {
    question: 'Wie lange dauert ein japanisches Sleeve Tattoo?',
    answer: 'Ein vollständiger Sleeve im klassischen Irezumi-Stil benötigt typischerweise 20–40 Stunden, aufgeteilt auf mehrere Sitzungen über mehrere Monate. Die Heilungszeit zwischen den Sitzungen ist Teil des Prozesses.',
  },
  {
    question: 'Was ist der Unterschied zwischen Irezumi und modernem japanischen Tattoo?',
    answer: 'Traditionelles Irezumi folgt einer jahrhundertealten Kompositionslehre: Motive wie Koi, Drachen oder Oni werden nach den Muskeln des Körpers ausgerichtet und in klare Flächen und Übergänge gegliedert. Modernes "Japanese Style" ist oft freier interpretiert.',
  },
]

export default function JapanischesTattooMuenchen() {
  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        serviceSchema({ name: 'Japanisches Tattoo München', description: 'Traditionelles Irezumi und japanisches Tattoo in München — Koi, Drachen, Oni, Sleeve, Backpiece.', url: '/japanisches-tattoo-muenchen' })
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Japanisches Tattoo München', url: '/japanisches-tattoo-muenchen' }])
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        faqSchema(FAQ)
      )}} />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        aria-label="Japanisches Tattoo München — KishaTattoo"
        data-nav-dark
        style={{
          position: 'relative',
          height: '100dvh',
          minHeight: '780px',
          overflow: 'hidden',
          background: '#0D0D0D',
        }}
      >
        <Image
          src="https://picsum.photos/seed/jp-hero/1920/1080"
          alt="Japanisches Irezumi Tattoo München — KishaTattoo"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          sizes="100vw"
        />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'rgba(13,13,13,0.5)', zIndex: 1 }} />

        <GLogoBar theme="dark" />

        <h1
          style={{
            position: 'absolute',
            top: '72px',
            left: 'var(--g-pad)',
            width: 'clamp(18rem, 52vw, 900px)',
            fontSize: 'var(--g-xl)',
            lineHeight: 'var(--g-lh-xl)',
            color: '#F2F2F2',
            zIndex: 2,
          }}
        >
          Japanisches Tattoo<br />München
        </h1>

        <p
          style={{
            position: 'absolute',
            bottom: '24px',
            right: 'var(--g-pad)',
            width: 'clamp(16rem, 28vw, 420px)',
            fontSize: 'var(--g-bm)',
            lineHeight: 1.5,
            color: 'rgba(242,242,242,0.8)',
            zIndex: 2,
            textAlign: 'right',
          }}
        >
          Traditionelles Irezumi — großformatige Werke, die eine Geschichte erzählen.
          Buchbar in München und Umgebung.
        </p>

        <GNav activePath="/" theme="dark" />

        {/* Kanji 刺青 — Irezumi */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: 'clamp(30px, 4.6vw, 60px)',
            left: 'var(--g-pad)',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            width: '170px',
          }}
        >
          <span style={{ fontSize: 'clamp(48px, 4.44vw, 64px)', lineHeight: 1, color: '#F2F2F2' }}>刺青</span>
          <span style={{ fontSize: 'var(--g-tag)', lineHeight: 1.4, color: 'rgba(242,242,242,0.55)' }}>
            Irezumi — das in die Haut gestochene Bild
          </span>
        </div>
      </section>

      {/* ── INTRO TEXT ────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="jp-intro-heading"
        style={{ background: '#F2F2F2', padding: 'clamp(2rem, 4.2vw, 5rem) 0' }}
      >
        <div className="g-container">

          <div className="g-section-header" style={{ alignItems: 'center' }}>
            <span style={{ fontSize: 'var(--g-tag)', color: '#0D0D0D', whiteSpace: 'nowrap', flexShrink: 0 }}>
              [ Irezumi · Horimono · Tebori ]
            </span>
            <h2
              id="jp-intro-heading"
              style={{
                fontSize: 'var(--g-l)',
                lineHeight: 'var(--g-lh-l)',
                color: '#0D0D0D',
                textAlign: 'center',
                width: 'clamp(18rem, 32.6vw, 470px)',
                flexShrink: 0,
              }}
            >
              Traditionelles Irezumi in München
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
              Japanisches Tatowieren — bekannt als Irezumi (刺青) oder Horimono (彫り物) — ist eine der
              ältesten und komplexesten Tattoo-Traditionen der Welt. In München bietet KishaTattoo
              authentisches Irezumi nach klassischer Kompositionslehre: Motive wie Koi, Drachen, Oni-Masken
              und Kirschblüten, ausgerichtet an der natürlichen Muskulatur des Körpers.
            </p>
            <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D', width: 'clamp(16rem, 23.3vw, 448px)', flexShrink: 0 }}>
              Jedes japanische Tattoo ist ein mehrjähriges Projekt. KishaTattoo spezialisiert sich auf
              großformatige Irezumi-Arbeiten: vollständige Rückenstücke, Sleeves und Bodysuits. Jede
              Linie, jeder Übergang wird mit der Geduld und Präzision ausgeführt, die diese Kunstform verlangt.
            </p>
          </div>

        </div>
      </section>

      {/* ── GALLERY GRID ──────────────────────────────────────────────────── */}
      <section
        aria-label="Japanisches Tattoo Portfolio München"
        style={{
          background: '#F2F2F2',
          paddingLeft: 'var(--g-pad)',
          paddingRight: 'var(--g-pad)',
          paddingBottom: 'clamp(2rem, 4.2vw, 5rem)',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
          }}
        >
          {GALLERY.map((img) => (
            <div
              key={img.src}
              style={{ position: 'relative', aspectRatio: '6/7', overflow: 'hidden' }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                style={{ objectFit: 'cover' }}
                sizes="33vw"
              />
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 'clamp(1.5rem, 2.5vw, 2.5rem)' }}>
          <Link
            href="/works"
            style={{ fontSize: 'var(--g-bm)', color: '#0D0D0D', textDecoration: 'underline', textUnderlineOffset: '4px' }}
          >
            Alle Arbeiten ansehen →
          </Link>
        </div>
      </section>

      {/* ── MOTIVES ───────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="jp-motive-heading"
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
            <h2
              id="jp-motive-heading"
              style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D', textAlign: 'center' }}
            >
              Klassische japanische Motive
            </h2>
          </div>

          <div className="g-about-steps" style={{ display: 'flex' }}>
            {[
              { title: 'Koi & Drachen', body: 'Koi symbolisiert Ausdauer und Transformation. Der Drachen (Ryū) steht für Stärke und Weisheit. Beide sind Kernmotive des klassischen Irezumi — in München von KishaTattoo authentisch umgesetzt.' },
              { title: 'Oni & Hannya', body: 'Oni-Masken und Hannya stehen für die duale Natur des Menschen — Stärke, Furcht, verlorene Liebe. Charakterstarke Motive, die auf dem Körper leben und Geschichten erzählen.' },
              { title: 'Natur & Jahreszeiten', body: 'Kirschblüten (Sakura), Chrysanthemen, Pfingstrosen, Wellen (Nami) und Blitze (Raijin) bilden den kompositorischen Rahmen, der ein Irezumi zu einem Gesamtkunstwerk macht.' },
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

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="jp-faq-heading"
        style={{ background: '#F2F2F2', padding: 'clamp(2rem, 4.2vw, 5rem) 0' }}
      >
        <div className="g-container">
          <h2
            id="jp-faq-heading"
            style={{
              fontSize: 'var(--g-l)',
              lineHeight: 'var(--g-lh-l)',
              color: '#0D0D0D',
              marginBottom: 'clamp(1.5rem, 2.5vw, 3rem)',
              paddingBottom: '1.25rem',
              borderBottom: '2px solid #0D0D0D',
            }}
          >
            Häufige Fragen
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {FAQ.map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 'clamp(2rem, 4vw, 5rem)',
                  padding: 'clamp(1rem, 1.8vw, 1.75rem) 0',
                  borderBottom: '1px solid rgba(13,13,13,0.2)',
                }}
              >
                <h3 style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D' }}>{item.question}</h3>
                <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: 'rgba(13,13,13,0.75)' }}>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED STYLES ────────────────────────────────────────────────── */}
      <section
        style={{ background: '#F2F2F2', padding: 'clamp(1.5rem, 2.5vw, 3rem) 0' }}
      >
        <div className="g-container" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <span style={{ fontSize: 'var(--g-tag)', color: 'rgba(13,13,13,0.5)' }}>Weitere Stile →</span>
          <Link href="/grafik-tattoo-muenchen" style={{ fontSize: 'var(--g-bm)', color: '#0D0D0D', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}>Grafik Tattoo München</Link>
          <Link href="/linework-tattoo-muenchen" style={{ fontSize: 'var(--g-bm)', color: '#0D0D0D', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}>Linework Tattoo München</Link>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section
        data-nav-dark
        style={{ background: '#0D0D0D', padding: 'clamp(2rem, 4.2vw, 5rem) 0' }}
      >
        <div className="g-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <p style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#F2F2F2', maxWidth: '28rem' }}>
            Dein japanisches Tattoo in München
          </p>
          <Link
            href="/booking"
            style={{
              display: 'inline-block',
              padding: '0.875rem 2.5rem',
              background: '#F2F2F2',
              color: '#0D0D0D',
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
