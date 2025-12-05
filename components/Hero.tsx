'use client'

import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form')
    formSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background com gradiente */}
      <div className="absolute inset-0 gradient-overlay z-0">
        {/* Placeholder para imagem de fundo - você pode adicionar uma imagem aqui */}
        <div className="absolute inset-0 bg-[url('/office-bg.jpg')] bg-cover bg-center opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texto à esquerda */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight">
              Transforme a Legislação Trabalhista em{' '}
              <span className="text-accent">Aliada do Seu Lucro</span>, não em Inimiga.
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
              Advocacia Full Service especializada em defender empresas, reduzir passivos e garantir a segurança jurídica que o seu negócio precisa para crescer.
            </p>
            <button
              onClick={scrollToForm}
              className="inline-flex items-center px-8 py-4 bg-accent text-white font-bold text-lg rounded-lg hover:bg-accent-dark transition-all duration-300 shadow-gold hover:shadow-xl transform hover:-translate-y-1"
            >
              Quero Blindar Minha Empresa
            </button>
          </motion.div>

          {/* Imagem à direita */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-2xl group">
              <Image
                src="/rodrigo.jpg"
                alt="Dr. Rodrigo Rocha"
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                priority
                style={{ objectPosition: '50% 30%' }}
              />
              {/* Overlay dourado sutil */}
              <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent"></div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
        >
          <button
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            className="text-white/70 hover:text-accent transition-colors animate-bounce"
            aria-label="Rolar para baixo"
          >
            <ChevronDown size={32} />
          </button>
        </motion.div>
      </div>
    </section>
  )
}


