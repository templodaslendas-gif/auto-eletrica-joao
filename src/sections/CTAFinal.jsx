import { MessageCircle, Phone } from 'lucide-react'
import { config, whatsappLink, telefoneLink } from '../config/config'

export default function CTAFinal() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background image fixo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1530046339915-78e95b5b34a6?auto=format&fit=crop&w=1920&q=80)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-bosch-blue-deep/95 to-bosch-graphite/90" />
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />

      {/* Linha vermelha decorativa */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-bosch-red to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-bosch-red to-transparent" />

      <div className="container-app relative z-10">
        <div className="max-w-3xl mx-auto text-center reveal">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-bosch-red" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-bosch-red">
              Atendimento Especializado
            </span>
            <div className="h-px w-12 bg-bosch-red" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Seu carro precisa de{' '}
            <span className="text-bosch-red">manutenção?</span>
          </h2>

          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Fale agora com nossa equipe especializada. Diagnóstico preciso, orçamento transparente e atendimento profissional.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappLink(config.whatsapp.mensagemOrcamento)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-base"
            >
              <MessageCircle className="h-5 w-5" />
              Falar no WhatsApp Agora
            </a>
            <a
              href={telefoneLink()}
              className="btn-secondary text-base"
            >
              <Phone className="h-5 w-5" />
              {config.contato.telefoneDisplay}
            </a>
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-3 gap-6 max-w-2xl mx-auto pt-10 border-t border-white/10">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-white">5.0</div>
              <div className="text-xs text-white/60 mt-1 uppercase tracking-wider">Avaliação Google</div>
            </div>
            <div className="text-center border-x border-white/10">
              <div className="text-3xl md:text-4xl font-extrabold text-white">Bosch</div>
              <div className="text-xs text-white/60 mt-1 uppercase tracking-wider">Car Service</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-white">100%</div>
              <div className="text-xs text-white/60 mt-1 uppercase tracking-wider">Transparência</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
