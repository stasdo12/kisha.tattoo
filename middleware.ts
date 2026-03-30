import createMiddleware from 'next-intl/middleware'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
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
  // Rate limiting for /api/* routes
  if (req.nextUrl.pathname.startsWith('/api/')) {
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
  return intlMiddleware(req)
}

export const config = {
  matcher: [
    '/api/:path*',
    // Match all pathnames except Next.js internals and static files
    '/((?!_next|_vercel|.*\\..*).*)',
  ],
}
