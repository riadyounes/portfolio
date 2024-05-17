import { Metadata } from 'next'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

import { CardHome } from '@/components/card-home'
import { robotoMono } from '@/utils/font'

export const metadata: Metadata = {
  title: 'Home',
}

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden py-4">
      <div className="z-20 mx-auto max-w-[1280px] px-6">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-6">
            <Image src="/logo-white2.svg" alt="" width={150} height={150} />
            <h1
              className={twMerge(
                robotoMono.className,
                'text-balance text-center text-5xl font-bold leading-snug tracking-tighter text-zinc-200 lg:text-6xl',
              )}
            >
              Riad Younes
            </h1>
          </div>
          <p className="text-lg font-medium text-zinc-300">
            Apaixonado por tecnologia, com formação em Análise e Desenvolvimento
            de Sistemas e Engenharia de Software, além de uma especialização
            Full Stack. Busco constantemente desafios que impulsionem minha
            evolução profissional.
          </p>

          <div className="grid w-full grid-cols-6 gap-6">
            <div className="col-span-6 lg:col-span-2">
              <CardHome
                href="/projects"
                title="Projetos"
                description="Aqui você encontrará uma coleção dos meus projetos, detalhes sobre as tecnologias utilizadas e muito mais."
              />
            </div>

            <div className="col-span-6 lg:col-span-2">
              <CardHome
                href="/blog"
                title="Blog"
                description="Dicas e tutoriais de programação, onde compartilho conhecimento e insights valiosos."
              />
            </div>
            <div className="col-span-6 lg:col-span-2">
              <CardHome
                href="/contact"
                title="Contato"
                description="Vamos bater um papo! Aberto para novos projetos e ideias inovadoras."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
