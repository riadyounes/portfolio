import {
  Inter,
  JetBrains_Mono as JetBrainsMono,
  Roboto_Mono as RobotoMono,
} from 'next/font/google'

export const jetBrainsMono = JetBrainsMono({
  weight: ['700'],
  subsets: ['latin'],
  display: 'swap',
})

export const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const robotoMono = RobotoMono({
  weight: ['700'],
  subsets: ['latin'],
  display: 'swap',
})
