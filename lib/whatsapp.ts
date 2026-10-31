import { SITE } from '@/content/site'

/* Pages whose visitors arrive with a known topic. Everything else gets the
   general greeting. Keys live under `whatsapp` in messages/*.json. */
const TOPICS = [
  ['/japanisches-tattoo-muenchen', 'japanese'],
  ['/grafik-tattoo-muenchen', 'graphic'],
  ['/fineline-tattoo-muenchen', 'fineline'],
  ['/walk-in-tattoo-muenchen', 'walkin'],
  ['/tattoo-preise-muenchen', 'prices'],
  ['/tattoo-gutschein-muenchen', 'gutschein'],
  ['/tattoo-unikate', 'unikate'],
] as const

export type WhatsAppTopic = (typeof TOPICS)[number][1] | 'default'

/** `pathname` comes without the locale prefix (usePathname from i18n/navigation). */
export function whatsAppTopic(pathname: string): WhatsAppTopic {
  const match = TOPICS.find(([path]) => pathname === path || pathname.startsWith(`${path}/`))
  return match ? match[1] : 'default'
}

export function whatsAppHref(text: string): string {
  const phone = SITE.contact.phone.replace(/\D/g, '')
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`
}
