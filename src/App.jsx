import Header from './components/Header'
import WhatsAppFloat from './components/WhatsAppFloat'
import ScrollProgress from './components/ScrollProgress'
import PageLoader from './components/PageLoader'
import CustomCursor from './components/CustomCursor'
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

// Divisor diagonal entre seções — cores em hex para não depender de Tailwind em runtime
function Divider({ from, to, flip = false }) {
  const points = flip
    ? '1440,48 0,0 0,48'
    : '0,48 1440,0 1440,48'

  return (
    <div
      aria-hidden="true"
      className="relative -mt-px leading-none overflow-hidden pointer-events-none"
      style={{ height: 48, background: from }}
    >
      <svg
        viewBox="0 0 1440 48"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
        style={{ fill: to }}
      >
        <polygon points={points} />
      </svg>
    </div>
  )
}

export default function App() {
  useSEO()
  useReveal()

  return (
    <div className="min-h-screen bg-white">
      <PageLoader />
      <ScrollProgress />
      <CustomCursor />
      <Header />

      <main>
        <Hero />
        <Contadores />

        {/* graphite → gray-light */}
        <Divider from="#1A1D21" to="#F4F5F7" />

        <Servicos />
        <Sobre />
        <Galeria />

        {/* graphite → white */}
        <Divider from="#1A1D21" to="#ffffff" flip />

        <Avaliacoes />
        <Diferenciais />

        {/* gray-light → graphite (CTAFinal é dark) */}
        <Divider from="#F4F5F7" to="#1A1D21" />

        <CTAFinal />
        <Contato />
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
