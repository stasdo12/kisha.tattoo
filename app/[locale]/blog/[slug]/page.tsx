/**
 * GRAPHIC BLOG — Article detail page
 * Design: Figma spec 1920 / 1440 / 390px
 */
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { STORIES, getStoryBySlug } from '@/content/stories'
import { buildMetadata } from '@/lib/seo'
import { getTranslations } from 'next-intl/server'
import { articleSchema } from '@/lib/structured-data'
import { GHeader } from '@/components/graphic/GHeader'
import { GFooter } from '@/components/graphic/GFooter'
import { GArticleCard } from '@/components/graphic/GArticleCard'

export function generateStaticParams() {
  const locales = ['de', 'en', 'uk']
  return locales.flatMap((locale) => STORIES.map((s) => ({ locale, slug: s.slug })))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  const meta = getStoryBySlug(slug)
  const t = await getTranslations({ locale, namespace: 'blog' })
  const content = meta ? t.raw(`stories.${slug}`) as { title: string; excerpt: string } : null
  return buildMetadata({
    title: content ? `${content.title} — Kisha Tattoo München` : 'Article — Kisha Tattoo',
    description: content?.excerpt ?? '',
    path: `/blog/${slug}`,
    locale,
  })
}

/* ── Inline renderer: handles [text](url) links within text ── */
function renderInline(text: string): React.ReactNode {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
  const parts: React.ReactNode[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null
  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index))
    parts.push(
      <Link key={match.index} href={match[2]} style={{ color: '#0D0D0D', textDecoration: 'underline' }}>
        {match[1]}
      </Link>
    )
    lastIndex = match.index + match[0].length
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex))
  return parts.length > 1 ? parts : text
}

