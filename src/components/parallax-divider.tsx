'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface ParallaxDividerProps {
  invert?: boolean
}

export default function ParallaxDivider({
  invert = false,
}: ParallaxDividerProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50])
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, -10])
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, 10])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

  const dotY1 = useTransform(scrollYProgress, [0, 1], [0, -30])
  const dotY2 = useTransform(scrollYProgress, [0, 1], [0, 30])
  const dotY3 = useTransform(scrollYProgress, [0, 1], [0, -30])
  const dotY4 = useTransform(scrollYProgress, [0, 1], [0, 30])
  const dotY5 = useTransform(scrollYProgress, [0, 1], [0, -30])

  const dotYTransforms = [dotY1, dotY2, dotY3, dotY4, dotY5]
  return (
    <div ref={ref} className="relative h-32 overflow-hidden">
      <div
        className={`absolute inset-0 ${invert ? 'bg-gradient-to-b from-zinc-900 to-black' : 'bg-gradient-to-b from-black to-zinc-900'}`}
      />

      <motion.div
        className="absolute left-1/4 h-1 w-64 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        style={{ y: y1, rotate: rotate1, opacity }}
      />
      <motion.div
        className="absolute right-1/4 h-1 w-64 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        style={{ y: y2, rotate: rotate2, opacity }}
      />

      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-white/20"
          style={{
            left: `${15 + i * 20}%`,
            top: `${30 + (i % 3) * 20}%`,
            y: dotYTransforms[i],
            opacity,
          }}
        />
      ))}
    </div>
  )
}
