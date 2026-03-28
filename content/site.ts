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
    email: 'hello@kisha.tattoo',
    phone: '+491701893395',
    bookingUrl: '/booking',
  },

  location: {
    street: 'Bahnhofstraße 1',
    city: 'Neufahrn bei Freising',
    state: 'Bavaria',
    postalCode: '85375',
    country: 'DE',
    countryName: 'Germany',
    lat: 48.3167,
    lng: 11.6833,
    mapsUrl: 'https://maps.google.com/?q=Bahnhofstraße+1,+85375+Neufahrn+bei+Freising',
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
