'use client'

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import HeroParticles from './HeroParticles'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Partículas flutuantes - atrás de tudo */}
      <HeroParticles />
      
      {/* Background gradient */}
      <div 
        className="absolute inset-0 opacity-50 z-[1]"
        style={{
          background: 'radial-gradient(circle at top right, rgba(37, 99, 235, 0.08) 0%, rgba(255, 255, 255, 1) 70%)'
        }}
      />
      
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Text Content */}
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Efeito Typewriter */}
            <div className="space-y-2 mb-6 leading-[1.1]">
              <h1 className="text-black text-4xl md:text-5xl lg:text-7xl font-bold">
                Transformamos
              </h1>
              <h1 
                className="bg-clip-text text-transparent text-4xl md:text-5xl lg:text-7xl font-bold"
                style={{
                  backgroundImage: 'linear-gradient(to right, #2563EB, #3B82F6)'
                }}
              >
                <TypeAnimation
                  sequence={[
                    'dados em leads.',
                    2000, // Pausa 2s após digitar
                    '', // Apaga (velocidade 50ms)
                    500, // Pausa 500ms após apagar
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
                  speed={100}
                  deletionSpeed={50}
                  repeat={Infinity}
                  cursor={true}
                  style={{ 
                    display: 'inline-block',
                  }}
                />
              </h1>
            </div>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
              Engenharia de software, tráfego pago e IA para soluções em negócios locais.
            </p>
            
            <div className="mt-8 flex flex-col gap-6">
              {/* Botões CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="primary" 
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
              
              {/* NOVO: Badge de prova social */}
              <div className="flex items-center gap-3">
                <div className="h-px w-12 bg-blue-500"></div>
                <p className="text-base lg:text-xl font-semibold">
                  <span className="text-blue-500">+R$35 milhões</span>
                  <span className="text-gray-400 ml-2">em vendas geradas</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
