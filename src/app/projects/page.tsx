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

import { NextLogo } from './next-logo'
import { TailwindLogo } from './tailwind-logo'

export default function Projects() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-zinc-950">
      <div className="mx-auto w-full max-w-[1280px] p-8">
        <div className="flex flex-col gap-16">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink className="" href="/">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Projetos</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex flex-col gap-4 text-white">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i + 1}
                className="flex items-center justify-between rounded-lg p-3 outline-1 outline-zinc-500 hover:outline "
              >
                <div className="flex flex-col gap-3 ">
                  <h4
                    className={twMerge(
                      jetBrainsMono.className,
                      'text-balance bg-gradient-to-br from-white  to-white/30 bg-clip-text text-xl font-bold leading-snug tracking-widest text-transparent lg:text-2xl lg:leading-snug',
                    )}
                  >
                    Title {i}
                  </h4>
                  <p className="text-sm text-zinc-500 lg:text-base">
                    Chatbot utilizando a SDK da vercel e integração com a OpenAI
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex w-fit items-center gap-2 rounded-lg bg-zinc-900 p-2">
                      <TailwindLogo className="size-[0.875rem]" />
                      <span className="text-sm text-zinc-500">TailwindCSS</span>
                    </div>
                    <div className="flex w-fit items-center gap-2 rounded-lg bg-zinc-900 p-2">
                      <NextLogo className="size-[0.875rem]" />
                      <span className="text-sm text-zinc-500">Next.js</span>
                    </div>
                  </div>
                </div>
                <span className="text-zinc-500">2024</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
