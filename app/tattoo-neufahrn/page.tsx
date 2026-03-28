/**
 * TATTOO NEUFAHRN — Location landing page
 * Target keyword: "tattoo neufahrn" + "tattoo neufahrn bei freising"
 * Design: Graphic design system — matches existing pages
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
  title: 'Tattoo Neufahrn — KishaTattoo München & Umgebung',
  description:
    'Tattoo in Neufahrn bei Freising? KishaTattoo München — 25 Minuten Fahrtzeit. Japanisches Irezumi, Grafik Tattoo, Linework. Individuelles Custom-Design. Termin buchen.',
  path: '/tattoo-neufahrn',
  keywords: [
    'tattoo neufahrn',
    'tattoo neufahrn bei freising',
    'tätowierer neufahrn',
    'tattoo münchen neufahrn',
    'tattoo studio neufahrn',
  ],
})

const FAQ_NEUFAHRN = [
  {
    question: 'Gibt es ein gutes Tattoo Studio in Neufahrn?',
    answer: 'In Neufahrn bei Freising gibt es kein spezialisiertes Tattoo-Studio für hochwertige Custom-Arbeiten. Das nächste empfehlenswerte Atelier ist KishaTattoo in München — ca. 25 Minuten mit dem Auto oder der S1-Bahn.',
  },
  {
    question: 'Wie komme ich von Neufahrn nach KishaTattoo München?',
    answer: 'Von Neufahrn bei Freising nach München fährst du mit der S1 Richtung München in ca. 25–30 Minuten oder mit dem Auto über die A92/A9. Über die Autobahn Anschluss A9/Neufahrn sind es ca. 25 Minuten.',
  },
  {
    question: 'Welche Tattoo-Stile bietet KishaTattoo für Kunden aus Neufahrn?',
    answer: 'Alle unsere Stile stehen für Kunden aus Neufahrn zur Verfügung: Japanisches Irezumi, Fineline Tattoo und Grafik/Blackwork. Jedes Motiv ist ein Custom-Design. Kostenlose Erstberatung per WhatsApp oder Instagram.',
  },
]

export default function TattooNeufahrn() {
  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        locationServiceSchema({ cityName: 'Neufahrn', citySlug: 'neufahrn', travelMinutes: 25 })
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Tattoo Neufahrn', url: '/tattoo-neufahrn' }])
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        faqSchema(FAQ_NEUFAHRN.map((f) => ({ question: f.question, answer: f.answer })))
      )}} />

      <section
        aria-label="Tattoo Neufahrn — KishaTattoo München"
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
          Tattoo Neufahrn —<br />KishaTattoo München
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
          Aus Neufahrn bei Freising in ca. 25 Minuten nach München —
          zu KishaTattoo für Irezumi, Grafik und Linework.
        </p>

        <GNav activePath="/" theme="light" />
      </section>

      <section style={{ background: '#F2F2F2', padding: 'clamp(2rem, 4.2vw, 5rem) 0' }}>
        <div className="g-container">

          <div style={{ paddingBottom: '1.25rem', borderBottom: '2px solid #0D0D0D', marginBottom: 'clamp(1.5rem, 2.5vw, 3rem)' }}>
            <h2 style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D' }}>
              Tattoo in der Nähe von Neufahrn
            </h2>
          </div>

          <div className="g-text-cols" style={{ display: 'flex', justifyContent: 'flex-end', gap: 'clamp(2rem, 4.2vw, 5rem)' }}>
            <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D', width: 'clamp(16rem, 23.3vw, 448px)', flexShrink: 0 }}>
              Neufahrn bei Freising liegt direkt an der Verbindungsachse zwischen
              Flughafen München und der Stadtmitte. KishaTattoo in München ist ideal
              erreichbar — für Kunden aus Neufahrn, die kein Kompromiss beim Tattoo-Handwerk eingehen.
            </p>
            <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D', width: 'clamp(16rem, 23.3vw, 448px)', flexShrink: 0 }}>
              Japanisches Tattoo, Grafik und Linework — alle Stile buchbar.
              Custom-Design für jedes Projekt, keine Standardmotive.
              25 Minuten von Neufahrn nach München zu KishaTattoo.
            </p>
          </div>

          <div style={{ display: 'flex', gap: 'clamp(1rem, 2vw, 2rem)', marginTop: 'clamp(2rem, 3.5vw, 4rem)', flexWrap: 'wrap' }}>
            {[
              { href: '/japanisches-tattoo-muenchen', label: 'Japanisches Tattoo' },
              { href: '/grafik-tattoo-muenchen',      label: 'Grafik Tattoo' },
              { href: '/linework-tattoo-muenchen',    label: 'Linework Tattoo' },
              { href: '/booking',                     label: 'Termin buchen' },
            ].map((link) => (
              <Link key={link.href} href={link.href} style={{ display: 'inline-block', padding: '0.6rem 1.5rem', border: '1px solid #0D0D0D', color: '#0D0D0D', fontSize: 'var(--g-bm)', textDecoration: 'none' }}>
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
              FAQ — Tattoo Neufahrn
            </h2>
            {FAQ_NEUFAHRN.map((item, i) => (
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
