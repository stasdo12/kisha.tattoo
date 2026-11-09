'use client'

/**
 * WhatsApp button on the 404 page. The page can render outside the locale
 * layout, so there is no next-intl here: the greeting is fixed and German like
 * the rest of the 404, and tells Kisha the visitor came from a dead link.
 */

import { trackWhatsAppClick } from '@/lib/gtag'
import { whatsAppHref } from '@/lib/whatsapp'
import { WHATSAPP_GLYPH } from './FloatingWhatsApp'

const GREETING = 'Hallo Kisha, ich habe auf deiner Website etwas gesucht und nicht gefunden.'

export function NotFoundWhatsApp({ className }: { className?: string }) {
  return (
    <a
      href={whatsAppHref(GREETING)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => trackWhatsAppClick('not-found')}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
        <path d={WHATSAPP_GLYPH} />
      </svg>
      Schreib mir auf WhatsApp
    </a>
  )
}
