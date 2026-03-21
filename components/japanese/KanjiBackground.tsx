'use client'

import { useMemo } from 'react'

const KANJI_SET = [
  '龍', '虎', '鬼', '侍', '武', '道', '心', '力', '愛', '夢',
  '忍', '義', '魂', '誠', '命', '縁', '気', '刻', '永', '美',
]

const COUNT = 40 // Reduced from 100 — improves CLS and paint performance

/**
 * Decorative animated kanji background.
 * - aria-hidden: purely decorative, no semantic value
 * - Reduced count from 100→40 for performance
 * - Fixed positioning keeps it out of the layout flow (no CLS)
 * - Will respect prefers-reduced-motion via CSS
 */
export function KanjiBackground() {
  const chars = useMemo(
    () =>
      Array.from({ length: COUNT }, (_, i) => ({
        char: KANJI_SET[i % KANJI_SET.length],
        left: `${(i * 2.5) % 100}%`,
        top: `${(i * 7.3) % 100}%`,
        duration: `${8 + (i % 10)}s`,
        delay: `-${(i * 0.5) % 8}s`,
        opacity: 0.015 + (i % 5) * 0.005,
        fontSize: `${1 + (i % 3) * 0.5}rem`,
      })),
    []
  )

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      <style>{`
        @keyframes kanji-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .kanji-char { animation: none !important; }
        }
      `}</style>

      {chars.map((item, i) => (
        <span
          key={i}
          className="kanji-char"
          style={{
            position: 'absolute',
            left: item.left,
            top: item.top,
            fontFamily: 'var(--font-japanese)',
            fontSize: item.fontSize,
            color: 'var(--color-text)',
            opacity: item.opacity,
            animation: `kanji-float ${item.duration} ${item.delay} ease-in-out infinite`,
            userSelect: 'none',
            willChange: 'transform',
          }}
        >
          {item.char}
        </span>
      ))}
    </div>
  )
}
