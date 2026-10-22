import { describe, it, expect, vi, afterEach } from 'vitest'
import { trackLeadServer } from '@/lib/ga-server'

// A bare Headers, not new Request(): the fetch spec strips `cookie` from
// requests built in code, while Next hands the route the real incoming one.
function makeRequest(cookie?: string) {
  const headers = new Headers({ referer: 'https://kisha.tattoo/booking' })
  if (cookie) headers.set('cookie', cookie)
  return { headers } as Request
}

function sentBody(fetchMock: ReturnType<typeof vi.fn>) {
  return JSON.parse(fetchMock.mock.calls[0][1].body)
}

describe('trackLeadServer', () => {
  afterEach(() => {
    vi.unstubAllEnvs()
    vi.unstubAllGlobals()
  })

  it('does nothing without GA4_API_SECRET', async () => {
    const fetchMock = vi.fn()
    vi.stubGlobal('fetch', fetchMock)
    await trackLeadServer(makeRequest(), 'brief')
    expect(fetchMock).not.toHaveBeenCalled()
  })

  it('sends generate_lead with the visitor and session ids from the cookies', async () => {
    vi.stubEnv('GA4_API_SECRET', 'secret')
    const fetchMock = vi.fn().mockResolvedValue(new Response(null, { status: 204 }))
    vi.stubGlobal('fetch', fetchMock)

    await trackLeadServer(makeRequest('_ga=GA1.1.111.222; _ga_EKLZT9R83C=GS2.1.s1761130000$o3$g1$t1761130100'), 'brief')

    expect(fetchMock.mock.calls[0][0]).toContain('api_secret=secret')
    const body = sentBody(fetchMock)
    expect(body.client_id).toBe('111.222')
    expect(body.events[0].name).toBe('generate_lead')
    expect(body.events[0].params).toMatchObject({
      form_location: 'brief',
      page_location: 'https://kisha.tattoo/booking',
      session_id: '1761130000',
    })
  })

  it('reads the old session cookie format too', async () => {
    vi.stubEnv('GA4_API_SECRET', 'secret')
    const fetchMock = vi.fn().mockResolvedValue(new Response(null, { status: 204 }))
    vi.stubGlobal('fetch', fetchMock)

    await trackLeadServer(makeRequest('_ga=GA1.1.111.222; _ga_EKLZT9R83C=GS1.1.1761130000.3.1.1761130100.0.0.0'), 'popup')

    expect(sentBody(fetchMock).events[0].params.session_id).toBe('1761130000')
  })

  it('still counts a visitor without GA cookies, under a random id', async () => {
    vi.stubEnv('GA4_API_SECRET', 'secret')
    const fetchMock = vi.fn().mockResolvedValue(new Response(null, { status: 204 }))
    vi.stubGlobal('fetch', fetchMock)

    await trackLeadServer(makeRequest(), 'gutschein')

    const body = sentBody(fetchMock)
    expect(body.client_id).toMatch(/^\d+\.\d+$/)
    expect(body.events[0].params.session_id).toBeUndefined()
  })

  it('swallows a failed hit — the lead is already in Telegram', async () => {
    vi.stubEnv('GA4_API_SECRET', 'secret')
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('offline')))
    const log = vi.spyOn(console, 'error').mockImplementation(() => {})

    await expect(trackLeadServer(makeRequest(), 'popup')).resolves.toBeUndefined()
    expect(log).toHaveBeenCalled()
    log.mockRestore()
  })
})
