'use client'

/**
 * GCookieConsent — Google Consent Mode v2 banner.
 * Default consent state is set to 'denied' in app/[locale]/layout.tsx (before GA4 loads).
 * This component is the only place that ever grants it.
 */
import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

const STORAGE_KEY = 'cookie-consent'

function updateConsent(granted: boolean) {
  if (typeof window === 'undefined' || !window.gtag) return
  window.gtag('consent', 'update', {
    analytics_storage: granted ? 'granted' : 'denied',
    ad_storage: granted ? 'granted' : 'denied',
    ad_user_data: granted ? 'granted' : 'denied',
    ad_personalization: granted ? 'granted' : 'denied',
  })
}

export function GCookieConsent() {
  const t = useTranslations('cookieConsent')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'granted') {
      updateConsent(true)
    } else if (stored !== 'denied') {
      setVisible(true)
    }
  }, [])

  function choose(granted: boolean) {
    window.localStorage.setItem(STORAGE_KEY, granted ? 'granted' : 'denied')
    if (granted) updateConsent(true)
    setVisible(false)
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
