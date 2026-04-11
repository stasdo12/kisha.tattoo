import createMiddleware from 'next-intl/middleware'
import { NextResponse, NextRequest } from 'next/server'
import { routing } from './i18n/routing'

const intlMiddleware = createMiddleware(routing)

/* ── Rate limiter (API only) ──────────────────────────────────────────────── */
const WINDOW_MS    = 60_000
const MAX_REQUESTS = 5
const store        = new Map<string, { count: number; resetAt: number }>()

setInterval(() => {
  const now = Date.now()
  for (const [ip, rec] of store) {
    if (now > rec.resetAt) store.delete(ip)
  }
}, WINDOW_MS)

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Pass static files in /public through — path-to-regexp matcher doesn't reliably
  // exclude all file extensions, so guard explicitly here too.
  if (/\.(xml|txt|json|webmanifest|ico|png|jpg|jpeg|svg|webp|avif|woff2?)$/.test(pathname)) {
    return NextResponse.next()
  }

  // Inject pathname so layout's generateMetadata can build hreflang alternates
  const reqHeaders = new Headers(req.headers)
  reqHeaders.set('x-pathname', pathname)
  const reqWithPathname = new NextRequest(req, { headers: reqHeaders })

  // Rate limiting for /api/* routes
  if (pathname.startsWith('/api/')) {
    const ip  = req.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown'
    const now = Date.now()
    const rec = store.get(ip)

    if (!rec || now > rec.resetAt) {
      store.set(ip, { count: 1, resetAt: now + WINDOW_MS })
      return NextResponse.next()
    }

    rec.count++

    if (rec.count > MAX_REQUESTS) {
      return NextResponse.json(
        { ok: false, error: 'Too many requests. Please wait a minute.' },
        { status: 429, headers: { 'Retry-After': '60' } }
      )
    }

    return NextResponse.next()
  }

  // i18n locale routing for all other routes
  const res = intlMiddleware(reqWithPathname)

  // Cloudflare ignores Vary on custom headers, so RSC payloads can be cached
  // and served as HTML to the next visitor. Force no-store on RSC requests.
  const isRsc = req.headers.get('RSC') === '1'
  if (isRsc) {
    res.headers.set('Cache-Control', 'no-store')
    res.headers.set('CDN-Cache-Control', 'no-store')
  }

  return res

}

export const config = {
  matcher: [
    '/api/:path*',
    // Match all pathnames except Next.js internals and static files
    '/((?!_next|_vercel|.*\\..*).*)',
  ],
}
