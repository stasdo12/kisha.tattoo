'use client'

import { useState } from 'react'

type AccordionItem = { title: string; body: string }

export function MotiveAccordion({ items, defaultOpenIdx = -1 }: { items: AccordionItem[]; defaultOpenIdx?: number }) {
  const [openIdx, setOpenIdx] = useState<number>(defaultOpenIdx)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {items.map((item, i) => (
        <div
          key={i}
          style={{
            border: '1px solid #0D0D0D',
            padding: 'clamp(1.25rem, 2.08vw, 2.5rem)',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
            <span style={{ fontSize: 'var(--g-s)', lineHeight: 'var(--g-lh-s)', color: '#0D0D0D' }}>
              {item.title}
            </span>
            <button
              onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
              aria-expanded={openIdx === i}
              style={{
                width: 40, height: 40,
                borderRadius: '50%',
                background: '#0D0D0D',
                border: 'none',
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
                padding: 0,
              }}
            >
              <svg
                width="20" height="20" viewBox="0 0 20 20" fill="none"
                style={{
                  transform: openIdx === i ? 'rotate(45deg)' : 'none',
                  transition: 'transform 0.2s ease',
                }}
              >
                <line x1="10" y1="4" x2="10" y2="16" stroke="#F2F2F2" strokeWidth="2" strokeLinecap="round" />
                <line x1="4" y1="10" x2="16" y2="10" stroke="#F2F2F2" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          {openIdx === i && (
            <p style={{ fontSize: 'var(--g-bm)', lineHeight: 1, color: '#0D0D0D', maxWidth: 'clamp(18rem, 25vw, 30rem)' }}>
              {item.body}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}