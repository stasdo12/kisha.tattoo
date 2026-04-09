import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./i18n/request.ts')

const nextConfig: NextConfig = {
  // Remove X-Powered-By: Next.js header — minor security + payload
  poweredByHeader: false,

  // Tree-shake large packages that support it
  experimental: {
    optimizePackageImports: ['next/font'],
  },

  images: {
    // Serve AVIF first (50% smaller than WebP), WebP fallback
    formats: ['image/avif', 'image/webp'],

    // Tuned for this project's breakpoints (430 mobile → 1440 → 1920 desktop)
    deviceSizes: [430, 768, 1024, 1280, 1440, 1920],
    imageSizes:  [16, 32, 64, 128, 256, 384, 512],

    // Cache optimised images for 30 days (great for static placeholder images)
    minimumCacheTTL: 60 * 60 * 24 * 30,

    remotePatterns: [
      { protocol: 'https', hostname: 'placehold.co'  },
      { protocol: 'https', hostname: 'picsum.photos' },
    ],
  },

  async redirects() {
    return [
      { source: '/linework-tattoo-muenchen',     destination: '/fineline-tattoo-muenchen',     permanent: true },
      { source: '/en/linework-tattoo-muenchen', destination: '/en/fineline-tattoo-muenchen', permanent: true },
      { source: '/uk/linework-tattoo-muenchen', destination: '/uk/fineline-tattoo-muenchen', permanent: true },
      { source: '/graphic',         destination: '/',       permanent: true },
      { source: '/graphic/:path*',  destination: '/:path*', permanent: true },
      { source: '/graphics',        destination: '/',       permanent: true },
      { source: '/graphics/:path*', destination: '/:path*', permanent: true },
      // Individual motif slug pages → hub page with anchor
      { source: '/motive/drachen-tattoo-muenchen',  destination: '/motive#drachen',  permanent: true },
      { source: '/motive/koi-tattoo-muenchen',      destination: '/motive#koi',      permanent: true },
      { source: '/motive/kitsune-tattoo-muenchen',  destination: '/motive#kitsune',  permanent: true },
      { source: '/motive/sakura-tattoo-muenchen',   destination: '/motive#sakura',   permanent: true },
      { source: '/motive/tiger-tattoo-muenchen',    destination: '/motive#tiger',    permanent: true },
    ]
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options',    value: 'nosniff'                                              },
          { key: 'X-Frame-Options',           value: 'DENY'                                                 },
          { key: 'Referrer-Policy',           value: 'strict-origin-when-cross-origin'                      },
          { key: 'X-DNS-Prefetch-Control',    value: 'on'                                                   },
          // Force HTTPS for 1 year, include subdomains, allow preload list submission
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload'         },
          // Disable unused browser features
          { key: 'Permissions-Policy',        value: 'camera=(), microphone=(), geolocation=(self), payment=()' },
          // Prevent Cloudflare from caching RSC payloads as HTML.
          // CDN-Cache-Control: no-store — tells Cloudflare not to cache.
          // Surrogate-Control: no-store — fallback for other CDNs.
          // Vary: RSC, Next-Router-State-Tree — forces Cloudflare to cache
          // RSC requests separately from full-page requests.
          { key: 'CDN-Cache-Control',         value: 'no-store'                                             },
          { key: 'Surrogate-Control',         value: 'no-store'                                             },
          { key: 'Vary',                      value: 'RSC, Next-Router-State-Tree, Next-Router-Prefetch'    },
          // CSP — allow Google Analytics, GTM, YouTube embeds
          { key: 'Content-Security-Policy', value: [
            "default-src 'self'",
            "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://region1.google-analytics.com https://ssl.google-analytics.com",
            "script-src-elem 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://region1.google-analytics.com https://ssl.google-analytics.com",
            "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net",
            "img-src 'self' data: blob: https://www.google-analytics.com https://www.googletagmanager.com https://img.youtube.com https://i.ytimg.com",
            "frame-src https://www.youtube.com https://www.youtube-nocookie.com",
            "style-src 'self' 'unsafe-inline'",
            "font-src 'self'",
            "media-src 'self'",
          ].join('; ') },
        ],
      },
      // Next.js sets Cache-Control: immutable automatically for /_next/static in production.
      // Do NOT add it manually — in dev mode filenames are NOT content-hashed, so it breaks HMR.
    ]
  },
}

export default withNextIntl(nextConfig)
