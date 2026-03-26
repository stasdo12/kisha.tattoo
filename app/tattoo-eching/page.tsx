/**
 * TATTOO ECHING — Location landing page
 * Target keyword: "tattoo eching" + "tätowierer eching"
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

export default function TattooEching() {
  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        locationServiceSchema({ cityName: 'Eching', citySlug: 'eching', travelMinutes: 20 })
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Tattoo Eching', url: '/tattoo-eching' }])
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
              Kein eigenes Tattoo-Studio in Eching, das deinen Ansprüchen gerecht wird?
              KishaTattoo ist in München erreichbar und arbeitet regelmäßig mit Kunden
              aus Eching, Neufahrn und dem gesamten Münchner Norden.
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

        </div>
      </section>

      <GFooter />
    </main>
  )
}
