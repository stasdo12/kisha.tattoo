import type { NextConfig } from 'next'

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
      { source: '/graphic',         destination: '/',       permanent: true },
      { source: '/graphic/:path*',  destination: '/:path*', permanent: true },
      { source: '/graphics',        destination: '/',       permanent: true },
      { source: '/graphics/:path*', destination: '/:path*', permanent: true },
    ]
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options',  value: 'nosniff'                       },
          { key: 'X-Frame-Options',         value: 'DENY'                          },
          { key: 'Referrer-Policy',         value: 'strict-origin-when-cross-origin' },
          // Tell browsers to cache static assets for 1 year
          { key: 'X-DNS-Prefetch-Control',  value: 'on'                            },
        ],
      },
      // Next.js sets Cache-Control: immutable automatically for /_next/static in production.
      // Do NOT add it manually — in dev mode filenames are NOT content-hashed, so it breaks HMR.
    ]
  },
}

export default nextConfig
