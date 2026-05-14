'use client'

import { useEffect, useState } from 'react'

interface Particle {
  id: number
  left: number
  size: number
  opacity: number
  duration: number
  delay: number
  color: string
}

const PARTICLE_COLORS = ['#FAA916', '#FAA916', '#FAA916', '#01366B', '#FBFFFE']

export default function HeroParticles() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const getParticleCount = () => {
      if (typeof window === 'undefined') return 40
      if (window.innerWidth < 640) return 20
      if (window.innerWidth < 1024) return 30
      return 40
    }

    const generateParticles = () => {
      const particleCount = getParticleCount()
      const newParticles: Particle[] = Array.from({ length: particleCount }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 4 + 2,
        opacity: Math.random() * 0.25 + 0.08,
        duration: Math.random() * 40 + 20,
        delay: Math.random() * -20,
        color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
      }))
      setParticles(newParticles)
    }

    generateParticles()

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
            background: particle.color,
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
