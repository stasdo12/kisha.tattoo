import { describe, it, expect, vi, beforeEach } from 'vitest'
import { POST } from '@/app/api/whatsapp/route'

vi.mock('@/lib/ga-server', () => ({ trackWhatsAppServer: vi.fn() }))

// sendBeacon posts the JSON as a plain string.
function makeRequest(body: string, referer?: string) {
  const req = new Request('http://localhost/api/whatsapp', { method: 'POST', body })
  // The fetch spec strips `referer` from requests built in code, so it is swapped in.
  if (referer) Object.defineProperty(req, 'headers', { value: new Headers({ referer }) })
  return req
}

describe('POST /api/whatsapp', () => {
  beforeEach(() => vi.clearAllMocks())

  it('counts the tap with its position and page, and answers 204', async () => {
    const { trackWhatsAppServer } = await import('@/lib/ga-server')
    const res = await POST(makeRequest(JSON.stringify({ location: 'floating', page: '/walk-in-tattoo-muenchen' })))

    expect(res.status).toBe(204)
    expect(vi.mocked(trackWhatsAppServer)).toHaveBeenCalledWith(
      expect.anything(), 'floating', 'https://kisha.tattoo/walk-in-tattoo-muenchen',
    )
  })

  it('files an unknown position under other', async () => {
    const { trackWhatsAppServer } = await import('@/lib/ga-server')
    await POST(makeRequest(JSON.stringify({ location: '<script>', page: '/' })))

    expect(vi.mocked(trackWhatsAppServer).mock.calls[0][1]).toBe('other')
  })

  it('takes the page from the referer when the body has none, and ignores a foreign one', async () => {
    const { trackWhatsAppServer } = await import('@/lib/ga-server')
    await POST(makeRequest(JSON.stringify({ location: 'footer', page: '//evil.example/x' }), 'https://kisha.tattoo/tattoo-preise-muenchen'))

    expect(vi.mocked(trackWhatsAppServer).mock.calls[0][2]).toBe('https://kisha.tattoo/tattoo-preise-muenchen')
  })

  it('still answers 204 for a body it cannot read', async () => {
    const res = await POST(makeRequest('not json'))
    expect(res.status).toBe(204)
  })
})
