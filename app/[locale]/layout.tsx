import type { Metadata, Viewport } from 'next'
import { Cinzel, Inter, Noto_Sans_JP, DM_Sans } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { headers } from 'next/headers'
import { SITE } from '@/content/site'
import { localBusinessSchema, websiteSchema } from '@/lib/structured-data'
import { FormPopupLoader } from '@/components/graphic/FormPopupLoader'
import { GScrollTop } from '@/components/graphic/GScrollTop'
import { routing } from '@/i18n/routing'
import '@/styles/globals.css'
import '@/styles/graphic.css'
import '@/styles/form-popup.css'

/* ── Fonts ──────────────────────────────────────────────────────────────── */
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

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-neue',
  display: 'swap',
  weight: ['500'],
})

/* ── Static params for SSG ──────────────────────────────────────────────── */
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

/* ── Root metadata ──────────────────────────────────────────────────────── */
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
    images: [{ url: '/og/default.jpg', width: 1200, height: 630, alt: SITE.tagline }],
  },
  twitter: { card: 'summary_large_image' },
}

/* ── Hreflang — Server Component reads x-pathname injected by middleware ─── */
async function HreflangTags() {
  const h = await headers()
  const pathname = h.get('x-pathname') ?? '/'
  const cleanPath = pathname.replace(/^\/(en|uk)/, '') || '/'
  const base = SITE.url.replace(/\/$/, '')
  const dePath = cleanPath === '/' ? '' : cleanPath
  return (
    <>
      <link rel="alternate" hrefLang="de"        href={`${base}${dePath}`} />
      <link rel="alternate" hrefLang="en"        href={`${base}/en${dePath}`} />
      <link rel="alternate" hrefLang="uk"        href={`${base}/uk${dePath}`} />
      <link rel="alternate" hrefLang="x-default" href={`${base}${dePath}`} />
    </>
  )
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0a0a',
}

/* ── Layout ─────────────────────────────────────────────────────────────── */
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  // Validate locale
  if (!routing.locales.includes(locale as typeof routing.locales[number])) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${cinzel.variable} ${inter.variable} ${notoSansJP.variable} ${dmSans.variable}`}
    >
      <head>
        <HreflangTags />
        {/* Google Analytics GA4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-EKLZT9R83C" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-EKLZT9R83C');`,
          }}
        />
        {/* Root structured data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }} />
      </head>
      <body>
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <NextIntlClientProvider messages={messages}>
          <div data-theme="graphic">
            {children}
            <GScrollTop />
            <FormPopupLoader />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
