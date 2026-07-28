/**
 * TEAM — hub page, artist cards
 * Design: simple hero + 2-col card grid, reusing the site's dark-overlay hero pattern.
 * Each card links to the artist's full profile page (Kisha → /about, Iren → /tattoo-realismus-muenchen).
 * See PLAN-KOMANDA-2026-07-27.md §2 — this page is intentionally just an index, not a duplicate profile.
 */
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { getTranslations } from 'next-intl/server'
import { breadcrumbSchema } from '@/lib/structured-data'
import { GHeader } from '@/components/graphic/GHeader'
import { GFooter } from '@/components/graphic/GFooter'

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'team' })
  return buildMetadata({ title: t('meta.title'), description: t('meta.description'), path: '/team', locale })
}

export default async function TeamPage() {
  const t = await getTranslations('team')

  const CARDS = [
    {
      key: 'kisha',
      href: '/about',
      photo: '/images/about/hero-portrait.jpg',
      alt: 'Kisha — Tattoo Artist München, Japanisches Irezumi, Fineline, Grafik',
    },
    {
      key: 'iren',
      href: '/tattoo-realismus-muenchen',
      photo: '/images/ira/portrait-2.jpg',
      alt: 'Iren — Tattoo Artist München, Black & Grey Realism',
    },
  ] as const

  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Team', url: '/team' }])
      )}} />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        aria-label="Team — KishaTattoo München"
        style={{ position: 'relative', background: '#F2F2F2', paddingBottom: 'clamp(2rem, 4vw, 3.5rem)' }}
      >
        <GHeader theme="light" />
        <div className="g-container" style={{ paddingTop: 'clamp(120px, 16vh, 180px)' }}>
          <h1 style={{
            fontSize: 'var(--g-xl)', lineHeight: 'var(--g-lh-xl)',
            color: '#0D0D0D', marginBottom: '1.5rem',
            maxWidth: '820px',
          }}>
            {t('hero.heading')}
          </h1>
          <p style={{
            fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)',
            color: '#0D0D0D', maxWidth: '32rem',
          }}>
            {t('hero.sub')}
          </p>
        </div>
      </section>

      {/* ── TEAM GRID ─────────────────────────────────────────────────────── */}
      <section style={{ background: '#F2F2F2', paddingBottom: 'clamp(2rem, calc(20px + 4.167vw), 6.25rem)' }}>
        <div style={{ paddingLeft: 'var(--g-pad)', paddingRight: 'var(--g-pad)' }}>
          <div className="g-gallery-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {CARDS.map((card) => (
              <Link
                key={card.key}
                href={card.href}
                style={{
                  position: 'relative', display: 'block', overflow: 'hidden',
                  height: 'clamp(420px, 48vw, 680px)', textDecoration: 'none',
                }}
              >
                <Image
                  src={card.photo}
                  alt={card.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 767px) 100vw, 50vw"
                />
                <div aria-hidden="true" style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(13,13,13,0.85) 0%, rgba(13,13,13,0) 45%)',
                }} />
                <div style={{
                  position: 'absolute', left: '24px', right: '24px', bottom: '24px',
                  display: 'flex', flexDirection: 'column', gap: '0.5rem',
                }}>
                  <span style={{ fontSize: 'var(--g-tag)', color: 'rgba(242,242,242,0.75)' }}>
                    {t(`cards.${card.key}.tag`)}
                  </span>
                  <h2 style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#F2F2F2' }}>
                    {t(`cards.${card.key}.name`)}
                  </h2>
                  <span style={{
                    fontSize: 'var(--g-bm)', color: '#F2F2F2',
                    borderBottom: '1px solid currentColor', paddingBottom: '2px', alignSelf: 'flex-start',
                  }}>
                    {t(`cards.${card.key}.cta`)} →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <GFooter />
    </main>
  )
}
