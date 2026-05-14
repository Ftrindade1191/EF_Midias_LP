'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Container from '@/components/layout/Container'
import Badge from '@/components/ui/Badge'

const diferenciais = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
        <path d="m15 5 4 4"/>
      </svg>
    ),
    title: 'Copy primeiro',
    description: 'A página é escrita antes de ser desenhada. Cada linha vai direto no problema de quem lê e mostra que a saída existe. Não tem texto genérico que serve pra todo mundo e não convence ninguém.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Entrega rápida',
    description: 'Do briefing ao ar em uma semana. Copy, design e publicação sem reunião de alinhamento, sem etapas que não entregam nada.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2"/>
        <path d="M12 12v.01M8 12v.01M16 12v.01"/>
        <path d="M2 10h20"/>
      </svg>
    ),
    title: 'Sem custo de hospedagem',
    description: 'A LP roda sem Hostinger, sem Hostgator, sem mensalidade escondida. Você paga só o domínio. Os R$600/ano de hospedagem ficam no seu bolso.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    title: 'Velocidade no carregamento',
    description: 'Infraestrutura diferente das plataformas tradicionais. A página carrega antes do usuário fechar a aba.',
  },
]

export default function LandingPagePortfolio() {
  return (
    <section id="landing-pages" className="bg-[#1B1B1E] py-20 md:py-[120px] border-t border-[#2E2E32]">
      <Container>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <Badge variant="gold">Landing Pages</Badge>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#FBFFFE] mb-4">
            Página genérica não converte.
          </h2>
          <p className="text-[#8E8E93] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Cada LP começa pelo problema real do seu cliente e é entregue com o que há de melhor: copy que converte, carregamento rápido e zero custo de hospedagem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {diferenciais.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#252528] border border-[#2E2E32] rounded-2xl p-6 hover:border-[#FAA916]/35 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)] transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-[#01366B]/20 flex items-center justify-center mb-4 text-[#FAA916]">
                {item.icon}
              </div>
              <h3 className="text-[#FBFFFE] font-bold mb-2">{item.title}</h3>
              <p className="text-[#8E8E93] text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Link
            href="/landing-pages"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-b from-[#FAA916] to-[#F59E0B] text-[#1B1B1E] font-semibold text-sm rounded-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_4px_0_#C47A0E,0_6px_12px_rgba(250,169,22,0.35)] hover:-translate-y-0.5 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_6px_0_#C47A0E,0_8px_16px_rgba(250,169,22,0.45)] active:translate-y-0.5 active:shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_2px_0_#C47A0E,0_4px_8px_rgba(250,169,22,0.2)] transition-all duration-200"
          >
            Ver portfolio completo
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </motion.div>

      </Container>
    </section>
  )
}
