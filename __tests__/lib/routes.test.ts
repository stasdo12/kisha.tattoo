import { describe, it, expect } from 'vitest'
import { SLUG_PAGES, slugPageLocales, isNoIndexLocale } from '@/content/routes'

// German-only. Freising and Ottobrunn are deliberately absent: they rank in the
// top 10, and holding their translations back would change the hreflang on the
// German pages Google already has.
const GEO_PAGES = [
  '/tattoo-eching',
  '/tattoo-neufahrn',
  '/tattoo-dachau',
]

const GEO_PAGES_IN_TOP_10 = ['/tattoo-freising', '/tattoo-ottobrunn']

describe('slug page locales', () => {
  it('returns null for routes that are not German-slug pages', () => {
    expect(slugPageLocales('/booking')).toBeNull()
    expect(slugPageLocales('/blog/tattoo-coverup-muenchen')).toBeNull()
    expect(slugPageLocales('/')).toBeNull()
  })

  it('every slug page offers German', () => {
    for (const page of SLUG_PAGES) {
      expect(page.locales).toContain('')
    }
  })

  it('Landkreis pages are German only', () => {
    for (const path of GEO_PAGES) {
      expect(slugPageLocales(path)).toEqual([''])
    }
  })

  it('service pages keep all three locales', () => {
    expect(slugPageLocales('/tattoo-preise-muenchen')).toEqual(['', '/en', '/uk'])
    expect(slugPageLocales('/fineline-tattoo-muenchen')).toEqual(['', '/en', '/uk'])
  })
})

describe('isNoIndexLocale', () => {
  it('holds back the English and Ukrainian Landkreis pages', () => {
    for (const path of GEO_PAGES) {
      expect(isNoIndexLocale(path, 'en')).toBe(true)
      expect(isNoIndexLocale(path, 'uk')).toBe(true)
      expect(isNoIndexLocale(path, 'de')).toBe(false)
    }
  })

  it('leaves the two top-10 Landkreis pages exactly as Google has them', () => {
    for (const path of GEO_PAGES_IN_TOP_10) {
      expect(slugPageLocales(path)).toEqual(['', '/en', '/uk'])
      for (const locale of ['de', 'en', 'uk']) {
        expect(isNoIndexLocale(path, locale)).toBe(false)
      }
    }
  })

  it('leaves service pages indexable in every locale', () => {
    for (const locale of ['de', 'en', 'uk']) {
      expect(isNoIndexLocale('/tattoo-preise-muenchen', locale)).toBe(false)
      expect(isNoIndexLocale('/walk-in-tattoo-muenchen', locale)).toBe(false)
    }
  })

  it('never holds back a route it does not own', () => {
    expect(isNoIndexLocale('/booking', 'uk')).toBe(false)
    expect(isNoIndexLocale('/motive', 'en')).toBe(false)
  })
})