/* ── Body renderer: parses ## H2, - lists, paragraphs ── */
function ArticleBody({ body }: { body: string }) {
  const blocks = body.split('\n\n')
  return (
    <>
      {blocks.map((block, i) => {
        // H2 heading
        if (block.startsWith('## ')) {
          return (
            <h2
              key={i}
              style={{
                fontSize: 'var(--g-s)',
                lineHeight: 'var(--g-lh-s)',
                color: '#0D0D0D',
                fontWeight: 500,
                marginTop: '0.5rem',
              }}
            >
              {block.slice(3)}
            </h2>
          )
        }
        // Bullet list — block where all lines start with "- "
        const lines = block.split('\n')
        if (lines.length > 1 && lines.every((l) => l.startsWith('- '))) {
          return (
            <ul
              key={i}
              style={{
                paddingLeft: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
                listStyleType: 'disc',
              }}
            >
              {lines.map((line, j) => (
                <li
                  key={j}
                  style={{ fontSize: 'var(--g-bm)', lineHeight: 1.5, color: '#0D0D0D', fontWeight: 500 }}
                >
                  {renderInline(line.slice(2))}
                </li>
              ))}
            </ul>
          )
        }
        // Regular paragraph
        return (
          <p
            key={i}
            style={{ fontSize: 'var(--g-bm)', lineHeight: 1.5, color: '#0D0D0D', fontWeight: 500 }}
          >
            {renderInline(block)}
          </p>
        )
      })}
    </>
  )
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  const meta = getStoryBySlug(slug)
  const t = await getTranslations({ locale, namespace: 'blog' })
  const content = meta
    ? (t.raw(`stories.${slug}`) as { title: string; excerpt: string; body: string })
    : null

  // CTA link to relevant landing page — prevents keyword cannibalization blog vs landing page
  const SLUG_TO_CTA: Record<string, { href: string; de: string; en: string; uk: string }> = {
    'fineline-tattoo-ideen-muenchen':           { href: '/fineline-tattoo-muenchen',    de: 'Fineline Tattoo München buchen →',       en: 'Book Fineline Tattoo Munich →',        uk: 'Записатись на Fineline тату →' },
    'japan-tattoo-bedeutung-irezumi-motive':    { href: '/japanisches-tattoo-muenchen', de: 'Japanisches Tattoo München anfragen →',  en: 'Book Japanese Tattoo Munich →',        uk: 'Записатись на японське тату →' },
    'blackwork-graphic-tattoo-bedeutung-ideen': { href: '/grafik-tattoo-muenchen',      de: 'Grafik Tattoo München buchen →',         en: 'Book Graphic Tattoo Munich →',         uk: 'Записатись на графік тату →' },
    'tattoo-schmerzen-was-du-wirklich-fuehlen-wirst': { href: '/booking',               de: 'Termin anfragen →',                      en: 'Book your appointment →',              uk: 'Записатись →' },
    'erste-tattoo-ideen-wie-nicht-bereuen':     { href: '/booking',                     de: 'Erstes Tattoo — Termin anfragen →',      en: 'First tattoo — Book now →',            uk: 'Перше тату — Записатись →' },
    'tattoo-placement-muenchen':                { href: '/booking',                     de: 'Termin für dein Tattoo anfragen →',      en: 'Get in touch for your tattoo idea →',  uk: 'Обговорити ідею татуювання →' },
  }
  const cta = SLUG_TO_CTA[slug]
  const ctaLabel = cta ? (locale === 'en' ? cta.en : locale === 'uk' ? cta.uk : cta.de) : null

  // Related: other articles except current
  const related = STORIES.filter((s) => s.slug !== slug).slice(0, 4).map((s) => ({
    ...s,
    title: (t.raw(`stories.${s.slug}`) as { title: string }).title,
  }))

  const schema = meta && content
    ? articleSchema({
        title: content.title,
        excerpt: content.excerpt,
        publishedAt: meta.publishedAt,
        slug: meta.slug,
        coverImage: meta.coverImageBig ?? meta.coverImage,
      })
    : null

  return (
    <main id="main-content">
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        aria-label="Article hero"
        className="g-article-hero"
        data-nav-dark
        style={{
          position: 'relative',
          height: 'clamp(780px, 56.25vw, 1080px)',
          background: '#0D0D0D',
          overflow: 'hidden',
        }}
      >
        {/* Background photo */}
        <Image
          src={meta?.coverImageBig ?? meta?.coverImage ?? '/images/blog/fineLineBlog1(big).png'}
          alt={content?.title ?? 'Tattoo Blog — KishaTattoo München'}
          aria-hidden="true"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          sizes="100vw"
        />
        {/* Overlay */}
        <div
          aria-hidden="true"
          style={{ position: 'absolute', inset: 0, background: 'rgba(13,13,13,0.55)', zIndex: 1 }}
        />

        <GHeader theme="dark" />

        {/* Back to blog */}
        <Link
          href="/blog"
          className="g-article-back"
          style={{
            position: 'absolute',
            top: '70px',
            left: '20px',
            zIndex: 2,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '12px',
            background: '#F2F2F2',
            fontSize: '20px',
            fontFamily: 'var(--g-font)',
            fontWeight: 500,
            lineHeight: '20px',
            color: '#0D0D0D',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          {t('backToList')}
        </Link>

        {/* H1 */}
        <h1
          className="g-article-h1"
          style={{
            position: 'absolute',
            top: 'clamp(140px, calc(108px + 2.22vw), 168px)',
            left: 'var(--g-pad)',
            width: 'clamp(520px, 53.75vw, 774px)',
            fontSize: 'var(--g-xl)',
            lineHeight: 'var(--g-lh-xl)',
            color: '#F2F2F2',
            zIndex: 2,
          }}
        >
          {content?.title ?? ''}
        </h1>

        {/* Bottom meta bar */}
        <div
          className="g-article-meta"
          style={{
            position: 'absolute',
            bottom: '28px',
            left: 'var(--g-pad)',
            right: 'var(--g-pad)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 2,
          }}
        >
          <span style={{ fontSize: 'var(--g-tag)', color: 'rgba(242,242,242,0.7)' }}>
            {meta?.category} · {meta?.publishedAt}
          </span>
          <span style={{ fontSize: 'var(--g-tag)', color: 'rgba(242,242,242,0.7)' }}>
            {meta?.readingTime}
          </span>
        </div>
      </section>

      {/* ── ARTICLE CONTENT ──────────────────────────────────────────────── */}
      <section
        aria-label="Article content"
        className="g-article-content-section"
        style={{
          background: '#F2F2F2',
          paddingTop: 'clamp(60px, 5.56vw, 80px)',
          paddingBottom: 'clamp(60px, 5.56vw, 80px)',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <article
          className="g-article-body"
          style={{
            width: 'clamp(320px, 48.06vw, 692px)',
            display: 'flex',
            flexDirection: 'column',
            gap: '28px',
          }}
        >
          {content?.body ? <ArticleBody body={content.body} /> : null}
          {cta && ctaLabel && (
            <Link
              href={cta.href}
              style={{
                display: 'inline-block',
                marginTop: '12px',
                padding: '12px 20px',
                background: '#0D0D0D',
                color: '#F2F2F2',
                fontSize: 'var(--g-bm)',
                fontFamily: 'var(--g-font)',
                fontWeight: 500,
                textDecoration: 'none',
              }}
            >
              {ctaLabel}
            </Link>
          )}
        </article>
      </section>

      {/* ── RELATED ARTICLES ─────────────────────────────────────────────── */}
      <section
        aria-label="Related articles"
        className="g-blog-articles"
        style={{
          background: '#F2F2F2',
          paddingBottom: 'clamp(60px, 6.94vw, 100px)',
          paddingLeft: 'var(--g-pad)',
          paddingRight: 'var(--g-pad)',
        }}
      >
        <div
          className="g-blog-heading-wrapper"
          style={{
            borderTop: '2px solid #0D0D0D',
            paddingTop: '20px',
            marginBottom: '52px',
          }}
        >
          <h2 style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D' }}>
            {t('related')}
          </h2>
        </div>

        <div
          className="g-blog-articles-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}
        >
          {related.map((article, i) => (
            <GArticleCard
              key={article.slug}
              id={i + 1}
              title={article.title}
              category={article.category}
              date={article.publishedAt}
              href={`/blog/${article.slug}`}
              imageSrc={article.coverImage}
            />
          ))}
        </div>
      </section>

      <GFooter />

    </main>
  )
}
