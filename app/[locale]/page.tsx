/**
 * GRAPHIC HOME — Kisha Irezumi landing page
 * Design: Figma spec 1920px · Colors: #0D0D0D · #BFBFBF · #F2F2F2
 * Font: DM Sans (PP Neue Montreal substitute) weight 500
 * SSG — fully static, crawlable
 */
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import { buildMetadata } from '@/lib/seo'
import { serviceSchema, faqSchema } from '@/lib/structured-data'
import { CtaStrip } from '@/components/graphic/CtaStrip'
import { GHeader } from '@/components/graphic/GHeader'
import { GFooter } from '@/components/graphic/GFooter'

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'home' })
  return buildMetadata({ title: t('meta.title'), description: t('meta.description'), path: '/', locale })
}

/* ── Data ──────────────────────────────────────────────────────────────────── */

/*
 * Works gallery
 * 1440 spec: 1 large (389×420) + 4 small (186×200) = 389+4×186+5×16 = 1397px ≈ 1400px
 * 1920 spec: 1 large (460×552) + 5 small (260×312) = 460+5×260+5×16 = 1840px = exact fit
 * → 6 items total; 5th small is hidden at 1440 via CSS (see .g-works-5th)
 */
const WORKS = [
  { id: 1, src: '/images/home/works-01-blackwork-fullbody.jpg', alt: 'Japanisches Irezumi Vollkörper-Tattoo in Schwarz — Kisha München',       large: true },
  { id: 2, src: '/images/home/works-02-fox-japanese.jpg',       alt: 'Kitsune Fuchs-Tattoo im japanischen Stil — Kisha Tattoo München',        large: false },
  { id: 3, src: '/images/home/works-03-flower-japanese.jpg',    alt: 'Japanisches Blumen-Tattoo — traditioneller Irezumi-Stil München',        large: false },
  { id: 4, src: '/images/home/works-04-god-japanese.jpg',       alt: 'Japanischer Gott Tattoo — Irezumi München — Kisha',                      large: false },
  { id: 5, src: '/images/home/works-05-flowers-graphic.jpg',    alt: 'Grafik-Tattoo Blumen — femininer Stil — Kisha Tattoo München',           large: false },
  { id: 6, src: '/images/home/works-06-mace-graphic-leg.jpg',   alt: 'Grafik-Tattoo Keule am Bein — großformatiges Tattoo München — Kisha',   large: false },
]

/* MOTIFS defined inside component */

/* FAQ defined inside component */

