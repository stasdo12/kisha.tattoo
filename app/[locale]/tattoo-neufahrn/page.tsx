/**
 * TATTOO NEUFAHRN — Local SEO landing page
 * Target keyword: "tattoo neufahrn" + "tattoo neufahrn bei freising"
 */
import type { Metadata } from 'next'
import { buildLocationMetadata, LocationPageTemplate } from '@/components/graphic/LocationPageTemplate'

const CONFIG = { citySlug: 'neufahrn', cityName: 'Neufahrn', travelMinutes: 20, path: '/tattoo-neufahrn' } as const

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params
  return buildLocationMetadata(locale, CONFIG)
}

export default async function TattooNeufahrn({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <LocationPageTemplate locale={locale} config={CONFIG} />
}