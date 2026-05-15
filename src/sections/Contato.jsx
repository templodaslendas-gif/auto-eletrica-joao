import { MapPin, Phone, Clock, MessageCircle, Facebook } from 'lucide-react'
import { config, whatsappLink, telefoneLink } from '../config/config'

export default function Contato() {
  return (
    <section id="contato" className="section-padding bg-white">
      <div className="container-app">
        <div className="text-center max-w-3xl mx-auto mb-14 reveal">
          <span className="eyebrow">Fale Conosco</span>
          <h2 className="section-title mt-4">
            Entre em <span className="text-bosch-red">contato</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Estamos prontos para atender você com toda a qualidade Bosch Car Service.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Informações de contato */}
          <div className="lg:col-span-2 space-y-4 reveal">
            {/* WhatsApp */}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 rounded-xl bg-gradient-to-br from-[#25D366] to-[#1faa54] text-white shadow-md hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm flex-shrink-0">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/80 font-semibold">
                    WhatsApp
                  </p>
                  <p className="text-xl font-bold mt-1">{config.contato.whatsappDisplay}</p>
                  <p className="text-sm text-white/80 mt-1 group-hover:underline">
                    Clique para conversar agora →
                  </p>
                </div>
              </div>
            </a>

            {/* Telefone */}
            <a
              href={telefoneLink()}
              className="block p-6 rounded-xl bg-white border-2 border-bosch-gray-light hover:border-bosch-red hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-bosch-blue-deep text-white flex-shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-bosch-gray font-semibold">
                    Telefone
                  </p>
                  <p className="text-xl font-bold text-bosch-graphite mt-1">
                    {config.contato.telefoneDisplay}
                  </p>
                </div>
              </div>
            </a>

            {/* Endereço */}
            <div className="p-6 rounded-xl bg-white border-2 border-bosch-gray-light">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-bosch-red text-white flex-shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-bosch-gray font-semibold">
                    Endereço
                  </p>
                  <p className="text-base font-bold text-bosch-graphite mt-1 leading-snug">
                    {config.contato.endereco.rua}
                    <br />
                    {config.contato.endereco.bairro} — {config.contato.endereco.cidade} / {config.contato.endereco.estado}
                  </p>
                </div>
              </div>
            </div>

            {/* Horários */}
            <div className="p-6 rounded-xl bg-bosch-graphite text-white">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-bosch-red flex-shrink-0">
                  <Clock className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-widest text-white/60 font-semibold">
                    Horário de Funcionamento
                  </p>
                  <div className="mt-2 space-y-1">
                    {config.contato.horarios.map((h) => {
                      const fechado = h.horario.toLowerCase() === 'fechado'
                      return (
                        <div key={h.dias} className="flex justify-between text-sm">
                          <span className={`font-semibold ${fechado ? 'text-white/50' : ''}`}>{h.dias}</span>
                          <span className={fechado ? 'text-bosch-red font-semibold' : 'text-white/80'}>{h.horario}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Facebook */}
            {config.contato.redes.facebook && (
              <a
                href={config.contato.redes.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-[#1877F2] text-white hover:bg-[#1463cc] transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="font-semibold text-sm">Siga no Facebook</span>
              </a>
            )}
          </div>

          {/* Mapa */}
          <div className="lg:col-span-3 reveal">
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-full min-h-[500px] border-4 border-white">
              <iframe
                src={config.contato.endereco.mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '500px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Auto Elétrica e Mecânica do João"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
