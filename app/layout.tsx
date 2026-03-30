// Root layout — intentionally minimal.
// All html/body/fonts/providers live in app/[locale]/layout.tsx
// so that lang attribute is set dynamically per locale.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children as React.ReactElement
}
