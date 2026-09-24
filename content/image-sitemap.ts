/**
 * Hand-picked images for the image sitemap, carried over from the static
 * public/image-sitemap.xml this replaced.
 *
 * main-work-tattoo.JPG is upper-case on purpose: that is the name git tracks,
 * and the VPS also carries an untracked lower-case copy left behind by an old
 * rsync. Asking for .jpg there serves the 19MB original that no deploy can
 * replace, because git does not know the file exists. Blog covers are not listed here —
 * app/image-sitemap.xml/route.ts derives those from STORIES so a new article
 * cannot ship without its cover.
 */
export type SitemapImage = { loc: string; title: string; caption: string }
export type SitemapImagePage = { path: string; images: SitemapImage[] }

export const CURATED_IMAGE_PAGES: SitemapImagePage[] = [
  {
    path: "/works",
    images: [
      { loc: "https://kisha.tattoo/images/work/main-work-tattoo.JPG", title: "Kisha Tattoo M\u00fcnchen \u2014 Portfolio Overview", caption: "Tattoo portfolio by Kisha \u2014 M\u00fcnchen, Bavaria" },
      { loc: "https://kisha.tattoo/images/work/middle-graphic-body-flower-tattoo.jpg", title: "Grafik Blumen K\u00f6rper Tattoo M\u00fcnchen \u2014 Kisha", caption: "Graphic flower body tattoo by Kisha Tattoo M\u00fcnchen" },
      { loc: "https://kisha.tattoo/images/work/4x4-japan-fox-tattoo-graphic.jpg", title: "Japanisches Fuchs Tattoo M\u00fcnchen \u2014 Kisha", caption: "Japanese fox graphic tattoo by Kisha \u2014 M\u00fcnchen" },
      { loc: "https://kisha.tattoo/images/work/4x4-rabbit-tattoo-graphic.jpg", title: "Grafik Hasen Tattoo M\u00fcnchen \u2014 Kisha", caption: "Graphic rabbit tattoo by Kisha Tattoo M\u00fcnchen" },
      { loc: "https://kisha.tattoo/images/work/4x4-birds-tattoo-graphic.jpg", title: "Grafik V\u00f6gel Tattoo M\u00fcnchen \u2014 Kisha", caption: "Graphic birds tattoo by Kisha \u2014 M\u00fcnchen" },
      { loc: "https://kisha.tattoo/images/work/4x4-bugs-tattoo-graphic.jpg", title: "Grafik Insekten Tattoo M\u00fcnchen \u2014 Kisha", caption: "Graphic insects tattoo by Kisha Tattoo M\u00fcnchen" },
      { loc: "https://kisha.tattoo/images/work/row2-snake-knie-tattoo.jpg", title: "Grafik Schlangen Knie Tattoo M\u00fcnchen \u2014 Kisha", caption: "Graphic snake knee tattoo by Kisha \u2014 M\u00fcnchen" },
      { loc: "https://kisha.tattoo/images/work/big-snake-tattoo-graphic.jpg", title: "Gro\u00dfes Schlangen Grafik Tattoo M\u00fcnchen \u2014 Kisha", caption: "Large graphic snake tattoo by Kisha Tattoo M\u00fcnchen" },
      { loc: "https://kisha.tattoo/images/work/middle-graphic-hand-with-flower-tattoo.jpg", title: "Grafik Blumen Hand Tattoo M\u00fcnchen \u2014 Kisha", caption: "Graphic flower hand tattoo by Kisha \u2014 M\u00fcnchen" },
      { loc: "https://kisha.tattoo/images/work/middle-graphic-legs-tattoo.jpg", title: "Grafik Bein Tattoo M\u00fcnchen \u2014 Kisha", caption: "Graphic leg tattoo by Kisha Tattoo M\u00fcnchen" },
      { loc: "https://kisha.tattoo/images/work/4x4-dog-tattoo-fineline.jpg", title: "Fineline Hund Tattoo M\u00fcnchen \u2014 Kisha", caption: "Fineline dog tattoo by Kisha \u2014 M\u00fcnchen" },
      { loc: "https://kisha.tattoo/images/work/4x4-fogel-tattoo-graphic.jpg", title: "Grafik Vogel Tattoo M\u00fcnchen \u2014 Kisha", caption: "Graphic bird tattoo by Kisha Tattoo M\u00fcnchen" },
      { loc: "https://kisha.tattoo/images/work/4x4-owl-tattoo-fineline.jpg", title: "Fineline Eule Tattoo M\u00fcnchen \u2014 Kisha", caption: "Fineline owl tattoo by Kisha \u2014 M\u00fcnchen" },
      { loc: "https://kisha.tattoo/images/work/4x4-sakura-tattoo.jpg", title: "Sakura Tattoo M\u00fcnchen \u2014 Kisha", caption: "Sakura cherry blossom tattoo by Kisha Tattoo M\u00fcnchen" }
    ],
  },
  {
    path: "/",
    images: [
      { loc: "https://kisha.tattoo/images/home/hero-portrait.jpg", title: "Kisha \u2014 Tattoo-K\u00fcnstlerin M\u00fcnchen", caption: "Kisha, tattoo artist in M\u00fcnchen \u2014 Irezumi &amp; Graphic Tattoo" },
      { loc: "https://kisha.tattoo/images/home/motif-dragon.jpg", title: "Drachen Tattoo Motiv M\u00fcnchen \u2014 Kisha", caption: "Japanese dragon Irezumi tattoo motif by Kisha M\u00fcnchen" },
      { loc: "https://kisha.tattoo/images/home/motif-fox.jpg", title: "Fuchs Kitsune Tattoo Motiv M\u00fcnchen \u2014 Kisha", caption: "Kitsune fox tattoo motif by Kisha \u2014 Japanese Irezumi M\u00fcnchen" },
      { loc: "https://kisha.tattoo/images/home/motif-koi.jpg", title: "Koi Tattoo Motiv M\u00fcnchen \u2014 Kisha", caption: "Koi fish Japanese Irezumi tattoo motif by Kisha M\u00fcnchen" },
      { loc: "https://kisha.tattoo/images/home/motif-sakura.jpg", title: "Sakura Tattoo Motiv M\u00fcnchen \u2014 Kisha", caption: "Sakura cherry blossom tattoo motif by Kisha M\u00fcnchen" },
      { loc: "https://kisha.tattoo/images/home/motif-tiger.jpg", title: "Tiger Tattoo Motiv M\u00fcnchen \u2014 Kisha", caption: "Japanese tiger Irezumi tattoo motif by Kisha M\u00fcnchen" },
      { loc: "https://kisha.tattoo/images/home/philosophy-snake-graphic.jpg", title: "Grafik Schlangen Tattoo M\u00fcnchen \u2014 Kisha", caption: "Graphic snake tattoo \u2014 Kisha Tattoo M\u00fcnchen philosophy" },
      { loc: "https://kisha.tattoo/images/home/works-01-blackwork-fullbody.jpg", title: "Blackwork Fullbody Tattoo M\u00fcnchen \u2014 Kisha", caption: "Blackwork full body tattoo by Kisha \u2014 M\u00fcnchen" },
      { loc: "https://kisha.tattoo/images/home/works-02-fox-japanese.jpg", title: "Japanisches Fuchs Tattoo M\u00fcnchen \u2014 Kisha", caption: "Japanese fox Irezumi tattoo by Kisha M\u00fcnchen" },
      { loc: "https://kisha.tattoo/images/home/works-03-flower-japanese.jpg", title: "Japanisches Blumen Tattoo M\u00fcnchen \u2014 Kisha", caption: "Japanese flower Irezumi tattoo by Kisha M\u00fcnchen" },
      { loc: "https://kisha.tattoo/images/home/works-04-god-japanese.jpg", title: "Japanisches Gott Tattoo M\u00fcnchen \u2014 Kisha", caption: "Japanese deity Irezumi tattoo by Kisha M\u00fcnchen" },
      { loc: "https://kisha.tattoo/images/home/works-05-flowers-graphic.jpg", title: "Grafik Blumen Tattoo M\u00fcnchen \u2014 Kisha", caption: "Graphic flowers tattoo by Kisha \u2014 M\u00fcnchen" },
      { loc: "https://kisha.tattoo/images/home/works-06-mace-graphic-leg.jpg", title: "Grafik Bein Tattoo M\u00fcnchen \u2014 Kisha", caption: "Graphic leg tattoo by Kisha M\u00fcnchen" }
    ],
  },
  {
    path: "/about",
    images: [
      { loc: "https://kisha.tattoo/images/about/hero-portrait.jpg", title: "Kisha \u2014 Tattoo-K\u00fcnstlerin M\u00fcnchen Portrait", caption: "Kisha, award-winning tattoo artist in M\u00fcnchen" },
      { loc: "https://kisha.tattoo/images/about/studio-wide.jpg", title: "BavariaTattoo Studio M\u00fcnchen \u2014 Kisha Atelier", caption: "BavariaTattoo Studio, Neufahrn bei Freising \u2014 Kisha Tattoo" },
      { loc: "https://kisha.tattoo/images/about/passion-large-1.jpg", title: "Kisha Tattoo M\u00fcnchen \u2014 Arbeit am Tattoo 1", caption: "Kisha tattooing at BavariaTattoo Studio M\u00fcnchen" },
      { loc: "https://kisha.tattoo/images/about/passion-large-2.jpg", title: "Kisha Tattoo M\u00fcnchen \u2014 Arbeit am Tattoo 2", caption: "Kisha at work \u2014 tattoo process M\u00fcnchen" },
      { loc: "https://kisha.tattoo/images/about/passion-large-3.jpg", title: "Kisha Tattoo M\u00fcnchen \u2014 Japanisches Irezumi Prozess", caption: "Japanese Irezumi tattooing process \u2014 Kisha M\u00fcnchen" },
      { loc: "https://kisha.tattoo/images/about/passion-large-4.jpg", title: "Kisha Tattoo M\u00fcnchen \u2014 Grafik Tattoo Prozess", caption: "Graphic tattoo process by Kisha \u2014 M\u00fcnchen" }
    ],
  },
  {
    path: "/team",
    images: [
      { loc: "https://kisha.tattoo/images/about/hero-portrait.jpg", title: "Kisha \u2014 Tattoo-K\u00fcnstlerin M\u00fcnchen", caption: "Kisha, award-winning tattoo artist \u2014 Japanisches Irezumi, Fineline, Grafik" }
    ],
  },
]
