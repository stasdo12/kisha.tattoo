'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

/**
 * Form Popup — triggered via custom event 'openFormPopup'.
 * Dispatch from any component: window.dispatchEvent(new CustomEvent('openFormPopup'))
 * Included once in app/graphic/layout.tsx.
 */
export function FormPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const overlayRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const triggerRef = useRef<Element | null>(null)

  const close = useCallback(() => {
    setIsOpen(false)
    // Return focus to the element that opened the dialog
    if (triggerRef.current instanceof HTMLElement) {
      triggerRef.current.focus()
    }
  }, [])

  /* Listen for open trigger */
  useEffect(() => {
    const open = () => {
      triggerRef.current = document.activeElement
      setIsOpen(true)
    }
    window.addEventListener('openFormPopup', open)
    return () => window.removeEventListener('openFormPopup', open)
  }, [])

  /* Move focus into dialog when it opens */
  useEffect(() => {
    if (isOpen) closeButtonRef.current?.focus()
  }, [isOpen])

  /* Lock body scroll while open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  /* Escape key */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [close])

  if (!isOpen) return null

  return (
    <div
      className="fp-overlay"
      ref={overlayRef}
      onClick={(e) => { if (e.target === overlayRef.current) close() }}
    >
      <div
        className="fp-popup"
        role="dialog"
        aria-modal="true"
        aria-labelledby="fp-heading"
      >
        {/* ── TOP SECTION ── */}
        <div className="fp-top">
          <div className="fp-content">
            <div className="fp-heading-block">
              <span className="fp-tag">[ Hey, it&apos;s Kisha Tattoo ]</span>
              <h2 id="fp-heading" className="fp-heading">
                Drop me a message below or tell me about your tattoo idea
              </h2>
            </div>
            <button
              ref={closeButtonRef}
              className="fp-close"
              onClick={close}
              aria-label="Close"
            >
              ✕
            </button>
          </div>
          <span className="fp-kanji" aria-hidden="true">想</span>
        </div>

        {/* ── FORM ── */}
        <form
          className="fp-form"
          onSubmit={(e) => {
            e.preventDefault()
            /* TODO: wire up submission */
            close()
          }}
        >
          <div className="fp-fields">
            {/* Name + Email row */}
            <div className="fp-row">
              <div className="fp-field">
                <span className="fp-label">My name is</span>
                <div className="fp-input">
                  <input
                    type="text"
                    name="name"
                    placeholder="[ Name ]"
                    autoComplete="name"
                    required
                  />
                </div>
              </div>

              <div className="fp-field">
                <span className="fp-label">My email is</span>
                <div className="fp-input">
                  <input
                    type="email"
                    name="email"
                    placeholder="[ Email ]"
                    autoComplete="email"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Tattoo idea — full width */}
            <div className="fp-field fp-field--idea">
              <span className="fp-label">My tattoo idea is</span>
              <div className="fp-input">
                <input
                  type="text"
                  name="idea"
                  placeholder="[ Tattoo idea ]"
                />
              </div>
            </div>
          </div>

          <button type="submit" className="fp-submit">
            Send request
          </button>
        </form>
      </div>
    </div>
  )
}
