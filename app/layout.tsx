import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rodrigo Rocha Advogados | Advocacia Full Service para Empresas',
  description: 'Transforme a Legislação Trabalhista em Aliada do Seu Lucro. Advocacia Full Service especializada em defender empresas, reduzir passivos e garantir segurança jurídica.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="font-body">
        {children}
      </body>
    </html>
  )
}



