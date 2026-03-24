import { NextResponse } from 'next/server'

const TOKEN = process.env.TELEGRAM_BOT_TOKEN!
const CHAT_ID = process.env.TELEGRAM_CHAT_ID!

export async function POST(req: Request) {
  try {
    const formData = await req.formData()
    const name  = formData.get('name')  as string
    const email = formData.get('email') as string
    const brief = formData.get('brief') as string
    const file  = formData.get('file')  as File | null

    const text = [
      '📋 <b>Новый бриф с сайта</b>',
      '',
      `👤 <b>Имя:</b> ${name || '—'}`,
      `📧 <b>Email:</b> ${email || '—'}`,
      `📝 <b>Бриф:</b> ${brief || '—'}`,
    ].join('\n')

    if (file && file.size > 0) {
      // Send file + caption
      const tgForm = new FormData()
      tgForm.append('chat_id', CHAT_ID)
      tgForm.append('caption', text)
      tgForm.append('parse_mode', 'HTML')
      tgForm.append('document', file, file.name)

      const res = await fetch(`https://api.telegram.org/bot${TOKEN}/sendDocument`, {
        method: 'POST',
        body: tgForm,
      })
      if (!res.ok) throw new Error('Telegram error')
    } else {
      // Text only
      const res = await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: 'HTML' }),
      })
      if (!res.ok) throw new Error('Telegram error')
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
