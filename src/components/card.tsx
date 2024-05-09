import Link from 'next/link'
import { HTMLProps } from 'react'
import { twMerge } from 'tailwind-merge'

import { jetBrainsMono } from '@/utils/font'

export interface CardProps extends HTMLProps<HTMLDivElement> {
  title: string
  description: string
  href: string
}

export function Card({
  title,
  description,
  href,
  className,
  ...props
}: CardProps) {
  return (
    <Link href={href}>
      <div className={twMerge(className, 'group')} {...props}>
        <div className="flex h-40 flex-col gap-2 rounded-lg border border-white from-white via-white via-30% to-white/30 px-8 py-4 text-zinc-100 duration-300 hover:border-none group-hover:bg-gradient-to-br lg:gap-4">
          <h3
            className={twMerge(
              jetBrainsMono.className,
              'text-balance bg-gradient-to-br from-white via-white via-30% to-white/30 bg-clip-text text-3xl font-bold leading-snug tracking-widest text-transparent group-hover:text-zinc-950 lg:text-4xl lg:leading-snug',
            )}
          >
            {title}
          </h3>
          <p className="line-clamp-3 text-zinc-400 group-hover:text-zinc-800">
            {description}
          </p>
        </div>
      </div>
    </Link>
  )
}
