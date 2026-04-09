/**
 * AWARDS — KishaTattoo München
 */
import type { Metadata } from 'next'
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
  { year: '2025', event: 'Tattooconvention Burgkirchen', eventUrl: 'https://www.instagram.com/tattoo_art.ist.ink/p/DLS7qH2N0hO/', category: 'Best of Show', description: 'Höchste Auszeichnung der Convention — vergeben für das beste Tattoo des gesamten Wettbewerbs.', placement: 'Best of Show' },
  { year: '2025', event: 'Tattooconvention Burgkirchen', eventUrl: 'https://www.instagram.com/tattoo_art.ist.ink/p/DLS7qH2N0hO/', category: 'Best of Day', description: 'Tagespreis für das herausragendste Tattoo des Wettkampftages.', placement: 'Best of Day' },
  { year: '2025', event: 'Tattooconvention Burgkirchen', eventUrl: 'https://www.instagram.com/tattoo_art.ist.ink/p/DLS7qH2N0hO/', category: 'Black & Grey', description: 'Auszeichnung in der Kategorie Black & Grey für präzise Schattierung und Komposition.', placement: 'Auszeichnung' },
  { year: '2025', event: 'Tattooconvention Eggenfelden', eventUrl: 'https://www.instagram.com/p/DOS9-6rjaaM/?img_index=2', category: 'Black & Grey', description: 'Preis in der Kategorie Black & Grey auf der Tattooconvention Eggenfelden.', placement: 'Auszeichnung' },
  { year: '2025', event: 'Tattooconvention Eggenfelden', eventUrl: 'https://www.instagram.com/p/DOQdGJ2DdCc/?img_index=1', category: 'Fineline / Dotwork', description: 'Auszeichnung für präzises Fineline- und Dotwork-Tattoo in München.', placement: 'Auszeichnung' },
]

