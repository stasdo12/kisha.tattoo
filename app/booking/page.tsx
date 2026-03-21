/**
 * BOOKING PAGE — Primary conversion page
 *
 * Rendering: SSG (page shell is static; form is client-only)
 * Reason: The static page shell is crawlable and fast. The form JS loads
 * separately via 'use client' BookingForm component. This is the correct
 * pattern for commercial conversion pages in Next.js.
 *
 * SEO intent: [transactional] — "book japanese tattoo munich" etc.
 */
import type { Metadata } from 'next'
import { buildMetadata, KEYWORDS } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/structured-data'
import { Navbar } from '@/components/shared/Navbar'
import { Footer } from '@/components/shared/Footer'
import { Breadcrumb } from '@/components/shared/Breadcrumb'
import { BookingForm } from '@/components/japanese/BookingForm'
import { LocationMap } from '@/components/shared/LocationMap'
import { SITE } from '@/content/site'

export const metadata: Metadata = buildMetadata({
  title: 'Book a Tattoo Appointment — Consultation & Sessions',
  description:
    'Book your Japanese or graphic tattoo consultation at Kisha Tattoo in Munich. Free initial consultation. Custom designs only. Start your journey today.',
  path: '/booking',
  keywords: [
    ...KEYWORDS.general,
    'book tattoo munich',
    'tattoo appointment munich',
    'tattoo consultation munich',
    'book japanese tattoo',
  ],
})

const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Booking', url: '/booking' },
]

export default function BookingPage() {
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

          <div className="grid-booking">
            {/* Left: form */}
            <div>
              <header style={{ marginBottom: 'var(--space-lg)' }}>
                <span className="section-label">Start Your Journey</span>
                <h1
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                    marginBottom: '1rem',
                  }}
                >
                  Book a Consultation
                </h1>
                <p style={{ color: 'var(--color-text-muted)', maxWidth: '55ch', lineHeight: 1.7 }}>
                  Tell us about your vision. Every piece begins with a conversation —
                  free, no commitment, and always confidential.
                </p>
              </header>

              {/* Interactive form — Client Component */}
              <BookingForm />
            </div>

            {/* Right: location info */}
            <aside>
              <div
                style={{
                  background: 'var(--color-card)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '8px',
                  padding: 'var(--space-md)',
                  marginBottom: '1.5rem',
                }}
              >
                <h2
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.1rem',
                    marginBottom: '1rem',
                  }}
                >
                  Studio Location
                </h2>
                <address
                  style={{
                    fontStyle: 'normal',
                    color: 'var(--color-text-muted)',
                    lineHeight: 1.8,
                    marginBottom: '1rem',
                  }}
                >
                  <strong style={{ color: 'var(--color-text)' }}>{SITE.name}</strong>
                  <br />
                  {SITE.location.street}
                  <br />
                  {SITE.location.postalCode} {SITE.location.city}
                  <br />
                  {SITE.location.countryName}
                </address>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
                  {SITE.openingHours.map((h, i) => (
                    <span key={i} style={{ display: 'block' }}>{h}</span>
                  ))}
                </p>
              </div>

              {/* Map — Client Component (Leaflet requires browser APIs) */}
              <LocationMap />

              <div style={{ marginTop: '1.5rem' }}>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
                  Questions?{' '}
                  <a
                    href={`mailto:${SITE.contact.email}`}
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {SITE.contact.email}
                  </a>
                </p>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
