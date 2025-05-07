import { Metadata } from 'next'

import About from '@/components/about'
import Contact from '@/components/contact'
import Hero from '@/components/hero'
import ParallaxDivider from '@/components/parallax-divider'
import ParallaxSection from '@/components/parallax-section'

export const metadata: Metadata = {
  title: 'Home',
}

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <ParallaxSection overlayBottom={false} overlayTop={false}>
        <Hero />
      </ParallaxSection>

      <ParallaxDivider />

      <ParallaxSection bgColor="bg-zinc-900">
        <About />
      </ParallaxSection>

      <ParallaxDivider invert={true} />

      <ParallaxSection bgColor="bg-black" overlayBottom={false}>
        <Contact />
      </ParallaxSection>
    </main>
  )
}
