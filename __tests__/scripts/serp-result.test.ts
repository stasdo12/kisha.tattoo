import { describe, it, expect } from 'vitest'
import { resultDomain } from '../../scripts/serp-result.mjs'

const wrapped = { domain: 'google.com', url: 'https://google.com/goto?url=CAES' }

describe('resultDomain', () => {
  it('keeps an ordinary result as it is', () => {
    expect(resultDomain({ domain: 'www.toms.tattoo', breadcrumb: 'https://www.toms.tattoo › preise' })).toBe('www.toms.tattoo')
  })

  it('reads the real site from the breadcrumb of a wrapped result', () => {
    expect(resultDomain({ ...wrapped, breadcrumb: 'https://kisha.tattoo', website_name: 'kisha.tattoo' })).toBe('kisha.tattoo')
    expect(resultDomain({ ...wrapped, breadcrumb: 'https://kisha.tattoo › tattoo-preise-muenchen' })).toBe('kisha.tattoo')
  })

  it('falls back to the site name when the breadcrumb is not a URL', () => {
    expect(resultDomain({ ...wrapped, breadcrumb: '9 Kommentare  ·  vor 2 Jahren', website_name: 'Reddit · r/Munich' })).toBe('Reddit · r/Munich')
  })

  it('leaves a wrapped result without any hint on google.com', () => {
    expect(resultDomain(wrapped)).toBe('google.com')
  })
})
