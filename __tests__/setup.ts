import '@testing-library/jest-dom'
import { vi } from 'vitest'

// Mock next/image — render as plain <img>
vi.mock('next/image', () => ({
  default: ({ src, alt, fill: _fill, sizes: _sizes, style, ...props }: {
    src: string; alt: string; fill?: boolean; sizes?: string; style?: React.CSSProperties; [key: string]: unknown
  }) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    const React = require('react')
    return React.createElement('img', { src, alt, style, ...props })
  },
}))

// Mock next/link — render as plain <a>
vi.mock('next/link', () => ({
  default: ({ href, children, style, ...props }: {
    href: string; children: React.ReactNode; style?: React.CSSProperties; [key: string]: unknown
  }) => {
    const React = require('react')
    return React.createElement('a', { href, style, ...props }, children)
  },
}))

// Mock next-intl
vi.mock('next-intl', () => ({
  useTranslations: () => (key: string) => key,
  useLocale: () => 'de',
}))

// Mock next/navigation
vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: vi.fn(), replace: vi.fn(), prefetch: vi.fn() }),
  usePathname: () => '/',
  useSearchParams: () => new URLSearchParams(),
}))

// Mock the locale-aware Link. next-intl's navigation module resolves `next/navigation`
// through an ESM path vitest cannot follow, and the prefixing it adds is verified
// end-to-end against a real build rather than here — these tests care about hrefs.
vi.mock('@/i18n/navigation', () => {
  const React = require('react')
  return {
    Link: ({ href, children, style, ...props }: {
      href: string; children: React.ReactNode; style?: React.CSSProperties; [key: string]: unknown
    }) => React.createElement('a', { href, style, ...props }, children),
    usePathname: () => '/',
    useRouter: () => ({ push: vi.fn(), replace: vi.fn(), prefetch: vi.fn() }),
    redirect: vi.fn(),
  }
})
