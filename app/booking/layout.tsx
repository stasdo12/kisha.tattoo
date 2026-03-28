import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Termin buchen — Kisha Tattoo München',
  description:
    'Tattoo-Termin bei Kisha buchen — München. Custom-Design, Irezumi, Fineline & Grafik. Anfrage in 2 Minuten ausfüllen.',
  path: '/booking',
})

export default function BookingLayout({ children }: { children: React.ReactNode }) {
  return children
}
