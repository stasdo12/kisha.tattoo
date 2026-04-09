import { SITE } from '@/content/site'

const BASE = SITE.url

/**
 * Image sitemap — helps Google Images index the portfolio.
 * Covers: /works (all tattoo photos) + / (homepage) + /about
 *
 * Format: https://www.google.com/schemas/sitemap-image/1.1
 * Submit at: GSC → Sitemaps → https://kisha.tattoo/image-sitemap.xml
 */

interface SitemapImage {
  loc: string
  title: string
  caption?: string
}

interface SitemapUrl {
  loc: string
  images: SitemapImage[]
}

const URLS: SitemapUrl[] = [
  {
    loc: `${BASE}/works`,
    images: [
      { loc: `${BASE}/images/work/main-work-tattoo.jpg`,                        title: 'Kisha Tattoo München — Portfolio Overview',                   caption: 'Tattoo portfolio by Kisha — München, Bavaria' },
      { loc: `${BASE}/images/work/middle-graphic-body-flower-tattoo.jpg`,        title: 'Grafik Blumen Körper Tattoo München — Kisha',                  caption: 'Graphic flower body tattoo by Kisha Tattoo München' },
      { loc: `${BASE}/images/work/4x4-japan-fox-tattoo-graphic.jpg`,             title: 'Japanisches Fuchs Tattoo München — Kisha',                    caption: 'Japanese fox graphic tattoo by Kisha — München' },
      { loc: `${BASE}/images/work/4x4-rabbit-tattoo-graphic.jpg`,                title: 'Grafik Hasen Tattoo München — Kisha',                         caption: 'Graphic rabbit tattoo by Kisha Tattoo München' },
      { loc: `${BASE}/images/work/4x4-birds-tattoo-graphic.jpg`,                 title: 'Grafik Vögel Tattoo München — Kisha',                         caption: 'Graphic birds tattoo by Kisha — München' },
      { loc: `${BASE}/images/work/4x4-bugs-tattoo-graphic.jpg`,                  title: 'Grafik Insekten Tattoo München — Kisha',                      caption: 'Graphic insects tattoo by Kisha Tattoo München' },
      { loc: `${BASE}/images/work/row2-snake-knie-tattoo.jpg`,                   title: 'Grafik Schlangen Knie Tattoo München — Kisha',                 caption: 'Graphic snake knee tattoo by Kisha — München' },
      { loc: `${BASE}/images/work/big-snake-tattoo-graphic.jpg`,                 title: 'Großes Schlangen Grafik Tattoo München — Kisha',               caption: 'Large graphic snake tattoo by Kisha Tattoo München' },
      { loc: `${BASE}/images/work/middle-graphic-hand-with-flower-tattoo.jpg`,   title: 'Grafik Blumen Hand Tattoo München — Kisha',                   caption: 'Graphic flower hand tattoo by Kisha — München' },
      { loc: `${BASE}/images/work/middle-graphic-legs-tattoo.jpg`,               title: 'Grafik Bein Tattoo München — Kisha',                          caption: 'Graphic leg tattoo by Kisha Tattoo München' },
      { loc: `${BASE}/images/work/4x4-dog-tattoo-fineline.jpg`,                  title: 'Fineline Hund Tattoo München — Kisha',                        caption: 'Fineline dog tattoo by Kisha — München' },
      { loc: `${BASE}/images/work/4x4-fogel-tattoo-graphic.jpg`,                 title: 'Grafik Vogel Tattoo München — Kisha',                         caption: 'Graphic bird tattoo by Kisha Tattoo München' },
      { loc: `${BASE}/images/work/4x4-owl-tattoo-fineline.jpg`,                  title: 'Fineline Eule Tattoo München — Kisha',                        caption: 'Fineline owl tattoo by Kisha — München' },
      { loc: `${BASE}/images/work/4x4-sakura-tattoo.jpg`,                        title: 'Sakura Tattoo München — Kisha',                               caption: 'Sakura cherry blossom tattoo by Kisha Tattoo München' },
    ],
  },
  {
    loc: `${BASE}/`,
    images: [
      { loc: `${BASE}/images/home/hero-portrait.jpg`,           title: 'Kisha — Tattoo-Künstlerin München',               caption: 'Kisha, tattoo artist in München — Irezumi & Graphic Tattoo' },
      { loc: `${BASE}/images/home/motif-dragon.jpg`,            title: 'Drachen Tattoo Motiv München — Kisha',             caption: 'Japanese dragon Irezumi tattoo motif by Kisha München' },
      { loc: `${BASE}/images/home/motif-fox.jpg`,               title: 'Fuchs Kitsune Tattoo Motiv München — Kisha',       caption: 'Kitsune fox tattoo motif by Kisha — Japanese Irezumi München' },
      { loc: `${BASE}/images/home/motif-koi.jpg`,               title: 'Koi Tattoo Motiv München — Kisha',                caption: 'Koi fish Japanese Irezumi tattoo motif by Kisha München' },
      { loc: `${BASE}/images/home/motif-sakura.jpg`,            title: 'Sakura Tattoo Motiv München — Kisha',             caption: 'Sakura cherry blossom tattoo motif by Kisha München' },
      { loc: `${BASE}/images/home/motif-tiger.jpg`,             title: 'Tiger Tattoo Motiv München — Kisha',              caption: 'Japanese tiger Irezumi tattoo motif by Kisha München' },
      { loc: `${BASE}/images/home/philosophy-snake-graphic.jpg`, title: 'Grafik Schlangen Tattoo München — Kisha',         caption: 'Graphic snake tattoo — Kisha Tattoo München philosophy' },
      { loc: `${BASE}/images/home/works-01-blackwork-fullbody.jpg`, title: 'Blackwork Fullbody Tattoo München — Kisha',   caption: 'Blackwork full body tattoo by Kisha — München' },
      { loc: `${BASE}/images/home/works-02-fox-japanese.jpg`,   title: 'Japanisches Fuchs Tattoo München — Kisha',        caption: 'Japanese fox Irezumi tattoo by Kisha München' },
      { loc: `${BASE}/images/home/works-03-flower-japanese.jpg`, title: 'Japanisches Blumen Tattoo München — Kisha',      caption: 'Japanese flower Irezumi tattoo by Kisha München' },
      { loc: `${BASE}/images/home/works-04-god-japanese.jpg`,   title: 'Japanisches Gott Tattoo München — Kisha',         caption: 'Japanese deity Irezumi tattoo by Kisha München' },
      { loc: `${BASE}/images/home/works-05-flowers-graphic.jpg`, title: 'Grafik Blumen Tattoo München — Kisha',           caption: 'Graphic flowers tattoo by Kisha — München' },
      { loc: `${BASE}/images/home/works-06-mace-graphic-leg.jpg`, title: 'Grafik Bein Tattoo München — Kisha',            caption: 'Graphic leg mace tattoo by Kisha München' },
    ],
  },
  {
    loc: `${BASE}/about`,
    images: [
      { loc: `${BASE}/images/about/hero-portrait.jpg`,       title: 'Kisha — Tattoo-Künstlerin München Portrait',   caption: 'Kisha, award-winning tattoo artist in München' },
      { loc: `${BASE}/images/about/studio-wide.jpg`,         title: 'BavariaTattoo Studio München — Kisha Atelier', caption: 'BavariaTattoo Studio, Neufahrn bei Freising — Kisha Tattoo' },
      { loc: `${BASE}/images/about/passion-large-1.jpg`,     title: 'Kisha Tattoo München — Arbeit am Tattoo 1',    caption: 'Kisha tattooing at BavariaTattoo Studio München' },
      { loc: `${BASE}/images/about/passion-large-2.jpg`,     title: 'Kisha Tattoo München — Arbeit am Tattoo 2',    caption: 'Kisha at work — tattoo process München' },
      { loc: `${BASE}/images/about/passion-large-3.jpg`,     title: 'Kisha Tattoo München — Arbeit am Tattoo 3',    caption: 'Japanese Irezumi tattooing process — Kisha München' },
      { loc: `${BASE}/images/about/passion-large-4.jpg`,     title: 'Kisha Tattoo München — Arbeit am Tattoo 4',    caption: 'Graphic tattoo process by Kisha — München' },
    ],
  },
]

function buildXml(urls: SitemapUrl[]): string {
  const urlEntries = urls.map(({ loc, images }) => {
    const imageEntries = images
      .map(({ loc: imgLoc, title, caption }) =>
        [
          '    <image:image>',
          `      <image:loc>${imgLoc}</image:loc>`,
          `      <image:title>${title}</image:title>`,
          caption ? `      <image:caption>${caption}</image:caption>` : '',
          '    </image:image>',
        ]
          .filter(Boolean)
          .join('\n')
      )
      .join('\n')

    return `  <url>\n    <loc>${loc}</loc>\n${imageEntries}\n  </url>`
  })

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
    ...urlEntries,
    '</urlset>',
  ].join('\n')
}

export function GET() {
  return new Response(buildXml(URLS), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=3600',
    },
  })
}