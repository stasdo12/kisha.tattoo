/**
 * AFTERCARE PAGE — Informational SEO page
 *
 * Rendering: SSG
 * Reason: Evergreen content. High search volume for "tattoo aftercare" queries.
 * Builds trust, supports long-tail SEO, captures post-intent searches.
 */
import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/structured-data'
import { Navbar } from '@/components/shared/Navbar'
import { Footer } from '@/components/shared/Footer'
import { Breadcrumb } from '@/components/shared/Breadcrumb'

export const metadata: Metadata = buildMetadata({
  title: 'Tattoo Aftercare Guide — Japanese Tattoo Healing',
  description:
    'Complete aftercare guide for your Kisha Japanese tattoo. Step-by-step healing instructions, products to use and avoid, and what to expect during the healing process.',
  path: '/aftercare',
  keywords: [
    'tattoo aftercare',
    'japanese tattoo healing',
    'tattoo care guide',
    'tebori aftercare',
    'tattoo healing tips',
    'how to care for a new tattoo',
  ],
})

const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Aftercare', url: '/aftercare' },
]

const steps = [
  {
    phase: 'Hours 1–4',
    title: 'The Wrap',
    content:
      'Leave the protective wrap applied by your artist in place. Do not touch or peek. Your skin is healing; interference causes contamination.',
  },
  {
    phase: 'Day 1',
    title: 'First Wash',
    content:
      'Remove wrap and wash gently with unscented antibacterial soap. Pat dry with a clean paper towel. Apply a thin layer of unscented healing balm (Bepanthen or Hustle Butter). Do not rebandage.',
  },
  {
    phase: 'Days 2–5',
    title: 'Active Healing',
    content:
      'Wash 2–3 times daily. Apply balm after each wash. The area may weep, feel warm, and appear slightly swollen — this is normal. Keep the area out of direct sunlight.',
  },
  {
    phase: 'Days 6–14',
    title: 'Peeling Phase',
    content:
      'The tattoo will begin to peel — similar to a sunburn. Do not pick, scratch, or peel. This removes ink and causes scarring. Continue moisturising regularly.',
  },
  {
    phase: 'Weeks 3–4',
    title: 'Surface Healing',
    content:
      'The surface skin appears healed. Continue applying sunscreen (SPF 50+) when outdoors. Avoid swimming pools, saunas, and soaking baths for the full 4 weeks.',
  },
  {
    phase: 'Months 2–3',
    title: 'Deep Healing',
    content:
      'The deeper layers of skin are still settling. Your tattoo may appear slightly cloudy or muted — this clears completely. Book your complimentary touch-up within this window.',
  },
]

export default function AftercarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema(breadcrumbs)),
        }}
      />

      <Navbar />

      <main id="main-content">
        <div className="container section">
          <Breadcrumb items={breadcrumbs} />

          <header style={{ marginBottom: 'var(--space-xl)', maxWidth: '65ch' }}>
            <span className="section-label">Post-Session Care</span>
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                marginBottom: '1rem',
              }}
            >
              Tattoo Aftercare Guide
            </h1>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.7 }}>
              Your tattoo is a living artwork. How you care for it in the first weeks determines
              how it looks for the rest of your life. Follow these instructions carefully.
            </p>
          </header>

          {/* Healing timeline */}
          <section aria-labelledby="healing-timeline" style={{ marginBottom: 'var(--space-xl)' }}>
            <h2
              id="healing-timeline"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.5rem',
                marginBottom: 'var(--space-lg)',
              }}
            >
              Healing Timeline
            </h2>

            <ol style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {steps.map((step, i) => (
                <li
                  key={i}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '120px 1fr',
                    gap: '1.5rem',
                    alignItems: 'start',
                    paddingBottom: '1.5rem',
                    borderBottom: '1px solid var(--color-border)',
                  }}
                >
                  <div>
                    <span
                      style={{
                        display: 'block',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'var(--color-primary)',
                        marginBottom: '0.25rem',
                      }}
                    >
                      {step.phase}
                    </span>
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.1rem',
                        marginBottom: '0.5rem',
                      }}
                    >
                      {step.title}
                    </h3>
                    <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                      {step.content}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* Avoid section */}
          <section aria-labelledby="what-to-avoid" style={{ marginBottom: 'var(--space-xl)' }}>
            <h2
              id="what-to-avoid"
              style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '1rem' }}
            >
              What to Avoid
            </h2>
            <ul
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                gap: '1rem',
              }}
            >
              {[
                'Direct sunlight (use SPF 50+)',
                'Swimming pools & open water',
                'Saunas & steam rooms',
                'Picking or scratching',
                'Tight clothing over the area',
                'Petroleum-based products',
                'Alcohol-based products',
                'Excessive sweating (first week)',
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    background: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '4px',
                    padding: '0.875rem 1rem',
                    color: 'var(--color-text-muted)',
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <span aria-hidden="true" style={{ color: 'var(--color-primary)' }}>✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* CTA */}
          <aside
            style={{
              background: 'var(--color-card)',
              border: '1px solid var(--color-border)',
              borderRadius: '8px',
              padding: 'var(--space-lg)',
            }}
          >
            <h3 style={{ fontFamily: 'var(--font-heading)', marginBottom: '0.5rem' }}>
              Ready for your touch-up?
            </h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
              All Kisha tattoos include one complimentary touch-up within 3 months of the original session.
            </p>
            <Link href="/booking" className="btn btn-primary">
              Book Touch-Up
            </Link>
          </aside>
        </div>
      </main>

      <Footer />
    </>
  )
}
