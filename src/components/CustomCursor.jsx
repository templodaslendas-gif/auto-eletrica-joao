import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const target  = useRef({ x: -200, y: -200 })
  const current = useRef({ x: -200, y: -200 })
  const raf     = useRef(null)
  const isHover = useRef(false)

  useEffect(() => {
    // Apenas em dispositivos com mouse real
    if (!window.matchMedia('(pointer: fine)').matches) return

    const onMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY }
      const el = e.target
      isHover.current = !!(
        el.tagName === 'A' ||
        el.tagName === 'BUTTON' ||
        el.closest('a') ||
        el.closest('button')
      )
    }

    const tick = () => {
      // Ring segue com lag (lerp)
      current.current.x += (target.current.x - current.current.x) * 0.13
      current.current.y += (target.current.y - current.current.y) * 0.13

      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate(calc(${target.current.x}px - 50%), calc(${target.current.y}px - 50%))`
      }

      if (ringRef.current) {
        const size = isHover.current ? 52 : 36
        ringRef.current.style.transform =
          `translate(calc(${current.current.x}px - 50%), calc(${current.current.y}px - 50%))`
        ringRef.current.style.width  = `${size}px`
        ringRef.current.style.height = `${size}px`
        ringRef.current.style.opacity = isHover.current ? '0.75' : '0.45'
        ringRef.current.style.borderColor = isHover.current ? '#E2001A' : '#E2001A'
      }

      raf.current = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove)
    raf.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <>
      {/* Ponto central — segue instantaneamente */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[500] pointer-events-none hidden md:block w-2 h-2 rounded-full bg-bosch-red"
        style={{ willChange: 'transform' }}
      />

      {/* Anel externo — segue com lag */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[500] pointer-events-none hidden md:block rounded-full border-2 border-bosch-red"
        style={{
          width: 36,
          height: 36,
          opacity: 0.45,
          willChange: 'transform',
          transition: 'width 0.2s ease, height 0.2s ease, opacity 0.2s ease',
        }}
      />
    </>
  )
}
