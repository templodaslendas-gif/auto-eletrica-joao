import { useEffect, useState } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'
import Logo from './Logo'
import { config, whatsappLink } from '../config/config'

const menuItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Contato', href: '#contato' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Trava scroll quando menu mobile aberto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bosch-graphite/95 backdrop-blur-md shadow-lg shadow-black/10'
          : 'bg-gradient-to-b from-black/40 to-transparent backdrop-blur-sm'
      }`}
    >
      <div className="container-app">
        <div className="flex h-20 items-center justify-between">
          <a href="#inicio" aria-label="Ir para o início">
            <Logo variant="light" />
          </a>

          {/* Menu Desktop */}
          <nav className="hidden lg:flex items-center gap-9">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-sm font-medium text-white/90 hover:text-white transition-colors group"
              >
                {item.label}
                <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-bosch-red transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA Desktop */}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 rounded-md bg-bosch-red px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-bosch-red/30 hover:bg-bosch-red-dark hover:shadow-lg transition-all"
          >
            <MessageCircle className="h-4 w-4" />
            Falar no WhatsApp
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden flex h-11 w-11 items-center justify-center rounded-md bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 transition-colors"
            aria-label="Abrir menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile (overlay full screen) */}
      <div
        className={`lg:hidden fixed inset-0 top-20 bg-bosch-graphite transition-all duration-300 ${
          open ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="flex flex-col p-6 gap-1">
          {menuItems.map((item, idx) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-4 px-2 text-lg font-medium text-white border-b border-white/10 hover:text-bosch-red transition-colors"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              {item.label}
            </a>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-bosch-red px-6 py-4 font-semibold text-white"
          >
            <MessageCircle className="h-5 w-5" />
            Falar no WhatsApp
          </a>
          <div className="mt-8 text-center text-sm text-white/50">
            {config.contato.telefoneDisplay}
          </div>
        </nav>
      </div>
    </header>
  )
}
