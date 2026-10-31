'use client'

import { useTranslations } from 'next-intl'
import { usePathname } from '@/i18n/navigation'
import { whatsAppHref, whatsAppTopic } from '@/lib/whatsapp'

/** wa.me link whose pre-filled greeting says which page the visitor wrote from. */
export function useWhatsAppHref(): string {
  const t = useTranslations('whatsapp')
  return whatsAppHref(t(whatsAppTopic(usePathname())))
}
