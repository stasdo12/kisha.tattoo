import { SITE } from '@/content/site'
import { trackWhatsAppServer } from '@/lib/ga-server'

/** Where a WhatsApp link can sit; anything else is counted as `other`. */
const LOCATIONS = ['floating', 'header-menu', 'footer'] as const

/**
 * Counts a tap on a WhatsApp link. The browser sends it with sendBeacon while
 * the link opens wa.me as before, so this route can never hold up or break the
 * chat. Always answers 204: the caller does not wait for it and has nothing to
 * show either way.
 */
export async function POST(req: Request) {
  let data: Record<string, unknown> = {}
  try {
    // sendBeacon posts a plain string — JSON as text/plain keeps the request CORS-simple.
    data = JSON.parse(await req.text())
  } catch {
    // An unreadable body still was a tap.
  }

  const location = LOCATIONS.find((l) => l === data.location) ?? 'other'
  const path = typeof data.page === 'string' && /^\/(?!\/)/.test(data.page) ? data.page.slice(0, 200) : null
  const page = path ? `${SITE.url}${path}` : req.headers.get('referer') ?? undefined

  await trackWhatsAppServer(req, location, page)
  return new Response(null, { status: 204 })
}
