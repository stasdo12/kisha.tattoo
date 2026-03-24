import { NextResponse } from 'next/server'
import { sendMessage, sendDocument, escapeHtml } from '@/lib/telegram'

const MAX          = { name: 100, email: 200, brief: 2000 }
const MAX_FILE_B   = 20 * 1024 * 1024 // 20 MB — Telegram document limit
const ALLOWED_MIME = new Set(['image/jpeg', 'image/png', 'image/webp', 'application/pdf'])

export async function POST(req: Request) {
  let formData: FormData
  try {
    formData = await req.formData()
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid form data' }, { status: 400 })
  }

  const name  = formData.get('name')  as string | null
  const email = formData.get('email') as string | null
  const brief = formData.get('brief') as string | null
  const file  = formData.get('file')  as File   | null

  if (!name?.trim()) {
    return NextResponse.json({ ok: false, error: 'Name is required' }, { status: 422 })
  }
  if (!email?.trim()) {
    return NextResponse.json({ ok: false, error: 'Email is required' }, { status: 422 })
  }

  if (file && file.size > 0) {
    if (file.size > MAX_FILE_B) {
      return NextResponse.json({ ok: false, error: 'File too large (max 20 MB)' }, { status: 413 })
    }
    if (!ALLOWED_MIME.has(file.type)) {
      return NextResponse.json({ ok: false, error: 'Invalid file type. Allowed: JPEG, PNG, WebP, PDF' }, { status: 415 })
    }
  }

  const safeName  = escapeHtml(name.slice(0, MAX.name).trim())
  const safeEmail = escapeHtml(email.slice(0, MAX.email).trim())
  const safeBrief = brief ? escapeHtml(brief.slice(0, MAX.brief).trim()) : '—'

  const text = [
    '📋 <b>Новый бриф с сайта</b>',
    '',
    `👤 <b>Имя:</b> ${safeName}`,
    `📧 <b>Email:</b> ${safeEmail}`,
    `📝 <b>Бриф:</b> ${safeBrief}`,
  ].join('\n')

  try {
    if (file && file.size > 0) {
      await sendDocument(file, text)
    } else {
      await sendMessage(text)
    }
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[api/contact]', err)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
