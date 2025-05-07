'use client'

import { motion, useScroll, useTransform } from 'framer-motion'

export default function ScrollIndicator() {
  const { scrollYProgress } = useScroll()
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-50 h-1 origin-left bg-white"
      style={{ scaleX, opacity: 0.7 }}
    />
  )
}
