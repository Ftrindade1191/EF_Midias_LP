'use client'

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import HeroParticles from './HeroParticles'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#1B1B1E]">
      {/* Partículas flutuantes */}
      <HeroParticles />

      {/* Glow sutil navy no canto superior direito */}
      <div
        className="absolute inset-0 opacity-30 z-[1] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 75% 20%, rgba(1, 54, 107, 0.35) 0%, transparent 60%)'
        }}
      />
      {/* Glow dourado suave no canto inferior esquerdo */}
      <div
        className="absolute inset-0 opacity-20 z-[1] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 20% 80%, rgba(250, 169, 22, 0.2) 0%, transparent 50%)'
        }}
      />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Efeito Typewriter */}
            <div className="space-y-2 mb-6 leading-[1.1]">
              <h1 className="text-[#FBFFFE] text-4xl md:text-5xl lg:text-7xl font-bold">
                Transformamos
              </h1>
              <h1
                className="bg-clip-text text-transparent text-4xl md:text-5xl lg:text-7xl font-bold"
                style={{
                  backgroundImage: 'linear-gradient(to right, #FAA916, #F97316)'
                }}
              >
                <TypeAnimation
                  sequence={[
                    'dados em leads.',
                    2000,
                    '',
                    500,
                    'leads em vendas.',
                    2000,
                    '',
                    500,
                    'ideias em ações.',
                    2000,
                    '',
                    500,
                  ]}
                  wrapper="span"
                  deletionSpeed={50}
                  repeat={Infinity}
                  cursor={true}
                  style={{ display: 'inline-block' }}
                />
              </h1>
            </div>

            <p className="text-lg md:text-xl text-[#FBFFFE]/55 mb-8 max-w-2xl">
              Engenharia de software, tráfego pago e IA para soluções em negócios.
            </p>

            <div className="mt-8 flex flex-col gap-6">
              {/* Botões CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="gold"
                  size="lg"
                  href="https://wa.me/5519995800412?text=Olá! Gostaria de agendar uma consultoria estratégica."
                >
                  Agende Consultoria
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Ver Projetos
                </Button>
              </div>

              {/* Badge de prova social */}
              <div className="flex items-center justify-center gap-3">
                <div className="h-px w-12 bg-[#FAA916]/50"></div>
                <p className="text-base lg:text-xl font-semibold">
                  <span className="text-[#FAA916]">+R$35 milhões</span>
                  <span className="text-[#FBFFFE]/40 ml-2">em vendas geradas</span>
                </p>
                <div className="h-px w-12 bg-[#FAA916]/50"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
