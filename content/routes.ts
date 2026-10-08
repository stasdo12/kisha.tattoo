/**
 * Pages that live on a German slug.
 *
 * Every one of them is served in all three locales — the language switcher
 * reaches them and they render fine. `locales` says something narrower: which
 * of those translations is meant to be *found*. Sitemap listing, hreflang and
 * the robots tag all read this one list, because when they disagree Google
 * picks the pessimistic reading and drops the page.
 *
 * Why the geo pages are German-only: nobody looks for a tattoo studio in
 * Eching or Dachau in English or Ukrainian. Those translations existed, were
 * crawled, and sat in "crawled — currently not indexed" for months. Saying so
 * out loud costs nothing and stops the mixed signals.
 */
export type SlugPage = {
  path: string
  freq: 'weekly' | 'monthly' | 'yearly'
  pri: number
  /** '' is German (no prefix). */
  locales: readonly string[]
}

export const SLUG_PAGES: readonly SlugPage[] = [
  // Service and style pages — English and Ukrainian both have an audience here.
  // /en/tattoo-preise-muenchen holds five top-10 keys on its own.
  { path: '/tattoo-preise-muenchen',      freq: 'monthly', pri: 0.9,  locales: ['', '/en', '/uk'] },
  { path: '/japanisches-tattoo-muenchen', freq: 'monthly', pri: 0.85, locales: ['', '/en', '/uk'] },
  { path: '/grafik-tattoo-muenchen',      freq: 'monthly', pri: 0.85, locales: ['', '/en', '/uk'] },
  { path: '/fineline-tattoo-muenchen',    freq: 'monthly', pri: 0.85, locales: ['', '/en', '/uk'] },
  { path: '/walk-in-tattoo-muenchen',     freq: 'monthly', pri: 0.8,  locales: ['', '/en', '/uk'] },

  // Gift vouchers — German and English. Ukrainian demand for the term is zero
  // (Google Ads, Oct 2026), so that translation renders for visitors already on
  // the /uk tree but is not offered to the index, like Unikate below.
  { path: '/tattoo-gutschein-muenchen',   freq: 'monthly', pri: 0.8,  locales: ['', '/en'] },

  // Unikate — the one-off designs. German and English only: the whole /uk tree
  // draws 23 clicks a quarter against 201 for /en/motive alone, so seven more
  // Ukrainian URLs would dilute a coverage number that is already thin (17 of
  // ~144 crawled URLs rank). The Ukrainian copy exists and renders; it is just
  // not offered to the index. Add it once the section earns the traffic.
  { path: '/tattoo-unikate',              freq: 'weekly',  pri: 0.75, locales: ['', '/en'] },

  // Landkreis pages — German only. Nobody looks for a studio in Eching or
  // Neufahrn in English or Ukrainian; those translations were crawled for
  // months and never indexed.
  { path: '/tattoo-eching',    freq: 'yearly', pri: 0.6, locales: [''] },
  { path: '/tattoo-neufahrn',  freq: 'yearly', pri: 0.6, locales: [''] },
  { path: '/tattoo-dachau',    freq: 'yearly', pri: 0.6, locales: [''] },

  // Ottobrunn (#9) and Freising (#10) sit in the top 10, and holding their
  // translations back would have meant dropping two hreflang tags from the
  // German pages Google already ranks. Left exactly as indexed — the untidiness
  // of an EN/UK twin that never gets indexed costs nothing, and these two pages
  // are not ours to experiment on.
  { path: '/tattoo-freising',  freq: 'yearly', pri: 0.6, locales: ['', '/en', '/uk'] },
  { path: '/tattoo-ottobrunn', freq: 'yearly', pri: 0.6, locales: ['', '/en', '/uk'] },
]

/** Only the sitemap lists EN/UK for a slug page when the page earns it. */
const SITEMAP_LOCALES = new Map(SLUG_PAGES.map((p) => [p.path, p.locales]))

/**
 * Locales a German-slug page should be indexed in. Returns null for paths that
 * are not slug pages at all, which is every ordinary route — those keep the
 * default three-locale treatment.
 */
export function slugPageLocales(path: string): readonly string[] | null {
  return SITEMAP_LOCALES.get(path) ?? null
}

/** `true` when this locale's copy of the path is meant to stay out of the index. */
export function isNoIndexLocale(path: string, locale: string): boolean {
  const locales = slugPageLocales(path)
  if (!locales) return false
  return !locales.includes(locale === 'de' ? '' : `/${locale}`)
}
