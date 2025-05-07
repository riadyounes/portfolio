'use client'

import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import Link from 'next/link'

import { useSmoothScroll } from '@/hooks/use-smooth-scroll'

export default function Footer() {
  const { handleLinkClick } = useSmoothScroll()

  return (
    <footer className="border-t border-zinc-800 bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-0"
          >
            <Link
              href="#hero"
              className="text-2xl font-bold"
              onClick={handleLinkClick}
            >
              Riad Younes
            </Link>
            <p className="mt-2 text-gray-400">Desenvolvedor FullStack</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center md:items-end"
          >
            <Link
              href="#hero"
              className="mb-4 rounded-full bg-zinc-800 p-3 transition-colors hover:bg-zinc-700"
              aria-label="Voltar ao topo"
              onClick={handleLinkClick}
            >
              <ArrowUp size={20} />
            </Link>
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Riad Younes. Todos os direitos
              reservados.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
