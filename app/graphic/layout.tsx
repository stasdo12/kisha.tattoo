/**
 * Graphic section layout — applies the light "graphic" theme,
 * loads DM Sans (PP Neue Montreal substitute), and imports graphic design tokens.
 *
 * No shared navbar/footer here — the homepage embeds its own navigation
 * within the hero section per the Figma spec.
 */
import { DM_Sans } from 'next/font/google'
import '@/styles/graphic.css'
import '@/styles/form-popup.css'
import { FormPopupLoader } from '@/components/graphic/FormPopupLoader'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-neue',
  display: 'swap',
  weight: ['500'],
})

export default function GraphicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div data-theme="graphic" className={dmSans.variable} style={{ background: '#F2F2F2', minHeight: '100dvh' }}>
      {children}
      <FormPopupLoader />
    </div>
  )
}
