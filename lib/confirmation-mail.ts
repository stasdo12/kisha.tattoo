/**
 * The short "your request arrived" mail a visitor gets after the booking form.
 * Sent from info@kisha.tattoo through Google, so a reply lands in that mailbox.
 *
 * It stays plain on purpose. No advertising: in Germany an auto-reply with a
 * promotion counts as unsolicited advertising. Nothing the visitor typed except
 * a cleaned first name: otherwise the form could carry someone's spam to a
 * stranger's inbox.
 */
import nodemailer from 'nodemailer'

type MailLocale = 'de' | 'en' | 'uk'

const FROM = 'Kisha Tattoo <info@kisha.tattoo>'
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

export function buildConfirmation(name: string, page: string | null) {
  const text = TEXT[localeOf(page)]
  return {
    subject: text.subject,
    text: `${text.greeting(firstName(name))}\n\n${text.body}\n\nKisha`,
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
