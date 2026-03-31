import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Botshelo Tlhabanyane — Frontend Developer',
  description: 'Frontend developer based in Johannesburg. Angular specialist. Open to freelance.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