const REDDIT_QUOTES = [
  { quote: 'Holy smokes that is beautiful work!', user: 'u/Spooky-Cat-666', upvotes: 13, url: 'https://www.reddit.com/r/tattoo/comments/1p1k1h1/tattoo_by_kishatattoo_at_bavariatattoo_studio/' },
  { quote: 'Absolutely love the composition of this! The symmetrical tiger and dragon! So cool', user: 'u/No-Explanation-1008', upvotes: 2, url: 'https://www.reddit.com/r/tattoo/comments/1p1k1h1/tattoo_by_kishatattoo_at_bavariatattoo_studio/' },
  { quote: "That's top notch work. If I ever make it to Germany I'll look you up", user: 'u/WreckedRalph_NoLefty', upvotes: 2, url: 'https://www.reddit.com/r/tattoo/comments/1p1k1h1/tattoo_by_kishatattoo_at_bavariatattoo_studio/' },
  { quote: 'Omg this is gorgeous', user: 'u/Katyamuffin', upvotes: 3, url: 'https://www.reddit.com/r/tattoo/comments/1s2bpk7/tattoo_by_kishatattoo_at_bavariatattoo_studio/' },
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
  type MentionItem  = { source: string; title: string; note: string; url?: string }
  type TimelineItem = { tag: string; period: string; title: string; description: string }

  const schoolStats   = t.raw('school.stats')   as StatItem[]
  const mentionItems  = t.raw('mentions.items') as MentionItem[]
  const timelineItems = t.raw('timeline.items') as TimelineItem[]

  const mentionsWithUrls = mentionItems.map((m, i) => ({
    ...m,
    url: [
      'https://www.reddit.com/r/tattoo/comments/1p1k1h1/tattoo_by_kishatattoo_at_bavariatattoo_studio/',
      'https://www.facebook.com/bavariatattoo1/photos/little-fineline-tattoo-made-by-kishatattoo-tattoo-tattooed-tattooedpeople-ink-in/1313688046870963/',
      'https://www.facebook.com/permalink.php?id=168171823911465&story_fbid=684290145632961',
    ][i],
  }))

  return (
    <main id="main-content">

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        aria-label="Awards & Recognition — KishaTattoo"
        style={{ position: 'relative', height: 'clamp(680px, 90vh, 900px)', background: '#F2F2F2', overflow: 'hidden' }}
      >
        <GHeader theme="light" />

        <h1
          className="g-about-h1"
          style={{
            position: 'absolute',
            top: '72px',
            left: 'var(--g-pad)',
            width: 'clamp(18rem, 42.6vw, 817px)',
            fontSize: 'var(--g-xl)',
            lineHeight: 'var(--g-lh-xl)',
            color: '#0D0D0D',
            whiteSpace: 'pre-line',
          }}
        >
          {t('hero.h1')}
        </h1>

        <div
          aria-hidden="true"
          style={{ position: 'absolute', left: '50%', top: '48%', transform: 'translate(-50%, -50%)', fontSize: 'clamp(4rem, 10vw, 12rem)', lineHeight: 0.9, color: '#0D0D0D', opacity: 0.12, userSelect: 'none', pointerEvents: 'none' }}
        >
          賞
        </div>

        <p
          style={{ position: 'absolute', left: 'var(--g-pad)', bottom: '24px', width: 'clamp(18rem, 28vw, 480px)', fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D' }}
        >
          {t('hero.sub')}
        </p>

      </section>

      {/* ── AWARDS LIST ───────────────────────────────────────────────────── */}
      <section aria-labelledby="awards-heading" style={{ background: '#F2F2F2', padding: 'clamp(2rem, calc(20px + 4.167vw), 6.25rem) 0' }}>
        <div className="g-container">
          <div style={{ paddingBottom: '1.25rem', borderBottom: '2px solid #0D0D0D', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'clamp(1.5rem, 2.5vw, 3rem)' }}>
            <h2 id="awards-heading" style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D' }}>
              {t('awards_section.heading')}
            </h2>
            <span style={{ fontSize: 'var(--g-tag)', color: '#0D0D0D' }}>[ 2025 ]</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {AWARDS_DATA.map((award, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: 'clamp(3rem, 5vw, 5rem) 1fr clamp(6rem, 12vw, 14rem)', gap: '1.5rem', alignItems: 'start', padding: 'clamp(1rem, 1.8vw, 1.75rem) 0', borderBottom: '1px solid rgba(13,13,13,0.2)' }}>
                <span style={{ fontSize: 'var(--g-tag)', color: 'rgba(13,13,13,0.5)', paddingTop: '0.15rem' }}>{award.year}</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <a href={award.eventUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: 'var(--g-s)', lineHeight: 'var(--g-lh-s)', color: '#0D0D0D', textDecoration: 'none', borderBottom: '1px solid rgba(13,13,13,0.3)' }}>
                    {award.event}
                  </a>
                  <span style={{ fontSize: 'var(--g-bm)', color: 'rgba(13,13,13,0.7)' }}>{award.category}</span>
                  <p style={{ fontSize: 'var(--g-tag)', lineHeight: 1.5, color: 'rgba(13,13,13,0.6)', marginTop: '0.2rem' }}>{award.description}</p>
                </div>
                <span style={{ fontSize: 'var(--g-tag)', color: '#0D0D0D', textAlign: 'right', paddingTop: '0.15rem', whiteSpace: 'nowrap' }}>{award.placement}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCHULE & AUSBILDUNG ────────────────────────────────────────────── */}
      <section aria-labelledby="schule-heading" style={{ background: '#F2F2F2', padding: 'clamp(2rem, calc(20px + 4.167vw), 6.25rem) 0' }}>
        <div className="g-container">
          <div style={{ paddingBottom: '1.25rem', borderBottom: '2px solid #0D0D0D', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'clamp(1.5rem, 2.5vw, 3rem)' }}>
            <h2 id="schule-heading" style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D', whiteSpace: 'pre-line' }}>
              {t('school.heading')}
            </h2>
            <a href="https://www.instagram.com/kisha.tattoo/" target="_blank" rel="noopener noreferrer" style={{ fontSize: 'var(--g-tag)', color: '#0D0D0D', textDecoration: 'none', whiteSpace: 'nowrap', borderBottom: '1px solid rgba(13,13,13,0.4)' }}>
              [ @kisha.tattoo ]
            </a>
          </div>

          <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D', maxWidth: 'clamp(24rem, 55vw, 820px)', marginBottom: 'clamp(2rem, 3.5vw, 4rem)' }}>
            {t('school.intro')}
          </p>

          <div style={{ display: 'flex' }}>
            {schoolStats.map((s, i) => (
              <div key={i} style={{ flex: '1 1 0', display: 'flex', flexDirection: 'column', gap: '1rem', padding: i === 0 ? '0 clamp(1rem, 2vw, 2rem) 0 0' : i === 1 ? '0 clamp(1rem, 2vw, 2rem)' : '0 0 0 clamp(1rem, 2vw, 2rem)', borderLeft: i > 0 ? '1px solid #0D0D0D' : 'none' }}>
                <span style={{ fontSize: 'clamp(2rem, 3.5vw, 3.5rem)', lineHeight: 1, color: '#0D0D0D' }}>{s.number}</span>
                <span style={{ fontSize: 'var(--g-s)', lineHeight: 'var(--g-lh-s)', color: '#0D0D0D' }}>{s.label}</span>
                <p style={{ fontSize: 'var(--g-tag)', lineHeight: 1.5, color: 'rgba(13,13,13,0.65)' }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMUNITY MENTIONS ────────────────────────────────────────────── */}
      <section aria-labelledby="mentions-heading" style={{ background: '#F2F2F2', padding: 'clamp(2rem, calc(20px + 4.167vw), 6.25rem) 0' }}>
        <div className="g-container">
          <div style={{ paddingBottom: '1.25rem', borderBottom: '2px solid #0D0D0D', marginBottom: 'clamp(1.5rem, 2.5vw, 3rem)' }}>
            <h2 id="mentions-heading" style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D' }}>
              {t('mentions.heading')}
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {mentionsWithUrls.map((m, i) => (
              <a key={i} href={m.url} target="_blank" rel="noopener noreferrer" style={{ display: 'grid', gridTemplateColumns: 'clamp(10rem, 18vw, 22rem) 1fr', gap: '1.5rem', alignItems: 'start', padding: 'clamp(1rem, 1.8vw, 1.75rem) 0', borderBottom: '1px solid rgba(13,13,13,0.2)', textDecoration: 'none', color: 'inherit' }}>
                <span style={{ fontSize: 'var(--g-tag)', color: 'rgba(13,13,13,0.5)', paddingTop: '0.2rem' }}>{m.source}</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <span style={{ fontSize: 'var(--g-s)', lineHeight: 'var(--g-lh-s)', color: '#0D0D0D' }}>{m.title} ↗</span>
                  <p style={{ fontSize: 'var(--g-tag)', lineHeight: 1.5, color: 'rgba(13,13,13,0.6)' }}>{m.note}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ──────────────────────────────────────────────────────── */}
      <section aria-labelledby="timeline-heading" style={{ background: '#F2F2F2', padding: 'clamp(2rem, calc(20px + 4.167vw), 6.25rem) 0' }}>
        <div className="g-container">
          <div style={{ paddingBottom: '1.25rem', borderBottom: '2px solid #0D0D0D', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'clamp(1.5rem, 2.5vw, 3rem)' }}>
            <h2 id="timeline-heading" style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D', whiteSpace: 'pre-line' }}>
              {t('timeline.heading')}
            </h2>
            <span style={{ fontSize: 'var(--g-tag)', color: 'rgba(13,13,13,0.5)', whiteSpace: 'nowrap' }}>[ 2017 — 2025 ]</span>
          </div>

          <div style={{ display: 'flex' }}>
            {timelineItems.map((era, i) => (
              <div key={i} style={{ flex: '1 1 0', display: 'flex', flexDirection: 'column', gap: '1.25rem', padding: i === 0 ? '0 clamp(1rem, 2vw, 2.5rem) 0 0' : i === 1 ? '0 clamp(1rem, 2vw, 2.5rem)' : '0 0 0 clamp(1rem, 2vw, 2.5rem)', borderLeft: i > 0 ? '1px solid #0D0D0D' : 'none' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <span style={{ fontSize: 'var(--g-tag)', color: 'rgba(13,13,13,0.5)' }}>{era.tag}</span>
                  <span style={{ fontSize: 'var(--g-s)', lineHeight: 'var(--g-lh-s)', color: '#0D0D0D' }}>{era.period}</span>
                  <span style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D', fontWeight: 500 }}>{era.title}</span>
                </div>
                <p style={{ fontSize: 'var(--g-tag)', lineHeight: 1.6, color: 'rgba(13,13,13,0.65)' }}>{era.description}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: 'auto' }}>
                  {TIMELINE_LINKS[i].map((link, j) => (
                    <a key={j} href={link.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: 'var(--g-tag)', color: '#0D0D0D', textDecoration: 'none', borderBottom: '1px solid rgba(13,13,13,0.3)', paddingBottom: '2px', width: 'fit-content' }}>
                      {link.label} ↗
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REDDIT QUOTES ─────────────────────────────────────────────────── */}
      <section data-nav-dark aria-label="Community" style={{ background: '#0D0D0D', padding: 'clamp(2rem, calc(20px + 4.167vw), 6.25rem) 0' }}>
        <div className="g-container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingBottom: '1.25rem', borderBottom: '1px solid rgba(242,242,242,0.15)', marginBottom: 'clamp(1.5rem, 2.5vw, 3rem)' }}>
            <h2 style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#F2F2F2' }}>
              {t('community.heading')}
            </h2>
            <a href="https://www.reddit.com/r/tattoo/search/?q=kisha.tattoo" target="_blank" rel="noopener noreferrer" style={{ fontSize: 'var(--g-tag)', color: 'rgba(242,242,242,0.5)', textDecoration: 'none', whiteSpace: 'nowrap' }}>
              {t('community.subtitle')}
            </a>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'clamp(1rem, 1.5vw, 1.5rem)' }}>
            {REDDIT_QUOTES.map((q, i) => (
              <a key={i} href={q.url} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: 'clamp(1rem, 1.5vw, 1.5rem)', border: '1px solid rgba(242,242,242,0.12)', textDecoration: 'none' }}>
                <p style={{ fontSize: 'var(--g-s)', lineHeight: 'var(--g-lh-s)', color: '#F2F2F2', flex: 1 }}>
                  &ldquo;{q.quote}&rdquo;
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 'var(--g-tag)', color: 'rgba(242,242,242,0.45)' }}>{q.user} · r/tattoo</span>
                  <span style={{ fontSize: 'var(--g-tag)', color: 'rgba(242,242,242,0.3)' }}>↑ {q.upvotes}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section style={{ background: '#F2F2F2', padding: 'clamp(2rem, calc(20px + 4.167vw), 6.25rem) 0' }}>
        <div className="g-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <p style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D', maxWidth: '28rem' }}>
            {t('cta.heading')}
          </p>
          <Link href="/booking" style={{ display: 'inline-block', padding: '0.875rem 2.5rem', background: '#0D0D0D', color: '#F2F2F2', fontSize: 'var(--g-bm)', textDecoration: 'none', whiteSpace: 'nowrap' }}>
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
