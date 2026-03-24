/**
 * Telegram service — centralised bot API integration.
 * All form submissions (booking + contact) go through here.
 */

const TOKEN   = process.env.TELEGRAM_BOT_TOKEN
const CHAT_ID = process.env.TELEGRAM_CHAT_ID

if (!TOKEN || !CHAT_ID) {
  console.error(
    '[telegram] TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is not set. ' +
    'Form submissions will fail.'
  )
}

const API_BASE   = `https://api.telegram.org/bot${TOKEN}`
const TIMEOUT_MS = 8_000

/** Escapes user input to prevent HTML injection in Telegram messages */
export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

/** Sends a plain HTML-formatted text message */
export async function sendMessage(text: string): Promise<void> {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS)

  try {
    const res = await fetch(`${API_BASE}/sendMessage`, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: 'HTML' }),
      signal:  controller.signal,
    })

    if (!res.ok) {
      const body = await res.text()
      throw new Error(`Telegram sendMessage failed [${res.status}]: ${body}`)
    }
  } finally {
    clearTimeout(timer)
  }
}

/** Sends a file (image / PDF) with an HTML-formatted caption */
export async function sendDocument(file: File, caption: string): Promise<void> {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS)

  try {
    const form = new FormData()
    form.append('chat_id',    CHAT_ID!)
    form.append('caption',    caption)
    form.append('parse_mode', 'HTML')
    form.append('document',   file, file.name)

    const res = await fetch(`${API_BASE}/sendDocument`, {
      method: 'POST',
      body:   form,
      signal: controller.signal,
    })

    if (!res.ok) {
      const body = await res.text()
      throw new Error(`Telegram sendDocument failed [${res.status}]: ${body}`)
    }
  } finally {
    clearTimeout(timer)
  }
}
