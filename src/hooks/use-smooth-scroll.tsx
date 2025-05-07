'use client'

import type React from 'react'
import { useCallback, useEffect } from 'react'

export function useSmoothScroll() {
  const scrollToElement = useCallback((elementId: string) => {
    const element = document.getElementById(elementId)
    if (!element) return

    const navbar = document.querySelector('header')
    const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 0

    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.scrollY - navbarHeight - 20

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })
  }, [])

  const handleLinkClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      const href = e.currentTarget.getAttribute('href')

      if (href && href.startsWith('#')) {
        e.preventDefault()
        const targetId = href.substring(1)
        scrollToElement(targetId)
      }
    },
    [scrollToElement],
  )

  useEffect(() => {
    if (window.location.hash) {
      const targetId = window.location.hash.substring(1)

      setTimeout(() => {
        scrollToElement(targetId)
      }, 100)
    }
  }, [scrollToElement])

  return { handleLinkClick, scrollToElement }
}
