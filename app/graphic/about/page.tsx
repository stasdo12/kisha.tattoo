import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/structured-data'
import { Breadcrumb } from '@/components/shared/Breadcrumb'

export const metadata: Metadata = buildMetadata({
  title: 'About — Graphic Tattoo at Kisha Munich',
  description:
    'Learn about the graphic tattoo direction at Kisha — our philosophy, approach to contemporary tattooing, and how we work with clients to create lasting artwork.',
  path: '/graphic/about',
})

const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Graphic Tattoos', url: '/graphic' },
  { name: 'About', url: '/graphic/about' },
]

export default function GraphicAboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema(breadcrumbs)),
        }}
      />

      <main id="main-content">
        {/* HERO */}
        <section
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            minHeight: '70vh',
            overflow: 'hidden',
          }}
          aria-label="About graphic tattooing"
        >
          <div
            style={{
              position: 'relative',
              overflow: 'hidden',
              minHeight: '400px',
            }}
          >
            {/* Content image — needs descriptive alt */}
            <Image
              src="https://picsum.photos/seed/studio-kisha/900/900"
              alt="Kisha tattoo studio in Munich — graphic tattoo workspace"
              fill
              priority
              style={{ objectFit: 'cover' }}
              sizes="50vw"
            />
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: 'clamp(2rem, 5vw, 6rem)',
            }}
          >
            <Breadcrumb items={breadcrumbs} />
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                lineHeight: 1.1,
                marginBottom: 'var(--space-md)',
              }}
            >
              The Graphic Direction
            </h1>
            <p
              style={{
                color: 'var(--color-text-muted)',
                lineHeight: 1.8,
                fontSize: '1.05rem',
                marginBottom: 'var(--space-md)',
              }}
            >
              At Kisha, graphic tattooing exists alongside the Japanese tradition —
              not in opposition to it. Both share an obsession with precision, composition,
              and permanence.
            </p>
            <p
              style={{
                color: 'var(--color-text-muted)',
                lineHeight: 1.8,
                marginBottom: 'var(--space-lg)',
              }}
            >
              The graphic work borrows from illustration, architecture, and graphic design
              to produce tattoos that feel complete — perfectly scaled, perfectly placed,
              immediately striking.
            </p>
            <Link href="/graphic/contact" className="btn btn-primary">
              Work With Us
            </Link>
          </div>
        </section>

        {/* PHILOSOPHY */}
        <section className="container section" aria-labelledby="philosophy-heading">
          <h2
            id="philosophy-heading"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              marginBottom: 'var(--space-lg)',
              maxWidth: '20ch',
            }}
          >
            What we believe about graphic tattooing
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: 'var(--space-lg)',
            }}
          >
            {[
              {
                title: 'Composition first.',
                body: 'A tattoo must work as a complete composition — on the body, in motion, and at every stage of life.',
              },
              {
                title: 'Originality is non-negotiable.',
                body: 'We never repeat a design. Every piece is created specifically for you and owned entirely by you.',
              },
              {
                title: 'Restraint is a strength.',
                body: 'We believe in knowing when to stop. Negative space is not emptiness — it is part of the design.',
              },
            ].map((item) => (
              <article
                key={item.title}
                style={{ borderTop: '2px solid var(--color-text)', paddingTop: '1.5rem' }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.1rem',
                    marginBottom: '0.75rem',
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>{item.body}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
