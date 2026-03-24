import { NextResponse } from 'next/server'
import { sendMessage, escapeHtml } from '@/lib/telegram'

const MAX = { name: 100, phone: 30, idea: 500 }

export async function POST(req: Request) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 })
  }

  const { name, phone, idea } = body as Record<string, unknown>

  if (!name || typeof name !== 'string' || !name.trim()) {
    return NextResponse.json({ ok: false, error: 'Name is required' }, { status: 422 })
  }
  if (!phone || typeof phone !== 'string' || !phone.trim()) {
    return NextResponse.json({ ok: false, error: 'Phone is required' }, { status: 422 })
  }

  const safeName  = escapeHtml(String(name).slice(0, MAX.name).trim())
  const safePhone = escapeHtml(String(phone).slice(0, MAX.phone).trim())
  const safeIdea  = idea ? escapeHtml(String(idea).slice(0, MAX.idea).trim()) : '—'

  const text = [
    '📩 <b>Новая заявка с сайта</b>',
    '',
    `👤 <b>Имя:</b> ${safeName}`,
    `📞 <b>Телефон:</b> ${safePhone}`,
    `💭 <b>Идея:</b> ${safeIdea}`,
  ].join('\n')

  try {
    await sendMessage(text)
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[api/booking]', err)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
