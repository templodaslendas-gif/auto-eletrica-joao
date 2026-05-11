import { config } from '../config/config'

export default function Logo({ variant = 'light', compact = false }) {
  const isDark = variant === 'dark'
  const mainColor = isDark ? 'text-bosch-graphite' : 'text-white'
  const subColor = isDark ? 'text-bosch-gray' : 'text-white/70'

  return (
    <div className="flex items-center gap-3">
      {/* Marca visual — bloco com J + linha vermelha (estilo Bosch) */}
      <div className="relative flex-shrink-0">
        <div className="flex h-11 w-11 items-center justify-center rounded bg-bosch-blue-deep shadow-md">
          <span className="font-display text-2xl font-black text-white leading-none mt-0.5">J</span>
        </div>
        <div className="absolute -bottom-0.5 left-0 h-1 w-full bg-bosch-red rounded-sm" />
      </div>

      {!compact && (
        <div className="flex flex-col leading-tight">
          <span className={`text-[15px] md:text-[15px] font-extrabold tracking-tight ${mainColor}`}>
            Auto Elétrica e Mecânica
          </span>
          <span className={`text-[11px] font-semibold uppercase tracking-widest ${subColor}`}>
            {config.empresa.subBrand}
          </span>
        </div>
      )}
    </div>
  )
}
