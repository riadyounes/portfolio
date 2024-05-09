import { Metadata } from 'next'
import { twMerge } from 'tailwind-merge'

import { Card } from '@/components/card'
import { jetBrainsMono } from '@/utils/font'

export const metadata: Metadata = {
  title: 'Home',
}

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-zinc-950 py-4">
      <div className="z-20 mx-auto max-w-[1280px] px-6">
        <div className="flex flex-col items-center gap-4">
          <h1
            className={twMerge(
              jetBrainsMono.className,
              'text-balance bg-gradient-to-br from-white via-white via-30% to-white/30 bg-clip-text text-5xl font-bold leading-snug tracking-widest text-transparent lg:text-6xl lg:leading-snug',
            )}
          >
            Riad Younes
          </h1>
          <p className="text-xl  text-white">
            Graduado em análise e desenvolvimento de sistemas e engenharia de
            software
          </p>

          <div className="grid w-full grid-cols-2 gap-6">
            <div className="col-span-2 lg:col-span-1">
              <Card
                href="/projects"
                title="Projetos"
                description="Aqui você encontrará uma coleção dos meus projetos, detalhes sobre as tecnologias utilizadas e muito mais."
              />
            </div>
            <div className="col-span-2 lg:col-span-1">
              <Card
                href="/"
                title="Experiência"
                description="Explore minha jornada profissional, destacando minha experiência, habilidades e conquistas."
              />
            </div>
            <div className="col-span-2 lg:col-span-1">
              <Card
                href="/"
                title="Blog"
                description="Dicas e tutoriais de programação, onde compartilho conhecimento e insights valiosos."
              />
            </div>
            <div className="col-span-2 lg:col-span-1">
              <Card
                href="/"
                title="Contato"
                description="Vamos bater um papo! Aberto para novos projetos e ideias inovadoras."
              />
            </div>
          </div>

          {/* <Button>Get Started</Button>
          <Button variant="outline">Get Started</Button>
          <Button variant="ghost">Get Started</Button> */}
        </div>
      </div>
    </div>
  )
}
