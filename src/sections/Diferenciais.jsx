import {
  Handshake,
  ScanSearch,
  UserCheck,
  Award,
  Users,
  BadgePercent,
  CheckCircle2,
} from 'lucide-react'
import { config } from '../config/config'

const ICONS = { Handshake, ScanSearch, UserCheck, Award, Users, BadgePercent }

export default function Diferenciais() {
  return (
    <section className="section-padding bg-bosch-gray-light relative overflow-hidden">
      <div className="container-app relative">
        <div className="text-center max-w-3xl mx-auto mb-14 reveal">
          <span className="eyebrow">Por que escolher</span>
          <h2 className="section-title mt-4">
            Nossos <span className="text-bosch-red">diferenciais</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Mais do que reparos — entregamos confiança, transparência e qualidade técnica.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {config.diferenciais.map((diff, idx) => {
            const Icon = ICONS[diff.icone] || CheckCircle2

            return (
              <div
                key={diff.titulo}
                className="group relative bg-white p-7 rounded-xl border-2 border-transparent hover:border-bosch-red hover:-translate-y-1 transition-all duration-500 shadow-sm hover:shadow-xl reveal"
                style={{ transitionDelay: `${idx * 60}ms` }}
              >
                {/* Ícone */}
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-bosch-blue-deep text-white group-hover:bg-bosch-red transition-colors duration-500">
                  <Icon className="h-7 w-7" strokeWidth={2} />
                </div>

                <h3 className="mt-5 text-lg font-bold text-bosch-graphite">
                  {diff.titulo}
                </h3>
                <p className="mt-2 text-sm text-bosch-gray leading-relaxed">
                  {diff.descricao}
                </p>

                {/* Número decorativo */}
                <span className="absolute top-5 right-6 text-5xl font-extrabold text-bosch-gray-light group-hover:text-bosch-red/10 transition-colors leading-none">
                  {String(idx + 1).padStart(2, '0')}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
