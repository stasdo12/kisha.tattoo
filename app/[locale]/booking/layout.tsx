import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'booking' })
  return buildMetadata({ title: t('meta.title'), description: t('meta.description'), path: '/booking', locale })
}

export default function BookingLayout({ children }: { children: React.ReactNode }) {
  return children
}
