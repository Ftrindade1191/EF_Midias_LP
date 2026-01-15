'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import Card from '@/components/ui/Card'

export default function BFDPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="pt-20 lg:pt-[120px] pb-12 lg:pb-16">
        <Container>
          <div className="flex flex-col items-center gap-12 max-w-5xl mx-auto">
            
            {/* Texto (Topo) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full space-y-6 text-center"
            >
              <Badge variant="blue">Desenvolvido pela EF Mídias</Badge>
              <h1 className="text-4xl md:text-6xl font-bold">
                App white-label para nutricionistas infantis
              </h1>
              <p className="text-xl text-gray-600">
                Suas pacientes com um webapp exclusivo da sua marca, acessado direto pelo navegador.
              </p>
              <div>
                <Button href="https://wa.me/55199995800412?text=Olá! Tenho interesse no BFD." size="lg" variant="primary">
                  Solicitar orçamento
                </Button>
              </div>
            </motion.div>
            
            {/* Imagem (Embaixo) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image 
                  src="/images/bfd-hero.png"
                  fill
                  alt="BabyFood Diary - WebApp para Nutricionistas"
                  className="object-contain"
                  priority
                  sizes="(max-width: 1280px) 100vw, 1280px"
                />
              </div>
            </motion.div>
            
          </div>
        </Container>
      </section>
      
      {/* Para quem Section */}
      <section className="pt-12 lg:pt-16 pb-20 lg:pb-30">
        <Container>
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Para quem</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Nutricionistas infantis que querem se diferenciar no mercado e oferecer 
                uma experiência premium para suas pacientes.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                O app é totalmente personalizado com sua marca, cores e identidade visual.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>
      
      {/* Benefícios Section */}
      <section className="py-20 md:py-30">
        <Container>
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Benefícios</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {[
                  { title: 'Marca Própria', desc: 'App com sua identidade visual completa' },
                  { title: 'WebApp no navegador', desc: 'Acesso via link personalizado, sem instalação' },
                  { title: 'Diferencial', desc: 'Se destaque da concorrência' },
                  { title: 'White-Label', desc: 'Solução pronta, personalizada para você' },
                ].map((benefit, index) => (
                  <Card key={index}>
                    <h3 className="font-bold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.desc}</p>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
      
      {/* Como funciona Section */}
      <section id="orcamento" className="py-20 md:py-30">
        <Container>
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Como funciona</h2>
              <p className="text-lg text-gray-600">
                O Baby Food Diary é um webapp personalizado de acompanhamento de introdução alimentar entregue
                white label para nutricionistas infantis.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Para a nutricionista */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4">Para a nutricionista</h3>
                <Card>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>✅ Recebe o webapp 100% com sua marca (logo, cores, domínio próprio)</li>
                    <li>✅ Dashboard completo para acompanhar todas as pacientes</li>
                    <li>✅ Aba de materiais próprios (vídeos, PDFs, ebooks)</li>
                    <li>✅ Integração com checkout (para quem vende infoprodutos)</li>
                  </ul>
                </Card>
              </div>

              {/* Para as pacientes */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4">Para as pacientes</h3>
                <Card>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>✅ Registram cada alimento oferecido ao bebê</li>
                    <li>✅ Tiram fotos das refeições</li>
                    <li>✅ Marcam reações (adorou/experimentou/recusou)</li>
                    <li>✅ Acompanham um calendário visual automático</li>
                    <li>✅ Geram relatórios completos para levar na consulta</li>
                  </ul>
                </Card>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card>
                <h4 className="font-semibold mb-2">Resultados para a nutri</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✅ Diferencia a nutri no mercado competitivo</li>
                  <li>✅ Aumenta retenção de pacientes (6–12 meses vs 2–3 consultas)</li>
                  <li>✅ Torna consultas mais produtivas com dados organizados</li>
                  <li>✅ Gera acompanhamento contínuo e engagement</li>
                </ul>
              </Card>
              <Card>
                <h4 className="font-semibold mb-2">Experiência para a paciente</h4>
                <p className="text-gray-600 text-sm">
                  Acesso simples via link personalizado, sem precisar instalar nada. Tudo funciona direto no
                  navegador, no celular ou computador.
                </p>
              </Card>
              <Card>
                <h4 className="font-semibold mb-2">Entrega white-label</h4>
                <p className="text-gray-600 text-sm">
                  Toda a tecnologia fica por trás da sua marca: o que a paciente vê é um ambiente completo
                  assinado por você.
                </p>
              </Card>
            </div>

            <div className="text-center">
              <Button href="https://wa.me/55199995800412?text=Olá! Tenho interesse no BFD." size="lg" variant="primary">
                Solicitar orçamento
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
