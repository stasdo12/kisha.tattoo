import { SITE } from '@/content/site'

interface FaqItem {
  question: string
  answer: string
}

/**
 * JSON-LD structured data helpers.
 * Use in page components: <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
 */

export function localBusinessSchema(options?: {
  employees?: Array<{ '@type': string; '@id': string; name: string }>
}) {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'TattooParlor'],
    '@id': `${SITE.url}/#business`,
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: SITE.contact.phone,
    email: SITE.contact.email,
    priceRange: SITE.priceRange,
    currenciesAccepted: 'EUR',
    paymentAccepted: 'Cash, Credit Card, Bank Transfer',
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.location.street,
      addressLocality: SITE.location.city,
      addressRegion: SITE.location.state,
      postalCode: SITE.location.postalCode,
      addressCountry: SITE.location.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.location.lat,
      longitude: SITE.location.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '11:00',
        closes: '19:00',
      },
    ],
    sameAs: [
      SITE.social.instagram,
      SITE.social.facebook,
      SITE.social.reddit,
      SITE.social.tattoodo,
      SITE.social.gbp,
      SITE.social.bing,
    ],
    hasMap: SITE.location.mapsUrl,
    image: `${SITE.url}/og/default.jpg`, // TODO: real studio photo
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: SITE.reviews.ratingValue,
      reviewCount: SITE.reviews.reviewCount,
      bestRating: SITE.reviews.bestRating,
    },
    ...(options?.employees?.length ? { employee: options.employees } : {}),
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE.url}/works?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function serviceSchema({
  name,
  description,
  url,
}: {
  name: string
  description: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${SITE.url}${url}`,
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${SITE.url}/#business`,
      name: SITE.name,
    },
    areaServed: {
      '@type': 'City',
      name: SITE.location.city,
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `${SITE.url}/booking`,
      servicePhone: SITE.contact.phone,
    },
  }
}

export function faqSchema(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function breadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE.url}${item.url}`,
    })),
  }
}

export function articleSchema({
  title,
  excerpt,
  publishedAt,
  updatedAt,
  slug,
  coverImage,
}: {
  title: string
  excerpt: string
  publishedAt: string
  updatedAt?: string
  slug: string
  coverImage: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: excerpt,
    datePublished: publishedAt,
    dateModified: updatedAt ?? publishedAt,
    url: `${SITE.url}/blog/${slug}`,
    image: coverImage,
    author: {
      '@type': 'Person',
      '@id': `${SITE.url}/#person-kisha`,
      name: 'Kisha',
      url: SITE.url,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.url,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE.url}/blog/${slug}`,
    },
  }
}

/**
 * Person schema — for About/Team pages and AI entity recognition (GEO/AEO).
 * Helps Google and AI systems (ChatGPT, Perplexity) understand each artist as a distinct entity.
 * Defaults describe Kisha — pass options to describe another artist (unique @id via slug).
 */
export function personSchema(options?: {
  slug?: string
  name?: string
  alternateName?: string
  jobTitle?: string
  description?: string
  image?: string
  sameAs?: string[]
  skills?: string[]
}) {
  const {
    slug = 'kisha',
    name = 'Kisha',
    alternateName = 'KishaTattoo',
    jobTitle = 'Tattoo Artist',
    description = 'Tattoo-Künstlerin in München — Japanisches Irezumi, Grafik-Tattoo, Linework.',
    image = `${SITE.url}/og/default.jpg`,
    sameAs = [SITE.social.instagram, SITE.social.facebook, SITE.social.reddit, SITE.social.tattoodo, SITE.social.gbp, SITE.social.bing],
    skills = ['Japanese Irezumi', 'Graphic Tattoo', 'Linework', 'Blackwork', 'Fineline'],
  } = options ?? {}

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE.url}/#person-${slug}`,
    name,
    alternateName,
    jobTitle,
    description,
    url: SITE.url,
    image,
    sameAs,
    knowsLanguage: ['de', 'en', 'uk'],
    worksFor: { '@type': 'LocalBusiness', '@id': `${SITE.url}/#business`, name: SITE.name },
    hasOccupation: {
      '@type': 'Occupation',
      name: jobTitle,
      occupationLocation: { '@type': 'City', name: 'München', addressCountry: 'DE' },
      skills,
    },
  }
}

/**
 * VideoObject schema — for YouTube videos embedded or linked on page.
 * Enables video rich results in Google Search.
 */
