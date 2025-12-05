'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    situation: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório'
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Nome da empresa é obrigatório'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'WhatsApp/Celular é obrigatório'
    } else {
      // Remove formatação para validar
      const phoneNumbers = formData.phone.replace(/\D/g, '')
      if (phoneNumbers.length < 10 || phoneNumbers.length > 11) {
        newErrors.phone = 'Telefone inválido. Digite o DDD + número (10 ou 11 dígitos)'
      }
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'E-mail inválido'
    }

    if (!formData.situation.trim()) {
      newErrors.situation = 'Por favor, descreva sua situação'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('https://formspree.io/f/movglwrv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          phone: formData.phone,
          email: formData.email,
          situation: formData.situation,
          _subject: `Nova solicitação de consultoria - ${formData.company}`,
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false)
          setFormData({
            name: '',
            company: '',
            phone: '',
            email: '',
            situation: '',
          })
        }, 3000)
      } else {
        throw new Error('Erro ao enviar formulário')
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
      setErrors({
        submit: 'Erro ao enviar formulário. Por favor, tente novamente ou entre em contato pelo WhatsApp.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const formatPhone = (value: string): string => {
    // Remove tudo que não é número
    const numbers = value.replace(/\D/g, '')
    
    // Limita a 11 dígitos (DDD + 9 dígitos)
    const limitedNumbers = numbers.slice(0, 11)
    
    // Aplica a máscara
    if (limitedNumbers.length <= 2) {
      return limitedNumbers.length > 0 ? `(${limitedNumbers}` : ''
    } else if (limitedNumbers.length <= 7) {
      return `(${limitedNumbers.slice(0, 2)}) ${limitedNumbers.slice(2)}`
    } else if (limitedNumbers.length <= 10) {
      return `(${limitedNumbers.slice(0, 2)}) ${limitedNumbers.slice(2, 6)}-${limitedNumbers.slice(6)}`
    } else {
      return `(${limitedNumbers.slice(0, 2)}) ${limitedNumbers.slice(2, 7)}-${limitedNumbers.slice(7)}`
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    
    // Se for o campo de telefone, aplicar formatação
    if (name === 'phone') {
      const formatted = formatPhone(value)
      setFormData((prev) => ({ ...prev, [name]: formatted }))
    } else if (name !== 'name') {
      // Para outros campos (exceto name que tem handler próprio)
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
    
    // Limpar erro do campo quando o usuário começar a digitar
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Permite: backspace, delete, tab, escape, enter, setas
    if ([8, 9, 27, 13, 46, 37, 38, 39, 40].indexOf(e.keyCode) !== -1 ||
        // Permite: Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
        (e.keyCode === 65 && e.ctrlKey === true) ||
        (e.keyCode === 67 && e.ctrlKey === true) ||
        (e.keyCode === 86 && e.ctrlKey === true) ||
        (e.keyCode === 88 && e.ctrlKey === true) ||
        // Permite: home, end
        (e.keyCode >= 35 && e.keyCode <= 40)) {
      return
    }
    // Bloqueia se não for número
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
      e.preventDefault()
    }
  }

  const handleNameKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Permite: backspace, delete, tab, escape, enter, setas, espaço
    if ([8, 9, 27, 13, 32, 46, 37, 38, 39, 40].indexOf(e.keyCode) !== -1 ||
        // Permite: Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
        (e.keyCode === 65 && e.ctrlKey === true) ||
        (e.keyCode === 67 && e.ctrlKey === true) ||
        (e.keyCode === 86 && e.ctrlKey === true) ||
        (e.keyCode === 88 && e.ctrlKey === true) ||
        // Permite: home, end
        (e.keyCode >= 35 && e.keyCode <= 40)) {
      return
    }
    // Bloqueia números (0-9)
    if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105)) {
      e.preventDefault()
    }
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Remove números e mantém apenas letras, espaços e caracteres acentuados
    const value = e.target.value.replace(/[0-9]/g, '')
    setFormData((prev) => ({ ...prev, name: value }))
    // Limpar erro do campo quando o usuário começar a digitar
    if (errors.name) {
      setErrors((prev) => ({ ...prev, name: '' }))
    }
  }

  return (
    <section id="contact-form" className="py-20 lg:py-28 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
              Agende uma Análise Jurídica do seu Caso
            </h2>
            <p className="text-lg text-gray-300">
              Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas
            </p>
          </div>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-lg p-8 text-center"
            >
              <CheckCircle className="text-accent mx-auto mb-4" size={64} />
              <h3 className="text-2xl font-bold text-primary mb-2">
                Mensagem Enviada!
              </h3>
              <p className="text-text-light">
                Entraremos em contato em breve.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-white font-semibold mb-2"
                >
                  Nome do Responsável
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleNameChange}
                  onKeyDown={handleNameKeyDown}
                  placeholder="Sócio ou Gerente"
                  className={`w-full px-4 py-3 rounded-lg bg-white/10 border-2 ${
                    errors.name
                      ? 'border-red-400'
                      : 'border-transparent focus:border-accent'
                  } text-white placeholder-gray-400 focus:outline-none focus:bg-white/20 transition-all`}
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-white font-semibold mb-2"
                >
                  Nome da Empresa <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Nome da sua empresa"
                  className={`w-full px-4 py-3 rounded-lg bg-white/10 border-2 ${
                    errors.company
                      ? 'border-red-400'
                      : 'border-transparent focus:border-accent'
                  } text-white placeholder-gray-400 focus:outline-none focus:bg-white/20 transition-all`}
                  required
                />
                {errors.company && (
                  <p className="text-red-400 text-sm mt-1">{errors.company}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-white font-semibold mb-2"
                >
                  WhatsApp/Celular <span className="text-accent">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onKeyDown={handlePhoneKeyDown}
                  placeholder="(11) 99999-9999"
                  className={`w-full px-4 py-3 rounded-lg bg-white/10 border-2 ${
                    errors.phone
                      ? 'border-red-400'
                      : 'border-transparent focus:border-accent'
                  } text-white placeholder-gray-400 focus:outline-none focus:bg-white/20 transition-all`}
                  required
                />
                {errors.phone && (
                  <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-white font-semibold mb-2"
                >
                  E-mail Corporativo <span className="text-accent">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className={`w-full px-4 py-3 rounded-lg bg-white/10 border-2 ${
                    errors.email
                      ? 'border-red-400'
                      : 'border-transparent focus:border-accent'
                  } text-white placeholder-gray-400 focus:outline-none focus:bg-white/20 transition-all`}
                  required
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="situation"
                  className="block text-white font-semibold mb-2"
                >
                  Me explique um pouco a sua situação?{' '}
                  <span className="text-accent">*</span>
                </label>
                <textarea
                  id="situation"
                  name="situation"
                  value={formData.situation}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Descreva brevemente sua situação jurídica ou dúvida..."
                  className={`w-full px-4 py-3 rounded-lg bg-white/10 border-2 ${
                    errors.situation
                      ? 'border-red-400'
                      : 'border-transparent focus:border-accent'
                  } text-white placeholder-gray-400 focus:outline-none focus:bg-white/20 transition-all resize-none`}
                  required
                />
                {errors.situation && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.situation}
                  </p>
                )}
              </div>

              {errors.submit && (
                <div className="bg-red-500/20 border border-red-400 text-red-200 px-4 py-3 rounded-lg text-sm">
                  {errors.submit}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-accent text-white font-bold text-lg rounded-lg hover:bg-accent-dark transition-all duration-300 shadow-gold hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Solicitar Análise</span>
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}


