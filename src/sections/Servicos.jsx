import {
  ArrowRight,
  Wrench,
  Zap,
  Disc3,
  Snowflake,
  ScanLine,
  ShieldCheck,
} from 'lucide-react'
import { config, whatsappLink } from '../config/config'

const ICONS = { Wrench, Zap, Disc3, Snowflake, ScanLine, ShieldCheck }

export default function Servicos() {
  return (
    <section id="servicos" className="section-padding bg-bosch-gray-light relative overflow-hidden">
      {/* Detalhe decorativo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-bosch-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="container-app relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <span className="eyebrow">Nossos Serviços</span>
          <h2 className="section-title mt-4">
            Serviços automotivos com{' '}
            <span className="text-bosch-red">qualidade Bosch</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Mecânica, auto elétrica, pneus e diagnóstico computadorizado executados por profissionais especializados.
          </p>
        </div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {config.servicos.map((servico, idx) => {
            const Icon = ICONS[servico.icone] || Wrench

            return (
              <div
                key={servico.id}
                className="group bg-white rounded-xl overflow-hidden shadow-md card-hover reveal"
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                {/* Imagem */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={servico.imagem}
                    alt={servico.titulo}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bosch-graphite/80 via-bosch-graphite/20 to-transparent" />

                  {/* Ícone */}
                  <div className="absolute bottom-4 left-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-bosch-red shadow-lg shadow-bosch-red/40">
                      <Icon className="h-6 w-6 text-white" strokeWidth={2.2} />
                    </div>
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-bosch-graphite group-hover:text-bosch-red transition-colors">
                    {servico.titulo}
                  </h3>
                  <p className="mt-2 text-sm text-bosch-gray leading-relaxed">
                    {servico.descricao}
                  </p>

                  {/* Itens */}
                  <ul className="mt-4 space-y-1.5">
                    {servico.itens.slice(0, 4).map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-bosch-graphite">
                        <span className="h-1.5 w-1.5 rounded-full bg-bosch-red flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={whatsappLink(config.whatsapp.mensagemServico(servico.titulo))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-bosch-blue hover:text-bosch-red transition-colors group/cta"
                  >
                    Solicitar serviço
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/cta:translate-x-1" />
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
