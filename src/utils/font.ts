import { Inter, JetBrains_Mono as JetBrainsMono } from 'next/font/google'

export const jetBrainsMono = JetBrainsMono({
  weight: ['700'],
  subsets: ['latin'],
  display: 'swap',
})

export const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
