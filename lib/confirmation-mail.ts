/**
 * The short "your request arrived" mail a visitor gets after the booking form.
 * Sent from info@kisha.tattoo through Google, so a reply lands in that mailbox.
 *
 * The design stops at the site's logo and type. No advertising, so no work photos
 * or offers: in Germany an auto-reply with a promotion counts as unsolicited
 * advertising. Nothing the visitor typed except a cleaned first name: otherwise
 * the form could carry someone's spam to a stranger's inbox.
 */
import nodemailer from 'nodemailer'

type MailLocale = 'de' | 'en' | 'uk'

const FROM = 'Kisha Tattoo <info@kisha.tattoo>'
const SITE = 'https://kisha.tattoo'
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const TIMEOUT_MS = 10_000

// About one enquiry a day is normal. The cap is what keeps a bot typing other
// people's addresses from sending more than a handful of mails from our domain.
const MAX_PER_DAY = 20

const TEXT: Record<MailLocale, { subject: string; greeting: (name: string) => string; body: string }> = {
  de: {
    subject: 'Deine Anfrage ist angekommen',
    greeting: (name) => (name ? `Hallo ${name},` : 'Hallo,'),
    body: 'danke für deine Anfrage. Sie ist gut bei mir angekommen. Ich schaue sie mir an und melde mich innerhalb von 48 Stunden bei dir.\n\nDas ist eine automatische Bestätigung. Wenn du noch etwas ergänzen möchtest, antworte einfach auf diese Mail.',
  },
  en: {
    subject: 'Your request has arrived',
    greeting: (name) => (name ? `Hi ${name},` : 'Hi,'),
    body: 'thank you for your request. It reached me safely. I will look at it and get back to you within 48 hours.\n\nThis is an automatic confirmation. If you want to add anything, just reply to this email.',
  },
  uk: {
    subject: 'Твоя заявка надійшла',
    greeting: (name) => (name ? `Привіт, ${name}!` : 'Привіт!'),
    body: 'Дякую за заявку. Вона вже в мене. Я перегляну її і відповім протягом 48 годин.\n\nЦе автоматичне підтвердження. Якщо хочеш щось додати, просто дай відповідь на цей лист.',
  },
}

/** `/en/booking` → en, `/uk` → uk, everything else is the German default. */
function localeOf(page: string | null): MailLocale {
  const match = /^\/(en|uk)(\/|$)/.exec(page ?? '')
  return match ? (match[1] as MailLocale) : 'de'
}

/** First word only, letters only, so the greeting can't carry a link or a sentence. */
function firstName(name: string): string {
  const [word = ''] = name.trim().split(/\s+/)
  return /^[\p{L}'-]{1,30}$/u.test(word) ? word : ''
}

const INK = '#0D0D0D'
const PAPER = '#F2F2F2'
const MUTED = '#555555'
const FONT = `'DM Sans', Helvetica, Arial, sans-serif`

/** Tables and inline styles, the only layout Gmail and Outlook keep. The logo band stays black in dark mode. */
function renderHtml(locale: MailLocale, subject: string, paragraphs: string[]): string {
  const [preview] = paragraphs.slice(1)
  const rows = paragraphs
    .map((p) => `<p style="margin:0 0 18px;font:400 16px/1.55 ${FONT};color:${INK};">${p}</p>`)
    .join('')

  return `<!doctype html>
<html lang="${locale}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light only">
<meta name="supported-color-schemes" content="light only">
<title>${subject}</title>
</head>
<body style="margin:0;padding:0;background:${PAPER};">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">${preview}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${PAPER};">
<tr><td align="center" style="padding:24px 12px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:560px;">
<tr><td style="background:${INK};padding:18px 28px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
<td><a href="${SITE}" style="text-decoration:none;"><img src="${SITE}/images/mail/kisha-logo.png" width="88" height="34" alt="● Kisha" style="display:block;border:0;font:500 22px ${FONT};color:${PAPER};"></a></td>
<td align="right" style="font:500 14px ${FONT};color:${PAPER};">Tattoo</td>
</tr></table>
</td></tr>
<tr><td style="background:#FFFFFF;padding:36px 28px 18px;">
<h1 style="margin:0 0 24px;padding:0 0 18px;border-bottom:2px solid ${INK};font:500 30px/1.15 ${FONT};letter-spacing:-0.02em;color:${INK};">${subject}</h1>
${rows}
<p style="margin:0 0 18px;font:500 16px/1.55 ${FONT};color:${INK};">Kisha</p>
</td></tr>
<tr><td style="padding:16px 28px 0;font:400 13px ${FONT};"><a href="${SITE}" style="color:${MUTED};text-decoration:none;">[ kisha.tattoo ]</a></td></tr>
</table>
</td></tr>
</table>
</body>
</html>`
}

export function buildConfirmation(name: string, page: string | null) {
  const locale = localeOf(page)
  const text = TEXT[locale]
  const greeting = text.greeting(firstName(name))
  return {
    subject: text.subject,
    text: `${greeting}\n\n${text.body}\n\nKisha`,
    html: renderHtml(locale, text.subject, [greeting, ...text.body.split('\n\n')]),
  }
}

let today = { day: '', sent: new Set<string>() }

function claimSlot(address: string): boolean {
  const day = new Date().toISOString().slice(0, 10)
  if (today.day !== day) today = { day, sent: new Set() }
  if (today.sent.has(address) || today.sent.size >= MAX_PER_DAY) return false
  today.sent.add(address)
  return true
}

/**
 * Never throws: the enquiry has already reached Telegram by the time this runs,
 * and a mail problem must not turn that into an error for the visitor. Does
 * nothing until SMTP_USER and SMTP_PASSWORD are set.
 */
export async function sendConfirmation(to: string, name: string, page: string | null): Promise<void> {
  const { SMTP_USER: user, SMTP_PASSWORD: pass } = process.env
  if (!user || !pass) return

  const address = to.trim().toLowerCase()
  if (!EMAIL.test(address) || !claimSlot(address)) return

  try {
    await nodemailer
      .createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        requireTLS: true,
        auth: { user, pass },
        connectionTimeout: TIMEOUT_MS,
        socketTimeout: TIMEOUT_MS,
      })
      .sendMail({
        from: FROM,
        to: address,
        ...buildConfirmation(name, page),
        // Tells mail servers this is automatic, so out-of-office replies don't answer it.
        headers: { 'Auto-Submitted': 'auto-generated' },
      })
  } catch (err) {
    console.error('[confirmation-mail]', err)
  }
}
