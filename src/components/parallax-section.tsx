'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { type ReactNode, useRef } from 'react'

interface ParallaxSectionProps {
  children: ReactNode
  id?: string
  className?: string
  overlayTop?: boolean
  overlayBottom?: boolean
  bgColor?: string
}

export default function ParallaxSection({
  children,
  id,
  className = '',
  overlayTop = true,
  overlayBottom = true,
  bgColor = 'bg-black',
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const yParallax1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const yParallax2 = useTransform(scrollYProgress, [0, 1], [0, 100])
  const opacityParallax = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`relative ${bgColor} ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute left-[10%] h-64 w-64 rounded-full bg-white/5 blur-3xl"
        style={{ y: yParallax1, opacity: opacityParallax }}
      />
      <motion.div
        className="pointer-events-none absolute right-[15%] top-1/4 h-48 w-48 rounded-full bg-white/5 blur-3xl"
        style={{ y: yParallax2, opacity: opacityParallax }}
      />

      <motion.div
        className="pointer-events-none absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
        style={{
          y: useTransform(scrollYProgress, [0, 1], [100, -100]),
          opacity: opacityParallax,
        }}
      />
      <motion.div
        className="pointer-events-none absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
        style={{
          y: useTransform(scrollYProgress, [0, 1], [300, 100]),
          opacity: opacityParallax,
        }}
      />

      {overlayTop && (
        <div className="pointer-events-none absolute left-0 right-0 top-0 z-10 h-24 bg-gradient-to-b from-black to-transparent" />
      )}

      <div className="relative z-20">{children}</div>

      {overlayBottom && (
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-24 bg-gradient-to-t from-black to-transparent" />
      )}
    </section>
  )
}
