'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import s from './FormLegalNote.module.css'

/**
 * The AGB bind a client only if they were pointed to before the contract, and a
 * form collecting personal data has to say where the privacy notice is. New tab
 * on purpose: leaving the page would lose what the visitor typed, and a popup
 * would stay open over the page it navigated to.
 */
export function FormLegalNote() {
  const t = useTranslations('formLegal')
  return (
    <p className={s.note}>
      {t.rich('note', {
        agb: (chunks) => <Link href="/agb" target="_blank">{chunks}</Link>,
        privacy: (chunks) => <Link href="/datenschutz" target="_blank">{chunks}</Link>,
      })}
    </p>
  )
}
