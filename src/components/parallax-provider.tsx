'use client'

import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

interface ParallaxContextType {
  scrollY: number
  windowHeight: number
}

const ParallaxContext = createContext<ParallaxContextType>({
  scrollY: 0,
  windowHeight: 0,
})

export const useParallax = () => useContext(ParallaxContext)

export function ParallaxProvider({ children }: { children: ReactNode }) {
  const [scrollY, setScrollY] = useState(0)
  const [windowHeight, setWindowHeight] = useState(0)

  useEffect(() => {
    setWindowHeight(window.innerHeight)

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    const handleResize = () => {
      setWindowHeight(window.innerHeight)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize)

    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <ParallaxContext.Provider value={{ scrollY, windowHeight }}>
      {children}
    </ParallaxContext.Provider>
  )
}
