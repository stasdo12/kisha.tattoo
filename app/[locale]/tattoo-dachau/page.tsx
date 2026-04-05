/**
 * TATTOO DACHAU — Local SEO landing page
 * Primary keyword: "tattoo dachau" (110/mo, KD 5)
 */
import type { Metadata } from 'next'
import { buildLocationMetadata, LocationPageTemplate } from '@/components/graphic/LocationPageTemplate'

const CONFIG = { citySlug: 'dachau', cityName: 'Dachau', travelMinutes: 25, path: '/tattoo-dachau' } as const

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params
  return buildLocationMetadata(locale, CONFIG)
}

export default async function TattooDachau({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <LocationPageTemplate locale={locale} config={CONFIG} />
}