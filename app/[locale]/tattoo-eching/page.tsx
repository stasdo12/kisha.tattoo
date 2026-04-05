/**
 * TATTOO ECHING — Local SEO landing page
 * Target keyword: "tattoo eching" + "tätowierer eching"
 */
import type { Metadata } from 'next'
import { buildLocationMetadata, LocationPageTemplate } from '@/components/graphic/LocationPageTemplate'

const CONFIG = { citySlug: 'eching', cityName: 'Eching', travelMinutes: 20, path: '/tattoo-eching' } as const

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params
  return buildLocationMetadata(locale, CONFIG)
}

export default async function TattooEching({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <LocationPageTemplate locale={locale} config={CONFIG} />
}
