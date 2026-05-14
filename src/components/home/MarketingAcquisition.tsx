'use client'

import { motion } from 'framer-motion'
import Container from '@/components/layout/Container'

export default function MarketingAcquisition() {
  return (
    <section className="bg-[#1B1B1E] py-20 lg:py-[120px] px-6 lg:px-20 overflow-hidden border-t border-[#2E2E32]">
      <Container className="max-w-[1280px] p-0">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-4xl lg:text-[56px] font-bold text-[#FBFFFE] leading-[1.1] text-center max-w-4xl mx-auto mb-6">
            Comece a enxergar o{' '}
            <span
              className="bg-clip-text text-transparent font-extrabold"
              style={{ backgroundImage: 'linear-gradient(to right, #FAA916, #F97316)' }}
            >
              marketing como ele deve ser
            </span>
            : uma ferramenta de aquisição de novos clientes.
          </h2>
          <p className="text-lg lg:text-xl font-normal text-[#8E8E93] leading-relaxed text-center max-w-3xl mx-auto">
            Nosso trabalho não é pra &quot;fazer post no Instagram&quot;, é estratégia de aquisição e crescimento.
            Construímos um sistema de aquisição de clientes junto com você. Se você trata isso como
            prioridade estratégica, você está no lugar certo.
          </p>
        </motion.div>

        {/* Comparativo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden border border-[#2E2E32]"
        >
          {/* Esquerda — Para você */}
          <div className="relative bg-[#1D2820] px-8 py-10 lg:px-12 lg:py-12 border-b border-[#2E2E32] lg:border-b-0 lg:border-r lg:border-[#2E2E32]">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-emerald-500/70 via-emerald-500/30 to-transparent" />
            <p className="text-emerald-400 text-[11px] font-bold uppercase tracking-[0.18em] mb-8">
              Para você
            </p>
            <ul className="space-y-6">
              {[
                "Está pronto para investir em crescimento real",
                "Sabe que lead não surge do nada: é gerado com estratégia",
                "Enxerga aquisição como a veia principal do negócio",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-[#FBFFFE]/70 text-base leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Direita — Não é para você */}
          <div className="relative bg-[#252528] px-8 py-10 lg:px-12 lg:py-12">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-red-500/50 via-red-500/20 to-transparent" />
            <p className="text-red-400/80 text-[11px] font-bold uppercase tracking-[0.18em] mb-8">
              Não é para você
            </p>
            <ul className="space-y-6">
              {[
                "Acha que marketing é só postar nas redes sociais",
                "Não tem clareza sobre produto, público ou operação",
                "Quer terceirizar tudo e sumir do processo",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-red-400/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <p className="text-[#FBFFFE]/40 text-base leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
