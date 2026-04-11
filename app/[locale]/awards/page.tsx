/**
 * AWARDS — KishaTattoo München
 */
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { getTranslations } from 'next-intl/server'
import { GHeader } from '@/components/graphic/GHeader'
import { GFooter } from '@/components/graphic/GFooter'
import { videoObjectSchema } from '@/lib/structured-data'

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'awards' })
  return buildMetadata({ title: t('meta.title'), description: t('meta.description'), path: '/awards', locale })
}

const AWARDS_DATA = [
  { year: '2025', event: 'Tattoo Convention Burgkirchen', eventUrl: 'https://www.instagram.com/tattoo_art.ist.ink/p/DLS7qH2N0hO/', category: 'Best of Show', description: 'Highest Convention Award — presented for the best tattoo of the entire competition' },
  { year: '2025', event: 'Tattoo Convention Burgkirchen', eventUrl: 'https://www.instagram.com/tattoo_art.ist.ink/p/DLS7qH2N0hO/', category: 'Best of Day', description: '1st Place: Best of Day — awarded for the most outstanding tattoo of the competition day' },
  { year: '2025', event: 'Tattoo Convention Burgkirchen', eventUrl: 'https://www.instagram.com/tattoo_art.ist.ink/p/DLS7qH2N0hO/', category: 'Black & Grey', description: 'Award in the Black & Grey Category — for exceptional shading precision and composition' },
  { year: '2025', event: 'Tattoo Convention Eggenfelden', eventUrl: 'https://www.instagram.com/p/DOS9-6rjaaM/?img_index=2', category: 'Black & Grey', description: 'Award in the Black & Grey Category at the Eggenfelden Tattoo Convention' },
  { year: '2025', event: 'Tattoo Convention Eggenfelden', eventUrl: 'https://www.instagram.com/p/DOQdGJ2DdCc/?img_index=1', category: 'Fineline / Dotwork', description: 'Award for excellence in Fineline and Dotwork tattooing – Munich' },
]

const REDDIT_QUOTES = [
  { quote: 'Holy smokes that is beautiful work!', user: 'u/Spooky-Cat-666', upvotes: 13, url: 'https://www.reddit.com/r/tattoo/comments/1p1k1h1/tattoo_by_kishatattoo_at_bavariatattoo_studio/' },
  { quote: 'Absolutely love the composition of this! The symmetrical tiger and dragon! So cool', user: 'u/No-Explanation-1008', upvotes: 2, url: 'https://www.reddit.com/r/tattoo/comments/1p1k1h1/tattoo_by_kishatattoo_at_bavariatattoo_studio/' },
  { quote: "That's top notch work. If I ever make it to Germany I'll look you up", user: 'u/WreckedRalph_NoLefty', upvotes: 2, url: 'https://www.reddit.com/r/tattoo/comments/1p1k1h1/tattoo_by_kishatattoo_at_bavariatattoo_studio/' },
  { quote: 'Omg this is gorgeous', user: 'u/Katyamuffin', upvotes: 6, url: 'https://www.reddit.com/r/tattoo/comments/1s2bpk7/tattoo_by_kishatattoo_at_bavariatattoo_studio/' },
]

const MENTION_ITEMS = [
  {
    title: 'Tattoo by @kisha.tattoo at BavariaTattoo Studio',
    source: 'Reddit · r/tattoo',
    note: "Several posts in the largest tattoo subreddit — Kisha's work impresses the international community with hundreds of upvotes and comments",
    url: 'https://www.reddit.com/r/tattoo/comments/1p1k1h1/tattoo_by_kishatattoo_at_bavariatattoo_studio/',
  },
  {
    title: 'Fineline Tattoo by @kisha.tattoo',
    source: 'Facebook · Bavaria Tattoo',
    note: 'The studio page BavariaTattoo presents Kisha\'s fine line work — delicate, precise style, international visibility',
    url: 'https://www.facebook.com/bavariatattoo1/photos/little-fineline-tattoo-made-by-kishatattoo-tattoo-tattooed-tattooedpeople-ink-in/1313688046870963/',
  },
  {
    title: 'Large Sleeve by @kisha.tattoo',
    source: 'Facebook · Skindreams Tattoo',
    note: "Skindreams Tattoo Kharkiv features Kisha's sleeve work — proof of her expertise in complex large-scale projects",
    url: 'https://www.facebook.com/permalink.php?id=168171823911465&story_fbid=684290145632961',
  },
]

