import { Github, Linkedin, Mail } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

export const metadata: Metadata = {
  title: 'Projetos',
}

export default function Contact() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden">
      <div className="mx-auto w-full max-w-[1280px] p-8">
        <div className="flex flex-col gap-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink className="" href="/">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Contato</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex flex-col gap-2">
            <Link
              href="https://github.com/riadyounes"
              className="flex items-center gap-2 rounded-lg px-2 py-4 text-zinc-400 transition-all  hover:text-zinc-100"
              target="_blank"
            >
              <Github className="size-6 " />
              <span className="">riadyounes</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/riad-younes-6a5348187/"
              className="flex items-center gap-2 rounded-lg px-2 py-4 text-zinc-400 transition-all  hover:text-zinc-100"
              target="_blank"
            >
              <Linkedin className="size-6" />
              riadyounes
            </Link>
            <Link
              href="mailto:riad.younes@hotmail.com"
              className="flex items-center gap-2 rounded-lg px-2 py-4 text-zinc-400 transition-all  hover:text-zinc-100"
              target="_blank"
            >
              <Mail className="size-6" />
              riad.younes@hotmail.com
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
