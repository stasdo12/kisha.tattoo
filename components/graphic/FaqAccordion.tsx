import Link from 'next/link'

/**
 * FAQ accordion built on native <details>/<summary>.
 *
 * Why not reuse MotiveAccordion: that one toggles `display: none` in React state,
 * which keeps the answer out of the accessibility tree and — more importantly —
 * out of the text extractors ChatGPT and Perplexity work from. FAQPage schema
 * covers Google and Bing, but those two read rendered text, so a collapsed
 * answer reads to them as content to discard.
 *
 * <details> collapses visually while leaving the answer in the DOM as real,
 * non-hidden content, and it needs no JavaScript at all.
 */
/** Same [text](/path) syntax the blog body uses, so answers can link to articles. */
function renderAnswer(text: string): React.ReactNode {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
  const parts: React.ReactNode[] = []
  let last = 0
  let m: RegExpExecArray | null
  while ((m = linkRegex.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index))
    parts.push(
      <Link key={m.index} href={m[2]} style={{ color: '#0D0D0D', textDecoration: 'underline' }}>
        {m[1]}
      </Link>
    )
    last = m.index + m[0].length
  }
  if (last < text.length) parts.push(text.slice(last))
  return parts.length > 1 ? parts : text
}

export function FaqAccordion({ items }: { items: Array<{ q: string; a: string }> }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {items.map((item, i) => (
        <details
          key={i}
          className="g-faq-item"
          style={{
            border: '1px solid #0D0D0D',
            padding: 'clamp(1.25rem, 2.08vw, 2.5rem)',
          }}
        >
          <summary
            className="g-faq-summary"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              cursor: 'pointer',
              listStyle: 'none',
            }}
          >
            <h3
              id={`faq-${i + 1}`}
              style={{
                fontSize: 'var(--g-s)',
                lineHeight: 'var(--g-lh-s)',
                color: '#0D0D0D',
                fontWeight: 'inherit',
                margin: 0,
              }}
            >
              {item.q}
            </h3>
            <span
              aria-hidden="true"
              className="g-faq-icon"
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                background: '#0D0D0D',
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <line x1="10" y1="4" x2="10" y2="16" stroke="#F2F2F2" strokeWidth="2" strokeLinecap="round" />
                <line x1="4" y1="10" x2="16" y2="10" stroke="#F2F2F2" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
          </summary>

          <p
            style={{
              fontSize: 'var(--g-bm)',
              lineHeight: 'var(--g-lh-bm)',
              color: '#0D0D0D',
              maxWidth: 'clamp(18rem, 48vw, 57rem)',
              marginTop: '20px',
              marginBottom: 0,
            }}
          >
            {renderAnswer(item.a)}
          </p>
        </details>
      ))}
    </div>
  )
}
