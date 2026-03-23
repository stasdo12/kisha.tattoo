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
import { CtaStrip } from '@/components/graphic/CtaStrip'
import { GLogoBar } from '@/components/graphic/GLogoBar'
import { GNav } from '@/components/graphic/GNav'
import { GFooter } from '@/components/graphic/GFooter'

export const metadata: Metadata = buildMetadata({
  title: 'Kisha — Irezumi Mastery. Stories Etched in Skin',
  description:
    'Five years dedicated to the art of Irezumi: crafting large, meaningful projects that become your personal history. Japanese tattoo studio in Munich.',
  path: '/graphic',
})

/* ── Data ──────────────────────────────────────────────────────────────────── */

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
    desc: 'Cunning, intellect, longevity, and magical abilities. Often associated with being a guardian against evil',
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
              src="https://picsum.photos/seed/kisha-master-hero/480/520"
              alt="Master Kisha — Japanese tattoo artist"
              fill
              priority
              style={{ objectFit: 'cover', objectPosition: 'top center' }}
              sizes="17vw"
            />
          </div>

          <GLogoBar theme="light" />

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
              top: '96px',
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

          <GNav activePath="/graphic" theme="light" />

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

          {/* CTA strip — 20px inset each side */}
          <div className="g-hero-cta" style={{ position: 'absolute', bottom: 0, left: 'var(--g-pad)', right: 'var(--g-pad)' }}>
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
                className="g-works-explore-link"
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
              }}
            >
              {/* Mobile-only explore link (shown inside gallery on 430px) */}
              <Link
                href="/graphic/works"
                className="g-works-explore-mobile"
                style={{ display: 'none', fontSize: 'var(--g-tag)', color: '#0D0D0D', textDecoration: 'none' }}
              >
                [ Explore work and tattooing ]
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
          className="g-philosophy-section"
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
            The Love<br />of the Craft
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
            className="g-philosophy-photo"
            style={{
              position: 'absolute',
              left: 'var(--g-pad)',
              right: 'var(--g-pad)',
              top: '320px',
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
            className="g-philosophy-bottom"
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
                Your journey to Irezumi:<br />a three-step process
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
              style={{
                display: 'flex',
                background: '#0D0D0D',
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
          style={{ background: '#F2F2F2', padding: 'clamp(2rem, 4.2vw, 5rem) 0' }}
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
                  The Language of traditional japanese art
                </h2>
                <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D' }}>
                  Traditional Japanese tattooing speaks the language of symbols. Here are
                  the meanings of the most popular motifs we work with
                </p>
              </div>

              {/* Right: 忍 kanji + caption */}
              <div
                aria-hidden="true"
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.75rem', flexShrink: 0 }}
              >
                <span className="g-kanji">忍</span>
                <span className="g-kanji-caption" style={{ textAlign: 'right' }}>
                  A symbol that represents an internal strength and discipline
                </span>
              </div>
            </div>

            {/*
              4-slot staggered layout (slot 2 intentionally empty):
              Row 1: Dragon[0] | Carp[1] | [empty 2] | Fox[3]
              Row 2:           Cherry[1.5]  Tiger[2.5]

              Card width: calc(25% - 12px)  → 338px @ 1440 ✓  448px @ 1920 ✓
              4 cards + 3×16px gaps = 100% exactly.

              Slot left edges (n = slot index):
                left = calc(n * 25% + n * 4px)  →  0 | 25%+4px | 50%+8px | 75%+12px
              Half-slot (n=1.5, 2.5):
                left = calc(1.5 * (25% + 4px)) = calc(37.5% + 6px)
                left = calc(2.5 * (25% + 4px)) = calc(62.5% + 10px)

              Verified @ 1440px (container=1400):
                Dragon  0        Carp   354px   Fox    1062px (right edge 1400px ✓)
                Cherry  531px    Tiger  885px
              Verified @ 1920px (container=1840):
                Dragon  0        Carp   464px   Fox    1392px (right edge 1840px ✓)
                Cherry  696px    Tiger  1160px

              Row 2 top: clamp(600px, 360px+16.67vw, 680px) — 180px room for text
              Wrapper height: clamp(1200px, 800px+27.78vw, 1380px)
              Mobile (≤430px): CSS overrides to flex-column stack.
            */}
            <div
              className="g-trad-cards-wrapper"
              style={{ position: 'relative', height: 'clamp(1200px, calc(800px + 27.78vw), 1380px)' }}
            >
              {MOTIFS.map((motif, i) => {
                const isRow2 = i >= 3
                // Slot index: Dragon=0, Carp=1, Fox=3, Cherry=1.5, Tiger=2.5
                const leftMap = [
                  '0',                      // Dragon  — slot 0
                  'calc(25% + 4px)',         // Carp    — slot 1
                  'calc(75% + 12px)',        // Fox     — slot 3 (slot 2 left empty)
                  'calc(37.5% + 6px)',       // Cherry  — slot 1.5
                  'calc(62.5% + 10px)',      // Tiger   — slot 2.5
                ]
                return (
                  <article
                    key={motif.id}
                    className="g-trad-card"
                    style={{
                      position: 'absolute',
                      width: 'calc(25% - 12px)',
                      left: leftMap[i],
                      top: isRow2 ? 'clamp(600px, calc(360px + 16.67vw), 680px)' : '0',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1.5rem',
                    }}
                  >
                    <div style={{ position: 'relative', width: '100%', height: 'clamp(420px, calc(180px + 16.67vw), 500px)', overflow: 'hidden', borderRadius: '2px' }}>
                      <Image src={motif.src} alt={motif.name + ' tattoo motif'} fill style={{ objectFit: 'cover' }} sizes="25vw" />
                    </div>
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
          <div style={{ marginTop: 'clamp(2rem, 4.2vw, 5rem)', marginLeft: 'var(--g-pad)', marginRight: 'var(--g-pad)' }}>
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
                  src="https://picsum.photos/seed/kisha-portrait-faq/354/384"
                  alt="Kisha — tattoo master"
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

        <GFooter />

      </main>
    </>
  )
}
