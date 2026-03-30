import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'contact' })
  return buildMetadata({ title: t('meta.title'), description: t('meta.description'), path: '/contact', locale })
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
