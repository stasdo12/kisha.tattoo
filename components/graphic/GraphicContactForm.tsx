'use client'

import { useRef, useState, type FormEvent } from 'react'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export function GraphicContactForm() {
  const [status, setStatus] = useState<FormState>('idle')
  const [fileName, setFileName] = useState<string | null>(null)
  const fileRef = useRef<HTMLInputElement>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')

    const raw = new FormData(e.currentTarget)
    const fd = new FormData()
    fd.append('name',  raw.get('name')  as string)
    fd.append('email', raw.get('email') as string)
    fd.append('brief', raw.get('brief') as string)
    const file = raw.get('file') as File
    if (file && file.size > 0) fd.append('file', file)

    try {
      const res = await fetch('/api/contact', { method: 'POST', body: fd })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div role="status" aria-live="polite" style={{ padding: 'var(--space-md)', border: '1px solid var(--color-border)', borderRadius: '4px' }}>
        <p style={{ fontFamily: 'var(--font-heading)', marginBottom: '0.25rem' }}>Received.</p>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>We will be in touch within 48 hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      {[
        { id: 'g-name',  name: 'name',  label: 'Name',  type: 'text',  placeholder: 'Your name',        required: true },
        { id: 'g-email', name: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com',   required: true },
      ].map((field) => (
        <div key={field.id}>
          <label htmlFor={field.id} style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            {field.label}{field.required && <span aria-label="required"> *</span>}
          </label>
          <input id={field.id} name={field.name} type={field.type} required={field.required} placeholder={field.placeholder} className="input" />
        </div>
      ))}

      <div>
        <label htmlFor="g-brief" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          Project Brief <span aria-label="required">*</span>
        </label>
        <textarea id="g-brief" name="brief" required rows={6} placeholder="Describe your idea — style, placement, size, references..." className="input" style={{ resize: 'vertical', minHeight: '140px' }} />
      </div>

      {/* File attachment */}
      <div>
        <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          Reference / Photo <span style={{ fontWeight: 400, textTransform: 'none' }}>(optional)</span>
        </label>
        <input
          ref={fileRef}
          id="g-file"
          name="file"
          type="file"
          accept="image/*,.pdf"
          style={{ display: 'none' }}
          onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
        />
        <button
          type="button"
          className="btn"
          onClick={() => fileRef.current?.click()}
          style={{ fontSize: '0.875rem' }}
        >
          {fileName ? `📎 ${fileName}` : 'Attach file'}
        </button>
        {fileName && (
          <button
            type="button"
            onClick={() => { setFileName(null); if (fileRef.current) fileRef.current.value = '' }}
            style={{ marginLeft: '0.75rem', fontSize: '0.8rem', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-muted)' }}
          >
            Remove
          </button>
        )}
      </div>

      {status === 'error' && (
        <p style={{ color: 'red', fontSize: '0.875rem' }}>Something went wrong. Please try again.</p>
      )}

      <button type="submit" disabled={status === 'submitting'} className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
        {status === 'submitting' ? 'Sending…' : 'Submit Brief'}
      </button>
    </form>
  )
}
