import type { Metadata } from 'next'
import { buildMetadata, KEYWORDS } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/structured-data'
import { Breadcrumb } from '@/components/shared/Breadcrumb'
import { GraphicContactForm } from '@/components/graphic/GraphicContactForm'
import { SITE } from '@/content/site'

export const metadata: Metadata = buildMetadata({
  title: 'Contact — Book a Graphic Tattoo in Munich',
  description:
    'Get in touch with Kisha to discuss your graphic tattoo project. Free consultation, custom designs only. Based in Munich.',
  path: '/graphic/contact',
  keywords: [...KEYWORDS.graphic, 'contact tattoo artist munich', 'graphic tattoo inquiry'],
})

const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Graphic Tattoos', url: '/graphic' },
  { name: 'Contact', url: '/graphic/contact' },
]

export default function GraphicContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema(breadcrumbs)),
        }}
      />

      <main id="main-content">
        <div
          className="container section"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 380px)',
            gap: 'var(--space-xl)',
            alignItems: 'start',
          }}
        >
          <div>
            <Breadcrumb items={breadcrumbs} />
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                lineHeight: 1.05,
                marginBottom: 'var(--space-md)',
              }}
            >
              Start a<br />Project
            </h1>
            <p
              style={{
                color: 'var(--color-text-muted)',
                maxWidth: '50ch',
                lineHeight: 1.7,
                marginBottom: 'var(--space-lg)',
              }}
            >
              Whether you have a reference image, a mood board, or just a feeling —
              send it over. Every collaboration starts with listening.
            </p>
            <GraphicContactForm />
          </div>

          <aside
            style={{
              background: 'var(--color-card)',
              border: '1px solid var(--color-border)',
              borderRadius: '4px',
              padding: 'var(--space-md)',
            }}
          >
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', marginBottom: '1rem' }}>
              Response Time
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              We respond to all inquiries within 48 hours. For urgent requests, email directly.
            </p>
            <a
              href={`mailto:${SITE.contact.email}`}
              style={{ color: 'var(--color-text)', fontWeight: 600, fontSize: '0.9rem' }}
            >
              {SITE.contact.email}
            </a>
          </aside>
        </div>
      </main>
    </>
  )
}
