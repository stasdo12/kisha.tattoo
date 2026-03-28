import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Kontakt — Kisha Tattoo München',
  description:
    'Schreib Kisha an — Tattoo-Künstlerin in München. Fragen zum Projekt, Termin oder Stil? Jetzt Kontakt aufnehmen.',
  path: '/contact',
})

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
