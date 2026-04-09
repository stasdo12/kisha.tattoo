/**
 * GA4 event helpers.
 * All conversion events are tracked here — update this file when GA4 goals change.
 *
 * GA4 measurement ID: G-EKLZT9R83C
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
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
}

/** WhatsApp button clicked */
export function trackWhatsAppClick(location: string) {
  track('whatsapp_click', {
    event_category: 'engagement',
    click_location: location,
  })
}