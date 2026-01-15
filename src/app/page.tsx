'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Hero from '@/components/home/Hero'
import Solutions from '@/components/home/Solutions'
import MarketingAcquisition from '@/components/home/MarketingAcquisition'
import Container from '@/components/layout/Container'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'

export default function Home() {
  return (
    <>
      <Hero />
      <Solutions />
      <MarketingAcquisition />
      
      {/* Portfólio Section */}
      <section id="portfolio" className="py-20 md:py-30">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Portfólio
            </h2>
          </motion.div>

          {/* Categoria 1: Engenharia de IA */}
          <div className="mb-6 flex justify-center">
            <Badge variant="blue">Engenharia de IA</Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10">
            {/* EF Vendas Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card>
                {/* Screenshot do produto */}
                <div className="relative w-full h-48 lg:h-56 mb-6 rounded-2xl overflow-hidden">
                  <Image 
                    src="/images/portfolio-ef-vendas.png"
                    fill
                    alt="EF Vendas - Dashboard CRM e IA Comercial"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Overlay gradiente sutil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent"></div>
                </div>

                <h3 className="text-2xl font-bold mb-4">Sistema EF Vendas</h3>
                <p className="text-gray-600 mb-4">
                  Sistema automatizado com IA para qualificação de leads
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✅</span>
                    Atendimento WhatsApp 24/7
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✅</span>
                    CRM automatizado
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✅</span>
                    Qualificação inteligente
                  </li>
                </ul>
                <Button href="/ef-vendas" variant="primary">
                  Conhecer sistema
                </Button>
              </Card>
            </motion.div>
            
            {/* BFD Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card>
                {/* Screenshot do produto */}
                <div className="relative w-full h-48 lg:h-56 mb-6 rounded-2xl overflow-hidden">
                  <Image 
                    src="/images/portfolio-bfd.png"
                    fill
                    alt="BabyFood Diary - WebApp de Introdução Alimentar"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Overlay gradiente sutil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent"></div>
                </div>

                <h3 className="text-2xl font-bold mb-4">BabyFood Diary</h3>
                <p className="text-gray-600 mb-4">
                  WebApp de diário de introdução alimentar para nutricionistas
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✅</span>
                    White-label para nutricionistas
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✅</span>
                    Sistema completo
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✅</span>
                    Diferencial competitivo de mercado
                  </li>
                </ul>
                <Button href="/bfd" variant="primary">
                  Conhecer sistema
                </Button>
              </Card>
            </motion.div>
          </div>

          {/* Categoria 2: Tráfego pago */}
          <div id="trafego-pago" className="mb-6 flex justify-center mt-16 scroll-mt-20">
            <Badge variant="blue">Tráfego pago</Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Corretora MCMV */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card>
                {/* Ícone do case */}
                <div className="mb-6 flex justify-center">
                  <div className="relative w-20 h-20 lg:w-24 lg:h-24 transition-transform duration-300 group-hover:scale-110">
                    <Image 
                      src="/images/portfolio-mcmv.png"
                      width={96}
                      height={96}
                      alt="Ícone Corretora MCMV"
                      className="object-contain"
                      priority={false}
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Corretora de imóveis – empreendimentos MCMV</h3>
                <p className="text-gray-700 text-sm mb-3">
                  R$14.3K investimento | 2.019 leads gerados | R$11,4M em vendas
                </p>
                <p className="text-gray-600 text-sm">
                  Estratégia: tráfego pago com segmentação geográfica e criativos específicos para o público do Minha Casa Minha Vida. Foco total em atrair leads com real poder de compra.
                </p>
              </Card>
            </motion.div>

            {/* Ótica */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card>
                {/* Ícone do case */}
                <div className="mb-6 flex justify-center">
                  <div className="relative w-20 h-20 lg:w-24 lg:h-24 transition-transform duration-300 group-hover:scale-110">
                    <Image 
                      src="/images/portfolio-otica.png"
                      width={96}
                      height={96}
                      alt="Ícone Ótica Local"
                      className="object-contain"
                      priority={false}
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Ótica local</h3>
                <p className="text-gray-700 text-sm mb-3">
                  R$19.3K investimento | 1.574 leads gerados | R$732K em vendas
                </p>
                <p className="text-gray-600 text-sm">
                  Estratégia: marketing completo: estruturação de redes sociais, campanhas no Meta Ads e Google Ads, otimização do Google Meu Negócio e treinamento comercial.
                </p>
              </Card>
            </motion.div>

            {/* Fazenda */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card>
                {/* Ícone do case */}
                <div className="mb-6 flex justify-center">
                  <div className="relative w-20 h-20 lg:w-24 lg:h-24 transition-transform duration-300 group-hover:scale-110">
                    <Image 
                      src="/images/portfolio-madeira.png"
                      width={96}
                      height={96}
                      alt="Ícone Fazenda Madeira"
                      className="object-contain"
                      priority={false}
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Fazenda produtora de madeira</h3>
                <p className="text-gray-700 text-sm mb-3">
                  R$20K investimento | 2.600 leads gerados | R$904K em vendas
                </p>
                <p className="text-gray-600 text-sm">
                  Estratégia: posicionamento digital completo com redes sociais, Google Meu Negócio, site institucional e campanhas multi-canal (Google + Meta).
                </p>
              </Card>
            </motion.div>

            {/* Imobiliária IA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card>
                {/* Ícone do case */}
                <div className="mb-6 flex justify-center">
                  <div className="relative w-20 h-20 lg:w-24 lg:h-24 transition-transform duration-300 group-hover:scale-110">
                    <Image 
                      src="/images/portfolio-imobiliaria.png"
                      width={96}
                      height={96}
                      alt="Ícone Imobiliária com IA"
                      className="object-contain"
                      priority={false}
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Imobiliária com IA comercial</h3>
                <p className="text-gray-700 text-sm mb-3">
                  R$15.5K investimento | 1.226 leads gerados | +R$10M em vendas
                </p>
                <p className="text-gray-600 text-sm">
                  Estratégia: presença digital completa e automação comercial com IA. Implementamos uma vendedora virtual que atendia e qualificava leads em tempo real.
                </p>
              </Card>
            </motion.div>
          </div>

          {/* CTA Final - Após todo portfólio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-20 lg:mt-24"
          >
            <div className="max-w-4xl mx-auto text-center px-6">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Tem uma demanda que precisa resolver com sistema?{' '}
                <span className="text-blue-500">Entre em contato com a gente.</span>
              </h2>
              
              <div className="flex justify-center">
                <a 
                  href="https://wa.me/55199995800412?text=Olá! Tenho uma demanda de sistema personalizado."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-b from-blue-500 to-blue-600 text-white font-semibold text-sm lg:text-base rounded-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_4px_0_#1E40AF,0_6px_12px_rgba(37,99,235,0.4)] hover:-translate-y-0.5 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_6px_0_#1E40AF,0_8px_16px_rgba(37,99,235,0.5)] active:translate-y-0.5 active:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_2px_0_#1E40AF,0_4px_8px_rgba(37,99,235,0.3)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Entrar em contato
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
      
      {/* About Section */}
      <section className="py-20 lg:py-[120px]">
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Foto Fernando */}
            <motion.div
              className="w-full lg:w-2/5"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <Image 
                  src="/images/fernando-photo.png"
                  fill
                  alt="Fernando Trindade - Fundador EF Mídias"
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority={false}
                />
              </div>
            </motion.div>
            
            {/* Texto */}
            <motion.div
              className="w-full lg:w-3/5 space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold">
                Somos uma empresa que fala a língua do empresário
              </h2>
              <div className="space-y-4 text-base lg:text-lg text-gray-600 leading-relaxed">
                <p>
                  Entendemos seus desafios, respeitamos seu investimento e focamos no que realmente importa: dinheiro no bolso e crescimento.
                </p>
                <p>
                  A EF Mídias é uma consultoria especializada em crescimento comercial para negócios locais. Atuamos a partir de Mogi Mirim-SP com projetos em todo o país, sempre com foco total em performance.
                </p>
                <p>
                  Trabalhamos com inteligência de dados: cada real investido em tráfego se transforma em informação valiosa, usada para otimizar campanhas, ajustar funis e melhorar os resultados continuamente.
                </p>
                <p>
                  Nossa abordagem une visão estratégica, execução de ponta e mentalidade de dono. Não vendemos vaidade. Vendemos crescimento mensurável.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-base lg:text-lg font-semibold text-gray-900">
                  Fernando Trindade
                </p>
                <p className="text-sm lg:text-base text-gray-600">
                  Proprietário EF Mídias
                </p>
              </div>
            </motion.div>
            
          </div>
        </Container>
      </section>
      
      {/* Consultation CTA Section */}
      <motion.section
        id="consultoria"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-white py-20 lg:py-[120px]"
      >
        <div className="max-w-5xl mx-auto px-6 lg:px-20 text-center">
          
          {/* Título com destaque */}
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-gray-900">Dê o primeiro passo</span>
            {' '}
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              hoje
            </span>
          </h2>
          
          {/* Subtítulo */}
          <p className="text-lg lg:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Agende uma reunião de consultoria gratuita de 20 minutos. 
            Vamos entender seu desafio e mostrar como podemos ajudar.
          </p>
          
          {/* Botão CTA */}
          <div className="flex justify-center">
            <a 
              href="https://wa.me/55199995800412?text=Olá! Gostaria de agendar uma consultoria estratégica."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-lg font-semibold rounded-full hover:shadow-[0_8px_24px_rgba(37,99,235,0.4)] hover:scale-105 active:scale-98 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Agendar Consultoria
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
          
        </div>
      </motion.section>
    </>
  )
}
