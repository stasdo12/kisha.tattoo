'use client'

import type { CSSProperties, ReactNode } from 'react'
import { trackGutscheinOpen } from '@/lib/gtag'

export const OPEN_GUTSCHEIN_POPUP = 'openGutscheinPopup'

/**
 * Opens the voucher modal (GutscheinPopup) with an amount preselected, or
 * with the choice left open when `betrag` is omitted. The same event pattern
 * as CtaStrip → FormPopup, so a button anywhere on the page can open it.
 */
export function GutscheinButton({
  betrag,
  className,
  style,
  children,
}: {
  betrag?: '200' | '500' | '1000'
  className?: string
  style?: CSSProperties
  children: ReactNode
}) {
  return (
    <button
      type="button"
      className={className}
      style={style}
      aria-haspopup="dialog"
      onClick={() => {
        trackGutscheinOpen(betrag ?? null)
        window.dispatchEvent(new CustomEvent(OPEN_GUTSCHEIN_POPUP, { detail: { betrag: betrag ?? null } }))
      }}
    >
      {children}
    </button>
  )
}
