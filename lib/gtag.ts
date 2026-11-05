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

/**
 * Booking or contact form submitted successfully. GA4's generate_lead is sent by
 * the API route itself (lib/ga-server.ts) — blockers ate about half of the
 * browser's copies. Only the Pinterest tag is left here.
 */
export function trackFormSubmit(formLocation: 'booking' | 'contact' | 'gutschein') {
  if (typeof window !== 'undefined' && window.pintrk) {
    window.pintrk('track', 'lead', {
      lead_type: formLocation === 'booking' ? 'Booking' : formLocation === 'gutschein' ? 'Gutschein' : 'Contact',
    })
  }
}

/** A voucher button opened the modal — the top of the voucher funnel, before generate_lead */
export function trackGutscheinOpen(betrag: '200' | '500' | '1000' | null) {
  track('gutschein_open', {
    event_category: 'engagement',
    betrag: betrag ?? 'offen',
  })
}

/**
 * WhatsApp link tapped. Counted by the server (app/api/whatsapp), like the
 * leads: the browser's own whatsapp_click only arrived with cookie consent, and
 * since 31.10.2026 the walk-in page's enquiries mostly go to WhatsApp. The
 * beacon leaves alongside the wa.me navigation and never delays it; the
 * browser no longer sends its own event, so nothing is counted twice.
 */
export function trackWhatsAppClick(location: 'floating' | 'header-menu' | 'footer') {
  try {
    const body = JSON.stringify({ location, page: window.location.pathname })
    if (!navigator.sendBeacon?.('/api/whatsapp', body)) {
      fetch('/api/whatsapp', { method: 'POST', body, keepalive: true }).catch(() => {})
    }
  } catch {
    // A lost count must never get in the way of the chat.
  }
}