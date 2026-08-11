/**
 * GA4 + Pinterest tag event helpers.
 * All conversion events are tracked here — update this file when GA4/Pinterest goals change.
 *
 * GA4 measurement ID: G-EKLZT9R83C
 * Pinterest tag ID: 2614141589209 (loaded by app/[locale]/layout.tsx, gated on cookie consent)
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    pintrk?: (...args: unknown[]) => void
    __ptLoad?: () => void
  }
}

function track(eventName: string, params?: Record<string, unknown>) {
  if (typeof window === 'undefined' || !window.gtag) return
  window.gtag('event', eventName, params)
}

/** Booking or contact form submitted successfully */
export function trackFormSubmit(formLocation: 'booking' | 'contact') {
  track('generate_lead', {
    event_category: 'conversion',
    form_location: formLocation,
  })
  if (typeof window !== 'undefined' && window.pintrk) {
    window.pintrk('track', 'lead', {
      lead_type: formLocation === 'booking' ? 'Booking' : 'Contact',
    })
  }
}

/** WhatsApp button clicked */
export function trackWhatsAppClick(location: string) {
  track('whatsapp_click', {
    event_category: 'engagement',
    click_location: location,
  })
}