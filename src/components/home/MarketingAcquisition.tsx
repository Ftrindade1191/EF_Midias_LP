'use client'

import { motion } from 'framer-motion'
import Container from '@/components/layout/Container'

export default function MarketingAcquisition() {
  return (
    <section className="bg-black py-20 lg:py-[120px] px-6 lg:px-20 overflow-hidden">
      <Container className="max-w-[1280px] p-0">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h1 className="text-4xl lg:text-[56px] font-bold text-white leading-[1.1] text-center max-w-4xl mx-auto mb-6">
            Comece a enxergar o{' '}
            <span className="bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent font-extrabold">
              marketing como ele deve ser
            </span>
            : uma ferramenta de aquisição de novos clientes.
          </h1>
          <p className="text-lg lg:text-xl font-normal text-gray-400 leading-relaxed text-center max-w-3xl mx-auto">
            Nosso trabalho não é pra &quot;fazer post no Instagram&quot;, é estratégia de aquisição e crescimento. 
            Construímos um sistema de aquisição de clientes junto com você. Se você trata isso como 
            prioridade estratégica, você está no lugar certo.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1 - Atendemos */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ 
              scale: 1.02,
              y: -8,
              transition: { duration: 0.2 } 
            }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group relative bg-gradient-to-b from-gray-900 to-gray-800 p-8 lg:p-10 rounded-3xl border-t-4 border-emerald-500 shadow-xl transition-all duration-300"
          >
            {/* Efeito de brilho no hover */}
            <div className="absolute inset-0 rounded-3xl bg-emerald-500/0 group-hover:bg-emerald-500/[0.03] transition-colors duration-300" />
            
            {/* Ícone ✅ grande */}
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 group-hover:scale-110 transition-all duration-300">
                <svg className="w-10 h-10 lg:w-12 lg:h-12 text-emerald-500 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            
            <h3 className="text-2xl lg:text-3xl font-bold text-emerald-400 mb-8 text-center">
              Atendemos empresários que:
            </h3>
            
            <ul className="space-y-6">
              {[
                "Estão prontos para investir em crescimento real",
                "Sabem que leads não surgem do nada, são gerados com estratégia",
                "Entendem que aquisição é a veia principal do negócio"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Card 2 - Não é para quem */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ 
              scale: 1.02,
              y: -8,
              transition: { duration: 0.2 } 
            }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group relative bg-gradient-to-b from-gray-900 to-gray-800 p-8 lg:p-10 rounded-3xl border-t-4 border-red-500 shadow-xl transition-all duration-300"
          >
            {/* Efeito de brilho no hover */}
            <div className="absolute inset-0 rounded-3xl bg-red-500/0 group-hover:bg-red-500/[0.03] transition-colors duration-300" />
            
            {/* Ícone ❌ grande */}
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-red-500/10 flex items-center justify-center group-hover:bg-red-500/20 group-hover:scale-110 transition-all duration-300">
                <svg className="w-10 h-10 lg:w-12 lg:h-12 text-red-500 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </div>
            
            <h3 className="text-2xl lg:text-3xl font-bold text-red-400 mb-8 text-center">
              Não é para quem:
            </h3>
            
            <ul className="space-y-6">
              {[
                "Acha que \"fazer marketing\" é só postar nas redes",
                "Não tem clareza sobre seu produto, público e operação",
                "Quer terceirizar tudo e sumir"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
