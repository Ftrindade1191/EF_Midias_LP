'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
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

const landingPages = [
  {
    client: 'Prime+ Saúde Odontologia Avançada',
    niche: 'Odontologia Premium',
    audience: 'Adultos entre 30 e 55 anos, renda acima da média local, que buscam qualidade sem precisar viajar para grandes centros',
    summary: 'Clínica premium em Telêmaco Borba com 8 especialidades, tecnologia exclusiva na região e centro cirúrgico próprio. Copy baseada em briefing aprofundado, pesquisa das tecnologias da clínica e curadoria de depoimentos reais.',
    objective: 'Gerar agendamentos de avaliação via WhatsApp',
    url: 'https://www.primeodontotb.com.br',
    image: '/images/portfolio-lp-1.png.png',
  },
  {
    client: 'Rita Bizigatto Osteopatia',
    niche: 'Osteopatia Pediátrica',
    audience: 'Mães de bebês de 0 a 12 meses com suspeita ou diagnóstico de torcicolo congênito e assimetria craniana',
    summary: 'Osteopata pediátrica em Mogi Guaçu/SP sem presença digital e zero concorrência na região. Copy em primeira pessoa, tom acolhedor, foco em prevenção e urgência sutil.',
    objective: 'Gerar agendamentos via WhatsApp',
    url: 'https://www.ritabizigatto.com.br',
    image: '/images/portfolio-lp-2.png.png',
  },
  {
    client: 'Amanda Moraes Consultoria',
    niche: 'Consultoria de Imagem',
    audience: 'Mulheres 30+ em transição de vida: pós-gravidez, divórcio ou mudança de peso, que perderam a conexão com a própria identidade',
    summary: 'Estruturação completa da presença digital partindo do zero. Diagnóstico de posicionamento, reorganização da oferta de serviços, copy emocional da LP e configuração do Google Meu Negócio.',
    objective: 'Gerar agendamentos via WhatsApp',
    url: 'https://www.amandamoraesconsultoria.com.br',
    image: '/images/portfolio-lp-3.png.png',
  },
  {
    client: 'Método PageIA',
    niche: 'Infoproduto / Educação Digital',
    audience: 'Social medias, designers, copywriters e freelancers que querem usar IA para criar e vender seu próprio serviço de landing pages',
    summary: 'Curso que ensina a criar LPs profissionais com IA e vendê-las por R$1.500 a R$2.000. A página foi construída com a mesma stack ensinada no curso, servindo como prova do próprio método.',
    objective: 'Vender o curso (R$197) direto pela página, com checkout via Kiwify',
    url: 'https://www.pageia.efmidias.com.br',
    image: '/images/portfolio-lp-4.png.png',
  },
  {
    client: 'JC Manutenção e Montagem Industrial',
    niche: 'Manutenção e Montagem Industrial',
    audience: 'Compradores, técnicos de manutenção e gestores industriais de plantas de médio e grande porte',
    summary: 'Empresa que atua in loco, dentro da planta do cliente. Página construída para posicioná-la como referência técnica no setor, com linguagem direcionada ao comprador industrial.',
    objective: 'Gerar lead qualificado via WhatsApp ou e-mail',
    url: 'https://www.jcmanutencaoemontagem.com.br',
    image: '/images/portfolio-lp-5.png.png',
  },
  {
    client: 'Aeródromo SJCA',
    niche: 'Aeródromo Privado com Aeronave Histórica',
    audience: 'Organizadores de eventos high ticket e proprietários de aeronaves',
    summary: 'Aeródromo privado em Mococa-SP com pista para aeronaves de grande porte e infraestrutura completa para eventos premium. Página com foco em posicionamento e branding.',
    objective: 'Reforçar branding e posicionamento junto ao público premium',
    url: 'https://aerodromosjca.com.br/dc3/',
    image: '/images/portfolio-lp-6.png.png',
  },
  {
    client: 'Óticas Guimar',
    niche: 'Ótica',
    audience: 'Moradores do Jardim Pérola e região, 35-65 anos. Trabalhadores, aposentados e famílias que preferem comprar perto de casa, com atendimento de confiança e condições de pagamento acessíveis',
    summary: 'Ótica local em Santa Bárbara d\'Oeste/SP com presença digital em construção e concorrência crescente na região. Comunicação direta, genuína e sem jargão, com foco em bairro, proximidade e facilidade de pagamento.',
    objective: 'Gerar agendamentos e contatos via WhatsApp, para compra de óculos e teste de visão gratuito toda quarta-feira',
    url: 'https://www.oticasguimarsbo.com.br/',
    image: '/images/portfolio-lp-7.png.png',
  },
  {
    client: 'Prime Bosque Pilates',
    niche: 'Estúdio de Pilates',
    audience: 'Moradores do Residencial do Bosque e entorno, 28 a 55 anos, que buscam pilates de qualidade sem sair do bairro. Perfil de médio a alto padrão, com rotina estruturada e disposição para investir em bem-estar',
    summary: 'Estúdio novo sem presença digital, em lançamento. Primeiro estúdio de pilates do Residencial do Bosque, Mogi Mirim/SP. Posicionamento de lifestyle premium com credencial clínica como argumento de confiança, copy declarativa e tom sofisticado.',
    objective: 'Gerar agendamentos de aula experimental gratuita via WhatsApp',
    url: 'https://www.primebosquepilates.com.br/',
    image: '/images/portfolio-lp-8.png.png',
  },
]

