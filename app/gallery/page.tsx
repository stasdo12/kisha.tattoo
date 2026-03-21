/**
 * GALLERY PAGE — Japanese Tattoo Portfolio
 *
 * Rendering: SSG
 * Reason: Portfolio content is static. Images and titles are pre-rendered.
 * When new work is added, ISR with revalidate: 3600 is a sensible upgrade.
 */
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { buildMetadata, KEYWORDS } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/structured-data'
import { Navbar } from '@/components/shared/Navbar'
import { Footer } from '@/components/shared/Footer'
import { Breadcrumb } from '@/components/shared/Breadcrumb'
import { ScrollToTop } from '@/components/shared/ScrollToTop'
import { GALLERY_ITEMS } from '@/content/japanese'
import { GalleryClient } from '@/components/japanese/GalleryClient'

export const metadata: Metadata = buildMetadata({
  title: 'Japanese Tattoo Portfolio Munich',
  description:
    'Browse Kisha Tattoo\'s full portfolio of Japanese tattoos — Koi, Dragons, Hannya, Oni, Kitsune, sleeves, and full-back compositions. All custom pieces tattooed in Munich.',
  path: '/gallery',
  keywords: [...KEYWORDS.japanese, 'tattoo portfolio Munich', 'japanese tattoo gallery'],
})

const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Gallery', url: '/gallery' },
]

export default function GalleryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema(breadcrumbs)),
        }}
      />

      <Navbar />

      <main id="main-content">
        <div className="container section--sm">
          <Breadcrumb items={breadcrumbs} />

          <header style={{ marginBottom: '2.5rem' }}>
            {/* Critical: one H1 per page, keyword-rich */}
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                marginBottom: '0.75rem',
              }}
            >
              Portfolio
            </h1>
            <p style={{ color: 'var(--color-text-muted)', maxWidth: '55ch' }}>
              Every piece is custom. Every design is created once and never repeated.
              {' '}
              <strong>{GALLERY_ITEMS.length} works</strong> — Tokyo tradition, Munich studio.
            </p>
          </header>

          {/* Client component handles interactive grid/list toggle */}
          <GalleryClient items={GALLERY_ITEMS} />
        </div>

        <div
          className="container"
          style={{ paddingBottom: 'var(--space-2xl)', textAlign: 'center' }}
        >
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
            Ready to start your piece?
          </p>
          <Link href="/booking" className="btn btn-primary">
            Book a Consultation
          </Link>
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  )
}
