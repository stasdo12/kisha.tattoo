/**
 * GRAPHIC HOME — Kisha Irezumi landing page
 * Design: Figma spec 1920px · Colors: #0D0D0D · #BFBFBF · #F2F2F2
 * Font: DM Sans (PP Neue Montreal substitute) weight 500
 * SSG — fully static, crawlable
 */
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { serviceSchema } from '@/lib/structured-data'
import { SITE } from '@/content/site'

export const metadata: Metadata = buildMetadata({
  title: 'Kisha — Irezumi Mastery. Stories Etched in Skin',
  description:
    'Five years dedicated to the art of Irezumi: crafting large, meaningful projects that become your personal history. Japanese tattoo studio in Munich.',
  path: '/graphic',
})

/* ── Data ──────────────────────────────────────────────────────────────────── */

const NAV_LINKS = [
  { href: '/graphic', label: 'Home' },
  { href: '/graphic/works', label: 'Works' },
  { href: '/graphic/about', label: 'About' },
]

/*
 * Works gallery
 * 1440 spec: 1 large (389×420) + 4 small (186×200) = 389+4×186+5×16 = 1397px ≈ 1400px
 * 1920 spec: 1 large (460×552) + 5 small (260×312) = 460+5×260+5×16 = 1840px = exact fit
 * → 6 items total; 5th small is hidden at 1440 via CSS (see .g-works-5th)
 */
const WORKS = [
  { id: 1, src: 'https://picsum.photos/seed/irezumi-main/778/840',    alt: 'Large Irezumi back piece',  large: true },
  { id: 2, src: 'https://picsum.photos/seed/dragon-sleeve/372/400',   alt: 'Dragon sleeve tattoo',      large: false },
  { id: 3, src: 'https://picsum.photos/seed/koi-tattoo/372/400',      alt: 'Koi fish tattoo',            large: false },
  { id: 4, src: 'https://picsum.photos/seed/tiger-tattoo/372/400',    alt: 'Tiger tattoo',               large: false },
  { id: 5, src: 'https://picsum.photos/seed/sakura-tattoo/372/400',   alt: 'Cherry blossom tattoo',      large: false },
  { id: 6, src: 'https://picsum.photos/seed/phoenix-irezumi/372/400', alt: 'Phoenix tattoo',             large: false },
]

const MOTIFS = [
  {
    id: 'dragon',
    name: 'Dragon',
    src: 'https://picsum.photos/seed/dragon-motif/896/1000',
    desc: 'Wisdom, strength, protection, and supernatural powers. A symbol of water and generosity',
  },
  {
    id: 'carp',
    name: 'Carp',
    src: 'https://picsum.photos/seed/carp-motif/896/1000',
    desc: 'Perseverance, success in struggle, courage, and the ability to overcome difficulties',
  },
  {
    id: 'fox',
    name: 'Fox',
    src: 'https://picsum.photos/seed/fox-motif/896/1000',
    desc: 'Cunning, intellect, longevity, magical abilities. Often associated with guardian against evil',
  },
  {
    id: 'cherry',
    name: 'Cherry Blossom',
    src: 'https://picsum.photos/seed/cherry-motif/896/1000',
    desc: 'The transience and beauty of life, the philosophy of "memento mori"',
  },
  {
    id: 'tiger',
    name: 'Tiger',
    src: 'https://picsum.photos/seed/tiger-motif/896/1000',
    desc: 'Power, bravery, longevity, and protection against evil and sickness. The symbol of the wind element and the north',
  },
]

const FAQ = [
  {
    q: 'How should I prepare for my tattoo session?',
    a: 'Ensure you are well-rested, hydrated, and have eaten. Avoid alcohol and blood thinners for 24 hours prior and wear comfortable, loose clothing',
  },
  {
    q: 'What is your booking process?',
    a: 'Start by submitting an inquiry via WhatsApp or Instagram DM (links at the footer), outlining your vision',
  },
  {
    q: 'How long does a large Irezumi piece take?',
    a: 'Large projects require significant commitment, typically ranging from 5 to 15+ sessions, spaced 4–6 weeks apart for proper healing',
  },
  {
    q: 'How should I care for my new tattoo (Aftercare)?',
    a: 'Keep the area clean, gently wash with mild soap, and apply a thin layer of recommended ointment. Strictly avoid sun, swimming, and soaking for 2–3 weeks',
  },
  {
    q: 'Does traditional Irezumi hurt?',
    a: 'Yes, all tattooing involves discomfort, but your comfort is our priority. We approach the process, which requires endurance (耐), with great care, using mindful techniques and taking regular breaks as needed',
  },
]

