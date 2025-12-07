'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const companies = [
  {
    name: 'Empresa Parceira',
    logo: '/1.webp',
  },
  {
    name: 'Empresa Parceira',
    logo: '/2.webp',
  },
  {
    name: 'Empresa Parceira',
    logo: '/3.webp',
  },
  {
    name: 'Empresa Parceira',
    logo: '/5.webp',
  },
  {
    name: 'Empresa Parceira',
    logo: '/6.webp',
  },
]

export default function CompaniesCarousel() {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({})

  // Duplicar empresas para efeito infinito
  const duplicatedCompanies = [...companies, ...companies]

  const handleImageError = (index: number) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }))
  }

  return (
    <section className="py-12 lg:py-16 bg-white border-t border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-sm font-semibold text-text-light uppercase tracking-wider">
            Empresas que confiam no nosso trabalho
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          {/* Carrossel infinito */}
          <div className="flex items-center gap-12 lg:gap-16 animate-scroll group">
            {duplicatedCompanies.map((company, index) => {
              const isError = imageErrors[index]
              const actualIndex = index % companies.length
              
              return (
                <div
                  key={`logo-${index}`}
                  className="flex items-center justify-center h-16 lg:h-20 w-32 lg:w-40 shrink-0 grayscale hover:grayscale-0 transition-all duration-500 opacity-70 hover:opacity-100 min-h-[64px] min-w-[128px]"
                >
                  {!isError ? (
                    <div className="relative h-full w-full flex items-center justify-center">
                      <Image
                        src={company.logo}
                        alt={company.name}
                        fill
                        className="object-contain"
                        loading={index < 5 ? "eager" : "lazy"}
                        onError={() => handleImageError(index)}
                        unoptimized
                        sizes="(max-width: 768px) 128px, 160px"
                      />
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full w-full bg-gray-50 rounded px-3 border border-gray-200">
                      <span className="text-xs text-gray-500 text-center font-medium leading-tight">
                        {company.name}
                      </span>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Gradientes nas bordas para efeito fade */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        </div>

        {/* Texto "Entre outras empresas" melhorado */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-12"
        >
          <div className="flex items-center justify-center gap-3">
            <div className="h-px bg-gray-200 flex-1 max-w-20"></div>
            <p className="text-sm text-text-light font-medium">
              Entre outras empresas
            </p>
            <div className="h-px bg-gray-200 flex-1 max-w-20"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

