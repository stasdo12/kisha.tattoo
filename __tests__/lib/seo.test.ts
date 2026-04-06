import { describe, it, expect } from 'vitest'
import { buildMetadata, KEYWORDS } from '@/lib/seo'
import { SITE } from '@/content/site'

describe('buildMetadata', () => {
  describe('canonical URL', () => {
    it('DE locale — no prefix', () => {
      const meta = buildMetadata({ title: 'Test', description: 'Desc', path: '/faq', locale: 'de' })
      expect(meta.alternates?.canonical).toBe(`${SITE.url}/faq`)
    })

    it('EN locale — /en/ prefix', () => {
      const meta = buildMetadata({ title: 'Test', description: 'Desc', path: '/faq', locale: 'en' })
      expect(meta.alternates?.canonical).toBe(`${SITE.url}/en/faq`)
    })

    it('UK locale — /uk/ prefix', () => {
      const meta = buildMetadata({ title: 'Test', description: 'Desc', path: '/faq', locale: 'uk' })
      expect(meta.alternates?.canonical).toBe(`${SITE.url}/uk/faq`)
    })

    it('defaults to DE when locale is omitted', () => {
      const meta = buildMetadata({ title: 'Test', description: 'Desc', path: '/about' })
      expect(meta.alternates?.canonical).toBe(`${SITE.url}/about`)
    })
  })

  describe('title', () => {
    it('returns title without site name suffix (Next.js template handles it)', () => {
      const meta = buildMetadata({ title: 'Tattoo Preise', description: 'Desc', path: '/' })
      expect(meta.title).toBe('Tattoo Preise')
    })

    it('OG title includes site name', () => {
      const meta = buildMetadata({ title: 'Tattoo Preise', description: 'Desc', path: '/' })
      const og = meta.openGraph as { title: string }
      expect(og.title).toBe(`Tattoo Preise | ${SITE.name}`)
    })

    it('Twitter title includes site name', () => {
      const meta = buildMetadata({ title: 'Tattoo Preise', description: 'Desc', path: '/' })
      const tw = meta.twitter as { title: string }
      expect(tw.title).toBe(`Tattoo Preise | ${SITE.name}`)
    })
  })

  describe('robots', () => {
    it('indexed by default', () => {
      const meta = buildMetadata({ title: 'T', description: 'D', path: '/' })
      expect(meta.robots).toMatchObject({ index: true, follow: true })
    })

    it('noIndex: true → not indexed, not followed', () => {
      const meta = buildMetadata({ title: 'T', description: 'D', path: '/', noIndex: true })
      expect(meta.robots).toMatchObject({ index: false, follow: false })
    })
  })

  describe('Open Graph', () => {
    it('uses default OG image', () => {
      const meta = buildMetadata({ title: 'T', description: 'D', path: '/' })
      const og = meta.openGraph as { images: Array<{ url: string }> }
      expect(og.images[0].url).toBe(`${SITE.url}/og/default.jpg`)
    })

    it('uses custom OG image when provided', () => {
      const meta = buildMetadata({ title: 'T', description: 'D', path: '/', ogImage: '/og/custom.jpg' })
      const og = meta.openGraph as { images: Array<{ url: string }> }
      expect(og.images[0].url).toBe('/og/custom.jpg')
    })

    it('defaults to website ogType', () => {
      const meta = buildMetadata({ title: 'T', description: 'D', path: '/' })
      const og = meta.openGraph as { type: string }
      expect(og.type).toBe('website')
    })

    it('ogType article is passed through', () => {
      const meta = buildMetadata({ title: 'T', description: 'D', path: '/', ogType: 'article' })
      const og = meta.openGraph as { type: string }
      expect(og.type).toBe('article')
    })

    it('publishedTime is included in OG when provided', () => {
      const meta = buildMetadata({ title: 'T', description: 'D', path: '/', publishedTime: '2025-01-01' })
      const og = meta.openGraph as Record<string, unknown>
      expect(og.publishedTime).toBe('2025-01-01')
    })

    it('publishedTime is absent from OG when not provided', () => {
      const meta = buildMetadata({ title: 'T', description: 'D', path: '/' })
      const og = meta.openGraph as Record<string, unknown>
      expect(og.publishedTime).toBeUndefined()
    })

    it('OG image alt equals title', () => {
      const meta = buildMetadata({ title: 'My Title', description: 'D', path: '/' })
      const og = meta.openGraph as { images: Array<{ alt: string }> }
      expect(og.images[0].alt).toBe('My Title')
    })

    it('OG image dimensions are 1200x630', () => {
      const meta = buildMetadata({ title: 'T', description: 'D', path: '/' })
      const og = meta.openGraph as { images: Array<{ width: number; height: number }> }
      expect(og.images[0].width).toBe(1200)
      expect(og.images[0].height).toBe(630)
    })
  })

  describe('keywords', () => {
    it('empty array by default → empty string', () => {
      const meta = buildMetadata({ title: 'T', description: 'D', path: '/' })
      expect(meta.keywords).toBe('')
    })

    it('keywords joined with ", "', () => {
      const meta = buildMetadata({ title: 'T', description: 'D', path: '/', keywords: ['tattoo', 'münchen', 'fineline'] })
      expect(meta.keywords).toBe('tattoo, münchen, fineline')
    })
  })

  describe('meta fields', () => {
    it('description is passed through', () => {
      const meta = buildMetadata({ title: 'T', description: 'My description', path: '/' })
      expect(meta.description).toBe('My description')
    })

    it('metadataBase is set to SITE.url', () => {
      const meta = buildMetadata({ title: 'T', description: 'D', path: '/' })
      expect(meta.metadataBase?.toString()).toBe(`${SITE.url}/`)
    })

    it('creator and publisher are set to site name', () => {
      const meta = buildMetadata({ title: 'T', description: 'D', path: '/' })
      expect(meta.creator).toBe(SITE.name)
      expect(meta.publisher).toBe(SITE.name)
    })

    it('twitter card is summary_large_image', () => {
      const meta = buildMetadata({ title: 'T', description: 'D', path: '/' })
      const tw = meta.twitter as { card: string }
      expect(tw.card).toBe('summary_large_image')
    })
  })
})

describe('KEYWORDS', () => {
  it('japanese pool is non-empty array of strings', () => {
    expect(Array.isArray(KEYWORDS.japanese)).toBe(true)
    expect(KEYWORDS.japanese.length).toBeGreaterThan(0)
    expect(typeof KEYWORDS.japanese[0]).toBe('string')
  })

  it('graphic pool is non-empty array of strings', () => {
    expect(Array.isArray(KEYWORDS.graphic)).toBe(true)
    expect(KEYWORDS.graphic.length).toBeGreaterThan(0)
  })

  it('general pool is non-empty array of strings', () => {
    expect(Array.isArray(KEYWORDS.general)).toBe(true)
    expect(KEYWORDS.general.length).toBeGreaterThan(0)
  })

  it('all pools contain Munich-related keywords', () => {
    const allKeywords = [...KEYWORDS.japanese, ...KEYWORDS.graphic, ...KEYWORDS.general]
    const hasMunich = allKeywords.some((k) => k.toLowerCase().includes('munich'))
    expect(hasMunich).toBe(true)
  })
})