/* ── CTA Strip component ────────────────────────────────────────────────────── */
function CtaStrip() {
  return (
    <Link href="/graphic/contact" className="g-cta-strip">
      <span>Start your consultation</span>
    </Link>
  )
}

/* ── Page ───────────────────────────────────────────────────────────────────── */
export default function GraphicHomePage() {
  const schema = serviceSchema({
    name: 'Irezumi — Traditional Japanese Tattooing',
    description: 'Five years dedicated to the art of Irezumi. Custom large-scale Japanese tattoo projects in Munich.',
    url: '/graphic',
  })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

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
              left: 0,
              top: 0,
              width: 'clamp(160px, 16.67vw, 320px)',
              height: 'clamp(173px, 18.06vw, 346px)',
            }}
          >
            <Image
              src="https://picsum.photos/seed/kisha-master-hero/480/520"
              alt="Master Kisha — Japanese tattoo artist"
              fill
              priority
              style={{ objectFit: 'cover', objectPosition: 'top center' }}
              sizes="17vw"
            />
          </div>

          {/* Logo bar — top, full width */}
          <div
            className="g-hero-logobar"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '1rem var(--g-pad)',
              zIndex: 10,
            }}
          >
            <Link
              href="/graphic"
              aria-label="Kisha — Home"
              style={{ display: 'flex', alignItems: 'center', fontSize: 'var(--g-bs)', color: '#0D0D0D', textDecoration: 'none' }}
            >
              {/* Desktop: dot + text */}
              <span className="g-hero-logo-text">
                <span>●</span>&nbsp;Kisha
              </span>
              {/* Mobile: 3 rectangular strips */}
              <span className="g-hero-logo-strips" aria-hidden="true">
                <span /><span /><span />
              </span>
            </Link>

            <span
              className="g-hero-logo-tag"
              style={{ fontSize: 'var(--g-tag)', color: '#0D0D0D' }}
              aria-label="Tattoo"
            >
              [ タトゥ ] Tattoo
            </span>
          </div>

          {/* Mobile-only: location / status tags below photo (top: 451px) */}
          <div className="g-hero-tags" aria-hidden="true">
            <span>[ Munich ]</span>
            <span>[ Available ]</span>
          </div>

          {/* H1 + subtitle — to the right of photo */}
          <div
            className="g-hero-content"
            style={{
              position: 'absolute',
              left: 'calc(clamp(160px, 16.67vw, 320px) + 2rem)',
              top: '15%',
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
              Irezumi Mastery.
              <br />
              Stories Etched in Skin
            </h1>
            <p
              style={{
                fontSize: 'var(--g-bm)',
                lineHeight: 'var(--g-lh-bm)',
                color: '#0D0D0D',
                maxWidth: '17.5rem',
              }}
            >
              Five years dedicated to the art of Irezumi: crafting large, meaningful
              projects that become your personal history
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
              The Kanji fundamentally means &ldquo;road&rdquo; or &ldquo;path&rdquo;
            </span>
          </div>

          {/* Vertical nav — desktop: right-aligned mid-hero; mobile: horizontal bottom of screen */}
          <nav
            className="g-hero-nav"
            aria-label="Main navigation"
            style={{
              position: 'absolute',
              right: '5.1%',
              top: '43.85%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              gap: '0.5rem',
              zIndex: 10,
            }}
          >
            {NAV_LINKS.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={i === 0 ? 'page' : undefined}
                style={{
                  fontSize: 'var(--g-bs)',
                  color: i === 0 ? '#F2F2F2' : '#0D0D0D',
                  textDecoration: 'none',
                  textAlign: 'right',
                  padding: i === 0 ? '0.25rem 0.5rem' : '0',
                  background: i === 0 ? '#0D0D0D' : 'transparent',
                  lineHeight: 1,
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

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
            [ Scroll for more info ]
          </div>

          {/* CTA strip — desktop: bottom: 0; mobile: top: 716px */}
          <div className="g-hero-cta" style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
            <CtaStrip />
          </div>
        </section>

        {/* ── WORKS ────────────────────────────────────────────────────────── */}
        <section
          className="g-works-section"
          aria-labelledby="works-heading"
          style={{ background: '#F2F2F2', padding: 'clamp(2rem, 4.2vw, 5rem) 0' }}
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
                [ Art that becomes a story ]
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
                The image is more than just a picture
              </h2>
              <Link
                href="/graphic/works"
                style={{ fontSize: 'var(--g-tag)', color: '#0D0D0D', textDecoration: 'none', whiteSpace: 'nowrap' }}
              >
                [ Explore work and tattooing ]
              </Link>
            </div>

            {/* Gallery */}
            <div
              className="g-works-gallery"
              style={{
                display: 'flex',
                gap: '1rem',
                alignItems: 'flex-start',
                overflowX: 'auto',
                scrollSnapType: 'x mandatory',
              }}
            >
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
                    scrollSnapAlign: 'start',
                  }}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes={item.large ? '25vw' : '14vw'}
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
          style={{
            background: '#F2F2F2',
            position: 'relative',
            height: 'clamp(1300px, calc(580px + 50vw), 1540px)',
            overflow: 'hidden',
          }}
        >
          {/* H2 — top-left, aligns to content padding */}
          <h2
            id="philosophy-heading"
            style={{
              position: 'absolute',
              left: 'var(--g-pad)',
              top: 0,
              width: '15.875rem',
              fontSize: 'var(--g-l)',
              lineHeight: 'var(--g-lh-l)',
              color: '#0D0D0D',
            }}
          >
            The Love of the Craft
          </h2>

          {/* Right column above photo: kanji 愛 + caption + "My work…" */}
          {/* gap reduced to 1.25rem so content bottom ~278px stays above photo (top: 320px) */}
          <div
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
              It signifies a profound love or affection for someone or something
            </span>
            <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D' }}>
              My work is not driven by fleeting trends, but by profound respect for the
              metaphor and the core idea. This commitment ensures that your unique vision
              is transformed into a lasting masterpiece, carefully etched with skill and affection
            </p>
          </div>

          {/* Full-width photo — top: 320px (moved down 42px to clear right-stack text) */}
          {/* height: 50vw (720@1440, 960@1920); bottom: 1040@1440, 1280@1920 */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: 0,
              top: '320px',
              width: '100%',
              height: 'clamp(720px, 50vw, 960px)',
            }}
          >
            <Image
              src="https://picsum.photos/seed/kisha-back-irezumi/1840/960"
              alt="Full Irezumi back piece — traditional Japanese tattooing"
              fill
              style={{ objectFit: 'cover' }}
              sizes="100vw"
            />
          </div>

          {/* "In the world…" — below photo, same column as right stack */}
          {/* top: calc(372px + 50vw) → 1092px@1440, 1332px@1920 (photo bottom + 52px) */}
          <p
            style={{
              position: 'absolute',
              left: 'calc(48px + 45.83vw)',
              top: 'calc(372px + 50vw)',
              width: '28rem',
              fontSize: 'var(--g-bm)',
              lineHeight: 'var(--g-lh-bm)',
              color: '#0D0D0D',
            }}
          >
            In the world of Irezumi, every line is drawn with intention, powered by
            deep love for the tradition and dedication to the client&apos;s vision. For over
            five years, I have channeled this passion into creating large, traditional
            Japanese projects
          </p>
        </section>

        {/* ── STEPS ────────────────────────────────────────────────────────── */}
        <section aria-labelledby="steps-heading" style={{ background: '#F2F2F2' }}>
          {/* Header — light bg */}
          <div className="g-container">
            <div
              style={{
                paddingBottom: '1.25rem',
                borderBottom: '2px solid #0D0D0D',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <h2
                id="steps-heading"
                style={{
                  fontSize: 'var(--g-l)',
                  lineHeight: 'var(--g-lh-l)',
                  color: '#0D0D0D',
                  textAlign: 'center',
                }}
              >
                Your journey to Irezumi:<br />a three-step process
              </h2>
            </div>
          </div>

          {/* Dark columns */}
          <div
            style={{
              background: '#0D0D0D',
              padding: 'clamp(1.5rem, 2.08vw, 2.5rem)',
            }}
          >
            <div
              className="g-container"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '2rem',
              }}
            >
              {[
                {
                  kanji: '一',
                  title: 'Consultation',
                  body: 'We discuss your idea, metaphors, and the philosophy behind the future tattoo. This is the stage where your story becomes our starting point',
                },
                {
                  kanji: '二',
                  title: 'Sketch',
                  body: 'I create an individual sketch that respects the traditional canons of Irezumi but reflects your unique goal. The sketch is approved only when we are both confident in its perfection',
                },
                {
                  kanji: '三',
                  title: 'Session',
                  body: 'We begin the work. Each session is a focused ritual, dedicated to bringing the project to life',
                },
              ].map((step, i) => (
                <div key={step.title} className="g-step">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <h3
                      style={{
                        fontSize: 'var(--g-s)',
                        lineHeight: 'var(--g-lh-s)',
                        color: '#F2F2F2',
                        textAlign: 'center',
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
                        margin: '0 auto',
                        textAlign: i === 0 ? 'left' : 'left',
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
                    }}
                    aria-hidden="true"
                  >
                    {step.kanji}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TRAD (Motifs) ─────────────────────────────────────────────────── */}
        <section
          aria-labelledby="trad-heading"
          style={{ background: '#F2F2F2', padding: 'clamp(2rem, 4.2vw, 5rem) 0' }}
        >
          <div className="g-container">
            {/* Header row */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: 'clamp(2rem, 3.1vw, 3.75rem)',
                gap: '2rem',
                flexWrap: 'wrap',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '27rem' }}>
                <h2
                  id="trad-heading"
                  style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D' }}
                >
                  The Language of traditional japanese art
                </h2>
                <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D', maxWidth: '19.75rem' }}>
                  Traditional Japanese tattooing speaks the language of symbols. Here are
                  the meanings of the most popular motifs we work with:
                </p>
              </div>

              <div
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.75rem' }}
                aria-hidden="true"
              >
                <span className="g-kanji">忍</span>
                <span className="g-kanji-caption" style={{ textAlign: 'right' }}>
                  A symbol that represents an internal strength and discipline
                </span>
              </div>
            </div>

            {/* Motif grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1rem',
              }}
            >
              {MOTIFS.slice(0, 3).map((motif) => (
                <article key={motif.id} className="g-motif-card">
                  <div
                    style={{
                      position: 'relative',
                      width: '100%',
                      aspectRatio: '448 / 500',
                      overflow: 'hidden',
                      borderRadius: '2px',
                    }}
                  >
                    <Image
                      src={motif.src}
                      alt={motif.name + ' tattoo motif'}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="33vw"
                    />
                  </div>
                  <h3 className="g-motif-card__name">{motif.name}</h3>
                  <p className="g-motif-card__desc">{motif.desc}</p>
                </article>
              ))}
            </div>

            {/* Second row — 2 cards */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem',
                marginTop: '1rem',
                maxWidth: 'calc(66.6% + 0.333rem)',
              }}
            >
              {MOTIFS.slice(3, 5).map((motif) => (
                <article key={motif.id} className="g-motif-card">
                  <div
                    style={{
                      position: 'relative',
                      width: '100%',
                      aspectRatio: '448 / 500',
                      overflow: 'hidden',
                      borderRadius: '2px',
                    }}
                  >
                    <Image
                      src={motif.src}
                      alt={motif.name + ' tattoo motif'}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="33vw"
                    />
                  </div>
                  <h3 className="g-motif-card__name">{motif.name}</h3>
                  <p className="g-motif-card__desc">{motif.desc}</p>
                </article>
              ))}
            </div>
          </div>

          {/* CTA strip */}
          <div style={{ marginTop: 'clamp(2rem, 4.2vw, 5rem)' }}>
            <CtaStrip />
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────────── */}
        <section
          aria-labelledby="faq-heading"
          style={{ background: '#F2F2F2', padding: 'clamp(2rem, 4.2vw, 5rem) 0' }}
        >
          <div className="g-container">
            <span className="g-tag" style={{ display: 'block', marginBottom: '2rem' }}>FAQ</span>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'clamp(180px, 18.4vw, 354px) 1fr',
                gap: 'clamp(2rem, 4.2vw, 5rem)',
                alignItems: 'start',
              }}
            >
              {/* Left: master portrait */}
              <div
                style={{
                  position: 'relative',
                  aspectRatio: '354 / 384',
                  borderRadius: '2px',
                  overflow: 'hidden',
                }}
              >
                <Image
                  src="https://picsum.photos/seed/kisha-portrait-faq/354/384"
                  alt="Kisha — tattoo master"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="20vw"
                />
              </div>

              {/* Right: heading + questions */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <h2
                  id="faq-heading"
                  style={{
                    fontSize: 'var(--g-l)',
                    lineHeight: 'var(--g-lh-l)',
                    color: '#0D0D0D',
                    maxWidth: '30rem',
                  }}
                >
                  Have questions? Feel free to ask everything about tattooing
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {FAQ.map((item, i) => (
                    <div key={i} className="g-faq-item">
                      <span className="g-faq-item__num g-tag">Question №{i + 1}</span>
                      <h3 className="g-faq-item__q">{item.q}</h3>
                      <p className="g-faq-item__a">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FOOTER ───────────────────────────────────────────────────────── */}
        <footer
          role="contentinfo"
          style={{
            background: '#0D0D0D',
            padding: 'clamp(1.5rem, 2.08vw, 2.5rem)',
          }}
        >
          <div className="g-container">
            {/* Top row */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: 'clamp(3rem, 17.7vw, 21.25rem)',
                gap: '2rem',
                flexWrap: 'wrap',
              }}
            >
              <h2
                style={{
                  fontSize: 'var(--g-l)',
                  lineHeight: 'var(--g-lh-l)',
                  color: '#F2F2F2',
                  maxWidth: '22.5rem',
                }}
              >
                Relax and book your seat right now
              </h2>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  gap: '0.75rem',
                }}
              >
                <span className="g-tag g-tag--white">Social media</span>
                <a
                  href={SITE.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: 'var(--g-bm)', color: '#F2F2F2', textDecoration: 'none', textAlign: 'right' }}
                >
                  Instagram
                </a>
                <a
                  href={`https://wa.me/${SITE.contact.phone.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: 'var(--g-bm)', color: '#F2F2F2', textDecoration: 'none', textAlign: 'right' }}
                >
                  What&apos;s App
                </a>
              </div>
            </div>

            {/* CTA button (white) */}
            <Link
              href="/graphic/contact"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                padding: '1rem clamp(1.25rem, 2.08vw, 2.5rem)',
                background: '#F2F2F2',
                fontSize: 'var(--g-bm)',
                lineHeight: 'var(--g-lh-bm)',
                color: '#0D0D0D',
                textDecoration: 'none',
                marginBottom: 'clamp(1.5rem, 2.08vw, 2.5rem)',
              }}
            >
              Discuss your vision
            </Link>

            {/* Bottom bar */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
            >
              <Link
                href="/graphic"
                aria-label="Kisha — Home"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.375rem',
                  fontSize: 'var(--g-bs)',
                  color: '#F2F2F2',
                  textDecoration: 'none',
                }}
              >
                <span>●</span>
                Kisha
                <span style={{ fontSize: 'var(--g-tag)', color: '#BFBFBF', marginLeft: '0.5rem' }}>
                  Tattoo
                </span>
              </Link>

              <span style={{ fontSize: 'var(--g-tag)', color: '#F2F2F2' }}>
                [ All Rights Reserved. {new Date().getFullYear()} ]
              </span>

              <span style={{ fontSize: 'var(--g-tag)', color: '#F2F2F2' }}>
                [ Made by Artem Yakovrokul ]
              </span>
            </div>
          </div>
        </footer>

      </main>
    </>
  )
}
