'use client'

import { motion } from 'framer-motion'
import { Shield, TrendingUp, Award } from 'lucide-react'

export default function AuthoritySection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <p className="text-lg sm:text-xl text-text leading-relaxed">
            Não espere a notificação judicial chegar para agir. O sucesso da sua empresa depende de uma gestão estratégica. Com mais de{' '}
            <span className="font-bold text-primary">500 processos concluídos com êxito</span>, o escritório Rodrigo Rocha oferece soluções preventivas e contenciosas para que você foque no que importa: o crescimento do seu negócio.
          </p>

          {/* Estatísticas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center space-y-3"
            >
              <div className="p-4 bg-accent/10 rounded-full">
                <Shield className="text-accent" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-primary">500+</h3>
              <p className="text-text-light">Processos Concluídos</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center space-y-3"
            >
              <div className="p-4 bg-accent/10 rounded-full">
                <TrendingUp className="text-accent" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-primary">95%</h3>
              <p className="text-text-light">Taxa de Sucesso</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center space-y-3"
            >
              <div className="p-4 bg-accent/10 rounded-full">
                <Award className="text-accent" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-primary">15+</h3>
              <p className="text-text-light">Anos de Experiência</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}



