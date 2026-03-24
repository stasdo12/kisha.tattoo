import { NextResponse } from 'next/server'

const TOKEN = process.env.TELEGRAM_BOT_TOKEN!
const CHAT_ID = process.env.TELEGRAM_CHAT_ID!

export async function POST(req: Request) {
  try {
    const { name, phone, idea } = await req.json()

    const text = [
      '📩 <b>Новая заявка с сайта</b>',
      '',
      `👤 <b>Имя:</b> ${name || '—'}`,
      `📞 <b>Телефон:</b> ${phone || '—'}`,
      `💭 <b>Идея:</b> ${idea || '—'}`,
    ].join('\n')

    const res = await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: 'HTML' }),
    })

    if (!res.ok) throw new Error('Telegram error')
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}