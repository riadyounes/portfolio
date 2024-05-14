'use client'
import { Github, Globe } from 'lucide-react'
import Link from 'next/link'
import React, { useRef } from 'react'
import { twMerge } from 'tailwind-merge'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { jetBrainsMono } from '@/utils/font'

type Props = {
  post: {
    url?: string
    title: string
    description: string
    repository?: string
  }
}

export const Header: React.FC<Props> = ({ post }) => {
  const ref = useRef<HTMLElement>(null)

  const links: { label: string; href: string }[] = []
  if (post.repository) {
    links.push({
      label: 'GitHub',
      href: `https://github.com/${post.repository}`,
    })
  }
  if (post.url) {
    links.push({
      label: 'Website',
      href: post.url,
    })
  }

  return (
    <header
      ref={ref}
      className="relative isolate overflow-hidden bg-gradient-to-tl from-black via-zinc-700 to-black"
    >
      <div className="fixed inset-x-0 top-0 z-50 border-b border-transparent bg-zinc-900/0 backdrop-blur duration-200 lg:bg-transparent lg:backdrop-blur-none">
        <div className="container mx-auto flex flex-row-reverse items-center justify-between p-6">
          <div className="flex justify-between gap-6">
            {post.repository && (
              <Link
                target="_blank"
                href={`https://github.com/${post.repository}`}
              >
                <Github className="h-6 w-6 text-zinc-400 duration-200 hover:font-medium hover:text-zinc-100" />
              </Link>
            )}
            {post.url && (
              <Link target="_blank" href={post.url}>
                <Globe className="h-6 w-6 text-zinc-400 duration-200 hover:font-medium hover:text-zinc-100" />
              </Link>
            )}
          </div>

          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Blog</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{post.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <div className="container relative isolate mx-auto overflow-hidden py-24 sm:py-32">
        <div className="mx-auto flex max-w-7xl flex-col items-center px-6 text-center lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1
              className={twMerge(
                jetBrainsMono.className,
                'text-balance bg-gradient-to-br from-white via-white via-30% to-white/30 bg-clip-text text-4xl font-bold leading-snug text-transparent lg:text-6xl',
              )}
            >
              {post.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-300">
              {post.description}
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
