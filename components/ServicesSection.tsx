'use client'

import { motion } from 'framer-motion'
import { FileText, ShieldCheck, Scale, UserX } from 'lucide-react'

const services = [
  {
    icon: FileText,
    title: 'Contratos Inteligentes',
    description: 'Do contrato de experiência à efetivação, proteja-se com documentação robusta.',
  },
  {
    icon: ShieldCheck,
    title: 'Gestão de Riscos',
    description: 'Auditoria completa para eliminar o "vilão" das horas extras e desvios de função.',
  },
  {
    icon: Scale,
    title: 'Defesa Estratégica',
    description: 'Atuação vigorosa em processos trabalhistas, buscando a melhor resolução econômica.',
  },
  {
    icon: UserX,
    title: 'Demissão Segura',
    description: 'Assessoria em desligamentos e Justa Causa para evitar reversões na justiça.',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Soluções jurídicas completas para proteger e potencializar o seu negócio
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background p-8 rounded-lg border border-gray-200 hover:border-accent transition-all duration-300 hover:shadow-lg group"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <Icon className="text-accent" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-2">
                      {service.title}
                    </h3>
                    <p className="text-text-light leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

