'use client'

import dynamic from 'next/dynamic'

const FormPopup = dynamic(
  () => import('@/components/graphic/FormPopup').then((m) => m.FormPopup),
  { ssr: false },
)

export function FormPopupLoader() {
  return <FormPopup />
}
