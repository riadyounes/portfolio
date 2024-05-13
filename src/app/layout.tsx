import './globals.css'

import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'

import { inter } from '@/utils/font'

export const metadata: Metadata = {
  title: {
    template: '%s | Riad Younes',
    default: 'Riad Younes',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" className={inter.variable} suppressHydrationWarning>
      <body className="relative min-h-screen bg-gradient-to-tl from-zinc-900 via-zinc-800 to-zinc-900 antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
