import { describe, it, expect } from 'vitest'
import {
  localBusinessSchema,
  websiteSchema,
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
  articleSchema,
  personSchema,
  locationServiceSchema,
} from '@/lib/structured-data'
import { SITE } from '@/content/site'

describe('localBusinessSchema', () => {
  const schema = localBusinessSchema()

  it('has correct @context and @type', () => {
    expect(schema['@context']).toBe('https://schema.org')
    expect(schema['@type']).toContain('LocalBusiness')
    expect(schema['@type']).toContain('TattooParlor')
  })

  it('@id is the business anchor', () => {
    expect(schema['@id']).toBe(`${SITE.url}/#business`)
  })

  it('has name, url, telephone, email', () => {
    expect(schema.name).toBe(SITE.name)
    expect(schema.url).toBe(SITE.url)
    expect(schema.telephone).toBeTruthy()
    expect(schema.email).toBeTruthy()
  })

  it('address has all required fields', () => {
    expect(schema.address['@type']).toBe('PostalAddress')
    expect(schema.address.streetAddress).toBeTruthy()
    expect(schema.address.addressLocality).toBeTruthy()
    expect(schema.address.postalCode).toBeTruthy()
    expect(schema.address.addressCountry).toBe('DE')
  })

  it('geo coordinates are present and numeric', () => {
    expect(typeof schema.geo.latitude).toBe('number')
    expect(typeof schema.geo.longitude).toBe('number')
  })

  it('openingHoursSpecification has weekday and saturday entries', () => {
    expect(Array.isArray(schema.openingHoursSpecification)).toBe(true)
    expect(schema.openingHoursSpecification.length).toBe(2)
    const weekday = schema.openingHoursSpecification[0]
    expect(weekday.dayOfWeek).toContain('Monday')
    expect(weekday.opens).toBe('11:00')
    expect(weekday.closes).toBe('19:00')
  })

  it('sameAs includes Instagram, Facebook, Reddit, Tattoodo, GBP', () => {
    expect(schema.sameAs).toContain(SITE.social.instagram)
    expect(schema.sameAs).toContain(SITE.social.facebook)
    expect(schema.sameAs).toContain(SITE.social.reddit)
    expect(schema.sameAs).toContain(SITE.social.tattoodo)
    expect(schema.sameAs).toContain(SITE.social.gbp)
  })

  it('sameAs has at least 5 entries', () => {
    expect(schema.sameAs.length).toBeGreaterThanOrEqual(5)
  })

  it('priceRange is set', () => {
    expect(schema.priceRange).toBeTruthy()
  })

  it('hasMap is set', () => {
    expect(schema.hasMap).toBeTruthy()
  })
})

describe('websiteSchema', () => {
  const schema = websiteSchema()

  it('has correct @context and @type', () => {
    expect(schema['@context']).toBe('https://schema.org')
    expect(schema['@type']).toBe('WebSite')
  })

  it('@id is the website anchor', () => {
    expect(schema['@id']).toBe(`${SITE.url}/#website`)
  })

  it('has SearchAction potentialAction', () => {
    expect(schema.potentialAction['@type']).toBe('SearchAction')
    expect(schema.potentialAction.target.urlTemplate).toContain(SITE.url)
    expect(schema.potentialAction.target.urlTemplate).toContain('{search_term_string}')
  })
})

describe('serviceSchema', () => {
  const schema = serviceSchema({
    name: 'Fineline Tattoo München',
    description: 'Präzises Fineline Tattoo in München.',
    url: '/linework-tattoo-muenchen',
  })

  it('has correct @context and @type', () => {
    expect(schema['@context']).toBe('https://schema.org')
    expect(schema['@type']).toBe('Service')
  })

  it('name and description are passed through', () => {
    expect(schema.name).toBe('Fineline Tattoo München')
    expect(schema.description).toBe('Präzises Fineline Tattoo in München.')
  })

  it('url is prefixed with SITE.url', () => {
    expect(schema.url).toBe(`${SITE.url}/linework-tattoo-muenchen`)
  })

  it('provider links to business @id', () => {
    expect(schema.provider['@id']).toBe(`${SITE.url}/#business`)
    expect(schema.provider['@type']).toBe('LocalBusiness')
  })

  it('areaServed is the studio city', () => {
    expect(schema.areaServed['@type']).toBe('City')
    expect(schema.areaServed.name).toBe(SITE.location.city)
  })

  it('availableChannel has booking URL and phone', () => {
    expect(schema.availableChannel.serviceUrl).toContain('/booking')
    expect(schema.availableChannel.servicePhone).toBeTruthy()
  })
})

describe('faqSchema', () => {
  const items = [
    { question: 'Was kostet ein kleines Tattoo?', answer: 'Ab 150 €.' },
    { question: 'Wie lange dauert eine Sitzung?', answer: '1–3 Stunden.' },
  ]
  const schema = faqSchema(items)

  it('has correct @context and @type', () => {
    expect(schema['@context']).toBe('https://schema.org')
    expect(schema['@type']).toBe('FAQPage')
  })

  it('mainEntity has same length as input', () => {
    expect(schema.mainEntity.length).toBe(2)
  })

  it('each entity is a Question with acceptedAnswer', () => {
    const q = schema.mainEntity[0]
    expect(q['@type']).toBe('Question')
    expect(q.name).toBe('Was kostet ein kleines Tattoo?')
    expect(q.acceptedAnswer['@type']).toBe('Answer')
    expect(q.acceptedAnswer.text).toBe('Ab 150 €.')
  })

  it('handles empty array', () => {
    const empty = faqSchema([])
    expect(empty.mainEntity).toEqual([])
  })
})

