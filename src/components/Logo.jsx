import { config } from '../config/config'

export default function Logo({ variant = 'light', compact = false }) {
  const isDark = variant === 'dark'
  const subColor = isDark ? 'text-bosch-gray' : 'text-white/70'

  return (
    <div className="flex items-center gap-3">
      {/* Logo real da empresa */}
      <div className="relative flex-shrink-0">
        <img
          src="/images/logo.png"
          alt="Auto Elétrica e Mecânica do João"
          className="h-11 w-11 object-contain rounded"
        />
      </div>

      {!compact && (
        <div className="flex flex-col leading-tight">
          <span className={`text-[15px] font-extrabold tracking-tight ${isDark ? 'text-bosch-graphite' : 'text-white'}`}>
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