export default function LandingPagesPortfolio() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1B1B1E] pt-40 pb-20 md:pb-[120px]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="mb-5">
              <Badge variant="gold">Landing Pages</Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#FBFFFE] mb-6 leading-tight">
              Página genérica{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(to right, #FAA916, #F97316)' }}
              >
                não converte.
              </span>
            </h1>
            <p className="text-[#8E8E93] text-lg leading-relaxed max-w-2xl">
              Cada LP começa pelo problema real do seu cliente e é entregue com o que há de melhor: copy que converte, carregamento rápido e zero custo de hospedagem.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Diferenciais */}
      <section className="bg-[#1B1B1E] pb-20 md:pb-[120px] border-t border-[#2E2E32]">
        <Container>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-[#8E8E93] text-sm font-medium uppercase tracking-widest mb-8 pt-16"
          >
            Por que funciona
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
        </Container>
      </section>

      {/* Portfolio */}
      <section className="bg-[#252528] py-20 md:py-[120px] border-t border-[#2E2E32]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <p className="text-[#8E8E93] text-sm font-medium uppercase tracking-widest mb-4">
              Cases
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#FBFFFE]">
              Páginas que foram ao ar
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {landingPages.map((lp, i) => (
              <motion.div
                key={lp.client}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-2xl overflow-hidden border border-[#2E2E32] hover:border-[#FAA916]/35 transition-colors duration-300 flex flex-col"
              >
                {/* Scroll reveal */}
                <div className="h-[320px] overflow-hidden bg-[#1B1B1E] shrink-0">
                  <div className="transition-transform duration-[14000ms] ease-linear group-hover:-translate-y-[70%]">
                    <Image
                      src={lp.image}
                      width={600}
                      height={1400}
                      alt={`Landing page ${lp.client}`}
                      className="w-full h-auto"
                      priority={false}
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="px-5 py-5 bg-[#1B1B1E] flex flex-col gap-3 flex-1">
                  <div>
                    <p className="text-[#FAA916] text-xs font-semibold uppercase tracking-wider mb-1">{lp.niche}</p>
                    <h3 className="text-[#FBFFFE] font-bold text-base">{lp.client}</h3>
                  </div>

                  <p className="text-[#8E8E93] text-xs leading-relaxed">
                    <span className="text-[#FBFFFE]/40 uppercase tracking-wider text-[10px] font-semibold block mb-1">Público</span>
                    {lp.audience}
                  </p>

                  <p className="text-[#8E8E93] text-xs leading-relaxed">
                    <span className="text-[#FBFFFE]/40 uppercase tracking-wider text-[10px] font-semibold block mb-1">Contexto</span>
                    {lp.summary}
                  </p>

                  <p className="text-[#8E8E93] text-xs">
                    <span className="text-[#FBFFFE]/40 uppercase tracking-wider text-[10px] font-semibold block mb-1">Objetivo</span>
                    {lp.objective}
                  </p>

                  {lp.url && (
                    <a
                      href={lp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center gap-1.5 text-[#FAA916] text-xs font-semibold hover:text-[#F97316] transition-colors pt-2 border-t border-[#2E2E32]"
                    >
                      Ver página
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section
        className="py-20 md:py-[120px]"
        style={{ background: 'linear-gradient(160deg, #01366B 0%, #1B1B1E 55%)' }}
      >
        <div className="max-w-5xl mx-auto px-6 lg:px-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#FBFFFE] mb-4 leading-tight">
              Quer uma LP para o seu negócio?
            </h2>
            <p className="text-[#FBFFFE]/55 text-lg mb-10 max-w-xl mx-auto">
              Fale com a gente pelo WhatsApp. Em 20 minutos você entende se faz sentido para o seu caso.
            </p>
            <a
              href="https://wa.me/5519995800412?text=Olá! Quero saber mais sobre as landing pages da EF Mídias."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-b from-[#FAA916] to-[#F59E0B] text-[#1B1B1E] text-lg font-bold rounded-full shadow-[0_8px_32px_rgba(250,169,22,0.4)] hover:shadow-[0_12px_48px_rgba(250,169,22,0.55)] hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Falar pelo WhatsApp
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
