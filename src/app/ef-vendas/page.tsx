'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import Card from '@/components/ui/Card'

export default function EFVendasPage() {
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
              <Badge variant="blue">IA Comercial da EF Mídias</Badge>
              <h1 className="text-4xl md:text-6xl font-bold">
                Nunca mais perca um lead por demora no atendimento
              </h1>
              <p className="text-xl text-gray-600">
                IA que conversa, qualifica, agenda e organiza
              </p>
              <div>
                <Button href="https://wa.me/5519995800412?text=Olá! Tenho interesse no EF Vendas." size="lg" variant="primary">
                  Agendar Demo
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
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
                <Image 
                  src="/images/ef-vendas-hero.png"
                  fill
                  alt="EF Vendas - Sistema de IA Comercial e CRM"
                  className="object-cover"
                  priority
                  sizes="(max-width: 1280px) 100vw, 1280px"
                />
              </div>
            </motion.div>
            
          </div>
        </Container>
      </section>
      
      {/* Problema Section */}
      <section className="pt-12 lg:pt-16 pb-20 lg:pb-30">
        <Container>
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">O problema</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Leads chegam a qualquer hora. Se você não responde em minutos, eles vão para a concorrência.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Atendimento humano 24/7 é caro. CRM manual é ineficiente. Leads se perdem no caminho.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>
      
      {/* Solução Section */}
      <section className="py-20 md:py-30">
        <Container>
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">A solução</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                EF Vendas é uma IA comercial que atende seus leads no WhatsApp 24/7, 
                qualifica automaticamente e organiza tudo no CRM.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {[
                  { title: 'Atendimento 24/7', desc: 'Responde em segundos, nunca perde um lead' },
                  { title: 'Qualificação IA', desc: 'Identifica leads quentes automaticamente' },
                  { title: 'CRM Automatizado', desc: 'Tudo organizado, zero trabalho manual' },
                ].map((feature, index) => (
                  <Card key={index}>
                    <h3 className="font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.desc}</p>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
      
      {/* Como funciona Section */}
      <section id="demo" className="py-20 md:py-30">
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
                Sistema completo de gestão de leads imobiliários que une IA comercial, CRM visual e automação
                de follow-up em um único fluxo.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Timeline / Fluxo do lead */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4">Fluxo de atendimento e qualificação</h3>
                <div className="space-y-4">
                  <Card>
                    <h4 className="font-semibold mb-2">1. Lead chega pelo WhatsApp</h4>
                    <p className="text-gray-600 text-sm">
                      O lead entra via anúncios ou canais orgânicos e cai direto no WhatsApp da operação.
                    </p>
                  </Card>
                  <Card>
                    <h4 className="font-semibold mb-2">2. Agente SDR automatizado com IA</h4>
                    <p className="text-gray-600 text-sm">
                      Um agente SDR com IA (GPT-4) atende 24/7, conduz a conversa de forma humanizada e coleta
                      dados estruturados como nome, renda, FGTS e interesse.
                    </p>
                  </Card>
                  <Card>
                    <h4 className="font-semibold mb-2">3. Classificação automática do lead</h4>
                    <p className="text-gray-600 text-sm">
                      A IA classifica cada contato como frio, morno ou quente com base nas respostas, deixando
                      claro para o time comercial onde focar primeiro.
                    </p>
                  </Card>
                  <Card>
                    <h4 className="font-semibold mb-2">4. Sugestão de próximos passos</h4>
                    <p className="text-gray-600 text-sm">
                      Com histórico completo das interações, o sistema sugere próximos passos e roteiros de
                      abordagem para o gerente ou corretor responsável.
                    </p>
                  </Card>
                </div>
              </div>

              {/* CRM e gestão */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4">Gestão visual e cobrança de follow-up</h3>
                <Card>
                  <h4 className="font-semibold mb-2">CRM visual moderno</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Dashboard de métricas, kanban com drag &amp; drop e lista completa de leads. Tudo pensado
                    para operação imobiliária.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Visão em funil das etapas de venda</li>
                    <li>• Indicadores de volume, conversão e tempo de resposta</li>
                    <li>• Histórico centralizado de conversas e mudanças de estágio</li>
                  </ul>
                </Card>
                <Card>
                  <h4 className="font-semibold mb-2">Follow-up inteligente</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    O sistema cobra o gerente comercial e o time sobre o status dos leads, evitando que contatos
                    fiquem esquecidos.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Alertas para leads sem retorno</li>
                    <li>• Lembretes de follow-up por estágio</li>
                    <li>• Prioridade automática para leads quentes</li>
                  </ul>
                </Card>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card>
                <h4 className="font-semibold mb-2">Resultados práticos</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✅ Reduz perda de leads de 70% para menos de 20%</li>
                  <li>✅ Libera a equipe comercial da qualificação manual</li>
                  <li>✅ Escala atendimento sem aumentar o time</li>
                </ul>
              </Card>
              <Card>
                <h4 className="font-semibold mb-2">Stack integrada</h4>
                <p className="text-gray-600 text-sm">
                  N8N, Evolution API, GPT-4, Supabase e Lovable trabalhando juntos para garantir estabilidade,
                  segurança e escalabilidade do sistema.
                </p>
              </Card>
              <Card>
                <h4 className="font-semibold mb-2">Replicação rápida</h4>
                <p className="text-gray-600 text-sm">
                  Estrutura pensada para ser replicada em novos clientes em aproximadamente 15 minutos, mantendo
                  o mesmo padrão de qualidade.
                </p>
              </Card>
            </div>

            <div className="text-center">
              <Button href="https://wa.me/5519995800412?text=Olá! Tenho interesse no EF Vendas." size="lg" variant="primary">
                Agendar demo gratuita
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
