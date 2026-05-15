import Header from './components/Header'
import WhatsAppFloat from './components/WhatsAppFloat'
import Hero from './sections/Hero'
import Contadores from './sections/Contadores'
import Servicos from './sections/Servicos'
import Sobre from './sections/Sobre'
import Galeria from './sections/Galeria'
import Avaliacoes from './sections/Avaliacoes'
import Diferenciais from './sections/Diferenciais'
import CTAFinal from './sections/CTAFinal'
import Contato from './sections/Contato'
import Footer from './sections/Footer'
import { useReveal } from './hooks/useReveal'
import { useSEO } from './hooks/useSEO'

export default function App() {
  useSEO()
  useReveal()

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Contadores />
        <Servicos />
        <Sobre />
        <Galeria />
        <Avaliacoes />
        <Diferenciais />
        <CTAFinal />
        <Contato />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
