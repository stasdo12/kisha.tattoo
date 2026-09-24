import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['de', 'en', 'uk'],
  defaultLocale: 'de',
  // DE has no prefix (kisha.tattoo/), EN = /en/, UK = /uk/
  // This preserves all existing indexed German URLs
  localePrefix: 'as-needed',
  // next-intl otherwise sends an hreflang `Link:` HTTP header on every response,
  // naming all three locales unconditionally. Google weighs that header the same
  // as the tags in the head, so it was re-advertising the EN/UK Landkreis pages
  // we deliberately hold back — and putting hreflang on the noindex legal pages,
  // which never had any in their markup. The head builds these per page and is
  // the only place that knows which locales a page is actually meant for.
  alternateLinks: false,
})

export type Locale = (typeof routing.locales)[number]
