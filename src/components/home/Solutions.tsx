'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/layout/Container'

interface SolutionCardProps {
  imageSrc: string
  imageAlt: string
  title: string
  description: string
  ctaText: string
  href?: string
  isScroll?: boolean
  scrollToId?: string
  delay?: number
}

function SolutionCard({ 
  imageSrc, 
  imageAlt, 
  title, 
  description, 
  ctaText, 
  href, 
  isScroll,
  scrollToId,
  delay = 0 
}: SolutionCardProps) {
  const handleScroll = (e: React.MouseEvent) => {
    if (isScroll && scrollToId) {
      e.preventDefault()
      const element = document.getElementById(scrollToId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const cardContent = (
    <div className="group relative h-full bg-white p-8 lg:p-10 rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-blue-500/30 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(37,99,235,0.1)] transition-all duration-300 flex flex-col items-center">
      
      {/* Ilustração customizada */}
      <div className="mb-8 flex justify-center">
        <div className="relative w-24 h-24 lg:w-32 lg:h-32 transition-transform duration-300 group-hover:scale-110">
          <Image 
            src={imageSrc}
            width={128}
            height={128}
            alt={imageAlt}
            className="object-contain"
            priority
          />
        </div>
      </div>
      
      {/* Título */}
      <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 text-center">
        {title}
      </h3>
      
      {/* Descrição */}
      <p className="text-sm lg:text-base text-gray-600 mb-8 leading-relaxed text-center flex-grow">
        {description}
      </p>
      
      {/* Botão 3D com gradiente azul */}
      <div className="flex justify-center mt-auto">
        {isScroll && scrollToId ? (
          <button 
            onClick={handleScroll}
            className="relative px-6 py-3 bg-gradient-to-b from-blue-500 to-blue-600 text-white font-semibold rounded-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_4px_0_#1E40AF,0_6px_12px_rgba(37,99,235,0.2)] hover:-translate-y-0.5 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_6px_0_#1E40AF,0_8px_16px_rgba(37,99,235,0.3)] active:translate-y-0.5 active:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_2px_0_#1E40AF,0_4px_8px_rgba(37,99,235,0.2)] transition-all duration-200 flex items-center gap-2 group/button focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {ctaText}
            <svg className="w-4 h-4 group-hover/button:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        ) : href ? (
          <Link
            href={href}
            className="relative px-6 py-3 bg-gradient-to-b from-blue-500 to-blue-600 text-white font-semibold rounded-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_4px_0_#1E40AF,0_6px_12px_rgba(37,99,235,0.2)] hover:-translate-y-0.5 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_6px_0_#1E40AF,0_8px_16px_rgba(37,99,235,0.3)] active:translate-y-0.5 active:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_2px_0_#1E40AF,0_4px_8px_rgba(37,99,235,0.2)] transition-all duration-200 flex items-center gap-2 group/button focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {ctaText}
            <svg className="w-4 h-4 group-hover/button:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        ) : null}
      </div>
      
      {/* Brilho decorativo sutil */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/[0.03] rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="h-full"
    >
      {cardContent}
    </motion.div>
  )
}

export default function Solutions() {
  return (
    <section className="bg-white py-20 lg:py-[120px] px-6 lg:px-20 overflow-hidden">
      <Container className="max-w-[1280px] p-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Nossas soluções
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
            Use a tecnologia a favor da sua empresa com nossas soluções.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="h-full">
            <SolutionCard
              imageSrc="/images/traffic-illustration.png"
              imageAlt="Tráfego Pago - Geração de Leads Qualificados"
              title="Tráfego pago"
              description="Geração de leads qualificados através de Google e Meta Ads."
              ctaText="Ver Portfólio"
              isScroll={true}
              scrollToId="trafego-pago"
              delay={0}
            />
          </div>
          
          <div className="h-full">
            <SolutionCard
              imageSrc="/images/ai-illustration.png"
              imageAlt="EF Vendas - Sistema de IA Comercial"
              title="EF Vendas (IA + CRM)"
              description="Sistema de atendimento humanizado completo, 24/7 + CRM automatizado. Zero leads desperdiçados."
              ctaText="Conhecer sistema"
              href="/ef-vendas"
              delay={0.1}
            />
          </div>
          
          <div className="h-full md:col-span-2 lg:col-span-1 md:max-w-[50%] md:mx-auto lg:max-w-none">
            <SolutionCard
              imageSrc="/images/dev-illustration.png"
              imageAlt="Desenvolvimento Sob Medida"
              title="Desenvolvimento sob medida"
              description="Apps e sistemas web personalizados. Construímos a solução ideal para sua marca, baseado nas suas necessidades reais."
              ctaText="Conhecer sistema"
              href="/bfd"
              delay={0.2}
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
