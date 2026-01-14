'use client'

import { useEffect, useState } from 'react'

interface Particle {
  id: number
  left: number
  size: number
  opacity: number
  duration: number
  delay: number
}

export default function HeroParticles() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    // Responsividade: menos partículas em mobile
    const getParticleCount = () => {
      if (typeof window === 'undefined') return 40
      if (window.innerWidth < 640) return 20 // Mobile
      if (window.innerWidth < 1024) return 30 // Tablet
      return 40 // Desktop
    }

    // Gerar partículas com propriedades aleatórias
    const generateParticles = () => {
      const particleCount = getParticleCount()
      const newParticles: Particle[] = Array.from({ length: particleCount }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 4 + 2, // 2-6px
        opacity: Math.random() * 0.2 + 0.1, // 0.1-0.3
        duration: Math.random() * 40 + 20, // 20-60s
        delay: Math.random() * -20, // Delay negativo para começar em posições diferentes
      }))
      setParticles(newParticles)
    }

    generateParticles()

    // Atualizar partículas no resize (com debounce para performance)
    let resizeTimeout: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        generateParticles()
      }, 250)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(resizeTimeout)
    }
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            position: 'absolute',
            left: `${particle.left}%`,
            bottom: '-10px',
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: '#2563EB',
            opacity: particle.opacity,
            borderRadius: '50%',
            filter: 'blur(1px)',
            willChange: 'transform',
            animation: `float ${particle.duration}s linear infinite`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
