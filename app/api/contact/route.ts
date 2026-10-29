import { NextResponse } from 'next/server'
import { trackLeadServer } from '@/lib/ga-server'
import { sendMessage, sendDocument, escapeHtml, sourcePage } from '@/lib/telegram'

const MAX          = { name: 100, email: 200, brief: 2000 }
const MAX_FILE_B   = 20 * 1024 * 1024 // 20 MB — Telegram document limit
const MAX_FILES    = 5
// HEIC is what an iPhone hands over when Safari does not convert the photo.
const ALLOWED_MIME = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/heic', 'image/heif', 'application/pdf'])

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
  const files = formData.getAll('file').filter((f): f is File => f instanceof File && f.size > 0).slice(0, MAX_FILES)

  if (!name?.trim()) {
    return NextResponse.json({ ok: false, error: 'Name is required' }, { status: 422 })
  }
  if (!email?.trim()) {
    return NextResponse.json({ ok: false, error: 'Email is required' }, { status: 422 })
  }

  for (const file of files) {
    if (file.size > MAX_FILE_B) {
      return NextResponse.json({ ok: false, error: 'File too large (max 20 MB)' }, { status: 413 })
    }
    if (!ALLOWED_MIME.has(file.type)) {
      return NextResponse.json({ ok: false, error: 'Invalid file type. Allowed: JPEG, PNG, WebP, HEIC, PDF' }, { status: 415 })
    }
  }

  const safeName  = escapeHtml(name.slice(0, MAX.name).trim())
  const safeEmail = escapeHtml(email.slice(0, MAX.email).trim())
  const safeBrief = brief ? escapeHtml(brief.slice(0, MAX.brief).trim()) : '—'

  const page = sourcePage(req)

  const text = [
    '📋 <b>Новый бриф с сайта</b>',
    '',
    `👤 <b>Имя:</b> ${safeName}`,
    `📧 <b>Email:</b> ${safeEmail}`,
    `📝 <b>Бриф:</b> ${safeBrief}`,
    page ? `🔗 <b>Страница:</b> ${page}` : null,
  ].filter((line) => line !== null).join('\n')

  try {
    // The brief goes first as its own message: a document caption stops at
    // 1024 characters and the brief may run to 2000. The files follow, each
    // labelled with the sender so they stay readable in a busy chat.
    await sendMessage(text)
    for (const [i, file] of files.entries()) {
      try {
        await sendDocument(file, `📎 ${safeName} · ${i + 1}/${files.length}`)
      } catch (err) {
        // The enquiry itself has arrived; a lost picture can be asked for again.
        console.error('[api/contact] file', i + 1, err)
      }
    }
    await trackLeadServer(req, 'brief')
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[api/contact]', err)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
