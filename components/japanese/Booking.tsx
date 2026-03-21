import Link from 'next/link'
import { BookingForm } from './BookingForm'
import { LocationMap } from '@/components/shared/LocationMap'

/**
 * Booking section embedded in the home page.
 * The form itself is a 'use client' component — this wrapper is a Server Component.
 */
export function Booking() {
  return (
    <div className="container" style={{ paddingBlock: 'var(--space-2xl)' }}>
      <div style={{ marginBottom: 'var(--space-xl)', maxWidth: '55ch' }}>
        <span className="section-label">Begin Your Journey</span>
        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.75rem, 4vw, 3rem)',
            marginBottom: '0.75rem',
          }}
        >
          Book a Consultation
        </h2>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
          Every Kisha tattoo begins with a conversation. Share your concept
          and we will respond within 48 hours.
        </p>
      </div>

      <div className="grid-booking">
        <BookingForm />

        <div>
          <LocationMap />
          <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
            <Link href="/booking" style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', textDecoration: 'underline' }}>
              Open full booking page →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
