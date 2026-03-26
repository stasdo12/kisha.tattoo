/**
 * TATTOO NEUFAHRN — Location landing page
 * Target keyword: "tattoo neufahrn" + "tattoo neufahrn bei freising"
 * Design: Graphic design system — matches existing pages
 */
import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { locationServiceSchema, breadcrumbSchema } from '@/lib/structured-data'
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

export default function TattooNeufahrn() {
  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        locationServiceSchema({ cityName: 'Neufahrn', citySlug: 'neufahrn', travelMinutes: 25 })
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Tattoo Neufahrn', url: '/tattoo-neufahrn' }])
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

        </div>
      </section>

      <GFooter />
    </main>
  )
}
