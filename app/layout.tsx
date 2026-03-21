import type { Metadata, Viewport } from 'next'
import { Cinzel, Inter, Noto_Sans_JP, Playfair_Display } from 'next/font/google'
import { SITE } from '@/content/site'
import { localBusinessSchema, websiteSchema } from '@/lib/structured-data'
import '@/styles/globals.css'
import 'leaflet/dist/leaflet.css'

/* ── Fonts loaded via next/font — zero layout shift, optimal performance ── */
const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
  weight: ['400', '600', '700', '900'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-jp',
  display: 'swap',
  weight: ['300', '400', '700'],
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '700'],
})

/* ── Root metadata — overridden per-page via generateMetadata or export const metadata ── */
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  openGraph: {
    siteName: SITE.name,
    locale: SITE.locale,
    type: 'website',
    images: [
      {
        url: '/og/default.jpg', // TODO: add real OG image to public/og/
        width: 1200,
        height: 630,
        alt: SITE.tagline,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
  // Verification tokens — TODO: add real values
  // verification: {
  //   google: 'your-google-verification-token',
  // },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang={SITE.language}
      suppressHydrationWarning
      className={`${cinzel.variable} ${inter.variable} ${notoSansJP.variable} ${playfair.variable}`}
    >
      <head>
        {/* Root structured data — present on every page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema()),
          }}
        />
      </head>
      <body>
        {/* Accessibility: skip navigation for keyboard users */}
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}
