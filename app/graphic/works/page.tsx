import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { buildMetadata, KEYWORDS } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/structured-data'
import { Breadcrumb } from '@/components/shared/Breadcrumb'
import { GRAPHIC_WORKS } from '@/content/graphic'

export const metadata: Metadata = buildMetadata({
  title: 'Graphic Tattoo Portfolio — Works by Kisha Munich',
  description:
    'Full portfolio of graphic tattoos by Kisha: blackwork, fine-line, geometric, and illustrative pieces. All custom work created in Munich.',
  path: '/graphic/works',
  keywords: [...KEYWORDS.graphic, 'tattoo portfolio munich', 'graphic tattoo gallery'],
})

const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Graphic Tattoos', url: '/graphic' },
  { name: 'Works', url: '/graphic/works' },
]

export default function GraphicWorksPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema(breadcrumbs)),
        }}
      />

      <main id="main-content">
        <div className="container section">
          <Breadcrumb items={breadcrumbs} />

          <header style={{ marginBottom: 'var(--space-xl)' }}>
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                marginBottom: '0.5rem',
              }}
            >
              Works
            </h1>
            <p style={{ color: 'var(--color-text-muted)' }}>
              {GRAPHIC_WORKS.length} pieces — all custom, never repeated.
            </p>
          </header>

          <div
            style={{
              columns: '3 280px',
              gap: '1rem',
            }}
          >
            {GRAPHIC_WORKS.map((work) => (
              <article
                key={work.id}
                style={{
                  breakInside: 'avoid',
                  marginBottom: '1rem',
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '2px',
                }}
              >
                <Image
                  src={work.src}
                  alt={work.alt}
                  width={600}
                  height={750}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div
                  style={{
                    padding: '0.75rem',
                    borderTop: '1px solid var(--color-border)',
                  }}
                >
                  <h2 style={{ fontSize: '0.875rem', fontWeight: 600 }}>{work.title}</h2>
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{work.year}</p>
                </div>
              </article>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 'var(--space-xl)' }}>
            <Link href="/graphic/contact" className="btn btn-primary">
              Commission a Piece
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
