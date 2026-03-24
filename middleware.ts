import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * Simple in-memory rate limiter for API routes.
 * Limits each IP to MAX_REQUESTS per WINDOW_MS.
 *
 * Note: in-memory only — resets on server restart and doesn't
 * share state across multiple instances. Sufficient for a
 * single-instance deployment; replace with Upstash Redis for
 * multi-instance / edge deployments.
 */

const WINDOW_MS    = 60_000 // 1 minute
const MAX_REQUESTS = 5      // per IP per window

const store = new Map<string, { count: number; resetAt: number }>()

// Clean up expired entries periodically to prevent memory leak
setInterval(() => {
  const now = Date.now()
  for (const [ip, rec] of store) {
    if (now > rec.resetAt) store.delete(ip)
  }
}, WINDOW_MS)

export function middleware(req: NextRequest) {
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

export const config = {
  matcher: '/api/:path*',
}
