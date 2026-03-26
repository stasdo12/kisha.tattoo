import { describe, it, expect, vi, beforeEach } from 'vitest'
import { escapeHtml, sendMessage, sendDocument } from '@/lib/telegram'

// ─── escapeHtml ──────────────────────────────────────────────────────────────

describe('escapeHtml', () => {
  it('escapes angle brackets', () => {
    expect(escapeHtml('<script>')).toBe('&lt;script&gt;')
  })

  it('escapes ampersand', () => {
    expect(escapeHtml('a & b')).toBe('a &amp; b')
  })

  it('escapes double quotes', () => {
    expect(escapeHtml('"hello"')).toBe('&quot;hello&quot;')
  })

  it('escapes all special chars in one string', () => {
    expect(escapeHtml('<a href="x">a & b</a>')).toBe(
      '&lt;a href=&quot;x&quot;&gt;a &amp; b&lt;/a&gt;'
    )
  })

  it('returns clean strings unchanged', () => {
    expect(escapeHtml('Hello, World!')).toBe('Hello, World!')
  })
})

// ─── sendMessage ─────────────────────────────────────────────────────────────

describe('sendMessage', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn())
    process.env.TELEGRAM_BOT_TOKEN = 'test-token'
    process.env.TELEGRAM_CHAT_ID   = '12345'
  })

  it('calls the Telegram sendMessage endpoint', async () => {
    vi.mocked(fetch).mockResolvedValueOnce(
      new Response('{}', { status: 200 })
    )
    await sendMessage('hello')
    expect(fetch).toHaveBeenCalledOnce()
    const [url] = vi.mocked(fetch).mock.calls[0] as [string, ...unknown[]]
    expect(url).toContain('/sendMessage')
  })

  it('throws on non-OK response', async () => {
    vi.mocked(fetch).mockResolvedValueOnce(
      new Response('Bad Request', { status: 400 })
    )
    await expect(sendMessage('hello')).rejects.toThrow('Telegram sendMessage failed')
  })
})

// ─── sendDocument ─────────────────────────────────────────────────────────────

describe('sendDocument', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn())
    process.env.TELEGRAM_BOT_TOKEN = 'test-token'
    process.env.TELEGRAM_CHAT_ID   = '12345'
  })

  it('calls the Telegram sendDocument endpoint', async () => {
    vi.mocked(fetch).mockResolvedValueOnce(
      new Response('{}', { status: 200 })
    )
    const file = new File(['content'], 'photo.jpg', { type: 'image/jpeg' })
    await sendDocument(file, 'caption')
    expect(fetch).toHaveBeenCalledOnce()
    const [url] = vi.mocked(fetch).mock.calls[0] as [string, ...unknown[]]
    expect(url).toContain('/sendDocument')
  })

  it('throws on non-OK response', async () => {
    vi.mocked(fetch).mockResolvedValueOnce(
      new Response('Forbidden', { status: 403 })
    )
    const file = new File(['content'], 'photo.jpg', { type: 'image/jpeg' })
    await expect(sendDocument(file, 'caption')).rejects.toThrow('Telegram sendDocument failed')
  })
})
