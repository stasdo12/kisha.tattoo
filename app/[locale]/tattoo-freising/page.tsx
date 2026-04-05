/**
 * TATTOO FREISING — Local SEO landing page
 * Primary: "tattoo freising" (260/mo, KD 6)
 */
import type { Metadata } from 'next'
import { buildLocationMetadata, LocationPageTemplate } from '@/components/graphic/LocationPageTemplate'

const CONFIG = { citySlug: 'freising', cityName: 'Freising', travelMinutes: 25, path: '/tattoo-freising' } as const

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params
  return buildLocationMetadata(locale, CONFIG)
}

export default async function TattooFreising({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <LocationPageTemplate locale={locale} config={CONFIG} />
}
