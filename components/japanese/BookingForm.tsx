'use client'

import { useState, type FormEvent } from 'react'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export function BookingForm() {
  const [status, setStatus] = useState<FormState>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')

    // TODO: Replace with real form submission (Resend, Formspree, custom API route, etc.)
    await new Promise((res) => setTimeout(res, 1200))
    setStatus('success')
  }

  if (status === 'success') {
    return (
      <div
        role="status"
        aria-live="polite"
        style={{
          padding: 'var(--space-lg)',
          background: 'rgba(26, 107, 60, 0.1)',
          border: '1px solid rgba(26, 107, 60, 0.3)',
          borderRadius: '4px',
          textAlign: 'center',
        }}
      >
        <h3 style={{ fontFamily: 'var(--font-heading)', marginBottom: '0.5rem' }}>
          Message received.
        </h3>
        <p style={{ color: 'var(--color-text-muted)' }}>
          We will respond within 48 hours to discuss your project.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
    >
      <div className="form-row-2">
        <div>
          <label
            htmlFor="booking-name"
            style={{
              display: 'block',
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '0.4rem',
              color: 'var(--color-text-muted)',
            }}
          >
            Full Name <span aria-label="required">*</span>
          </label>
          <input
            id="booking-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className="input"
          />
        </div>
        <div>
          <label
            htmlFor="booking-email"
            style={{
              display: 'block',
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '0.4rem',
              color: 'var(--color-text-muted)',
            }}
          >
            Email <span aria-label="required">*</span>
          </label>
          <input
            id="booking-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="your@email.com"
            className="input"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="booking-style"
          style={{
            display: 'block',
            fontSize: '0.8rem',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '0.4rem',
            color: 'var(--color-text-muted)',
          }}
        >
          Style
        </label>
        <select id="booking-style" name="style" className="input">
          <option value="">Select a style</option>
          <option value="japanese-tebori">Japanese — Tebori</option>
          <option value="japanese-machine">Japanese — Machine</option>
          <option value="graphic">Graphic / Contemporary</option>
          <option value="unsure">Not sure yet</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="booking-concept"
          style={{
            display: 'block',
            fontSize: '0.8rem',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '0.4rem',
            color: 'var(--color-text-muted)',
          }}
        >
          Your Concept <span aria-label="required">*</span>
        </label>
        <textarea
          id="booking-concept"
          name="concept"
          required
          rows={5}
          placeholder="Describe your idea — motif, placement, size, story behind it..."
          className="input"
          style={{ resize: 'vertical', minHeight: '120px' }}
        />
      </div>

      {status === 'error' && (
        <p role="alert" style={{ color: '#e53e3e', fontSize: '0.875rem' }}>
          Something went wrong. Please try again or email us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn btn-primary"
        style={{ alignSelf: 'flex-start' }}
        aria-disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Sending…' : 'Send Inquiry'}
      </button>
    </form>
  )
}
