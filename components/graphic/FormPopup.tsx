'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { useTranslations } from 'next-intl'
import { trackFormSubmit } from '@/lib/gtag'
import { FormLegalNote } from './FormLegalNote'
import s from './FormPopup.module.css'

export function FormPopup() {
  const t = useTranslations('formPopup')
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
      if (res.ok) {
        trackFormSubmit('contact')
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
      className={s.overlay}
      ref={overlayRef}
      onClick={(e) => { if (e.target === overlayRef.current) close() }}
    >
      <div className={s.popup} role="dialog" aria-modal="true" aria-labelledby="fp-heading">
        <div className={s.top}>
          <div className={s.content}>
            <div className={s.headingBlock}>
              <span className={s.tag}>{t('tag')}</span>
              <h2 id="fp-heading" className={s.heading}>
                {t('heading')}
              </h2>
            </div>
            <button ref={closeButtonRef} className={s.close} onClick={close} aria-label={t('close')}>✕</button>
          </div>
          <span className={s.kanji} aria-hidden="true">想</span>
        </div>

        {status === 'success' ? (
          <div className={s.form} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '120px' }}>
            <p style={{ color: '#0D0D0D', fontSize: 'var(--g-bm)', textAlign: 'center', lineHeight: 'var(--g-lh-bm)', maxWidth: '28rem' }}>
              {t('success')}
            </p>
          </div>
        ) : (
          <form className={s.form} onSubmit={handleSubmit}>
            <div className={s.fields}>
              <div className={s.row}>
                <div className={s.field}>
                  <span className={s.label}>{t('nameLbl')}</span>
                  <div className={s.input}>
                    <input type="text" name="name" placeholder={t('namePlh')} autoComplete="name" required />
                  </div>
                </div>
                <div className={s.field}>
                  <span className={s.label}>{t('phoneLbl')}</span>
                  <div className={s.input}>
                    <input type="tel" name="phone" placeholder={t('phonePlh')} autoComplete="tel" required />
                  </div>
                </div>
              </div>
              <div className={`${s.field} ${s.fieldIdea}`}>
                <span className={s.label}>{t('ideaLbl')}</span>
                <div className={s.input}>
                  <input type="text" name="idea" placeholder={t('ideaPlh')} />
                </div>
              </div>
            </div>
            {status === 'error' && (
              <p style={{ color: '#ff6b6b', fontSize: 'var(--g-bxs)', marginBottom: '0.5rem' }}>
                {t('error')}
              </p>
            )}
            <button type="submit" className={s.submit} disabled={status === 'submitting'}>
              {status === 'submitting' ? t('submitting') : t('submit')}
            </button>
            <FormLegalNote />
          </form>
        )}
      </div>
    </div>
  )
}
