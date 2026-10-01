/**
 * TATTOO UNIKATE — Kisha's one-off designs, sold once and never repeated.
 *
 * Structure only. Every word a visitor reads lives in messages/{de,en}.json
 * under the `unikate` namespace, keyed by slug.
 *
 * Status is edited by hand here and shipped with a push; a deploy takes a few
 * minutes, which is fast enough while there are six of these. `reservedUntil`
 * is what makes a reservation honest — it is held by the 100 € deposit, not by
 * an enquiry, so a design cannot sit frozen because somebody once wrote in.
 *
 * Keyword rules this file obeys (see the 30.09.2026 cannibalisation check):
 *  - no `Bedeutung` / `meaning` anywhere in a heading — that cluster belongs to
 *    /motive, which is nine keywords deep in the German top 10
 *  - no `irezumi` in English headings — /en/motive ranks #5 for `lotus irezumi`
 *  - no `Preis` / `Kosten` in headings — /tattoo-preise-muenchen holds 27 arm
 *    and 7 back keywords, all of them price variants
 *  - one body zone per card, never a list of them, so the six cards do not
 *    compete with each other
 */

export type UnikatStatus = 'verfuegbar' | 'reserviert' | 'vergeben'

export type Unikat = {
  /** URL segment under /tattoo-unikate/ */
  slug: string
  /** File in /public/images/unikate/ */
  image: string
  width: number
  height: number
  status: UnikatStatus
  /** DD.MM.YYYY — only meaningful while status is 'reserviert'. */
  reservedUntil?: string
}

export const UNIKATE: readonly Unikat[] = [
  {
    slug: 'geisha-kranich-ruecken',
    image: '/images/unikate/geisha-kranich-ruecken-tattoo-entwurf.jpg',
    width: 1131,
    height: 1600,
    status: 'verfuegbar',
  },
  {
    slug: 'geisha-faecher-arm',
    image: '/images/unikate/geisha-faecher-arm-tattoo-entwurf.jpg',
    width: 1130,
    height: 1600,
    status: 'verfuegbar',
  },
  {
    slug: 'koi-samurai-ruecken',
    image: '/images/unikate/samurai-koi-ruecken-tattoo-entwurf.jpg',
    width: 1131,
    height: 1600,
    status: 'verfuegbar',
  },
  {
    slug: 'hannya-maske-ruecken',
    image: '/images/unikate/hannya-maske-ruecken-tattoo-entwurf.jpg',
    width: 1132,
    height: 1600,
    status: 'verfuegbar',
  },
  {
    slug: 'oni-maske-brust',
    image: '/images/unikate/oni-maske-brust-tattoo-entwurf.jpg',
    width: 1130,
    height: 1600,
    status: 'verfuegbar',
  },
  // Last on purpose: this is the only landscape drawing of the six, and a wide
  // sketch in a portrait tile reads as the smallest one on the page. At the end
  // of the grid it gets its own row instead of competing with its neighbours.
  {
    slug: 'lotus-koi-brust',
    image: '/images/unikate/lotus-koi-brust-tattoo-entwurf.jpg',
    width: 1600,
    height: 1131,
    status: 'verfuegbar',
  },
]

export const UNIKAT_SLUGS = UNIKATE.map((u) => u.slug)

export function getUnikat(slug: string): Unikat | undefined {
  return UNIKATE.find((u) => u.slug === slug)
}
