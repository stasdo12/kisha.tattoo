'use client'

import { useState, type FormEvent } from 'react'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export function GraphicContactForm() {
  const [status, setStatus] = useState<FormState>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    // TODO: wire up to real form handler
    await new Promise((res) => setTimeout(res, 1200))
    setStatus('success')
  }

  if (status === 'success') {
    return (
      <div
        role="status"
        aria-live="polite"
        style={{
          padding: 'var(--space-md)',
          border: '1px solid var(--color-border)',
          borderRadius: '4px',
        }}
      >
        <p style={{ fontFamily: 'var(--font-heading)', marginBottom: '0.25rem' }}>Received.</p>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
          We will be in touch within 48 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      {[
        { id: 'g-name', name: 'name', label: 'Name', type: 'text', placeholder: 'Your name', required: true },
        { id: 'g-email', name: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com', required: true },
      ].map((field) => (
        <div key={field.id}>
          <label htmlFor={field.id} style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            {field.label}{field.required && <span aria-label="required"> *</span>}
          </label>
          <input
            id={field.id}
            name={field.name}
            type={field.type}
            required={field.required}
            placeholder={field.placeholder}
            className="input"
          />
        </div>
      ))}

      <div>
        <label htmlFor="g-brief" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          Project Brief <span aria-label="required">*</span>
        </label>
        <textarea
          id="g-brief"
          name="brief"
          required
          rows={6}
          placeholder="Describe your idea — style, placement, size, references..."
          className="input"
          style={{ resize: 'vertical', minHeight: '140px' }}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn btn-primary"
        style={{ alignSelf: 'flex-start' }}
      >
        {status === 'submitting' ? 'Sending…' : 'Submit Brief'}
      </button>
    </form>
  )
}
