import { useEffect, useState } from 'react'
import { config } from '../config/config'

export default function PageLoader() {
  const [phase, setPhase] = useState('in') // in → fading → gone

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('fading'), 1400)
    const t2 = setTimeout(() => setPhase('gone'), 1900)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (phase === 'gone') return null

  return (
    <div
      className={`fixed inset-0 z-[300] flex flex-col items-center justify-center bg-bosch-graphite transition-opacity duration-500 ${
        phase === 'fading' ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Grade decorativa de fundo */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* Conteúdo */}
      <div className="relative flex flex-col items-center gap-5">
        {/* Ícone */}
        <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl bg-bosch-red shadow-2xl shadow-bosch-red/50">
          <span className="absolute inset-0 rounded-2xl animate-ping bg-bosch-red opacity-20" />
          <span className="text-5xl font-black text-white select-none">J</span>
        </div>

        {/* Nome */}
        <div className="text-center">
          <p className="text-white font-bold text-lg tracking-wide">{config.empresa.nomeCurto}</p>
          <p className="text-white/50 text-xs font-medium tracking-[0.3em] uppercase mt-1">
            {config.empresa.subBrand}
          </p>
        </div>

        {/* Barra de progresso */}
        <div className="w-40 h-0.5 bg-white/10 rounded-full overflow-hidden mt-1">
          <div className="h-full bg-bosch-red rounded-full animate-loader-bar" />
        </div>
      </div>
    </div>
  )
}
