/**
 * Central business configuration.
 * TODO: Replace all placeholder values with real business data.
 * This single file drives SEO metadata, structured data, and UI content.
 */
export const SITE = {
  name: 'Kisha Tattoo',
  tagline: 'Japanisches Irezumi & Grafik Tattoo München',
  description:
    'Kisha — Tattoo-Künstlerin in München, spezialisiert auf Japanisches Irezumi, Grafik-Tattoo und Linework. Preisgekrönt 2025. Custom-Design, Tebori-Technik. Jetzt Termin buchen.',
  url: 'https://kisha.tattoo',
  locale: 'de_DE',
  language: 'de',

  // Social
  social: {
    instagram: 'https://www.instagram.com/kisha.tattoo/',
    facebook: 'https://www.facebook.com/bavariatattoo1',
    reddit: 'https://www.reddit.com/r/tattoo/search/?q=kisha.tattoo',
  },

  // Contact & Location — required for LocalBusiness structured data
  contact: {
    email: 'hello@kisha.tattoo', // TODO: confirm real email
    phone: '+49 89 000 000 00', // TODO: replace with real phone
    bookingUrl: '/booking',
  },

  location: {
    street: 'Musterstraße 1', // TODO
    city: 'Munich',
    state: 'Bavaria',
    postalCode: '80000', // TODO
    country: 'DE',
    countryName: 'Germany',
    lat: 48.1351,
    lng: 11.582,
    // Google Maps embed URL TODO
    mapsUrl: 'https://maps.google.com/?q=Munich+Germany',
  },

  // Opening hours — for structured data
  openingHours: [
    'Mo-Fr 11:00-19:00',
    'Sa 10:00-17:00',
  ],

  // Price range indicator ($, $$, $$$, $$$$)
  priceRange: '$$$',
} as const

export type SiteConfig = typeof SITE
