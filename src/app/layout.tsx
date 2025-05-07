import './globals.css'

import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'

import Footer from '@/components/footer'
import Header from '@/components/header'
import { ParallaxProvider } from '@/components/parallax-provider'
import ScrollIndicator from '@/components/scroll-indicator'
import { ThemeProvider } from '@/components/theme-provider'
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
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <ParallaxProvider>
            <ScrollIndicator />
            <div className="relative flex min-h-screen flex-col">
              <Header />
              <div className="flex-1">{children}</div>
              <Footer />
            </div>
          </ParallaxProvider>
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
