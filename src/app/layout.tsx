import './globals.css'

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
      <body className="antialiased">{children}</body>
    </html>
  )
}
