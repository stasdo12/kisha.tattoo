'use client'

import { motion, type Variants, type Easing } from 'framer-motion'
import { YOKAI_CREATURES } from '@/content/japanese'

const EASE: Easing = [0.33, 1, 0.68, 1]

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 48 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: EASE,
      delay: i * 0.08,
    },
  }),
}

export function YokaiSection() {
  return (
    <div className="container" style={{ paddingBlock: 'var(--space-2xl)' }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
        style={{ marginBottom: 'var(--space-xl)' }}
      >
        <span className="section-label">Japanese Mythology</span>
        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.75rem, 4vw, 3rem)',
            maxWidth: '25ch',
          }}
        >
          Popular Yokai &amp; Mythical Creatures
        </h2>
        <p style={{ color: 'var(--color-text-muted)', marginTop: '0.75rem', maxWidth: '55ch', lineHeight: 1.7 }}>
          Each motif carries centuries of symbolism. Choosing the right creature
          is part of the design process.
        </p>
      </motion.div>

      {/* Grid */}
      <ul
        role="list"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.5rem',
          listStyle: 'none',
        }}
      >
        {YOKAI_CREATURES.map((creature, i) => (
          <motion.li
            key={creature.id}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            whileHover={{ y: -8, transition: { duration: 0.25, ease: 'easeOut' } }}
            style={{
              position: 'relative',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '4px',
              padding: 'var(--space-md)',
              overflow: 'hidden',
              cursor: 'default',
            }}
          >
            {/* Gradient top line */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: creature.gradient,
              }}
            />

            {/* Background kanji — decorative */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                right: '-8px',
                bottom: '-16px',
                fontFamily: 'var(--font-japanese)',
                fontSize: '7rem',
                opacity: 0.05,
                lineHeight: 1,
                pointerEvents: 'none',
                userSelect: 'none',
              }}
            >
              {creature.kanji}
            </div>

            <span
              style={{ fontSize: '2.5rem', display: 'block', marginBottom: '1rem' }}
              role="img"
              aria-label={creature.name}
            >
              {creature.emoji}
            </span>

            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.2rem',
                marginBottom: '0.25rem',
              }}
            >
              {creature.name}
            </h3>

            <span
              style={{
                display: 'block',
                fontFamily: 'var(--font-japanese)',
                fontSize: '0.85rem',
                color: 'var(--color-primary)',
                marginBottom: '0.25rem',
              }}
            >
              {creature.kanji}
            </span>

            <span
              style={{
                display: 'block',
                fontSize: '0.75rem',
                color: 'var(--color-text-muted)',
                fontStyle: 'italic',
                marginBottom: '0.75rem',
              }}
            >
              {creature.subtitle}
            </span>

            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', lineHeight: 1.6 }}>
              {creature.description}
            </p>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}
