'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

export function FormPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const overlayRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const triggerRef = useRef<Element | null>(null)

  const close = useCallback(() => {
    setIsOpen(false)
    setStatus('idle')
    if (triggerRef.current instanceof HTMLElement) triggerRef.current.focus()
  }, [])

  useEffect(() => {
    const open = () => { triggerRef.current = document.activeElement; setIsOpen(true) }
    window.addEventListener('openFormPopup', open)
    return () => window.removeEventListener('openFormPopup', open)
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
    setStatus('submitting')
    const fd = new FormData(e.currentTarget)
    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name:  fd.get('name'),
          phone: fd.get('phone'),
          idea:  fd.get('idea'),
        }),
      })
      setStatus(res.ok ? 'success' : 'error')
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
      <div className="fp-popup" role="dialog" aria-modal="true" aria-labelledby="fp-heading">
        <div className="fp-top">
          <div className="fp-content">
            <div className="fp-heading-block">
              <span className="fp-tag">[ Hey, it&apos;s Kisha Tattoo ]</span>
              <h2 id="fp-heading" className="fp-heading">
                Drop me a message below or tell me about your tattoo idea
              </h2>
            </div>
            <button ref={closeButtonRef} className="fp-close" onClick={close} aria-label="Close">✕</button>
          </div>
          <span className="fp-kanji" aria-hidden="true">想</span>
        </div>

        {status === 'success' ? (
          <div className="fp-form" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '120px' }}>
            <p style={{ color: '#F2F2F2', fontSize: 'var(--g-bm)', textAlign: 'center', lineHeight: 'var(--g-lh-bm)', maxWidth: '28rem' }}>
              Thank you — every idea is a unique phenomenon. I will review yours shortly and get back to you.
            </p>
          </div>
        ) : (
          <form className="fp-form" onSubmit={handleSubmit}>
            <div className="fp-fields">
              <div className="fp-row">
                <div className="fp-field">
                  <span className="fp-label">My name is</span>
                  <div className="fp-input">
                    <input type="text" name="name" placeholder="[ Name ]" autoComplete="name" required />
                  </div>
                </div>
                <div className="fp-field">
                  <span className="fp-label">My phone is</span>
                  <div className="fp-input">
                    <input type="tel" name="phone" placeholder="[ Phone ]" autoComplete="tel" required />
                  </div>
                </div>
              </div>
              <div className="fp-field fp-field--idea">
                <span className="fp-label">My tattoo idea is</span>
                <div className="fp-input">
                  <input type="text" name="idea" placeholder="[ Tattoo idea ]" />
                </div>
              </div>
            </div>
            {status === 'error' && (
              <p style={{ color: '#ff6b6b', fontSize: 'var(--g-bxs)', marginBottom: '0.5rem' }}>
                Ошибка отправки. Попробуйте ещё раз.
              </p>
            )}
            <button type="submit" className="fp-submit" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Sending…' : 'Send request'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
