import { describe, it, expect, vi, beforeEach } from 'vitest'
import { POST } from '@/app/api/booking/route'

vi.mock('@/lib/telegram', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@/lib/telegram')>()
  return { ...actual, sendMessage: vi.fn() }
})

function makeRequest(body: unknown) {
  return new Request('http://localhost/api/booking', {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify(body),
  })
}

describe('POST /api/booking', () => {
  beforeEach(() => vi.clearAllMocks())

  it('returns 200 for valid payload', async () => {
    const { sendMessage } = await import('@/lib/telegram')
    vi.mocked(sendMessage).mockResolvedValueOnce(undefined)

    const res = await POST(makeRequest({ name: 'Anna', phone: '+49 89 123456', idea: 'Dragon' }))
    expect(res.status).toBe(200)
    const json = await res.json()
    expect(json.ok).toBe(true)
  })

  it('returns 422 when name is missing', async () => {
    const res = await POST(makeRequest({ phone: '+49 89 123456' }))
    expect(res.status).toBe(422)
    const json = await res.json()
    expect(json.error).toMatch(/name/i)
  })

  it('returns 422 when phone is missing', async () => {
    const res = await POST(makeRequest({ name: 'Anna' }))
    expect(res.status).toBe(422)
    const json = await res.json()
    expect(json.error).toMatch(/phone/i)
  })

  it('returns 400 for invalid JSON', async () => {
    const req = new Request('http://localhost/api/booking', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    'not-json',
    })
    const res = await POST(req)
    expect(res.status).toBe(400)
  })

  it('returns 500 when Telegram throws', async () => {
    const { sendMessage } = await import('@/lib/telegram')
    vi.mocked(sendMessage).mockRejectedValueOnce(new Error('Network error'))

    const res = await POST(makeRequest({ name: 'Anna', phone: '+49 89 123456' }))
    expect(res.status).toBe(500)
  })

  it('sends message via Telegram on success', async () => {
    const { sendMessage } = await import('@/lib/telegram')
    vi.mocked(sendMessage).mockResolvedValueOnce(undefined)

    await POST(makeRequest({ name: 'Anna', phone: '+49 89 123456', idea: 'Koi' }))
    expect(sendMessage).toHaveBeenCalledOnce()
    const [text] = vi.mocked(sendMessage).mock.calls[0] as [string]
    expect(text).toContain('Anna')
    expect(text).toContain('+49 89 123456')
  })
})