const TIMELINE_LINKS = [
  [
    { label: 'Kisha_tattoo bei der Arbeit (2017)', url: 'https://www.youtube.com/watch?v=keNnl1Y62ao' },
    { label: 'Blumen-Armband by Kisha_tattoo', url: 'https://www.youtube.com/watch?v=9DboBeBOjXE' },
  ],
  [
    { label: 'Traumfänger-Tattoo by kisha.tattoo', url: 'https://www.youtube.com/watch?v=h6W9WYK7D1M' },
    { label: 'Chrysantheme-Tattoo by kisha.tattoo', url: 'https://www.youtube.com/watch?v=kEAnk157u30' },
  ],
  [
    { label: 'Burgkirchen 2025 — Best of Show (Instagram)', url: 'https://www.instagram.com/tattoo_art.ist.ink/p/DLS7qH2N0hO/' },
    { label: 'Eggenfelden 2025 — Sieger-Post (Instagram)', url: 'https://www.instagram.com/p/DOS9-6rjaaM/?img_index=2' },
  ],
]

export default async function AwardsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'awards' })

  type StatItem     = { number: string; label: string; body: string }
  type TimelineItem = { tag: string; period: string; title: string; description: string }

  const schoolStats   = t.raw('school.stats')   as StatItem[]
  const timelineItems = t.raw('timeline.items') as TimelineItem[]

  return (
    <main id="main-content">

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        aria-label="Awards & Recognition — KishaTattoo"
        style={{ position: 'relative', height: 'clamp(600px, 56.25vw, 1080px)', overflow: 'hidden', background: '#0D0D0D' }}
      >
        <Image
          src="/images/awards/awardHero1.jpg"
          alt="Kisha Tattoo at convention — München"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center top', filter: 'grayscale(100%)' }}
          sizes="100vw"
        />
        {/* dark overlay for text legibility */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.35)' }} aria-hidden="true" />

        <GHeader theme="dark" />

        <h1
          style={{
            position: 'absolute',
            top: '72px',
            left: 'var(--g-pad)',
            width: 'clamp(18rem, 25.2vw, 30rem)',
            fontSize: 'var(--g-xl)',
            lineHeight: 'var(--g-lh-xl)',
            color: '#F2F2F2',
            letterSpacing: 'var(--g-ls)',
          }}
        >
          {t('hero.h1')}
        </h1>

        <p
          style={{
            position: 'absolute',
            top: 'clamp(180px, 12.3vw, 236px)',
            left: 'var(--g-pad)',
            width: 'clamp(16rem, 16.1vw, 19.375rem)',
            fontSize: 'var(--g-bm)',
            lineHeight: 'var(--g-lh-bm)',
            color: '#F2F2F2',
            letterSpacing: 'var(--g-ls)',
          }}
        >
          {t('hero.sub')}
        </p>
      </section>

      {/* ── TATTOO CONVENTION AWARDS ──────────────────────────────────────── */}
      <section
        aria-labelledby="awards-heading"
        style={{ background: '#F2F2F2', padding: 'clamp(2rem, 4.167vw, 5rem) var(--g-pad)' }}
      >
        <h2
          id="awards-heading"
          style={{
            fontSize: 'var(--g-l)',
            lineHeight: 'var(--g-lh-l)',
            color: '#0D0D0D',
            letterSpacing: 'var(--g-ls)',
            width: 'clamp(16rem, 20.7vw, 24.875rem)',
            marginBottom: 'clamp(1.5rem, 2.78vw, 3.25rem)',
          }}
        >
          {t('awards_section.heading')}
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {AWARDS_DATA.map((award, i) => (
            <a
              key={i}
              href={award.eventUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.75rem',
                padding: 'clamp(1.25rem, 2.08vw, 2.5rem)',
                background: '#E8E8E8',
                textDecoration: 'none',
              }}
            >
              {/* Row 1: event name + year */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 'var(--g-s)', lineHeight: 'var(--g-lh-s)', color: '#0D0D0D', letterSpacing: 'var(--g-ls)' }}>
                  {award.event}
                </span>
                <span style={{ fontSize: 'var(--g-bs)', lineHeight: 1, color: '#0D0D0D', letterSpacing: 'var(--g-ls)', whiteSpace: 'nowrap' }}>
                  [ {award.year} ]
                </span>
              </div>
              {/* Row 2: description + category */}
              <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '2rem' }}>
                <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D', letterSpacing: 'var(--g-ls)', maxWidth: 'clamp(14rem, 15.3vw, 18.3rem)' }}>
                  {award.description}
                </p>
                <span style={{ fontSize: 'var(--g-s)', lineHeight: 'var(--g-lh-s)', color: '#0D0D0D', letterSpacing: 'var(--g-ls)', whiteSpace: 'nowrap', textAlign: 'right' }}>
                  {award.category}
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── TATTOO TRAINING / SCHOOL ──────────────────────────────────────── */}
      <section
        aria-labelledby="school-heading"
        style={{ background: '#F2F2F2', padding: 'clamp(2rem, 4.167vw, 5rem) var(--g-pad)' }}
      >
        {/* Top row: H2 left | intro text + button right */}
        <div
          className="g-awards-school-top"
          style={{ display: 'flex', gap: 'clamp(2rem, 4vw, 5rem)', marginBottom: 'clamp(2rem, 2.71vw, 3.25rem)', alignItems: 'flex-start' }}
        >
          <h2
            id="school-heading"
            style={{
              fontSize: 'var(--g-l)',
              lineHeight: 'var(--g-lh-l)',
              color: '#0D0D0D',
              letterSpacing: 'var(--g-ls)',
              width: 'clamp(18rem, 33.1vw, 39.7rem)',
              flexShrink: 0,
            }}
          >
            {t('school.heading')}
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(1rem, 1.39vw, 2rem)', flex: 1 }}>
            <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D', letterSpacing: 'var(--g-ls)', maxWidth: 'clamp(20rem, 26.5vw, 31.75rem)' }}>
              {t('school.intro')}
            </p>
            <a
              href="https://www.instagram.com/kisha.tattoo/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem 0.75rem',
                background: '#0D0D0D',
                color: '#F2F2F2',
                fontSize: 'var(--g-bm)',
                lineHeight: 1,
                letterSpacing: 'var(--g-ls)',
                textDecoration: 'none',
              }}
            >
              Follow Kisha
            </a>
          </div>
        </div>

        {/* 3 stat cards */}
        <div
          className="g-awards-stats"
          style={{ display: 'flex' }}
        >
          {schoolStats.map((s, i) => (
            <div
              key={i}
              style={{
                flex: '1 1 0',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: 'clamp(240px, 19.69vw, 378px)',
                padding: i < 2 ? '0 clamp(1rem, 1.67vw, 2rem) clamp(1rem, 1.04vw, 1.25rem) 0' : '0 0 clamp(1rem, 1.04vw, 1.25rem) 0',
                borderRight: i < 2 ? '1px solid #0D0D0D' : 'none',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <span style={{ fontSize: 'var(--g-s)', lineHeight: 'var(--g-lh-s)', color: '#0D0D0D', letterSpacing: 'var(--g-ls)', textAlign: 'center' }}>
                  {s.label}
                </span>
                <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D', letterSpacing: 'var(--g-ls)', maxWidth: 'clamp(16rem, 19.8vw, 23.75rem)' }}>
                  {s.body}
                </p>
              </div>
              <span style={{ fontSize: 'var(--g-s)', lineHeight: 'var(--g-lh-s)', color: '#0D0D0D', letterSpacing: 'var(--g-ls)' }}>
                {['A', 'B', 'C'][i]}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── MENTIONED IN THE COMMUNITY ────────────────────────────────────── */}
      <section
        aria-labelledby="mentions-heading"
        style={{ background: '#F2F2F2', padding: 'clamp(2rem, 4.167vw, 5rem) var(--g-pad)' }}
      >
        <div style={{ borderTop: '2px solid #0D0D0D', paddingTop: 'clamp(1rem, 1.04vw, 1.25rem)', marginBottom: 'clamp(1.5rem, 2.71vw, 3.25rem)' }}>
          <h2
            id="mentions-heading"
            style={{
              fontSize: 'var(--g-l)',
              lineHeight: 'var(--g-lh-l)',
              color: '#0D0D0D',
              letterSpacing: 'var(--g-ls)',
              width: 'clamp(16rem, 18.3vw, 21.9rem)',
            }}
          >
            {t('mentions.heading')}
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {MENTION_ITEMS.map((m, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.75rem',
                paddingBottom: '1.25rem',
                borderBottom: '1px solid #E8E8E8',
              }}
            >
              {/* Title + source */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem' }}>
                <span style={{ fontSize: 'var(--g-s)', lineHeight: 'var(--g-lh-s)', color: '#0D0D0D', letterSpacing: 'var(--g-ls)' }}>
                  {m.title}
                </span>
                <span style={{ fontSize: 'var(--g-bs)', lineHeight: 1, color: '#0D0D0D', letterSpacing: 'var(--g-ls)', whiteSpace: 'nowrap' }}>
                  [ {m.source} ]
                </span>
              </div>
              {/* Note */}
              <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D', letterSpacing: 'var(--g-ls)', maxWidth: 'clamp(18rem, 22.5vw, 27rem)' }}>
                {m.note}
              </p>
              {/* Button */}
              <a
                href={m.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '1rem 0.75rem',
                  background: '#0D0D0D',
                  color: '#F2F2F2',
                  fontSize: 'var(--g-bm)',
                  lineHeight: 1,
                  letterSpacing: 'var(--g-ls)',
                  textDecoration: 'none',
                }}
              >
                Learn more
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ── 7 YEARS JOURNEY ───────────────────────────────────────────────── */}
      <section
        aria-labelledby="timeline-heading"
        style={{ background: '#F2F2F2', padding: 'clamp(2rem, 4.167vw, 5rem) var(--g-pad)' }}
      >
        <h2
          id="timeline-heading"
          style={{
            fontSize: 'var(--g-l)',
            lineHeight: 'var(--g-lh-l)',
            color: '#0D0D0D',
            letterSpacing: 'var(--g-ls)',
            textAlign: 'center',
            width: 'clamp(18rem, 26.9vw, 32.3rem)',
            margin: '0 auto clamp(2rem, 2.71vw, 3.25rem)',
          }}
        >
          {t('timeline.heading')}
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {timelineItems.map((era, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'clamp(2rem, 2.71vw, 3.25rem)',
                padding: 'clamp(1.25rem, 2.08vw, 2.5rem)',
                background: '#E8E8E8',
              }}
            >
              {/* Top: period + title | number */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <span style={{ fontSize: 'var(--g-bs)', lineHeight: 1, color: '#0D0D0D', letterSpacing: 'var(--g-ls)' }}>
                      [ {era.tag} ]
                    </span>
                    <span style={{ fontSize: 'var(--g-s)', lineHeight: 'var(--g-lh-s)', color: '#0D0D0D', letterSpacing: 'var(--g-ls)', maxWidth: 'clamp(16rem, 22.5vw, 27rem)' }}>
                      {era.title}
                    </span>
                  </div>
                  <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D', letterSpacing: 'var(--g-ls)', maxWidth: 'clamp(18rem, 25.6vw, 30.75rem)' }}>
                    {era.description}
                  </p>
                </div>
                <span style={{ fontSize: 'var(--g-bs)', lineHeight: 1, color: '#0D0D0D', letterSpacing: 'var(--g-ls)', flexShrink: 0 }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Video link buttons */}
              <div
                className="g-awards-journey-btns"
                style={{ display: 'flex', gap: '1rem' }}
              >
                {TIMELINE_LINKS[i].map((link, j) => (
                  <a
                    key={j}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '1rem',
                      border: '1px solid #0D0D0D',
                      color: '#0D0D0D',
                      fontSize: 'var(--g-bm)',
                      lineHeight: 1,
                      letterSpacing: 'var(--g-ls)',
                      textDecoration: 'none',
                      textAlign: 'center',
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHAT THE COMMUNITY SAYS ───────────────────────────────────────── */}
      <section
        aria-labelledby="community-heading"
        style={{ background: '#F2F2F2', padding: 'clamp(2rem, 4.167vw, 5rem) var(--g-pad)' }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', paddingBottom: '1.25rem', borderBottom: '2px solid #0D0D0D', marginBottom: 'clamp(1.5rem, 2.71vw, 3.25rem)', gap: '2rem' }}>
          <h2
            id="community-heading"
            style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D', letterSpacing: 'var(--g-ls)' }}
          >
            {t('community.heading')}
          </h2>
          <a
            href="https://www.reddit.com/r/tattoo/search/?q=kisha.tattoo"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: 'var(--g-bs)', lineHeight: 1, color: '#0D0D0D', letterSpacing: 'var(--g-ls)', textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0 }}
          >
            [ r/tattoo · 1,017,000 Members ]
          </a>
        </div>

        <div
          className="g-awards-quotes"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}
        >
          {REDDIT_QUOTES.map((q, i) => (
            <a
              key={i}
              href={q.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1rem',
                minHeight: 'clamp(280px, 25.3vw, 485px)',
                padding: 'clamp(1.25rem, 2.08vw, 2.5rem)',
                border: '1px solid #0D0D0D',
                textDecoration: 'none',
              }}
            >
              <span style={{ fontSize: 'var(--g-s)', lineHeight: 'var(--g-lh-s)', color: '#0D0D0D', letterSpacing: 'var(--g-ls)' }}>
                ↑ {q.upvotes}
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: 'auto' }}>
                <p style={{ fontSize: 'var(--g-s)', lineHeight: 'var(--g-lh-s)', color: '#0D0D0D', letterSpacing: 'var(--g-ls)' }}>
                  &ldquo;{q.quote}&rdquo;
                </p>
                <span style={{ fontSize: 'var(--g-bm)', lineHeight: 1, color: '#0D0D0D', letterSpacing: 'var(--g-ls)', whiteSpace: 'nowrap' }}>
                  {q.user} · r/tattoo
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section style={{ background: '#E8E8E8' }}>
        <div
          style={{
            padding: 'clamp(2rem, 4.167vw, 5rem) var(--g-pad)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'clamp(3rem, 14.583vw, 17.5rem)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <span style={{ fontSize: 'var(--g-tag)', color: '#0D0D0D', letterSpacing: 'var(--g-ls)' }}>
                [ Contact ]
              </span>
              <p style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D', letterSpacing: 'var(--g-ls)', width: 'clamp(20rem, 33vw, 30rem)' }}>
                {t('cta.heading')}
              </p>
            </div>
            <span aria-hidden="true" style={{ fontSize: 'clamp(2.5rem, 4.167vw, 5rem)', color: '#0D0D0D', lineHeight: 1, flexShrink: 0 }}>
              →
            </span>
          </div>

          <Link
            href="/booking"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1rem 0.75rem',
              background: '#0D0D0D',
              color: '#F2F2F2',
              fontSize: 'var(--g-bm)',
              lineHeight: 1,
              letterSpacing: 'var(--g-ls)',
              textDecoration: 'none',
            }}
          >
            {t('cta.button')}
          </Link>
        </div>
      </section>

      <GFooter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(videoObjectSchema([
            { youtubeId: 'keNnl1Y62ao', name: 'Kisha Tattoo bei der Arbeit — Tattooprozess München 2017', description: 'Kisha, Tattoo-Künstlerin in München, beim Tätowieren im BavariaTattoo Studio. Japanisches Irezumi und Grafik-Tattoo.', uploadDate: '2017-04-01' },
            { youtubeId: '9DboBeBOjXE', name: 'Blumen-Armband Tattoo by Kisha — München', description: 'Blumen-Armband Tattoo im Fineline-Stil von Kisha Tattoo, München. Custom Design, BavariaTattoo Studio.', uploadDate: '2019-06-01' },
            { youtubeId: 'h6W9WYK7D1M', name: 'Traumfänger-Tattoo by Kisha Tattoo München', description: 'Traumfänger (Dreamcatcher) Tattoo von Kisha — Fineline und Grafik-Stil, München, BavariaTattoo Studio.', uploadDate: '2021-03-01' },
            { youtubeId: 'kEAnk157u30', name: 'Chrysantheme-Tattoo by Kisha Tattoo München', description: 'Chrysantheme Tattoo im japanischen Irezumi-Stil von Kisha — Custom Design, München.', uploadDate: '2021-05-01' },
          ]))
        }}
      />
    </main>
  )
}