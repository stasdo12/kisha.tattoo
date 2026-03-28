/**
 * TATTOO ECHING — Location landing page
 * Target keyword: "tattoo eching" + "tätowierer eching"
 * Design: Graphic design system — matches existing pages
 */
import type { Metadata } from 'next'
import Link from 'next/link'
import { GWorkImage } from '@/components/graphic/GWorkImage'
import { buildMetadata } from '@/lib/seo'
import { locationServiceSchema, breadcrumbSchema, faqSchema } from '@/lib/structured-data'
import { GLogoBar } from '@/components/graphic/GLogoBar'
import { GNav } from '@/components/graphic/GNav'
import { GFooter } from '@/components/graphic/GFooter'

export const metadata: Metadata = buildMetadata({
  title: 'Tattoo Eching — KishaTattoo München & Umgebung',
  description:
    'Tattoo in Eching? KishaTattoo ist in München erreichbar — 20 Minuten von Eching. Japanisches Irezumi, Grafik Tattoo, Linework. Termin jetzt buchen.',
  path: '/tattoo-eching',
  keywords: [
    'tattoo eching',
    'tätowierer eching',
    'tattoo studio eching',
    'tattoo münchen eching',
    'tattoo neufahrn eching',
    'tattoo münchen nord',
  ],
})

const FAQ_ECHING = [
  {
    question: 'Gibt es ein Tattoo Studio in Eching?',
    answer: 'In Eching selbst gibt es kein spezialisiertes Tattoo-Studio. Das nächste hochwertige Tattoo-Studio mit japanischem Irezumi, Fineline und Grafik-Stil ist KishaTattoo in München — ca. 20 Minuten mit dem Auto oder der S-Bahn.',
  },
  {
    question: 'Wie komme ich von Eching nach KishaTattoo München?',
    answer: 'Von Eching nach München fährst du entweder mit der S1 in ca. 25 Minuten oder mit dem Auto über die A9 in ca. 20 Minuten. Das Atelier liegt zentral und ist gut mit dem ÖPNV erreichbar.',
  },
  {
    question: 'Welche Tattoo-Stile bietet KishaTattoo für Kunden aus Eching?',
    answer: 'Für Kunden aus Eching bieten wir alle unsere Stile an: Japanisches Irezumi, Fineline Tattoo und Grafik/Blackwork. Alle Designs sind Custom — keine Standardmotive. Kostenlose Beratung per WhatsApp oder Instagram.',
  },
]

export default function TattooEching() {
  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        locationServiceSchema({ cityName: 'Eching', citySlug: 'eching', travelMinutes: 20 })
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Tattoo Eching', url: '/tattoo-eching' }])
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        faqSchema(FAQ_ECHING.map((f) => ({ question: f.question, answer: f.answer })))
      )}} />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        aria-label="Tattoo Eching — KishaTattoo München"
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
          Tattoo Eching —<br />KishaTattoo München
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
          Aus Eching in ca. 20 Minuten nach München —
          zu KishaTattoo für Irezumi, Grafik und Linework.
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
              Tattoo in der Nähe von Eching
            </h2>
          </div>

          <div className="g-text-cols" style={{ display: 'flex', justifyContent: 'flex-end', gap: 'clamp(2rem, 4.2vw, 5rem)' }}>
            <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D', width: 'clamp(16rem, 23.3vw, 448px)', flexShrink: 0 }}>
              Viele Kunden aus Eching, Neufahrn und dem Münchner Norden kommen regelmäßig
              zu KishaTattoo — der Weg nach München dauert keine 20 Minuten und lohnt sich
              für ein Tattoo, das ein Leben lang hält.
            </p>
            <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D', width: 'clamp(16rem, 23.3vw, 448px)', flexShrink: 0 }}>
              Spezialisiert auf japanisches Irezumi, Grafik-Tattoo und Linework —
              mit dem Anspruch auf handwerkliche Exzellenz, die in der Region ihresgleichen sucht.
              Buchung online, Atelier in München.
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
              { href: '/grafik-tattoo-muenchen',      label: 'Grafik Tattoo' },
              { href: '/linework-tattoo-muenchen',    label: 'Linework Tattoo' },
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
          <div style={{ marginTop: 'clamp(2rem, 3.5vw, 4rem)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {/* Row 1: left large + right 2×2 */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <GWorkImage
                src="/images/work/middle-graphic-body-flower-tattoo.jpg"
                alt="Grafik Blumen Körper Tattoo München — Kisha"
                sizes="50vw"
                style={{ height: 'clamp(720px, 50vw, 820px)' }}
              />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '12px', height: 'clamp(720px, 50vw, 820px)' }}>
                <GWorkImage src="/images/work/4x4-japan-fox-tattoo-graphic.jpg" alt="Japanisches Fuchs Tattoo München — Kisha"  sizes="25vw" />
                <GWorkImage src="/images/work/4x4-rabbit-tattoo-graphic.jpg"    alt="Grafik Hase Tattoo München — Kisha"         sizes="25vw" />
                <GWorkImage src="/images/work/4x4-sakura-tattoo.jpg"            alt="Sakura Tattoo München — Kisha"              sizes="25vw" />
                <GWorkImage src="/images/work/4x4-birds-tattoo-graphic.jpg"     alt="Grafik Vögel Tattoo München — Kisha"        sizes="25vw" />
              </div>
            </div>
            <Link href="/works" style={{ fontSize: 'var(--g-bm)', color: '#0D0D0D', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}>
              Alle Arbeiten ansehen →
            </Link>
          </div>

          {/* FAQ */}
          <div style={{ marginTop: 'clamp(2rem, 3.5vw, 4rem)' }}>
            <h2 style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D', marginBottom: '1.5rem', paddingBottom: '1.25rem', borderBottom: '2px solid #0D0D0D' }}>
              FAQ — Tattoo Eching
            </h2>
            {FAQ_ECHING.map((item, i) => (
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
            <Link href="/tattoo-neufahrn" style={{ fontSize: 'var(--g-bm)', color: '#0D0D0D', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}>Tattoo Neufahrn</Link>
            <Link href="/tattoo-preise-muenchen" style={{ fontSize: 'var(--g-bm)', color: '#0D0D0D', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}>Tattoo Preise München</Link>
          </div>

        </div>
      </section>

      <GFooter />
    </main>
  )
}
