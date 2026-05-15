import { Star, Quote } from 'lucide-react'
import { config } from '../config/config'

export default function Avaliacoes() {
  // Duplica os cards para loop infinito sem salto
  const cards = [...config.avaliacoes, ...config.avaliacoes]

  return (
    <section id="avaliacoes" className="section-padding bg-white relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-bosch-red/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-bosch-blue/5 rounded-full blur-3xl" />

      <div className="container-app relative">
        <div className="text-center max-w-3xl mx-auto mb-14 reveal">
          <span className="eyebrow">Prova Social</span>
          <h2 className="section-title mt-4">
            O que nossos <span className="text-bosch-red">clientes dizem</span>
          </h2>

          {/* Score visual */}
          <div className="mt-6 inline-flex items-center gap-3 px-5 py-3 rounded-full bg-bosch-gray-light">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm font-bold text-bosch-graphite">5.0 / 5.0</span>
            <span className="text-xs text-bosch-gray">Avaliações reais de clientes</span>
          </div>
        </div>
      </div>

      {/* Marquee — ocupa largura total (fora do container) */}
      <div className="relative overflow-hidden mt-2 pb-4">
        {/* Máscaras de fade nas laterais */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white to-transparent" />

        <div
          className="flex animate-marquee hover:[animation-play-state:paused]"
          style={{ width: 'max-content' }}
        >
          {cards.map((avaliacao, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-xl p-7 shadow-md border border-bosch-gray-light hover:border-bosch-red/30 hover:shadow-xl transition-all duration-500 mr-6 flex-shrink-0"
              style={{ width: '320px' }}
            >
              <Quote className="absolute top-5 right-5 h-8 w-8 text-bosch-red/15 group-hover:text-bosch-red/30 transition-colors" />

              <div className="flex items-center gap-0.5 mb-4">
                {[...Array(avaliacao.nota)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-bosch-graphite leading-relaxed mb-6 relative z-10 text-sm">
                "{avaliacao.texto}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-bosch-gray-light">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-bosch-blue-deep text-white font-bold text-sm flex-shrink-0">
                  {avaliacao.nome.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-sm text-bosch-graphite">{avaliacao.nome}</p>
                  <p className="text-xs text-bosch-gray">Google Reviews</p>
                </div>
              </div>

              {/* Borda lateral vermelha no hover */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-bosch-red rounded-r group-hover:h-12 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
