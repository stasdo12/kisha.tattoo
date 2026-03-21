/**
 * Central business configuration.
 * TODO: Replace all placeholder values with real business data.
 * This single file drives SEO metadata, structured data, and UI content.
 */
export const SITE = {
  name: 'Kisha Tattoo',
  tagline: 'Japanese & Graphic Tattoo Studio Munich',
  description:
    'Kisha Tattoo is a premium tattoo studio in Munich specialising in traditional Japanese Irezumi and contemporary graphic tattoos. Custom designs, Tebori technique, expert artistry.',
  url: 'https://kishatattoo.com', // TODO: replace with real domain
  locale: 'en_DE',
  language: 'en',

  // Social
  social: {
    instagram: 'https://instagram.com/kishatattoo', // TODO
    facebook: 'https://facebook.com/kishatattoo', // TODO
    reddit: 'https://reddit.com/u/kishatattoo', // TODO
  },

  // Contact & Location — required for LocalBusiness structured data
  contact: {
    email: 'hello@kishatattoo.com', // TODO
    phone: '+49 89 000 000 00', // TODO
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