describe('breadcrumbSchema', () => {
  const schema = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'FAQ', url: '/faq' },
    { name: 'Preise', url: '/tattoo-preise-muenchen' },
  ])

  it('has correct @context and @type', () => {
    expect(schema['@context']).toBe('https://schema.org')
    expect(schema['@type']).toBe('BreadcrumbList')
  })

  it('positions start at 1', () => {
    expect(schema.itemListElement[0].position).toBe(1)
  })

  it('positions are sequential', () => {
    expect(schema.itemListElement[1].position).toBe(2)
    expect(schema.itemListElement[2].position).toBe(3)
  })

  it('item URLs are prefixed with SITE.url', () => {
    expect(schema.itemListElement[0].item).toBe(`${SITE.url}/`)
    expect(schema.itemListElement[1].item).toBe(`${SITE.url}/faq`)
  })

  it('names are passed through', () => {
    expect(schema.itemListElement[0].name).toBe('Home')
    expect(schema.itemListElement[1].name).toBe('FAQ')
  })

  it('each item has ListItem type', () => {
    schema.itemListElement.forEach((item) => {
      expect(item['@type']).toBe('ListItem')
    })
  })
})

describe('articleSchema', () => {
  const schema = articleSchema({
    title: 'Fineline Tattoo Ideen',
    excerpt: 'Die schönsten Fineline Motive.',
    publishedAt: '2025-03-01',
    slug: 'fineline-tattoo-ideen-muenchen',
    coverImage: 'https://kisha.tattoo/og/fineline.jpg',
  })

  it('has correct @context and @type', () => {
    expect(schema['@context']).toBe('https://schema.org')
    expect(schema['@type']).toBe('BlogPosting')
  })

  it('headline and description match input', () => {
    expect(schema.headline).toBe('Fineline Tattoo Ideen')
    expect(schema.description).toBe('Die schönsten Fineline Motive.')
  })

  it('url is built from SITE.url and slug', () => {
    expect(schema.url).toBe(`${SITE.url}/blog/fineline-tattoo-ideen-muenchen`)
  })

  it('datePublished matches publishedAt', () => {
    expect(schema.datePublished).toBe('2025-03-01')
  })

  it('author links to person @id', () => {
    expect(schema.author['@type']).toBe('Person')
    expect(schema.author['@id']).toBe(`${SITE.url}/#person`)
  })

  it('publisher has Organization type', () => {
    expect(schema.publisher['@type']).toBe('Organization')
    expect(schema.publisher.name).toBe(SITE.name)
  })

  it('mainEntityOfPage is a WebPage with correct @id', () => {
    expect(schema.mainEntityOfPage['@type']).toBe('WebPage')
    expect(schema.mainEntityOfPage['@id']).toContain('fineline-tattoo-ideen-muenchen')
  })
})

describe('personSchema', () => {
  const schema = personSchema()

  it('has correct @context and @type', () => {
    expect(schema['@context']).toBe('https://schema.org')
    expect(schema['@type']).toBe('Person')
  })

  it('@id is the person anchor', () => {
    expect(schema['@id']).toBe(`${SITE.url}/#person`)
  })

  it('name is Kisha', () => {
    expect(schema.name).toBe('Kisha')
  })

  it('sameAs includes Instagram, Facebook, Reddit, Tattoodo, GBP', () => {
    expect(schema.sameAs).toContain(SITE.social.instagram)
    expect(schema.sameAs).toContain(SITE.social.facebook)
    expect(schema.sameAs).toContain(SITE.social.reddit)
    expect(schema.sameAs).toContain(SITE.social.tattoodo)
    expect(schema.sameAs).toContain(SITE.social.gbp)
  })

  it('knowsLanguage includes de, en, uk', () => {
    expect(schema.knowsLanguage).toContain('de')
    expect(schema.knowsLanguage).toContain('en')
    expect(schema.knowsLanguage).toContain('uk')
  })

  it('worksFor links to business @id', () => {
    expect(schema.worksFor['@id']).toBe(`${SITE.url}/#business`)
  })

  it('hasOccupation has tattoo skills', () => {
    expect(schema.hasOccupation.skills).toContain('Fineline')
    expect(schema.hasOccupation.skills).toContain('Japanese Irezumi')
  })

  it('occupation location is München, DE', () => {
    expect(schema.hasOccupation.occupationLocation.name).toBe('München')
    expect(schema.hasOccupation.occupationLocation.addressCountry).toBe('DE')
  })
})

describe('locationServiceSchema', () => {
  const schema = locationServiceSchema({
    cityName: 'Freising',
    citySlug: 'freising',
    travelMinutes: 15,
  })

  it('has correct @context and @type', () => {
    expect(schema['@context']).toBe('https://schema.org')
    expect(schema['@type']).toBe('Service')
  })

  it('name includes cityName', () => {
    expect(schema.name).toContain('Freising')
  })

  it('description mentions travelMinutes', () => {
    expect(schema.description).toContain('15')
  })

  it('url is built from citySlug', () => {
    expect(schema.url).toBe(`${SITE.url}/tattoo-freising`)
  })

  it('provider links to business @id', () => {
    expect(schema.provider['@id']).toBe(`${SITE.url}/#business`)
  })

  it('areaServed includes both München and cityName', () => {
    const cities = schema.areaServed.map((c: { name: string }) => c.name)
    expect(cities).toContain('München')
    expect(cities).toContain('Freising')
  })
})