/* ── Page ───────────────────────────────────────────────────────────────────── */
export default async function GraphicHomePage() {
  const t = await getTranslations('home')

  const MOTIFS = [
    { id: 'dragon', name: t('motifs.dragon.name'), href: '/motive#drachen', src: '/images/home/motif-dragon.jpg', desc: t('motifs.dragon.desc') },
    { id: 'carp',   name: t('motifs.carp.name'),   href: '/motive#koi',     src: '/images/home/motif-koi.jpg',    desc: t('motifs.carp.desc') },
    { id: 'fox',    name: t('motifs.fox.name'),     href: '/motive#kitsune', src: '/images/home/motif-fox.jpg',    desc: t('motifs.fox.desc') },
    { id: 'cherry', name: t('motifs.cherry.name'),  href: '/motive#sakura',  src: '/images/home/motif-sakura.jpg', desc: t('motifs.cherry.desc') },
    { id: 'tiger',  name: t('motifs.tiger.name'),   href: '/motive#tiger',   src: '/images/home/motif-tiger.jpg',  desc: t('motifs.tiger.desc') },
  ]

  const FAQ = [
    { q: t('faq.item0.q'), a: t('faq.item0.a') },
    { q: t('faq.item1.q'), a: t('faq.item1.a') },
    { q: t('faq.item2.q'), a: t('faq.item2.a') },
    { q: t('faq.item3.q'), a: t('faq.item3.a') },
    { q: t('faq.item4.q'), a: t('faq.item4.a') },
  ]

  const schema = serviceSchema({
    name: 'Kisha — Tattoo Artist München',
    description: 'Kisha ist Tattoo Artist in München — spezialisiert auf Japanisches Irezumi, Fineline und Grafik. Individuelle Tattoo-Projekte mit 5+ Jahren Erfahrung.',
    url: '/',
  })

  const faq = faqSchema(FAQ.map((f) => ({ question: f.q, answer: f.a })))

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />

      <main id="main-content">

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        {/*
          Layout anchored to 1440px Figma spec:
          - Hero: 780px tall → scales as 54.2vw, capped at 1080px
          - Photo: 240×260px, upper-left absolute
          - H1: positioned right of photo (~27% from left)
          - Kanji 道: 19.7% from left, 74.4% from top
          - Nav links: 94.9% from left (right: 5.1%), 43.9% from top
          - CTA strip: bottom: 0, full width
        */}
        <section
          aria-label="Kisha — Irezumi Mastery"
          className="g-hero-section"
          style={{
            position: 'relative',
            height: '100dvh',
            background: '#F2F2F2',
            overflow: 'hidden',
          }}
        >
          {/* Master photo — top-left, small (240×260 @ 1440) */}
          <div
            className="g-hero-photo"
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: 'var(--g-pad)',
              top: '60px',
              width: 'clamp(160px, 16.67vw, 320px)',
              height: 'clamp(173px, 18.06vw, 346px)',
            }}
          >
            <Image
              src="/images/home/hero-portrait.jpg"
              alt="Kisha — Tattoo Artist München, Spezialistin für Japanisches Irezumi"
              fill
              priority
              style={{ objectFit: 'cover', objectPosition: 'top center' }}
              sizes="(max-width: 767px) 160px, (max-width: 1919px) 17vw, 320px"
            />
          </div>

          <GHeader theme="light" />

          {/* Mobile-only: location / status tags below photo (top: 451px) */}
          <div className="g-hero-tags" aria-hidden="true">
            <span>[ Available for cooperation ]</span>
            <span>[ Munich, Germany ]</span>
          </div>

          {/* H1 + subtitle — to the right of photo */}
          <div
            className="g-hero-content"
            style={{
              position: 'absolute',
              left: 'calc(var(--g-pad) + clamp(160px, 16.67vw, 320px) + 2rem)',
              top: 'clamp(130px, 13.65vw, 262px)',
              maxWidth: 'clamp(20rem, 38.5vw, 44rem)',
            }}
          >
            <h1
              style={{
                fontSize: 'var(--g-xl)',
                lineHeight: 'var(--g-lh-xl)',
                color: '#0D0D0D',
                marginBottom: '1.5rem',
              }}
            >
              {t('hero.h1').split('\n')[0]}
              <br />
              {t('hero.h1').split('\n')[1]}
            </h1>
            <p
              style={{
                fontSize: 'var(--g-bm)',
                lineHeight: 'var(--g-lh-bm)',
                color: '#0D0D0D',
              }}
            >
              {t('hero.sub')}
            </p>
          </div>

          {/* Kanji 道 + caption — 19.7% from left, 74.4% from top */}
          <div
            className="g-hero-kanji"
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: '19.72%',
              top: '74.36%',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              width: '9.875rem',
            }}
          >
            <span
              className="g-kanji"
              style={{
                fontSize: 'var(--g-xl)',
                lineHeight: 'var(--g-lh-xl)',
                color: '#0D0D0D',
              }}
            >
              道
            </span>
            <span
              className="g-kanji-caption"
              style={{
                fontSize: 'var(--g-tag)',
                color: '#BFBFBF',
                lineHeight: 1,
              }}
            >
              {t('hero.kanji_caption')}
            </span>
          </div>


          {/* Scroll hint — hidden on mobile */}
          <div
            className="g-hero-scroll"
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: '91.32%',
              top: '88.08%',
              fontSize: 'var(--g-tag)',
              color: '#BFBFBF',
              whiteSpace: 'nowrap',
            }}
          >
            {t('hero.scroll')}
          </div>

          {/* CTA strip — 20px inset each side */}
          <div className="g-hero-cta" style={{ position: 'absolute', bottom: 0, left: 'var(--g-pad)', right: 'var(--g-pad)' }}>
            <CtaStrip label={t('ctaStrip')} />
          </div>
        </section>

        {/* ── WORKS ────────────────────────────────────────────────────────── */}
        <section
          className="g-works-section"
          aria-labelledby="works-heading"
          style={{ background: '#F2F2F2', padding: 'clamp(2rem, calc(20px + 4.167vw), 6.25rem) 0' }}
        >
          <div className="g-container">
            {/* Header */}
            <div className="g-section-header">
              {/*
               * Spec: width 145px, 12px font. Brackets rendered inline (not via CSS ::before/::after)
               * to prevent the closing ] from wrapping to a new line at constrained width.
               */}
              <span
                style={{
                  fontSize: 'var(--g-tag)',
                  color: '#0D0D0D',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}
              >
                {t('works.tag')}
              </span>
              <h2
                id="works-heading"
                className="g-works-title"
                style={{
                  fontSize: 'var(--g-l)',
                  lineHeight: 'var(--g-lh-l)',
                  color: '#0D0D0D',
                  textAlign: 'center',
                  /* 422px @ 1440 = 29.3vw; no max-width clamp so it scales with viewport */
                  width: 'clamp(22rem, 29.3vw, 35rem)',
                }}
              >
                {t('works.heading')}
              </h2>
              <Link
                href="/works"
                className="g-works-explore-link"
                style={{ fontSize: 'var(--g-tag)', color: '#0D0D0D', textDecoration: 'none', whiteSpace: 'nowrap' }}
              >
                {t('works.link')}
              </Link>
            </div>

            {/* Gallery */}
            <div
              className="g-works-gallery"
              style={{
                display: 'flex',
                gap: '1rem',
                alignItems: 'flex-start',
              }}
            >
              {/* Mobile-only explore link (shown inside gallery on 430px) */}
              <Link
                href="/works"
                className="g-works-explore-mobile"
                style={{ display: 'none', fontSize: 'var(--g-tag)', color: '#0D0D0D', textDecoration: 'none' }}
              >
                {t('works.link')}
              </Link>

              {WORKS.map((item) => (
                <div
                  key={item.id}
                  className="g-works-item"
                  style={{
                    flexShrink: 0,
                    position: 'relative',
                    /*
                     * Linear interpolation 1440→1920:
                     * large: 389px @ 1440 → 460px @ 1920 = clamp(389px, 27vw, 460px)
                     * small: 186px @ 1440 → 260px @ 1920
                     *   formula: -36 + 15.42vw
                     *   check: -36 + 15.42×1440 = 186 ✓   -36 + 15.42×1920 ≈ 260 ✓
                     */
                    width: item.large
                      ? 'clamp(200px, 27vw, 460px)'
                      : 'clamp(186px, calc(-36px + 15.42vw), 260px)',
                    aspectRatio: '5 / 6',
                    borderRadius: '2px',
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 767px) 100vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PHILOSOPHY ───────────────────────────────────────────────────── */}
        {/*
          Figma absolute layout (all positions from section left = viewport left):
          - H2:           left: var(--g-pad),         top: 0,              width: 254px
          - Right stack:  left: calc(48px + 45.83vw),  top: 22px,           width: 448px
                          → 708px@1440 ✓  928px@1920 ✓
                          contains: 愛 kanji + grey caption only (body is below photo)
          - Photo:        left: 0,                    top: 278px,           height: 50vw
                          → 720px@1440 ✓  960px@1920 ✓; photo bottom = 998px/1238px
          - Bottom texts: left: calc(48px + 45.83vw), top: calc(330px + 50vw)
                          → 1050px@1440 ✓  1290px@1920 ✓ (52px gap after photo)
          - Section h:    clamp(1300px, calc(580px + 50vw), 1540px)
                          → 1300px@1440 ✓  1540px@1920 ✓ (fits 2 bottom paragraphs)
        */}
        <section
          aria-labelledby="philosophy-heading"
          className="g-philosophy-section"
          style={{
            background: '#F2F2F2',
            position: 'relative',
            height: 'clamp(1300px, calc(580px + 50vw), 1340px)',
            overflow: 'hidden',
          }}
        >
          {/* H2 — top-left, aligns to content padding */}
          <h2
            id="philosophy-heading"
            className="g-philosophy-heading"
            style={{
              position: 'absolute',
              left: 'var(--g-pad)',
              top: 0,
              width: '24rem',
              fontSize: 'var(--g-l)',
              lineHeight: 'var(--g-lh-l)',
              color: '#0D0D0D',
            }}
          >
            {t('philosophy.heading').split('\n')[0]}<br />{t('philosophy.heading').split('\n')[1]}
          </h2>

          {/* Right column above photo: kanji 愛 + caption + "My work…" */}
          {/* gap reduced to 1.25rem so content bottom ~278px stays above photo (top: 320px) */}
          <div
            className="g-philosophy-right"
            style={{
              position: 'absolute',
              left: 'calc(48px + 45.83vw)',
              top: '22px',
              width: '28rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}
          >
            <span
              aria-hidden="true"
              style={{ fontSize: 'var(--g-xl)', lineHeight: 'var(--g-lh-xl)', color: '#0D0D0D' }}
            >
              愛
            </span>
            <span style={{ fontSize: 'var(--g-tag)', color: '#BFBFBF', width: '9.875rem', lineHeight: 1 }}>
              {t('philosophy.kanji_caption')}
            </span>
            <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D' }}>
              {t('philosophy.p1')}
            </p>
          </div>

          {/* Full-width photo — top: 320px (moved down 42px to clear right-stack text) */}
          {/* height: 50vw (720@1440, 960@1920); bottom: 1040@1440, 1280@1920 */}
          <div
            aria-hidden="true"
            className="g-philosophy-photo"
            style={{
              position: 'absolute',
              left: 'var(--g-pad)',
              right: 'var(--g-pad)',
              top: '320px',
              height: 'clamp(720px, 50vw, 760px)',
            }}
          >
            <Image
              src="/images/home/philosophy-snake-graphic.jpg"
              alt="Grafik-Tattoo Schlange — großformatiges Tattoo München — Kisha"
              fill
              style={{ objectFit: 'cover' }}
              sizes="100vw"
            />
          </div>

          {/* "In the world…" — below photo, same column as right stack */}
          {/* top: calc(372px + 50vw) → 1092px@1440, 1332px@1920 (photo bottom + 52px) */}
          <p
            className="g-philosophy-bottom"
            style={{
              position: 'absolute',
              left: 'calc(48px + 45.83vw)',
              top: 'min(calc(372px + 50vw), 1132px)',
              width: '28rem',
              fontSize: 'var(--g-bm)',
              lineHeight: 'var(--g-lh-bm)',
              color: '#0D0D0D',
            }}
          >
            {t('philosophy.p2')}
          </p>
        </section>

        {/* ── STEPS ────────────────────────────────────────────────────────── */}
        <section aria-labelledby="steps-heading" style={{ background: '#F2F2F2' }}>
          {/* Header — light bg */}
          <div className="g-container">
            <div className="g-section-header" style={{ justifyContent: 'center' }}>
              <h2
                id="steps-heading"
                style={{
                  fontSize: 'var(--g-l)',
                  lineHeight: 'var(--g-lh-l)',
                  color: '#0D0D0D',
                  textAlign: 'center',
                }}
              >
                {t('steps.heading').split('\n')[0]}<br />{t('steps.heading').split('\n')[1]}
              </h2>
            </div>
          </div>

          {/* Dark columns: 20px side margins, thin 2px strips with 20px vertical inset */}
          <div
            className="g-steps-dark"
            style={{
              paddingLeft: 'var(--g-pad)',
              paddingRight: 'var(--g-pad)',
              paddingTop: 0,
              paddingBottom: 0,
            }}
          >
            <div
              className="g-steps-inner"
              data-nav-dark
              style={{
                display: 'flex',
                background: '#0D0D0D',
              }}
            >
              {[
                { kanji: '一', title: t('steps.item0.title'), body: t('steps.item0.body') },
                { kanji: '二', title: t('steps.item1.title'), body: t('steps.item1.body') },
                { kanji: '三', title: t('steps.item2.title'), body: t('steps.item2.body') },
              ].map((step, i) => (
                <div key={step.title} style={{ display: 'contents' }}>
                  {i > 0 && (
                    <div
                      aria-hidden="true"
                      style={{ width: '1px', background: '#F2F2F2', margin: '15px 0', flexShrink: 0 }}
                    />
                  )}
                  <div
                    className="g-step"
                    style={{
                      background: '#0D0D0D',
                      padding: 'clamp(1.5rem, 2.08vw, 2.5rem)',
                      flex: '1 1 0',
                      minWidth: 0,
                    }}
                  >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <h3
                      style={{
                        fontSize: 'var(--g-s)',
                        lineHeight: 'var(--g-lh-s)',
                        color: '#F2F2F2',
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 'var(--g-bm)',
                        lineHeight: 'var(--g-lh-bm)',
                        color: '#F2F2F2',
                        maxWidth: '22rem',
                      }}
                    >
                      {step.body}
                    </p>
                  </div>
                  <div
                    style={{
                      fontSize: 'var(--g-s)',
                      lineHeight: 'var(--g-lh-s)',
                      color: '#F2F2F2',
                      textAlign: 'center',
                      marginTop: 'auto',
                    }}
                    aria-hidden="true"
                  >
                    {step.kanji}
                  </div>
                </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TRAD (Motifs) ─────────────────────────────────────────────────── */}
        {/*
          Desktop (1440–1920): cards absolutely positioned inside a relative wrapper.
          LEFT positions use %-of-wrapper so they scale at any viewport ≥ 430px:
            • Card width:   24.25%   (338/1400 @ 1440 ✓  448/1840 @ 1920 ✓)
            • Carp left:    25.25%   (354/1400 ✓  464/1840 ✓)
            • Fox left:     50.5%    (708/1400 ✓  928/1840 ✓)
            • Cherry left:  12.63%   (177/1400 ✓  232/1840 ✓)
            • Tiger left:   37.88%   (531/1400 ✓  696/1840 ✓)
          TOP and image-height use vw-based clamp (exact spec values).
          Wrapper height:  clamp(1146px, 666px + 33.33vw, 1306px)
          Row-2 top:       clamp(553px,  193px + 25vw,    673px)
          Img height:      clamp(420px,  180px + 16.67vw, 500px)

          Mobile (≤430px): wrapper → flex column, cards fill 100%.
        */}
        <section
          aria-labelledby="trad-heading"
          className="g-trad-section"
          style={{ background: '#F2F2F2', padding: 'clamp(2rem, calc(20px + 4.167vw), 6.25rem) 0' }}
        >
          <div className="g-container" style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(2rem, 3.61vw, 3.25rem)' }}>

            {/* Heading: text LEFT — 忍 RIGHT (with caption) */}
            <div
              className="g-trad-heading"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: '2rem',
              }}
            >
              {/* Left: h2 + body */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '27rem' }}>
                <h2
                  id="trad-heading"
                  style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D' }}
                >
                  {t('motifs.heading')}
                </h2>
                <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D' }}>
                  {t('motifs.body')}
                </p>
              </div>

              {/* Right: 忍 kanji + caption */}
              <div
                aria-hidden="true"
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.75rem', flexShrink: 0 }}
              >
                <span className="g-kanji">忍</span>
                <span className="g-kanji-caption" style={{ textAlign: 'right', maxWidth: '7rem' }}>
                  {t('motifs.kanji_caption')}
                </span>
              </div>
            </div>

            {/*
              4-slot staggered layout (slot 1 intentionally empty in row 1):
              Row 1: Dragon[0] | [empty 1] | Koi[2] | Kitsune[3]
              Row 2:            Sakura[1]   Tiger[2]

              Card width: calc(25% - 12px)  → 338px @ 1440 ✓  448px @ 1920 ✓
              4 slots, 16px gaps between slots.

              Slot left edges (n = slot index):
                left = calc(n * 25% + n * 4px)  →  0 | 25%+4px | 50%+8px | 75%+12px

              Verified @ 1440px (container=1400):
                Dragon  0        Koi    708px   Kitsune 1062px (right edge 1400px ✓)
                Sakura  354px    Tiger  708px
              Verified @ 1920px (container=1840):
                Dragon  0        Koi    928px   Kitsune 1392px (right edge 1840px ✓)
                Sakura  464px    Tiger  928px

              Row 2 top: clamp(580px, calc(301px + 19.38vw), 673px) — matches Figma 673px@1920
              Wrapper height: clamp(1130px, calc(602px + 36.7vw), 1306px)
              Mobile (≤430px): CSS overrides to flex-column stack.
            */}
            <div
              className="g-trad-cards-wrapper"
              style={{ position: 'relative', height: 'clamp(1130px, calc(602px + 36.7vw), 1306px)' }}
            >
              {MOTIFS.map((motif, i) => {
                const isRow2 = i >= 3
                // Slot: Dragon=0, Koi=2, Kitsune=3, Sakura=1, Tiger=2
                const leftMap = [
                  '0',                      // Dragon  — slot 0
                  'calc(50% + 8px)',         // Koi     — slot 2
                  'calc(75% + 12px)',        // Kitsune — slot 3
                  'calc(25% + 4px)',         // Sakura  — slot 1
                  'calc(50% + 8px)',         // Tiger   — slot 2
                ]
                return (
                  <article
                    key={motif.id}
                    className="g-trad-card"
                    style={{
                      position: 'absolute',
                      width: 'calc(25% - 12px)',
                      left: leftMap[i],
                      top: isRow2 ? 'clamp(580px, calc(301px + 19.38vw), 673px)' : '0',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1.5rem',
                    }}
                  >
                    <Link href={motif.href} className="g-trad-card__img-wrap" style={{ width: '100%', height: 'clamp(420px, calc(180px + 16.67vw), 500px)' }}>
                      <Image src={motif.src} alt={motif.name + ' tattoo motif'} fill style={{ objectFit: 'cover' }} sizes="25vw" />
                      <div className="g-trad-overlay" aria-hidden="true">
                        <span className="g-trad-overlay__btn">{t('motifs.overlay')}</span>
                      </div>
                    </Link>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                      <h3 style={{ fontSize: 'var(--g-s)', lineHeight: 'var(--g-lh-s)', color: '#0D0D0D' }}>{motif.name}</h3>
                      <p className="g-trad-desc" style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D' }}>{motif.desc}</p>
                    </div>
                  </article>
                )
              })}
            </div>

          </div>

          {/* CTA strip — 20px inset each side */}
          <div style={{ marginTop: 'clamp(2rem, calc(20px + 4.167vw), 6.25rem)', marginLeft: 'var(--g-pad)', marginRight: 'var(--g-pad)' }}>
            <CtaStrip label={t('ctaStrip')} />
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────────── */}
        <section
          aria-labelledby="faq-heading"
          style={{ background: '#F2F2F2', padding: 'clamp(2rem, calc(20px + 4.167vw), 6.25rem) 0' }}
        >
          <div className="g-container">
            <span className="g-tag" style={{ display: 'block', marginBottom: '2rem' }}>{t('faq.label')}</span>

            <div
              className="g-faq-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'clamp(180px, 18.4vw, 354px) 1fr 2fr',
                gap: 'clamp(1rem, 2vw, 2rem)',
                alignItems: 'start',
              }}
            >
              {/* Left: master portrait */}
              <div
                className="g-faq-portrait"
                style={{
                  position: 'relative',
                  aspectRatio: '354 / 384',
                  borderRadius: '2px',
                  overflow: 'hidden',
                }}
              >
                <Image
                  src="/images/home/faq-section-kisha-tattoo.jpg"
                  alt="Kisha — Tattoo Master München"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="20vw"
                />
              </div>

              {/* Spacer — column 2 */}
              <div aria-hidden="true" />

              {/* Right: heading + questions — column 3 */}
              <div className="g-faq-content" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <h2
                  id="faq-heading"
                  style={{
                    fontSize: 'var(--g-l)',
                    lineHeight: 'var(--g-lh-l)',
                    color: '#0D0D0D',
                    maxWidth: '30rem',
                  }}
                >
                  {t('faq.heading')}
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {FAQ.map((item, i) => (
                    <div key={i} className="g-faq-item">
                      <span className="g-faq-item__num g-tag">{t('faq.question')}{i + 1}</span>
                      <h3 className="g-faq-item__q">{item.q}</h3>
                      <p className="g-faq-item__a">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── STYLE CARDS ───────────────────────────────────────────────────── */}
        <section style={{ background: '#F2F2F2', padding: 'clamp(2rem, calc(20px + 4.167vw), 6.25rem) 0' }}>
          <div className="g-container">
            <div
              style={{
                paddingBottom: '1.25rem',
                borderBottom: '2px solid #0D0D0D',
                marginBottom: 'clamp(1.5rem, 2.5vw, 3rem)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                gap: '2rem',
                flexWrap: 'wrap',
              }}
            >
              <h2 style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D' }}>
                {t('styles.heading')}
              </h2>
              <Link href="/tattoo-preise-muenchen" style={{ fontSize: 'var(--g-bm)', color: 'rgba(13,13,13,0.55)', textDecoration: 'none', borderBottom: '1px solid rgba(13,13,13,0.3)', paddingBottom: '2px', whiteSpace: 'nowrap' }}>
                {t('styles.link')}
              </Link>
            </div>

            <div style={{ display: 'flex', gap: 'clamp(1rem, 2vw, 2rem)', flexWrap: 'wrap' }}>
              {[
                { href: '/fineline-tattoo-muenchen',        style: t('styles.item0.style'), price: t('styles.item0.price'), desc: t('styles.item0.desc'), link: t('styles.item0.link') },
                { href: '/japanisches-tattoo-muenchen',     style: t('styles.item1.style'), price: t('styles.item1.price'), desc: t('styles.item1.desc'), link: t('styles.item1.link') },
                { href: '/grafik-tattoo-muenchen',          style: t('styles.item2.style'), price: t('styles.item2.price'), desc: t('styles.item2.desc'), link: t('styles.item2.link') },
              ].map((card) => (
                <Link
                  key={card.href}
                  href={card.href}
                  style={{
                    flex: '1 1 clamp(14rem, 28vw, 380px)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    padding: 'clamp(1.25rem, 2vw, 2rem)',
                    border: '1px solid rgba(13,13,13,0.6)',
                    textDecoration: 'none',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '1rem' }}>
                    <span style={{ fontSize: 'var(--g-s)', lineHeight: 'var(--g-lh-s)', color: '#0D0D0D' }}>{card.style}</span>
                    <span style={{ fontSize: 'var(--g-bm)', color: 'rgba(13,13,13,0.55)', whiteSpace: 'nowrap' }}>{card.price}</span>
                  </div>
                  <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: 'rgba(13,13,13,0.75)' }}>{card.desc}</p>
                  <span style={{ fontSize: 'var(--g-tag)', color: '#0D0D0D', marginTop: 'auto' }}>{card.link}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <GFooter />

      </main>
    </>
  )
}
