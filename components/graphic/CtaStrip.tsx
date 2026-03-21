'use client'

interface Props {
  label?: string
  style?: React.CSSProperties
}

/**
 * CTA strip button — opens the FormPopup via custom event.
 * Used for all "book / consult / discuss" CTAs on graphic pages.
 */
export function CtaStrip({ label = 'Start your consultation', style }: Props) {
  return (
    <button
      className="g-cta-strip"
      onClick={() => window.dispatchEvent(new CustomEvent('openFormPopup'))}
      type="button"
      style={style}
    >
      <span>{label}</span>
    </button>
  )
}
