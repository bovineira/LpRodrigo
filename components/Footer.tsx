'use client'

import Image from 'next/image'

export default function Footer() {
  const openWhatsApp = () => {
    const message = encodeURIComponent('Olá! Gostaria de agendar uma consultoria jurídica para minha empresa.')
    window.open(`https://wa.me/5571993476396?text=${message}`, '_blank')
  }

  return (
    <footer className="bg-primary-dark text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="relative h-12 w-auto">
              <Image
                src="/logo.png"
                alt="Rodrigo Rocha Advogados"
                width={180}
                height={60}
                className="h-12 w-auto object-contain"
                priority
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Advocacia Full Service especializada em defender empresas e garantir segurança jurídica para o crescimento do seu negócio.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-accent">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#contact-form"
                  className="text-gray-300 hover:text-accent transition-colors text-sm"
                >
                  Agendar Consultoria
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-accent transition-colors text-sm"
                >
                  Nossos Serviços
                </a>
              </li>
              <li>
                <button
                  onClick={openWhatsApp}
                  className="text-gray-300 hover:text-accent transition-colors text-sm text-left"
                >
                  Fale Conosco
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-light pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Rodrigo Rocha Advogados. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}


