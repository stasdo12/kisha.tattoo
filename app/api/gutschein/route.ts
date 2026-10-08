import { NextResponse } from 'next/server'
import { sendMessage, escapeHtml } from '@/lib/telegram'

// Voucher requests from the modal on /tattoo-gutschein-muenchen. No payment,
// no shop: the message lands in Telegram and the rest happens in the
// conversation, like every other request on the site.

const AMOUNTS = ['200', '500', '1000'] as const
const MAX = { name: 100, email: 120, phone: 30, recipient: 100, note: 500 }

export async function POST(req: Request) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 })
  }

  const { betrag, name, email, phone, recipient, note, locale } = body as Record<string, unknown>

  if (typeof betrag !== 'string' || !(AMOUNTS as readonly string[]).includes(betrag)) {
    return NextResponse.json({ ok: false, error: 'Amount is required' }, { status: 422 })
  }
  if (!name || typeof name !== 'string' || !name.trim()) {
    return NextResponse.json({ ok: false, error: 'Name is required' }, { status: 422 })
  }
  if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return NextResponse.json({ ok: false, error: 'E-mail is required' }, { status: 422 })
  }

  const clean = (v: unknown, max: number) =>
    typeof v === 'string' && v.trim() ? escapeHtml(v.slice(0, max).trim()) : '—'

  const text = [
    `🎁 <b>Gutschein-Anfrage: ${betrag} €</b>`,
    '',
    `👤 <b>Name:</b> ${clean(name, MAX.name)}`,
    `✉️ <b>E-Mail:</b> ${clean(email, MAX.email)}`,
    `📞 <b>Telefon:</b> ${clean(phone, MAX.phone)}`,
    `🎀 <b>Für:</b> ${clean(recipient, MAX.recipient)}`,
    `💬 <b>Nachricht:</b> ${clean(note, MAX.note)}`,
    typeof locale === 'string' && locale !== 'de' ? `🌐 ${escapeHtml(locale)}` : null,
  ].filter((line) => line !== null).join('\n')

  try {
    await sendMessage(text)
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[api/gutschein]', err)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
