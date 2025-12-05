'use client'

import { useState, useEffect } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form')
    formSection?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  const openWhatsApp = () => {
    const message = encodeURIComponent('Olá! Gostaria de agendar uma consultoria jurídica para minha empresa.')
    window.open(`https://wa.me/5571993476396?text=${message}`, '_blank')
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glassmorphism shadow-lg'
          : 'bg-primary/95 backdrop-blur-sm'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Rodrigo Rocha Advogados"
              width={180}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={scrollToForm}
              className="px-6 py-2.5 bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark transition-all duration-300 shadow-gold hover:shadow-lg"
            >
              Agendar Consultoria
            </button>
            <button
              onClick={openWhatsApp}
              className="p-2.5 text-accent hover:bg-primary-light rounded-lg transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle size={24} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={openWhatsApp}
              className="p-2 text-accent"
              aria-label="WhatsApp"
            >
              <MessageCircle size={22} />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary-light">
            <button
              onClick={scrollToForm}
              className="w-full px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark transition-all duration-300 mb-3"
            >
              Agendar Consultoria
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}


