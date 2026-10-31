// @vitest-environment happy-dom
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FormLegalNote } from '@/components/graphic/FormLegalNote'
import de from '@/messages/de.json'
import en from '@/messages/en.json'
import uk from '@/messages/uk.json'

describe('FormLegalNote', () => {
  it('links the AGB and the privacy notice', () => {
    render(<FormLegalNote />)
    expect(screen.getByRole('link', { name: 'agb' })).toHaveAttribute('href', '/agb')
    expect(screen.getByRole('link', { name: 'privacy' })).toHaveAttribute('href', '/datenschutz')
  })

  it('opens both in a new tab so the typed form survives', () => {
    render(<FormLegalNote />)
    for (const link of screen.getAllByRole('link')) {
      expect(link).toHaveAttribute('target', '_blank')
    }
  })

  it.each([['de', de], ['en', en], ['uk', uk]])('%s marks both links in the text', (_, messages) => {
    expect(messages.formLegal.note).toMatch(/<agb>.+<\/agb>/)
    expect(messages.formLegal.note).toMatch(/<privacy>.+<\/privacy>/)
  })
})
