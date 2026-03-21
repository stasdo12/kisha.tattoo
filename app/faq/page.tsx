/**
 * FAQ PAGE — High SEO value informational page
 *
 * Rendering: SSG
 * Reason: FAQ content is static. FAQPage schema drives rich snippets in SERP.
 * Search intent: [informational] — "how much does a japanese tattoo cost munich" etc.
 */
import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, KEYWORDS } from '@/lib/seo'
import { faqSchema, breadcrumbSchema } from '@/lib/structured-data'
import { Navbar } from '@/components/shared/Navbar'
import { Footer } from '@/components/shared/Footer'
import { Breadcrumb } from '@/components/shared/Breadcrumb'
import { ScrollToTop } from '@/components/shared/ScrollToTop'
import { FAQ_JAPANESE, FAQ_GRAPHIC } from '@/content/faq'

export const metadata: Metadata = buildMetadata({
  title: 'Japanese Tattoo FAQ Munich — Your Questions Answered',
  description:
    'Answers to the most common questions about Japanese tattooing in Munich: cost, pain, Tebori technique, session length, booking, and aftercare at Kisha Tattoo.',
  path: '/faq',
  keywords: [
    ...KEYWORDS.japanese,
    'tattoo faq munich',
    'how much does a tattoo cost munich',
    'tebori vs machine tattoo',
    'japanese tattoo pain',
  ],
})

const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'FAQ', url: '/faq' },
]

export default function FaqPage() {
  const allFaq = [...FAQ_JAPANESE, ...FAQ_GRAPHIC]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(allFaq)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema(breadcrumbs)),
        }}
      />

      <Navbar />

      <main id="main-content">
        <div className="container section">
          <Breadcrumb items={breadcrumbs} />

          <header style={{ marginBottom: 'var(--space-xl)', maxWidth: '65ch' }}>
            <span className="section-label">Knowledge Base</span>
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                marginBottom: '1rem',
              }}
            >
              Frequently Asked Questions
            </h1>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>
              Everything you need to know before booking your Japanese tattoo in Munich.
            </p>
          </header>

          {/* Japanese FAQ */}
          <section aria-labelledby="faq-japanese-heading" style={{ marginBottom: 'var(--space-xl)' }}>
            <h2
              id="faq-japanese-heading"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.5rem',
                marginBottom: 'var(--space-lg)',
                color: 'var(--color-primary)',
              }}
            >
              Japanese Tattooing
            </h2>

            <dl>
              {FAQ_JAPANESE.map((item, i) => (
                <div
                  key={i}
                  style={{
                    borderTop: '1px solid var(--color-border)',
                    paddingBlock: 'var(--space-md)',
                  }}
                >
                  <dt
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 600,
                      fontSize: '1.05rem',
                      marginBottom: '0.5rem',
                      color: 'var(--color-text)',
                    }}
                  >
                    {item.question}
                  </dt>
                  <dd style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                    {item.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          {/* Graphic FAQ */}
          <section aria-labelledby="faq-graphic-heading" style={{ marginBottom: 'var(--space-xl)' }}>
            <h2
              id="faq-graphic-heading"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.5rem',
                marginBottom: 'var(--space-lg)',
                color: 'var(--color-primary)',
              }}
            >
              Graphic Tattooing
            </h2>

            <dl>
              {FAQ_GRAPHIC.map((item, i) => (
                <div
                  key={i}
                  style={{
                    borderTop: '1px solid var(--color-border)',
                    paddingBlock: 'var(--space-md)',
                  }}
                >
                  <dt
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 600,
                      fontSize: '1.05rem',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {item.question}
                  </dt>
                  <dd style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                    {item.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          {/* CTA */}
          <aside
            style={{
              background: 'var(--color-card)',
              border: '1px solid var(--color-border)',
              borderRadius: '8px',
              padding: 'var(--space-lg)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'flex-start',
            }}
          >
            <h3 style={{ fontFamily: 'var(--font-heading)' }}>
              Still have questions?
            </h3>
            <p style={{ color: 'var(--color-text-muted)' }}>
              Send us your concept and we&apos;ll answer everything in a free consultation.
            </p>
            <Link href="/booking" className="btn btn-primary">
              Book a Free Consultation
            </Link>
          </aside>
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  )
}