export function videoObjectSchema(videos: Array<{
  name: string
  description: string
  youtubeId: string
  uploadDate: string   // ISO 8601 e.g. '2017-04-01'
  duration?: string    // ISO 8601 e.g. 'PT2M30S'
}>) {
  return videos.map((v) => ({
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: v.name,
    description: v.description,
    thumbnailUrl: `https://img.youtube.com/vi/${v.youtubeId}/maxresdefault.jpg`,
    uploadDate: v.uploadDate.includes('T') ? v.uploadDate : `${v.uploadDate}T00:00:00Z`,
    ...(v.duration ? { duration: v.duration } : {}),
    contentUrl: `https://www.youtube.com/watch?v=${v.youtubeId}`,
    embedUrl: `https://www.youtube.com/embed/${v.youtubeId}`,
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.url,
    },
  }))
}

/**
 * Tattoo pricing schema — Service with Offer/PriceSpecification for rich results.
 * Shows prices directly in Google Search (price range snippets).
 */
export function tattooServicePricesSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE.url}/tattoo-preise-muenchen#service`,
    name: 'Tattoo Preise München — KishaTattoo',
    description: 'Tattoo Kosten und Preise in München. Kleine Tattoos ab 150 €, Sleeve ab 2.500 €. Transparente Preisübersicht.',
    url: `${SITE.url}/tattoo-preise-muenchen`,
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${SITE.url}/#business`,
      name: SITE.name,
    },
    areaServed: { '@type': 'City', name: 'München', addressCountry: 'DE' },
    offers: [
      {
        '@type': 'Offer',
        name: 'Mini Tattoo bis 5 cm',
        description: 'Fineline, Schrift, Symbol — Handgelenk, Finger, Knöchel. Ca. 1–2 Stunden.',
        priceSpecification: {
          '@type': 'PriceSpecification',
          minPrice: '150',
          priceCurrency: 'EUR',
        },
      },
      {
        '@type': 'Offer',
        name: 'Kleines Tattoo 5–10 cm',
        description: 'Fineline, Grafik, Japanisch — Unterarm, Schlüsselbein, Rippen. Ca. 2–3 Stunden.',
        priceSpecification: {
          '@type': 'PriceSpecification',
          minPrice: '250',
          priceCurrency: 'EUR',
        },
      },
      {
        '@type': 'Offer',
        name: 'Mittleres Tattoo 10–20 cm',
        description: 'Alle Stile — komplexe Einzelmotive oder kleinere Kompositionen. Ca. 3–5 Stunden.',
        priceSpecification: {
          '@type': 'PriceSpecification',
          minPrice: '400',
          priceCurrency: 'EUR',
        },
      },
      {
        '@type': 'Offer',
        name: 'Oberarm / Halbärmel Tattoo',
        description: 'Irezumi, Grafik, Linework — typischerweise 2–4 Sitzungen. Ca. 5–7 Stunden pro Sitzung.',
        priceSpecification: {
          '@type': 'PriceSpecification',
          minPrice: '800',
          priceCurrency: 'EUR',
          referenceQuantity: {
            '@type': 'QuantitativeValue',
            value: '1',
            unitCode: 'E49',
            unitText: 'Sitzung',
          },
        },
      },
      {
        '@type': 'Offer',
        name: 'Full Sleeve Tattoo',
        description: 'Irezumi, Grafik — mehrere Sitzungen über 6–18 Monate, individuell kalkuliert. 15–30 Stunden gesamt.',
        priceSpecification: {
          '@type': 'PriceSpecification',
          minPrice: '2500',
          priceCurrency: 'EUR',
        },
      },
    ],
  }
}

/**
 * Awards page schema — Person with award list for AI entity recognition.
 * Defaults describe Kisha — pass slug/name to describe another artist (unique @id).
 */
export function awardsPageSchema(
  awards: Array<{ year: string; event: string; category: string }>,
  options?: { slug?: string; name?: string }
) {
  const { slug = 'kisha', name = 'Kisha' } = options ?? {}
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE.url}/#person-${slug}`,
    name,
    award: awards.map((a) => `${a.category} — ${a.event} ${a.year}`),
    worksFor: { '@type': 'LocalBusiness', '@id': `${SITE.url}/#business`, name: SITE.name },
  }
}

/**
 * Location-specific service schema — for suburb landing pages.
 */
export function locationServiceSchema({
  cityName,
  citySlug,
  travelMinutes,
}: {
  cityName: string
  citySlug: string
  travelMinutes: number
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Tattoo ${cityName} — KishaTattoo München`,
    description: `KishaTattoo bietet professionelles Tatowieren für Kunden aus ${cityName}. Erreichbar in ca. ${travelMinutes} Minuten nach München.`,
    url: `${SITE.url}/tattoo-${citySlug}`,
    provider: { '@type': 'LocalBusiness', '@id': `${SITE.url}/#business`, name: SITE.name },
    areaServed: [
      { '@type': 'City', name: 'München', addressCountry: 'DE' },
      { '@type': 'City', name: cityName, addressCountry: 'DE' },
    ],
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `${SITE.url}/booking`,
      servicePhone: SITE.contact.phone,
    },
  }
}
