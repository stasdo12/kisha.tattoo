/**
 * GLogoBar — graphic section top bar
 *
 * layout="left"   → ● Kisha [タトゥ] Tattoo all left (home / about / works / contact)
 * layout="spread" → ● Kisha  |  [タトゥ]  |  Tattoo space-between (blog / article)
 *
 * theme="light" → dark text on light (#F2F2F2) bg, 2px solid border
 * theme="dark"  → white text on transparent bg, 1px rgba border
 */

interface GLogoBarProps {
  layout?: 'left' | 'spread'
  theme?: 'light' | 'dark'
}

export function GLogoBar({ layout = 'left', theme = 'light' }: GLogoBarProps) {
  const isLight = theme === 'light'
  const color   = isLight ? '#0D0D0D' : '#F2F2F2'
  const bg      = isLight ? '#F2F2F2' : 'transparent'
  const border  = isLight ? '2px solid #0D0D0D' : '1px solid rgba(242,242,242,0.2)'

  if (layout === 'spread') {
    return (
      <div
        className="g-blog-logobar"
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          padding: '6px var(--g-pad) 12px',
          background: bg,
          borderBottom: border,
          zIndex: 10,
        }}
      >
        <span style={{ fontSize: 'var(--g-bs)', color }}>● Kisha</span>
        <span style={{ fontSize: 'var(--g-tag)', color }}>[ タトゥ ]</span>
        <span style={{ fontSize: 'var(--g-tag)', color }}>Tattoo</span>
      </div>
    )
  }

  return (
    <div
      className="g-hero-logobar"
      style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        display: 'flex',
        alignItems: 'flex-end',
        padding: '6px var(--g-pad) 12px',
        background: bg,
        borderBottom: border,
        zIndex: 10,
      }}
    >
      <div className="g-hero-logo-text">
        <span style={{ fontSize: 'var(--g-bs)', color }}>● Kisha</span>
        <span style={{ fontSize: 'var(--g-tag)', color }}>[ タトゥ ]</span>
        <span style={{ fontSize: 'var(--g-tag)', color }}>Tattoo</span>
      </div>
      <div className="g-hero-logo-strips" aria-hidden="true" />
    </div>
  )
}
