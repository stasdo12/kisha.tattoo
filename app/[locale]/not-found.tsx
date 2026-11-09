/**
 * 404 boundary inside the [locale] segment.
 *
 * Without this file, notFound() thrown from a page under app/[locale]/ never
 * reaches the root app/not-found.tsx — Next falls back to the root loading
 * shell and answers 200, which turns every unknown /blog/<slug> into a soft 404.
 * Design is shared with the root 404 through NotFoundView instead of duplicated.
 */
import type { Metadata } from 'next'
import { NotFoundView } from '@/components/graphic/NotFoundView'

export const metadata: Metadata = {
  title: '404 — Seite nicht gefunden | Kisha Tattoo München',
  robots: { index: false, follow: false },
}

export default function LocaleNotFound() {
  return <NotFoundView />
}