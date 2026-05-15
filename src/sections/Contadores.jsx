import { useEffect, useRef, useState } from 'react'
import { config } from '../config/config'

const anosExperiencia = new Date().getFullYear() - config.empresa.anoFundacao

const STATS = [
  { prefix: '+', value: anosExperiencia, suffix: '', label: 'Anos de experiência' },
  { prefix: '+', value: 3000, suffix: '', label: 'Clientes atendidos' },
  { prefix: '+', value: 8000, suffix: '', label: 'Serviços realizados' },
  { prefix: '', value: 5, suffix: '★', label: 'Avaliação Google' },
]

function AnimatedCounter({ prefix, value, suffix, label, active }) {
  const [count, setCount] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (!active || started.current) return
    started.current = true

    const duration = 1600
    const totalFrames = Math.round((duration / 1000) * 60)
    let frame = 0

    const tick = () => {
      frame++
      const eased = 1 - Math.pow(1 - frame / totalFrames, 3)
      setCount(Math.round(value * eased))
      if (frame < totalFrames) requestAnimationFrame(tick)
      else setCount(value)
    }

    requestAnimationFrame(tick)
  }, [active, value])

  return (
    <div className="flex flex-col items-center gap-1 px-4 py-2">
      <p className="text-4xl sm:text-5xl font-extrabold text-bosch-red tabular-nums leading-none">
        {prefix}{count > 9 ? count.toLocaleString('pt-BR') : count}{suffix}
      </p>
      <p className="mt-1 text-xs sm:text-sm font-medium text-white/60 uppercase tracking-widest text-center">
        {label}
      </p>
    </div>
  )
}

export default function Contadores() {
  const ref = useRef(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="bg-bosch-graphite border-t-2 border-bosch-red/30">
      <div className="container-app py-10">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`${i < STATS.length - 1 ? 'border-r border-white/10' : ''} ${i >= 2 ? 'border-t border-white/10 md:border-t-0' : ''}`}
            >
              <AnimatedCounter {...stat} active={active} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
