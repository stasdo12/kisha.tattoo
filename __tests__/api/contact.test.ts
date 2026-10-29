import { describe, it, expect, vi, beforeEach } from 'vitest'
import { POST } from '@/app/api/contact/route'

vi.mock('@/lib/telegram', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@/lib/telegram')>()
  return { ...actual, sendMessage: vi.fn(), sendDocument: vi.fn() }
})

function makeFormRequest(fields: Record<string, string>, file?: File | File[]) {
  const form = new FormData()
  for (const [k, v] of Object.entries(fields)) form.append(k, v)
  for (const f of [file ?? []].flat()) form.append('file', f)
  return new Request('http://localhost/api/contact', { method: 'POST', body: form })
}

describe('POST /api/contact', () => {
  beforeEach(() => vi.clearAllMocks())

  it('returns 200 for valid payload without file', async () => {
    const { sendMessage } = await import('@/lib/telegram')
    vi.mocked(sendMessage).mockResolvedValueOnce(undefined)

    const res = await POST(makeFormRequest({ name: 'Anna', email: 'anna@test.com', brief: 'Dragon sleeve' }))
    expect(res.status).toBe(200)
    const json = await res.json()
    expect(json.ok).toBe(true)
  })

  it('returns 422 when name is missing', async () => {
    const res = await POST(makeFormRequest({ email: 'anna@test.com' }))
    expect(res.status).toBe(422)
    expect((await res.json()).error).toMatch(/name/i)
  })

  it('returns 422 when email is missing', async () => {
    const res = await POST(makeFormRequest({ name: 'Anna' }))
    expect(res.status).toBe(422)
    expect((await res.json()).error).toMatch(/email/i)
  })

  it('returns 413 when file is too large', async () => {
    const bigFile = new File([new Uint8Array(21 * 1024 * 1024)], 'big.jpg', { type: 'image/jpeg' })
    const res = await POST(makeFormRequest({ name: 'Anna', email: 'anna@test.com' }, bigFile))
    expect(res.status).toBe(413)
  })

  it('returns 415 for disallowed file type', async () => {
    const badFile = new File(['data'], 'script.exe', { type: 'application/x-msdownload' })
    const res = await POST(makeFormRequest({ name: 'Anna', email: 'anna@test.com' }, badFile))
    expect(res.status).toBe(415)
  })

  it('sends document when valid file is attached', async () => {
    const { sendDocument } = await import('@/lib/telegram')
    vi.mocked(sendDocument).mockResolvedValueOnce(undefined)

    const file = new File(['img'], 'ref.jpg', { type: 'image/jpeg' })
    const res = await POST(makeFormRequest({ name: 'Anna', email: 'anna@test.com' }, file))
    expect(res.status).toBe(200)
    expect(sendDocument).toHaveBeenCalledOnce()
  })

  it('sends the brief once and every attached file after it', async () => {
    const { sendMessage, sendDocument } = await import('@/lib/telegram')
    const files = ['a.jpg', 'b.jpg', 'c.pdf'].map(
      (n) => new File(['x'], n, { type: n.endsWith('pdf') ? 'application/pdf' : 'image/jpeg' }),
    )
    const res = await POST(makeFormRequest({ name: 'Anna', email: 'anna@test.com', brief: 'x'.repeat(1500) }, files))
    expect(res.status).toBe(200)
    expect(sendMessage).toHaveBeenCalledOnce()
    expect(vi.mocked(sendMessage).mock.calls[0][0]).toContain('x'.repeat(1500))
    expect(sendDocument).toHaveBeenCalledTimes(3)
    expect(vi.mocked(sendDocument).mock.calls[2][1]).toContain('3/3')
  })

  it('takes at most five files', async () => {
    const { sendDocument } = await import('@/lib/telegram')
    const files = Array.from({ length: 7 }, (_, i) => new File(['x'], `${i}.jpg`, { type: 'image/jpeg' }))
    await POST(makeFormRequest({ name: 'Anna', email: 'anna@test.com' }, files))
    expect(sendDocument).toHaveBeenCalledTimes(5)
  })

  it('accepts an iPhone HEIC photo', async () => {
    const file = new File(['x'], 'IMG_0001.HEIC', { type: 'image/heic' })
    const res = await POST(makeFormRequest({ name: 'Anna', email: 'anna@test.com' }, file))
    expect(res.status).toBe(200)
  })

  it('still reports success when only a file fails to reach Telegram', async () => {
    const { sendDocument } = await import('@/lib/telegram')
    vi.mocked(sendDocument).mockRejectedValueOnce(new Error('Timeout'))
    vi.spyOn(console, 'error').mockImplementation(() => {})

    const file = new File(['img'], 'ref.jpg', { type: 'image/jpeg' })
    const res = await POST(makeFormRequest({ name: 'Anna', email: 'anna@test.com' }, file))
    expect(res.status).toBe(200)
  })

  it('sends plain message when no file attached', async () => {
    const { sendMessage, sendDocument } = await import('@/lib/telegram')
    vi.mocked(sendMessage).mockResolvedValueOnce(undefined)

    await POST(makeFormRequest({ name: 'Anna', email: 'anna@test.com' }))
    expect(sendMessage).toHaveBeenCalledOnce()
    expect(sendDocument).not.toHaveBeenCalled()
  })

  it('returns 500 when Telegram throws', async () => {
    const { sendMessage } = await import('@/lib/telegram')
    vi.mocked(sendMessage).mockRejectedValueOnce(new Error('Timeout'))

    const res = await POST(makeFormRequest({ name: 'Anna', email: 'anna@test.com' }))
    expect(res.status).toBe(500)
  })
})
