import { useState, useEffect } from 'react'
import { X, ZoomIn } from 'lucide-react'
import { config } from '../config/config'

export default function Galeria() {
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setSelected(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <section className="section-padding bg-bosch-graphite relative overflow-hidden">
      {/* Detalhes decorativos */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-30" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-bosch-red/10 rounded-full blur-3xl" />

      <div className="container-app relative">
        <div className="text-center max-w-3xl mx-auto mb-14 reveal">
          <span className="eyebrow">Nosso Trabalho</span>
          <h2 className="section-title mt-4 text-white">
            Conheça a <span className="text-bosch-red">nossa oficina</span>
          </h2>
          <p className="section-subtitle mx-auto text-white/70">
            Ambiente organizado, equipamentos modernos e atendimento profissional.
          </p>
        </div>

        {/* Grid de imagens */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {config.galeria.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setSelected(item)}
              className="group relative aspect-square overflow-hidden rounded-lg reveal"
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              <img
                src={item.url}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bosch-graphite/90 via-bosch-graphite/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Ícone de zoom no hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-bosch-red shadow-lg shadow-bosch-red/50">
                  <ZoomIn className="h-5 w-5 text-white" />
                </div>
              </div>

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-white text-sm font-semibold">{item.alt}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            onClick={() => setSelected(null)}
            aria-label="Fechar"
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={selected.url}
            alt={selected.alt}
            className="max-w-full max-h-full rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
