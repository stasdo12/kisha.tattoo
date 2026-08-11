'use client'

/**
 * GCookieConsent — Google Consent Mode v2 banner.
 * Default consent state is set to 'denied' in app/[locale]/layout.tsx (before GA4 loads).
 * This component is the only place that ever grants it.
 */
import { useEffect, useSyncExternalStore } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

const STORAGE_KEY = 'cookie-consent'

function updateConsent(granted: boolean) {
  if (typeof window === 'undefined') return
  if (window.gtag) {
    window.gtag('consent', 'update', {
      analytics_storage: granted ? 'granted' : 'denied',
      ad_storage: granted ? 'granted' : 'denied',
      ad_user_data: granted ? 'granted' : 'denied',
      ad_personalization: granted ? 'granted' : 'denied',
    })
  }
  // Pinterest tag has no consent-mode API — it's only ever loaded once granted.
  if (granted) window.__ptLoad?.()
}

// Tiny external store around localStorage — lets useSyncExternalStore read the
// stored choice without a hydration mismatch (server has no localStorage) and
// without setState-in-effect (same-tab writes don't fire the native 'storage' event).
type Listener = () => void
let listeners: Listener[] = []
function subscribe(callback: Listener) {
  listeners.push(callback)
  return () => { listeners = listeners.filter((l) => l !== callback) }
}
function getSnapshot() {
  return window.localStorage.getItem(STORAGE_KEY)
}
function getServerSnapshot() {
  return null
}
function setConsentChoice(granted: boolean) {
  window.localStorage.setItem(STORAGE_KEY, granted ? 'granted' : 'denied')
  listeners.forEach((l) => l())
}

export function GCookieConsent() {
  const t = useTranslations('cookieConsent')
  const stored = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
  const visible = stored !== 'granted' && stored !== 'denied'

  useEffect(() => {
    if (stored === 'granted') updateConsent(true)
  }, [stored])

  function choose(granted: boolean) {
    setConsentChoice(granted)
    if (granted) updateConsent(true)
  }

  if (!visible) return null

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      style={{
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 300,
        background: '#0D0D0D',
        color: '#F2F2F2',
        borderTop: '1px solid rgba(242,242,242,0.15)',
        padding: 'clamp(1rem, 2vw, 1.5rem) var(--g-pad)',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
      }}
    >
      <p
        style={{
          fontSize: 'var(--g-bs)',
          lineHeight: 'var(--g-lh-bm)',
          color: 'rgba(242,242,242,0.85)',
          margin: 0,
          maxWidth: '60ch',
          flex: '1 1 320px',
        }}
      >
        {t('message')}{' '}
        <Link href="/datenschutz" style={{ color: '#F2F2F2', textDecoration: 'underline' }}>
          {t('privacyLink')}
        </Link>
      </p>

      <div style={{ display: 'flex', gap: '0.75rem', flexShrink: 0 }}>
        <button
          onClick={() => choose(false)}
          style={{
            padding: '0.75rem 1.25rem',
            background: 'transparent',
            color: '#F2F2F2',
            border: '1px solid rgba(242,242,242,0.4)',
            fontSize: 'var(--g-bs)',
            cursor: 'pointer',
          }}
        >
          {t('decline')}
        </button>
        <button
          onClick={() => choose(true)}
          style={{
            padding: '0.75rem 1.25rem',
            background: '#F2F2F2',
            color: '#0D0D0D',
            border: '1px solid #F2F2F2',
            fontSize: 'var(--g-bs)',
            fontWeight: 500,
            cursor: 'pointer',
          }}
        >
          {t('accept')}
        </button>
      </div>
    </div>
  )
}
