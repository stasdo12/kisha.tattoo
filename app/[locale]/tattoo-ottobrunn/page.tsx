/**
 * TATTOO OTTOBRUNN — Local SEO landing page
 * Primary keyword: "tattoo ottobrunn" (140/mo, KD 5)
 */
import type { Metadata } from 'next'
import { buildLocationMetadata, LocationPageTemplate } from '@/components/graphic/LocationPageTemplate'

const CONFIG = { citySlug: 'ottobrunn', cityName: 'Ottobrunn', travelMinutes: 20, path: '/tattoo-ottobrunn' } as const

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params
  return buildLocationMetadata(locale, CONFIG)
}

export default async function TattooOttobrunn({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <LocationPageTemplate locale={locale} config={CONFIG} />
}
