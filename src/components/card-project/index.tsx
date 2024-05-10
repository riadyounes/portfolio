import { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

import { NextLogo } from '@/components/card-project/next-logo'
import { jetBrainsMono } from '@/utils/font'

import { ShadcnUILogo } from './shadcn-ui-logo'
import { Tag } from './tag'
import { TailwindLogo } from './tailwind-logo'

export interface CardProjectProps extends HTMLAttributes<HTMLDivElement> {
  title: string
  description: string
}

export function CardProject({
  title,
  description,
  ...props
}: CardProjectProps) {
  return (
    <div
      className="flex items-center justify-between rounded-lg p-3 outline-1 outline-zinc-500 hover:outline "
      {...props}
    >
      <div className="flex flex-col gap-3 ">
        <h4
          className={twMerge(
            jetBrainsMono.className,
            'text-balance bg-gradient-to-br from-white  to-white/30 bg-clip-text text-xl font-bold leading-snug tracking-widest text-transparent lg:text-2xl lg:leading-snug',
          )}
        >
          {title}
        </h4>
        <p className="text-sm text-zinc-500 lg:text-base">{description}</p>
        <div className="flex flex-wrap items-center gap-3">
          <Tag
            name="TailwindCSS"
            icon={<TailwindLogo className="size-[0.875rem]" />}
          />
          <Tag name="Next.js" icon={<NextLogo className="size-[0.875rem]" />} />
          <Tag
            name="Shadcn/ui"
            icon={<ShadcnUILogo className="size-[0.875rem]" />}
          />
        </div>
      </div>
      <span className="text-zinc-500">2024</span>
    </div>
  )
}
