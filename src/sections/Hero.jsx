import { MessageCircle, FileText, CheckCircle2 } from 'lucide-react'
import { config, whatsappLink } from '../config/config'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background com parallax via bg-fixed (performático, sem JS) */}
      <div
        className="absolute inset-0 bg-cover bg-center md:bg-fixed"
        style={{ backgroundImage: `url(${config.hero.imagem})` }}
      />

      {/* Overlay multi-camadas para profundidade */}
      <div className="absolute inset-0 bg-gradient-to-r from-bosch-graphite via-bosch-graphite/85 to-bosch-graphite/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-bosch-graphite/90 via-transparent to-bosch-graphite/60" />
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />

      {/* Linha vermelha vertical lateral (detalhe Bosch) */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-bosch-red via-bosch-red to-transparent" />

      {/* Conteúdo */}
      <div className="container-app relative z-10 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6 animate-fade-in">
            <div className="h-px w-12 bg-bosch-red" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-bosch-red">
              {config.empresa.subBrand}
            </span>
          </div>

          {/* Título principal */}
          <h1 className="font-extrabold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight animate-fade-up">
            {config.hero.titulo}{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-bosch-red">
                {config.hero.tituloDestaque}
              </span>
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-bosch-red/20 -z-0" />
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="mt-7 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed animate-fade-up" style={{ animationDelay: '120ms' }}>
            {config.hero.subtitulo}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '240ms' }}>
            <a
              href={whatsappLink(config.whatsapp.mensagemOrcamento)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <FileText className="h-5 w-5" />
              Solicitar Orçamento
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center gap-2 px-6 py-3.5 font-semibold text-white rounded-md overflow-hidden group"
              style={{ background: '#25D366' }}
            >
              {/* Pulso animado */}
              <span className="absolute inset-0 rounded-md bg-[#25D366] animate-ping opacity-30 group-hover:opacity-0" />
              <span className="absolute inset-0 rounded-md bg-[#25D366] animate-pulse opacity-20 group-hover:opacity-0" />
              <MessageCircle className="relative h-5 w-5" />
              <span className="relative">Falar no WhatsApp</span>
            </a>
          </div>

          {/* Provas (mini badges) */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-3 animate-fade-up" style={{ animationDelay: '360ms' }}>
            {config.hero.provas.map((prova) => (
              <div key={prova} className="flex items-center gap-2 text-sm text-white/85">
                <CheckCircle2 className="h-4 w-4 text-bosch-red flex-shrink-0" />
                <span className="font-medium">{prova}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Indicador scroll (desktop) */}
      <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 text-white/50 text-xs font-medium uppercase tracking-widest">
          <span>Role para baixo</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent animate-pulse-slow" />
        </div>
      </div>
    </section>
  )
}
