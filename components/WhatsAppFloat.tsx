'use client'

import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function WhatsAppFloat() {
  const openWhatsApp = () => {
    const message = encodeURIComponent('Olá! Gostaria de agendar uma consultoria jurídica para minha empresa.')
    window.open(`https://wa.me/5571993476396?text=${message}`, '_blank')
  }

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 group"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle size={28} className="group-hover:scale-110 transition-transform" />
      <span className="absolute -top-2 -right-2 bg-accent text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
        Fale conosco
      </span>
    </motion.button>
  )
}


