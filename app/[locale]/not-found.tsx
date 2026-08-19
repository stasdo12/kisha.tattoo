/**
 * 404 boundary inside the [locale] segment.
 *
 * Without this file, notFound() thrown from a page under app/[locale]/ never
 * reaches the root app/not-found.tsx — Next falls back to the root loading
 * shell and answers 200, which turns every unknown /blog/<slug> into a soft 404.
 * Design is reused from the root 404 instead of duplicated.
 */
import type { Metadata } from 'next'
import RootNotFound from '../not-found'

export const metadata: Metadata = {
  title: '404 — Seite nicht gefunden | Kisha Tattoo München',
  robots: { index: false, follow: false },
}

export default function LocaleNotFound() {
  return <RootNotFound />
}