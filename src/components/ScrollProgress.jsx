import { useEffect, useRef } from 'react'

export default function ScrollProgress() {
  const barRef = useRef(null)

  useEffect(() => {
    const update = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      const pct = scrollHeight <= clientHeight
        ? 0
        : (scrollTop / (scrollHeight - clientHeight)) * 100
      if (barRef.current) barRef.current.style.width = `${pct}%`
    }

    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div className="fixed top-0 left-0 z-[200] w-full h-0.5 pointer-events-none bg-transparent">
      <div
        ref={barRef}
        className="h-full bg-gradient-to-r from-bosch-red to-red-400"
        style={{
          width: '0%',
          boxShadow: '0 0 10px rgba(226,0,26,0.7), 0 0 4px rgba(226,0,26,0.4)',
        }}
      />
    </div>
  )
}
