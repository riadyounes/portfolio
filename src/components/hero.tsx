'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Link from 'next/link'

import { useSmoothScroll } from '@/hooks/use-smooth-scroll'

import ParticlesBackground from './particles-background'
import TypingEffect from './typing-effect'

export default function Hero() {
  const { handleLinkClick } = useSmoothScroll()

  const typingTexts = ['Frontend', 'Web', 'FullStack']

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-90" />

        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(50, 50, 50, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(50, 50, 50, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '40px 40px'],
          }}
          transition={{
            duration: 20,
            ease: 'linear',
            repeat: Number.POSITIVE_INFINITY,
          }}
        />

        <div className="absolute inset-0">
          <ParticlesBackground />
        </div>
      </div>

      <div className="container z-10 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 text-gray-400"
        >
          Olá, eu sou
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 text-5xl font-bold md:text-7xl"
        >
          <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
            Riad Younes
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8 text-xl md:text-2xl"
        >
          <TypingEffect
            texts={typingTexts}
            typingSpeed={80}
            deletingSpeed={40}
            delayBetweenTexts={2000}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            href="#about"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black transition-colors hover:bg-gray-200"
            onClick={handleLinkClick}
          >
            Conheça meu trabalho
            <ArrowDown size={16} />
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        >
          <Link
            href="#about"
            aria-label="Rolar para baixo"
            onClick={handleLinkClick}
          >
            <ArrowDown className="text-white/70 transition-colors hover:text-white" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
