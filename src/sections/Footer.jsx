import { Facebook, MapPin, Phone, Mail } from 'lucide-react'
import Logo from '../components/Logo'
import { config } from '../config/config'

const linksRapidos = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Contato', href: '#contato' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-bosch-graphite text-white relative overflow-hidden">
      {/* Barra vermelha topo */}
      <div className="h-1 bg-gradient-to-r from-bosch-red via-bosch-blue to-bosch-red" />

      <div className="container-app py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Coluna 1: Logo + descrição */}
          <div className="lg:col-span-2">
            <Logo variant="light" />
            <p className="mt-5 text-white/70 text-sm leading-relaxed max-w-md">
              {config.empresa.subBrand} em {config.empresa.cidade}. Serviços automotivos especializados com transparência, honestidade e qualidade Bosch.
            </p>

            {config.contato.redes.facebook && (
              <a
                href={config.contato.redes.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm text-white/70 hover:text-bosch-red transition-colors group"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 group-hover:bg-bosch-red transition-colors">
                  <Facebook className="h-4 w-4" />
                </span>
                Siga no Facebook
              </a>
            )}
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">
              Links Rápidos
            </h4>
            <div className="h-0.5 w-8 bg-bosch-red mt-2 mb-5" />
            <ul className="space-y-2.5">
              {linksRapidos.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-bosch-red hover:translate-x-1 inline-block transition-all"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Contato */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">
              Contato
            </h4>
            <div className="h-0.5 w-8 bg-bosch-red mt-2 mb-5" />
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="h-4 w-4 text-bosch-red mt-0.5 flex-shrink-0" />
                <span>
                  {config.contato.endereco.rua}
                  <br />
                  {config.contato.endereco.bairro} — {config.contato.endereco.cidade}/{config.contato.endereco.estado}
                </span>
              </li>
              <li>
                <a
                  href={`tel:+55${config.contato.telefone}`}
                  className="flex items-center gap-3 text-sm text-white/70 hover:text-bosch-red transition-colors"
                >
                  <Phone className="h-4 w-4 text-bosch-red flex-shrink-0" />
                  {config.contato.telefoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${config.contato.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/70 hover:text-[#25D366] transition-colors"
                >
                  <svg className="h-4 w-4 text-[#25D366] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  {config.contato.whatsappDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha de copyright */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50 text-center md:text-left">
            © {year} {config.empresa.nome}. Todos os direitos reservados.
          </p>
          <p className="text-xs text-white/40 flex items-center gap-2">
            Desenvolvido por{' '}
            <span className="text-bosch-red font-semibold">FFR do Brasil Tecnology</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
