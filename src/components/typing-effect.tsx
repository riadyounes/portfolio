'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface TypingEffectProps {
  texts: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayBetweenTexts?: number
}

export default function TypingEffect({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenTexts = 1500,
}: TypingEffectProps) {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    if (!texts.length) return

    let timeout: NodeJS.Timeout

    if (isTyping) {
      if (currentText.length < texts[currentIndex].length) {
        timeout = setTimeout(() => {
          setCurrentText(texts[currentIndex].slice(0, currentText.length + 1))
        }, typingSpeed)
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false)
        }, delayBetweenTexts)
      }
    } else {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, currentText.length - 1))
        }, deletingSpeed)
      } else {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
        setIsTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [
    currentText,
    currentIndex,
    isTyping,
    texts,
    typingSpeed,
    deletingSpeed,
    delayBetweenTexts,
  ])

  return (
    <div className="inline-flex items-center">
      <span className="text-gray-300">Desenvolvedor</span>
      <div className="relative min-w-[140px]">
        <span className="font-semibold text-white">{currentText}</span>
        <motion.span
          className="inline-block h-[1.2em] w-[2px] bg-white align-middle"
          animate={{ opacity: [1, 0, 1] }}
          transition={{
            duration: 0.8,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'steps(3)',
          }}
        />
      </div>
    </div>
  )
}
