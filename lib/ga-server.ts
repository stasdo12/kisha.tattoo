/**
 * Server-side GA4 conversions via the Measurement Protocol.
 *
 * The browser's generate_lead never arrived for roughly half of the real
 * enquiries — ad blockers drop every request to Google, and the 22.10.2026
 * check against Telegram counted 16 leads where GA4 saw 9. The API routes see
 * every enquiry, so the event is sent from here and the browser no longer
 * sends its own (that would count the same lead twice).
 *
 * Nothing personal leaves the server: no name, phone, e-mail or idea. Only the
 * form, the page it was sent from, and GA's own visitor/session ids read from
 * the cookies the request already carries, so the lead lands in the visitor's
 * session with its source. A visitor without GA cookies (consent declined or a
 * blocker) gets a random id: the lead is counted, attributed to nothing.
 *
 * Needs GA4_API_SECRET (GA4 → Admin → Data streams → Measurement Protocol API
 * secrets). Without it this does nothing, which keeps tests and local dev quiet.
 */

const MEASUREMENT_ID = 'G-EKLZT9R83C'

/** Named after the Telegram message each route sends: 📩 заявка (popup), 📋 бриф, Gutschein. */
export type LeadForm = 'popup' | 'brief' | 'gutschein'

function cookie(header: string, name: string): string | undefined {
  const match = header.split(/;\s*/).find((c) => c.startsWith(`${name}=`))
  return match?.slice(name.length + 1)
}

/** `_ga=GA1.1.123456789.1700000000` → `123456789.1700000000` */
function clientId(header: string): string {
  const ga = cookie(header, '_ga')?.split('.')
  if (ga && ga.length >= 4) return `${ga[2]}.${ga[3]}`
  return `${Math.floor(Math.random() * 2_147_483_647)}.${Math.floor(Date.now() / 1000)}`
}

/** Session id from `_ga_<id>`, old format `GS1.1.1700000000.3…` or new `GS2.1.s1700000000$o3…` */
function sessionId(header: string): string | undefined {
  const value = cookie(header, `_ga_${MEASUREMENT_ID.slice(2)}`)
  if (!value) return undefined
  return value.match(/^GS2\.\d\.s(\d+)/)?.[1] ?? value.match(/^GS1\.\d\.(\d+)/)?.[1]
}

export async function trackLeadServer(req: Request, form: LeadForm): Promise<void> {
  const secret = process.env.GA4_API_SECRET
  if (!secret) return

  const cookies = req.headers.get('cookie') ?? ''
  const session = sessionId(cookies)
  const page = req.headers.get('referer') ?? undefined

  try {
    await fetch(
      `https://www.google-analytics.com/mp/collect?measurement_id=${MEASUREMENT_ID}&api_secret=${secret}`,
      {
        method: 'POST',
        body: JSON.stringify({
          client_id: clientId(cookies),
          events: [{
            name: 'generate_lead',
            params: {
              form_location: form,
              event_category: 'conversion',
              page_location: page,
              ...(session && { session_id: session, engagement_time_msec: 1 }),
            },
          }],
        }),
        signal: AbortSignal.timeout(3000),
      },
    )
  } catch (err) {
    // A lost analytics hit must never cost a lead — the enquiry is already in Telegram.
    console.error('[ga-server]', err)
  }
}
