import Link from 'next/link'
import { HTMLProps } from 'react'
import { twMerge } from 'tailwind-merge'

import { robotoMono } from '@/utils/font'

export interface CardProps extends HTMLProps<HTMLDivElement> {
  title: string
  description: string
  href: string
}

export function CardHome({
  title,
  description,
  href,
  className,
  ...props
}: CardProps) {
  return (
    <Link href={href} className="">
      <div
        className={twMerge(
          className,
          'group flex h-36 flex-col rounded-lg border border-zinc-600 p-4 transition duration-700 hover:bg-zinc-800/20 lg:h-48 lg:p-8 ',
        )}
        {...props}
      >
        <h3
          className={twMerge(
            robotoMono.className,
            'text-balance bg-gradient-to-br from-zinc-100 via-zinc-100 via-30% to-white/30 bg-clip-text text-3xl font-bold leading-snug tracking-tight text-transparent transition duration-700 group-hover:text-white lg:text-4xl lg:leading-snug',
          )}
        >
          {title}
        </h3>
        <p className="line-clamp-3 text-zinc-400 transition duration-700 group-hover:text-zinc-200">
          {description}
        </p>
      </div>
    </Link>
  )
}
