/**
 * TATTOO DACHAU — Location landing page
 * Primary keyword: "tattoo dachau" (110/mo, KD 5)
 * Secondary: "tattoo studio dachau", "tätowierer dachau"
 */
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { locationServiceSchema, breadcrumbSchema, faqSchema } from '@/lib/structured-data'
import { GLogoBar } from '@/components/graphic/GLogoBar'
import { GNav } from '@/components/graphic/GNav'
import { GFooter } from '@/components/graphic/GFooter'

export const metadata: Metadata = buildMetadata({
  title: 'Tattoo Dachau — KishaTattoo München & Umgebung',
  description:
    'Tattoo in Dachau? KishaTattoo München ist ca. 30 Minuten entfernt. Japanisches Irezumi, Fineline & Grafik Tattoo. Custom-Design ohne Kompromisse. Termin jetzt buchen.',
  path: '/tattoo-dachau',
  keywords: [
    'tattoo dachau',
    'tätowierer dachau',
    'tattoo studio dachau',
    'tattoo münchen dachau',
    'tattoo münchen nordwest',
    'tattoo dachau münchen',
  ],
})

const FAQ = [
  {
    question: 'Gibt es ein gutes Tattoo Studio in Dachau?',
    answer: 'Für hochwertige Custom-Tattoos in Japanischem, Fineline oder Grafik-Stil empfehlen wir KishaTattoo in München — ca. 30 Minuten von Dachau entfernt. Erreichbar per S2-Bahn oder Auto über die B471.',
  },
  {
    question: 'Wie komme ich von Dachau nach KishaTattoo München?',
    answer: 'Von Dachau nach München fährst du mit der S2 in ca. 25–30 Minuten direkt in die Innenstadt, oder mit dem Auto über die B471 in ca. 30 Minuten. Das Atelier liegt zentral und ist gut erreichbar.',
  },
  {
    question: 'Welche Tattoo-Stile bietet KishaTattoo für Kunden aus Dachau?',
    answer: 'Für Kunden aus Dachau und Umgebung bieten wir Japanisches Irezumi, Fineline Tattoo und Grafik/Blackwork — alles als Custom-Design, keine Standardmotive. Kostenlose Erstberatung per WhatsApp oder Instagram.',
  },
]

export default function TattooDachau() {
  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        locationServiceSchema({ cityName: 'Dachau', citySlug: 'dachau', travelMinutes: 30 })
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Tattoo Dachau', url: '/tattoo-dachau' }])
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        faqSchema(FAQ.map((f) => ({ question: f.question, answer: f.answer })))
      )}} />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        aria-label="Tattoo Dachau — KishaTattoo München"
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
          Tattoo Dachau —<br />KishaTattoo München
        </h1>

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
            opacity: 0.07,
            userSelect: 'none',
            pointerEvents: 'none',
          }}
        >
          彫
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
          Aus Dachau in ca. 30 Minuten nach München —
          zu KishaTattoo für Irezumi, Fineline und Grafik.
        </p>

        <GNav activePath="/" theme="light" />
      </section>

      {/* ── CONTENT ───────────────────────────────────────────────────────── */}
      <section
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
            <h2 style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D' }}>
              Tattoo in der Nähe von Dachau
            </h2>
          </div>

          <div className="g-text-cols" style={{ display: 'flex', justifyContent: 'flex-end', gap: 'clamp(2rem, 4.2vw, 5rem)' }}>
            <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D', width: 'clamp(16rem, 23.3vw, 448px)', flexShrink: 0 }}>
              Kein auf Custom-Tattoo spezialisiertes Atelier in Dachau?
              KishaTattoo ist in München über die S2 oder die B471 schnell erreichbar.
              Kunden aus Dachau, Karlsfeld und dem gesamten Münchner Nordwesten sind
              herzlich willkommen.
            </p>
            <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D', width: 'clamp(16rem, 23.3vw, 448px)', flexShrink: 0 }}>
              Japanisches Irezumi, Fineline Tattoo und Grafik/Blackwork — alle Stile buchbar.
              Jedes Projekt beginnt mit einem individuellen Entwurf. Buchung bequem per
              WhatsApp oder Instagram, kein langes Warten.
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              gap: 'clamp(1rem, 2vw, 2rem)',
              marginTop: 'clamp(2rem, 3.5vw, 4rem)',
              flexWrap: 'wrap',
            }}
          >
            {[
              { href: '/japanisches-tattoo-muenchen', label: 'Japanisches Tattoo' },
              { href: '/linework-tattoo-muenchen',    label: 'Fineline Tattoo' },
              { href: '/grafik-tattoo-muenchen',      label: 'Grafik Tattoo' },
              { href: '/booking',                     label: 'Termin buchen' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: 'inline-block',
                  padding: '0.6rem 1.5rem',
                  border: '1px solid #0D0D0D',
                  color: '#0D0D0D',
                  fontSize: 'var(--g-bm)',
                  textDecoration: 'none',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Gallery preview */}
          <div style={{ marginTop: 'clamp(2rem, 3.5vw, 4rem)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '1rem' }}>
              {[
                { src: '/images/work/4x4-japan-fox-tattoo-graphic.jpg', alt: 'Japanisches Fuchs Tattoo München — Kisha' },
                { src: '/images/work/middle-graphic-body-flower-tattoo.JPG', alt: 'Grafik Blumen Körper Tattoo München — Kisha' },
                { src: '/images/work/4x4-sakura-tattoo.jpg', alt: 'Sakura Tattoo München — Kisha' },
              ].map((img) => (
                <div key={img.src} style={{ position: 'relative', aspectRatio: '1/1', overflow: 'hidden' }}>
                  <Image src={img.src} alt={img.alt} fill style={{ objectFit: 'cover' }} sizes="33vw" />
                </div>
              ))}
            </div>
            <Link href="/works" style={{ fontSize: 'var(--g-bm)', color: '#0D0D0D', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}>
              Alle Arbeiten ansehen →
            </Link>
          </div>

          {/* FAQ */}
          <div style={{ marginTop: 'clamp(2rem, 3.5vw, 4rem)' }}>
            <h2 style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D', marginBottom: '1.5rem', paddingBottom: '1.25rem', borderBottom: '2px solid #0D0D0D' }}>
              FAQ — Tattoo Dachau
            </h2>
            {FAQ.map((item, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(2rem, 4vw, 5rem)', padding: 'clamp(1rem, 1.8vw, 1.75rem) 0', borderBottom: '1px solid rgba(13,13,13,0.2)' }}>
                <h3 style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D' }}>{item.question}</h3>
                <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: 'rgba(13,13,13,0.75)' }}>{item.answer}</p>
              </div>
            ))}
          </div>

          {/* Related location pages */}
          <div style={{ marginTop: 'clamp(1.5rem, 2.5vw, 3rem)', display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ fontSize: 'var(--g-tag)', color: 'rgba(13,13,13,0.5)' }}>Weitere Seiten →</span>
            <Link href="/tattoo-freising" style={{ fontSize: 'var(--g-bm)', color: '#0D0D0D', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}>Tattoo Freising</Link>
            <Link href="/tattoo-eching" style={{ fontSize: 'var(--g-bm)', color: '#0D0D0D', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}>Tattoo Eching</Link>
            <Link href="/tattoo-preise-muenchen" style={{ fontSize: 'var(--g-bm)', color: '#0D0D0D', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}>Tattoo Preise München</Link>
          </div>

        </div>
      </section>

      <GFooter />
    </main>
  )
}
