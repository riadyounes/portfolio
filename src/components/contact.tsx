'use client'

import { motion, useInView } from 'framer-motion'
import { Github, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: 'Email',
      value: 'riad.younes@hotmail.com',
      link: 'mailto:riad.younes@hotmail.com',
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: 'Telefone',
      value: '+55 (45) 99808-6008',
      link: 'https://wa.me/5545998086008',
      target: '_blank',
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: 'Localização',
      value: 'Paraná, Brasil',
    },
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="h-5 w-5" />,
      link: 'https://github.com/riadyounes',
      color: 'hover:bg-gray-700',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="h-5 w-5" />,
      link: 'https://linkedin.com/in/riadyounes',
      color: 'hover:bg-blue-700',
    },
    {
      name: 'Instagram',
      icon: <Instagram className="h-5 w-5" />,
      link: 'https://instagram.com/riadyounes',
      color: 'hover:bg-pink-600',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="contact" className="bg-zinc-900 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Entre em Contato
          </h2>
          <div className="mx-auto mb-8 h-1 w-20 bg-white"></div>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            Tem um projeto em mente ou quer conversar? Estou sempre aberto a
            novas oportunidades e colaborações.
          </p>
        </motion.div>

        <div ref={ref} className="mx-auto max-w-4xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target={item.target}
                rel={
                  item.target === '_blank' ? 'noopener noreferrer' : undefined
                }
                variants={itemVariants}
                className="flex flex-col items-center gap-4 rounded-lg bg-zinc-800 p-8 text-center transition-colors hover:bg-zinc-700"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="rounded-full bg-zinc-700 p-4 text-white">
                  {item.icon}
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-medium">{item.title}</h3>
                  <p className="text-gray-400">{item.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-lg bg-zinc-800 p-8 text-center"
          >
            <h3 className="mb-6 text-xl font-bold">Conecte-se comigo</h3>
            <p className="mx-auto mb-8 max-w-2xl text-gray-300">
              Siga-me nas redes sociais para acompanhar meus projetos mais
              recentes, artigos técnicos e atualizações profissionais. Estou
              sempre aberto a novas conexões e colaborações.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`rounded-full bg-zinc-700 p-4 ${social.color} transition-colors`}
                  aria-label={social.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            <div className="mt-12 rounded-lg border border-zinc-700 bg-zinc-700/30 p-6">
              <h4 className="mb-4 font-medium">
                Disponível para novos projetos
              </h4>
              <p className="mb-6 text-gray-300">
                Atualmente estou disponível para trabalhos freelance e
                oportunidades de colaboração em projetos interessantes. Vamos
                conversar sobre como posso ajudar a transformar suas ideias em
                realidade.
              </p>
              <Link
                href="mailto:riad.younes@exemplo.com"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black transition-colors hover:bg-gray-200"
              >
                <Mail size={16} />
                Enviar email
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
