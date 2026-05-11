import { CheckCircle2, Award, ShieldCheck } from 'lucide-react'
import { config } from '../config/config'

export default function Sobre() {
  return (
    <section id="sobre" className="section-padding bg-white">
      <div className="container-app">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Coluna esquerda — imagem */}
          <div className="relative reveal">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={config.sobre.imagem}
                alt="Oficina Auto Elétrica e Mecânica do João"
                loading="lazy"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bosch-graphite/40 via-transparent to-transparent" />
            </div>

            {/* Card flutuante — Bosch Car Service */}
            <div className="absolute -bottom-6 -right-6 md:-right-10 bg-bosch-blue-deep text-white p-6 rounded-xl shadow-2xl max-w-xs border-t-4 border-bosch-red">
              <div className="flex items-center gap-3 mb-2">
                <Award className="h-7 w-7 text-bosch-red" />
                <span className="text-xs font-bold uppercase tracking-widest text-white/70">
                  Certificado
                </span>
              </div>
              <p className="text-lg font-bold leading-tight">
                Atendimento especializado<br />
                Bosch Car Service
              </p>
              <p className="text-sm text-white/70 mt-1">
                Qualidade e confiança
              </p>
            </div>

            {/* Detalhe decorativo */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-4 border-bosch-red rounded-xl -z-10" />
          </div>

          {/* Coluna direita — texto */}
          <div className="reveal">
            <span className="eyebrow">Sobre a Empresa</span>
            <h2 className="section-title mt-4">
              Confiança e qualidade técnica em{' '}
              <span className="text-bosch-red">cada serviço</span>
            </h2>

            <p className="mt-6 text-base md:text-lg text-bosch-gray leading-relaxed">
              {config.sobre.texto}
            </p>

            {/* Diferenciais */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {config.sobre.diferenciais.map((diff) => (
                <div
                  key={diff}
                  className="flex items-center gap-3 p-3 rounded-lg bg-bosch-gray-light/50 border border-transparent hover:border-bosch-red/20 transition-colors"
                >
                  <CheckCircle2 className="h-5 w-5 text-bosch-red flex-shrink-0" />
                  <span className="text-sm font-medium text-bosch-graphite">
                    {diff}
                  </span>
                </div>
              ))}
            </div>

            {/* Mini selo */}
            <div className="mt-8 flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-bosch-blue-deep to-bosch-blue text-white">
              <ShieldCheck className="h-10 w-10 text-bosch-red flex-shrink-0" />
              <div>
                <p className="font-bold text-sm">Padrão Bosch Car Service</p>
                <p className="text-xs text-white/80">
                  Rigor técnico, peças de qualidade e diagnóstico preciso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
