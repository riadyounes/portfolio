'use client'

import { motion, useInView } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'
import Image from 'next/image'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const education = [
    {
      degree: 'Analise e Desenvolvimento de Sistemas',
      institution: 'Descomplica UniAmérica',
      period: '2019 - 2021',
      description:
        'Formação voltada para o desenvolvimento, manutenção e análise de sistemas e aplicações, com foco em lógica de programação, bancos de dados e estruturas de software.',
    },
    {
      degree: 'Engenharia de Software',
      institution: 'Descomplica UniAmérica',
      period: '2019 - 2023',
      description:
        'Graduação focada em engenharia de requisitos, arquitetura de software, qualidade e gestão de projetos, com ênfase em tecnologias web e práticas modernas de desenvolvimento.',
    },
    {
      degree: 'MBA FullStack',
      institution: 'Rocketseat',
      period: '2024 - 2025',
      description:
        'Pós-graduação completa em desenvolvimento Full Stack com foco em JavaScript, abrangendo aplicações web e mobile com React, Next.js, React Native e Node.js.',
    },
    {
      degree: 'Pós-graduação Tech Developer 360 - Especialização',
      institution: 'Rocketseat',
      period: '2024 - 2025',
      description:
        'Especialização Full Stack de ponta a ponta, com foco em tecnologias modernas como React, Next.js, Node.js, Python, IAC. A formação também abrange inteligência artificial, gestão de projetos e habilidades essenciais para se destacar como um profissional completo no mercado de tecnologia.',
    },
  ]

  const experiences = [
    {
      position: 'Desenvolvedor FullStack Senior',
      company: 'Tech Solutions',
      period: '2021 - Presente',
      description:
        'Desenvolvimento de aplicações web escaláveis utilizando React, Node.js e AWS.',
    },
    {
      position: 'Desenvolvedor Frontend',
      company: 'Creative Agency',
      period: '2019 - 2021',
      description:
        'Criação de interfaces responsivas e otimizadas para diversos clientes.',
    },
    {
      position: 'Desenvolvedor Web Júnior',
      company: 'Startup Innovations',
      period: '2017 - 2019',
      description:
        'Desenvolvimento de websites e aplicações web utilizando HTML, CSS e JavaScript.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="about" className="bg-zinc-900 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Sobre Mim</h2>
          <div className="mx-auto mb-8 h-1 w-20 bg-white"></div>
        </motion.div>

        {/* Avatar com foto de perfil */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 flex flex-col items-center gap-10 md:flex-row"
        >
          <div className="flex w-full justify-center md:w-1/3">
            <div className="relative h-64 w-64 md:h-80 md:w-80">
              {/* Círculo decorativo de fundo */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-zinc-800 to-zinc-700"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(255, 255, 255, 0.1)',
                    '0 0 30px rgba(255, 255, 255, 0.15)',
                    '0 0 20px rgba(255, 255, 255, 0.1)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: 'easeInOut',
                }}
              />

              {/* Imagem de perfil */}
              <div className="absolute inset-3 overflow-hidden rounded-full border-4 border-zinc-800">
                <Image
                  src="https://github.com/riadyounes.png"
                  alt="Riad Younes"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Elementos decorativos */}
              <motion.div
                className="absolute h-full w-full rounded-full border border-white/10"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: 'linear',
                }}
              />
              <motion.div
                className="absolute h-full w-full rounded-full border border-white/5"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 30,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: 'linear',
                }}
              />
            </div>
          </div>

          <div className="w-full md:w-2/3">
            <p className="mb-6 text-lg text-gray-300">
              Sou um desenvolvedor FullStack apaixonado por criar soluções web
              inovadoras e eficientes. Com experiência em tecnologias frontend e
              backend, busco sempre entregar projetos de alta qualidade que
              combinam design elegante com funcionalidade robusta.
            </p>
            <p className="mb-6 text-lg text-gray-300">
              Minha paixão por desenvolvimento começou há anos atrás, quando
              criei meu primeiro site. Desde então, venho aprimorando minhas
              habilidades e expandindo meu conhecimento em diversas tecnologias
              e frameworks.
            </p>
            <p className="text-lg text-gray-300">
              Atuo há mais de 5 anos no desenvolvimento de interfaces para
              landing pages, dashboards e sites institucionais, sempre focando
              em acessibilidade, performance e boas práticas. Ao longo desse
              tempo, colaborei com equipes diversas, liderei projetos e me
              mantive em constante evolução para entregar resultados de
              excelência.
            </p>
          </div>
        </motion.div>

        {/* Seções de Educação e Experiência */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Educação em formato de lista */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="rounded-lg bg-zinc-800 p-8"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-full bg-zinc-700 p-2">
                <Calendar className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold">Educação</h3>
            </div>

            <div className="space-y-6">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative border-l border-zinc-700 pl-6"
                >
                  <div className="absolute left-[-4px] top-1 h-2 w-2 rounded-full bg-white"></div>
                  <h4 className="text-lg font-semibold">{item.degree}</h4>
                  <p className="mb-1 text-sm text-gray-400">
                    {item.institution}
                  </p>
                  <p className="mb-2 text-xs text-gray-500">{item.period}</p>
                  <p className="text-sm text-gray-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experiência */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="rounded-lg bg-zinc-800 p-8"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-full bg-zinc-700 p-2">
                <Briefcase className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold">Experiência</h3>
            </div>

            <div className="space-y-6">
              {experiences.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative border-l border-zinc-700 pl-6"
                >
                  <div className="absolute left-[-4px] top-1 h-2 w-2 rounded-full bg-white"></div>
                  <h4 className="text-lg font-semibold">{item.position}</h4>
                  <p className="mb-1 text-sm text-gray-400">{item.company}</p>
                  <p className="mb-2 text-xs text-gray-500">{item.period}</p>
                  <p className="text-sm text-gray-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
