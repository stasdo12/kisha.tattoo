import { describe, it, expect } from 'vitest'
import {
  localBusinessSchema,
  websiteSchema,
  serviceSchema,
  faqSchema,
  faqFromArticleBody,
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

  it('openingHoursSpecification covers Tuesday-Saturday, closed Mon/Sun', () => {
    expect(Array.isArray(schema.openingHoursSpecification)).toBe(true)
    expect(schema.openingHoursSpecification.length).toBe(1)
    const hours = schema.openingHoursSpecification[0]
    expect(hours.dayOfWeek).toEqual(['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'])
    expect(hours.dayOfWeek).not.toContain('Monday')
    expect(hours.dayOfWeek).not.toContain('Sunday')
    expect(hours.opens).toBe('11:00')
    expect(hours.closes).toBe('19:00')
  })

  it('sameAs includes Instagram, Facebook, Reddit, Tattoodo, GBP, Bing', () => {
    expect(schema.sameAs).toContain(SITE.social.instagram)
    expect(schema.sameAs).toContain(SITE.social.facebook)
    expect(schema.sameAs).toContain(SITE.social.reddit)
    expect(schema.sameAs).toContain(SITE.social.tattoodo)
    expect(schema.sameAs).toContain(SITE.social.gbp)
    expect(schema.sameAs).toContain(SITE.social.bing)
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

describe('faqFromArticleBody', () => {
  it('extracts a question and its answer', () => {
    const items = faqFromArticleBody('## Intro\n\ntext\n\n### Was ist ein Blowout?\n\nPigment unter der Dermis.')
    expect(items).toEqual([{ question: 'Was ist ein Blowout?', answer: 'Pigment unter der Dermis.' }])
  })

  it('ignores ### subheadings that are not questions', () => {
    // Older articles use ### for plain subheadings — marking those up as
    // Question would be a structured-data violation.
    const items = faqFromArticleBody('### Knie Tattoo Schmerzen\n\nTut weh.\n\n### Tut es weh?\n\nJa.')
    expect(items).toEqual([{ question: 'Tut es weh?', answer: 'Ja.' }])
  })

  it('joins a multi-paragraph answer', () => {
    const items = faqFromArticleBody('### Geht das weg?\n\nNein.\n\nAber es verblasst.')
    expect(items[0].answer).toBe('Nein. Aber es verblasst.')
  })

  it('stops the answer at the next heading of any level', () => {
    const items = faqFromArticleBody('### Geht das weg?\n\nNein.\n\n## Nächster Abschnitt\n\nAnderer Text.')
    expect(items[0].answer).toBe('Nein.')
  })

  it('drops the closing CTA paragraph instead of swallowing it into the last answer', () => {
    const body = '### Wie erkenne ich das?\n\nWarte sechs Wochen.\n\nFrag mich vorher. [Schreib mir einfach](/booking).'
    expect(faqFromArticleBody(body)[0].answer).toBe('Warte sechs Wochen.')
  })

  it('reduces markdown links to their text', () => {
    const items = faqFromArticleBody('### Und dann?\n\nSiehe [Tattoo Placement](/blog/tattoo-placement-muenchen) dazu.')
    expect(items[0].answer).toBe('Siehe Tattoo Placement dazu.')
  })

  it('strips bullet markers so the answer stays plain text', () => {
    const items = faqFromArticleBody('### Welche Stellen?\n\n- Handgelenk\n- Rippen')
    expect(items[0].answer).toBe('Handgelenk Rippen')
  })

  it('returns an empty array for a body without questions', () => {
    expect(faqFromArticleBody('## Nur ein Abschnitt\n\nText ohne Fragen.')).toEqual([])
  })

  it('skips a question with no answer text', () => {
    expect(faqFromArticleBody('### Offene Frage?\n\n## Nächster Abschnitt')).toEqual([])
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

  it('dateModified falls back to publishedAt when updatedAt is not given', () => {
    expect(schema.dateModified).toBe('2025-03-01')
  })

  it('dateModified uses updatedAt when given', () => {
    const updated = articleSchema({
      title: 'Fineline Tattoo Ideen',
      excerpt: 'Die schönsten Fineline Motive.',
      publishedAt: '2025-03-01',
      updatedAt: '2026-01-15',
      slug: 'fineline-tattoo-ideen-muenchen',
      coverImage: 'https://kisha.tattoo/og/fineline.jpg',
    })
    expect(updated.dateModified).toBe('2026-01-15')
  })

  it('author links to person @id', () => {
    expect(schema.author['@type']).toBe('Person')
    expect(schema.author['@id']).toBe(`${SITE.url}/#person-kisha`)
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
    expect(schema['@id']).toBe(`${SITE.url}/#person-kisha`)
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

  it('accepts options to describe a different artist with a unique @id', () => {
    const other = personSchema({ slug: 'realismus-artist', name: 'Test Artist', jobTitle: 'Realism Tattoo Artist' })
    expect(other['@id']).toBe(`${SITE.url}/#person-realismus-artist`)
    expect(other.name).toBe('Test Artist')
    expect(other['@id']).not.toBe(schema['@id'])
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