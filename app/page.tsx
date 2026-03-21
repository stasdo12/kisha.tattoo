/**
 * HOME PAGE — Japanese Tattoo Studio Munich
 *
 * Rendering: SSG (Static Site Generation)
 * Reason: The home page is the primary commercial page. It must be:
 *   - Fully rendered in the initial HTML for crawlers
 *   - Served from CDN with zero server latency
 *   - Content changes are rare — ISR revalidation not needed
 *
 * SEO intent: [commercial + informational] — "japanese tattoo munich" etc.
 */
import type { Metadata } from 'next'
import { buildMetadata, KEYWORDS } from '@/lib/seo'
import { serviceSchema } from '@/lib/structured-data'
import { Navbar } from '@/components/shared/Navbar'
import { Footer } from '@/components/shared/Footer'
import { Hero } from '@/components/japanese/Hero'
import { Services } from '@/components/japanese/Services'
import { StorySection } from '@/components/japanese/StorySection'
import { YokaiSection } from '@/components/japanese/YokaiSection'
import { MasterProfile } from '@/components/japanese/MasterProfile'
import { Process } from '@/components/japanese/Process'
import { VirtualGallery } from '@/components/japanese/VirtualGallery'
import { Booking } from '@/components/japanese/Booking'
import { AssemblySection } from '@/components/japanese/AssemblySection'
import { KanjiBackground } from '@/components/japanese/KanjiBackground'
import { ScrollToTop } from '@/components/shared/ScrollToTop'

export const metadata: Metadata = buildMetadata({
  title: 'Japanese Tattoo Studio Munich',
  description:
    'Kisha Tattoo — premium Japanese tattoo studio in Munich. Specialising in traditional Irezumi, Tebori technique, Koi, Dragons, Oni, and custom mythological compositions. Book your consultation.',
  path: '/',
  keywords: [...KEYWORDS.japanese, ...KEYWORDS.general],
})

export default function HomePage() {
  const japaneseServiceSchema = serviceSchema({
    name: 'Japanese Tattoo — Irezumi',
    description:
      'Traditional Japanese tattooing (Irezumi) using Tebori hand-poke and machine techniques. Custom mythological compositions: Koi, Dragons, Hannya, Oni, Kitsune.',
    url: '/#services',
  })

  return (
    <>
      {/* Service-specific structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(japaneseServiceSchema) }}
      />

      <Navbar />

      <main id="main-content">
        {/* Decorative background — aria-hidden, no semantic value */}
        <KanjiBackground />

        {/*
          H1 lives inside Hero.
          Section order matches user journey: Hook → Services → Story → Mythology → Master → Process → Gallery → Book
        */}
        <Hero />

        <section id="services" aria-label="Tattoo services">
          <Services />
        </section>

        <section id="story" aria-label="Master's story">
          <StorySection />
        </section>

        <AssemblySection />

        <section id="mythology" aria-label="Japanese mythology motifs">
          <YokaiSection />
        </section>

        <section id="master" aria-label="About the master">
          <MasterProfile />
        </section>

        <section id="process" aria-label="Booking process">
          <Process />
        </section>

        <section id="gallery" aria-label="Portfolio preview">
          <VirtualGallery />
        </section>

        <section id="booking" aria-label="Book an appointment">
          <Booking />
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  )
}
