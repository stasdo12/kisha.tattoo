/**
 * Central business configuration.
 * TODO: Replace all placeholder values with real business data.
 * This single file drives SEO metadata, structured data, and UI content.
 */
export const SITE = {
  name: 'Kisha Tattoo',
  tagline: 'Japanisches Irezumi & Grafik Tattoo München',
  description:
    'Kisha — Tattoo-Künstlerin in München, spezialisiert auf Japanisches Irezumi, Grafik-Tattoo und Linework. Preisgekrönt 2025. Custom-Design, präzise Maschinentechnik. Jetzt Termin buchen.',
  url: 'https://kisha.tattoo',
  locale: 'de_DE',
  language: 'de',

  // Social
  social: {
    instagram: 'https://www.instagram.com/kisha.tattoo/',
    // Eigene Seite. Voher stand hier bavariatattoo1 — die Seite des Studios, in dem
    // Kisha nur einen Platz mietet; in sameAs hiess das, beide seien dasselbe
    // Unternehmen. Diese URL-Form gibt Facebook selbst als og:url aus.
    facebook: 'https://www.facebook.com/people/Kisha-Tattoo/61572314704309/',
    reddit: 'https://www.reddit.com/user/Ready_Advice_8848/',
    tattoodo: 'https://www.tattoodo.com/artists/kisha0808sk',
    pinterest: 'https://de.pinterest.com/KishaTattoo/',
    gbp: 'https://share.google/TBRe5tzUCkyMEaUPJ',
    bing: 'https://www.bing.com/forbusiness/singleEntity?bizid=65483b9b-bf49-44e2-b793-73f3efe2eab1',
  },

  // Contact & Location — required for LocalBusiness structured data
  contact: {
    email: 'info@kisha.tattoo',
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
    lat: 48.31307,
    lng: 11.66360,
    mapsUrl: 'https://maps.google.com/?q=Bahnhofstraße+1,+85375+Neufahrn+bei+Freising',
  },

  // Opening hours — for structured data
  openingHours: [
    'Di-Sa 11:00-19:00',
  ],

  // Price range indicator ($, $$, $$$, $$$$)
  priceRange: '$$$',

  // Google reviews. NOT emitted in structured data any more (see the note in
  // lib/structured-data.ts): self-hosted ratings can't produce stars and the
  // markup was riding on pages with no visible rating. Kept here for a future
  // visible reviews block — until then it feeds nothing and can drift safely.
  reviews: {
    ratingValue: 5.0,
    reviewCount: 16,   // ← update this number (last checked 2026-09-08)
    bestRating: 5,
  },
} as const

export type SiteConfig = typeof SITE
