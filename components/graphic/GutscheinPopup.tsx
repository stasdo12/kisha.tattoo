'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { trackFormSubmit } from '@/lib/gtag'
import { OPEN_GUTSCHEIN_POPUP } from './GutscheinButton'

type Amount = '200' | '500' | '1000'
const AMOUNTS: Amount[] = ['200', '500', '1000']

/**
 * The voucher request modal. Same shell and classes as FormPopup
 * (styles/form-popup.css), so it looks like the one visitors already know,
 * with the amount chosen on top and no payment step — the request goes to
 * Telegram and the rest is settled in the conversation.
 */
export function GutscheinPopup() {
  const t = useTranslations('gutschein.popup')
  const locale = useLocale()
  const [isOpen, setIsOpen] = useState(false)
  const [betrag, setBetrag] = useState<Amount | null>(null)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error' | 'noAmount'>('idle')
  const overlayRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const triggerRef = useRef<Element | null>(null)

  const close = useCallback(() => {
    setIsOpen(false)
    setStatus('idle')
    if (triggerRef.current instanceof HTMLElement) triggerRef.current.focus()
  }, [])

  useEffect(() => {
    const open = (e: Event) => {
      const detail = (e as CustomEvent<{ betrag: Amount | null }>).detail
      triggerRef.current = document.activeElement
      setBetrag(detail?.betrag ?? null)
      setStatus('idle')
      setIsOpen(true)
    }
    window.addEventListener(OPEN_GUTSCHEIN_POPUP, open)
    return () => window.removeEventListener(OPEN_GUTSCHEIN_POPUP, open)
  }, [])

  useEffect(() => { if (isOpen) closeButtonRef.current?.focus() }, [isOpen])
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [close])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!betrag) { setStatus('noAmount'); return }
    setStatus('submitting')
    const fd = new FormData(e.currentTarget)
    try {
      const res = await fetch('/api/gutschein', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          betrag,
          name:      fd.get('name'),
          email:     fd.get('email'),
          phone:     fd.get('phone'),
          recipient: fd.get('recipient'),
          note:      fd.get('note'),
          locale,
        }),
      })
      if (res.ok) {
        trackFormSubmit('gutschein')
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="fp-overlay"
      ref={overlayRef}
      onClick={(e) => { if (e.target === overlayRef.current) close() }}
    >
      <div className="fp-popup" role="dialog" aria-modal="true" aria-labelledby="gp-heading">
        <div className="fp-top">
          <div className="fp-content">
            <div className="fp-heading-block">
              <span className="fp-tag">{t('tag')}</span>
              <h2 id="gp-heading" className="fp-heading">
                {t('heading')}
              </h2>
            </div>
            <button ref={closeButtonRef} className="fp-close" onClick={close} aria-label={t('close')}>✕</button>
          </div>
          <span className="fp-kanji" aria-hidden="true">贈</span>
        </div>

        {status === 'success' ? (
          <div className="fp-form" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '120px' }}>
            <p style={{ color: '#0D0D0D', fontSize: 'var(--g-bm)', textAlign: 'center', lineHeight: 'var(--g-lh-bm)', maxWidth: '28rem' }}>
              {t('success')}
            </p>
          </div>
        ) : (
          <form className="fp-form" onSubmit={handleSubmit}>
            <div className="fp-fields">
              {/* Amount — three buttons, the one that opened the modal preselected. */}
              <div className="fp-field fp-field--idea" role="group" aria-label={t('amountLbl')}>
                <span className="fp-label">{t('amountLbl')}</span>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {AMOUNTS.map((value) => {
                    const active = betrag === value
                    return (
                      <button
                        key={value}
                        type="button"
                        aria-pressed={active}
                        onClick={() => { setBetrag(value); if (status === 'noAmount') setStatus('idle') }}
                        style={{
                          padding: '10px 18px',
                          border: '1px solid #0D0D0D',
                          background: active ? '#0D0D0D' : 'transparent',
                          color: active ? '#F2F2F2' : '#0D0D0D',
                          fontSize: 'var(--g-bs)',
                          fontWeight: 500,
                          lineHeight: 1,
                          cursor: 'pointer',
                        }}
                      >
                        {value} €
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="fp-row">
                <div className="fp-field">
                  <span className="fp-label">{t('nameLbl')}</span>
                  <div className="fp-input">
                    <input type="text" name="name" placeholder={t('namePlh')} autoComplete="name" required />
                  </div>
                </div>
                <div className="fp-field">
                  <span className="fp-label">{t('emailLbl')}</span>
                  <div className="fp-input">
                    <input type="email" name="email" placeholder={t('emailPlh')} autoComplete="email" required />
                  </div>
                </div>
              </div>

              <div className="fp-row">
                <div className="fp-field">
                  <span className="fp-label">{t('phoneLbl')}</span>
                  <div className="fp-input">
                    <input type="tel" name="phone" placeholder={t('phonePlh')} autoComplete="tel" />
                  </div>
                </div>
                <div className="fp-field">
                  <span className="fp-label">{t('forLbl')}</span>
                  <div className="fp-input">
                    <input type="text" name="recipient" placeholder={t('forPlh')} />
                  </div>
                </div>
              </div>

              <div className="fp-field fp-field--idea">
                <span className="fp-label">{t('noteLbl')}</span>
                <div className="fp-input">
                  <input type="text" name="note" placeholder={t('notePlh')} />
                </div>
              </div>
            </div>

            {status === 'noAmount' && (
              <p style={{ color: '#0D0D0D', fontSize: 'var(--g-bxs)', marginBottom: '0.5rem' }}>
                {t('amountMissing')}
              </p>
            )}
            {status === 'error' && (
              <p style={{ color: '#ff6b6b', fontSize: 'var(--g-bxs)', marginBottom: '0.5rem' }}>
                {t('error')}
              </p>
            )}
            <button type="submit" className="fp-submit" disabled={status === 'submitting'}>
              {status === 'submitting' ? t('submitting') : t('submit')}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
