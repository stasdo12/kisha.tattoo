import { SITE } from '@/content/site'

interface FaqItem {
  question: string
  answer: string
}

/**
 * JSON-LD structured data helpers.
 * Use in page components: <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
 */

export function localBusinessSchema() {
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
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '11:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '10:00',
        closes: '17:00',
      },
    ],
    sameAs: [
      SITE.social.instagram,
      SITE.social.facebook,
      SITE.social.reddit,
      SITE.social.tattoodo,
      SITE.social.gbp,
    ],
    hasMap: SITE.location.mapsUrl,
    image: `${SITE.url}/og/default.jpg`, // TODO: real studio photo
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: SITE.reviews.ratingValue,
      reviewCount: SITE.reviews.reviewCount,
      bestRating: SITE.reviews.bestRating,
      worstRating: SITE.reviews.worstRating,
    },
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
  slug,
  coverImage,
}: {
  title: string
  excerpt: string
  publishedAt: string
  slug: string
  coverImage: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: excerpt,
    datePublished: publishedAt,
    url: `${SITE.url}/blog/${slug}`,
    image: coverImage,
    author: {
      '@type': 'Person',
      '@id': `${SITE.url}/#person`,
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
 * Person schema — for About page and AI entity recognition (GEO/AEO).
 * Helps Google and AI systems (ChatGPT, Perplexity) understand KishaTattoo as a real entity.
 */
export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE.url}/#person`,
    name: 'Kisha',
    alternateName: 'KishaTattoo',
    jobTitle: 'Tattoo Artist',
    description: 'Tattoo-Künstlerin in München — Japanisches Irezumi, Grafik-Tattoo, Linework.',
    url: SITE.url,
    image: `${SITE.url}/og/default.jpg`,
    sameAs: [SITE.social.instagram, SITE.social.facebook, SITE.social.reddit, SITE.social.tattoodo, SITE.social.gbp],
    knowsLanguage: ['de', 'en', 'uk'],
    worksFor: { '@type': 'LocalBusiness', '@id': `${SITE.url}/#business`, name: SITE.name },
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Tattoo Artist',
      occupationLocation: { '@type': 'City', name: 'München', addressCountry: 'DE' },
      skills: ['Japanese Irezumi', 'Graphic Tattoo', 'Linework', 'Blackwork', 'Fineline'],
    },
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
