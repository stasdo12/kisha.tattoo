import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['de', 'en', 'uk'],
  defaultLocale: 'de',
  // DE has no prefix (kisha.tattoo/), EN = /en/, UK = /uk/
  // This preserves all existing indexed German URLs
  localePrefix: 'as-needed',
})

export type Locale = (typeof routing.locales)[number]
