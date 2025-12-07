import Header from '@/components/Header'
import Hero from '@/components/Hero'
import CompaniesCarousel from '@/components/CompaniesCarousel'
import AuthoritySection from '@/components/AuthoritySection'
import ServicesSection from '@/components/ServicesSection'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <CompaniesCarousel />
      <AuthoritySection />
      <ServicesSection />
      <ContactForm />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}





