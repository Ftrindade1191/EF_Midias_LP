'use client'

import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import styleGuide from '@/styles/styleguide.json'

export default function StyleguidePage() {
  return (
    <div className="pt-20 bg-white text-black min-h-screen">
      <Container>
        <div className="py-20">
          <h1 className="text-5xl font-bold mb-12">Design System - EF Mídias</h1>
          
          {/* Colors */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Cores</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <div className="w-full h-24 bg-white border-2 border-gray-300 rounded-lg mb-2"></div>
                <p className="text-sm font-semibold">Background</p>
                <p className="text-xs text-gray-600">{styleGuide.colors.primary.background}</p>
              </div>
              <div>
                <div className="w-full h-24 bg-black rounded-lg mb-2"></div>
                <p className="text-sm font-semibold">Text</p>
                <p className="text-xs text-gray-600">{styleGuide.colors.primary.text}</p>
              </div>
              <div>
                <div className="w-full h-24 rounded-lg mb-2" style={{ backgroundColor: styleGuide.colors.accent.blue[500] }}></div>
                <p className="text-sm font-semibold">Accent Blue</p>
                <p className="text-xs text-gray-600">{styleGuide.colors.accent.blue[500]}</p>
              </div>
              <div>
                <div className="w-full h-24 rounded-lg mb-2" style={{ backgroundColor: styleGuide.colors.cards.background }}></div>
                <p className="text-sm font-semibold">Cards</p>
                <p className="text-xs text-gray-600">{styleGuide.colors.cards.background}</p>
              </div>
            </div>
          </section>
          
          {/* Typography */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Tipografia</h2>
            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-600 mb-2">Hero (Desktop)</p>
                <h1 style={{ fontSize: styleGuide.typography.sizes.hero.desktop, fontWeight: 'bold' }}>
                  Transformamos Dados em Leads
                </h1>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Hero (Mobile)</p>
                <h1 style={{ fontSize: styleGuide.typography.sizes.hero.mobile, fontWeight: 'bold' }}>
                  Transformamos Dados em Leads
                </h1>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">H2 (Desktop)</p>
                <h2 style={{ fontSize: styleGuide.typography.sizes.h2.desktop, fontWeight: 'bold' }}>
                  Nossas Soluções
                </h2>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">H2 (Mobile)</p>
                <h2 style={{ fontSize: styleGuide.typography.sizes.h2.mobile, fontWeight: 'bold' }}>
                  Nossas Soluções
                </h2>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Body (Desktop)</p>
                <p style={{ fontSize: styleGuide.typography.sizes.body.desktop }}>
                  Engenharia de tráfego, IA comercial e desenvolvimento de apps personalizados para negócios locais
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Body (Mobile)</p>
                <p style={{ fontSize: styleGuide.typography.sizes.body.mobile }}>
                  Engenharia de tráfego, IA comercial e desenvolvimento de apps personalizados para negócios locais
                </p>
              </div>
            </div>
          </section>
          
          {/* Buttons */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Botões</h2>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="sm">Primary Small</Button>
              <Button variant="primary" size="md">Primary Medium</Button>
              <Button variant="primary" size="lg">Primary Large</Button>
              <Button variant="secondary" size="md">Secondary</Button>
              <Button variant="outline" size="md">Outline</Button>
            </div>
          </section>
          
          {/* Cards */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Cards</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <h3 className="text-xl font-bold mb-2">Card Example</h3>
                <p className="text-gray-600">Este é um exemplo de card com hover effect.</p>
              </Card>
              <Card>
                <h3 className="text-xl font-bold mb-2">Card Example</h3>
                <p className="text-gray-600">Este é um exemplo de card com hover effect.</p>
              </Card>
              <Card>
                <h3 className="text-xl font-bold mb-2">Card Example</h3>
                <p className="text-gray-600">Este é um exemplo de card com hover effect.</p>
              </Card>
            </div>
          </section>
          
          {/* Badges */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Badges</h2>
            <div className="flex flex-wrap gap-4">
              <Badge variant="default">Default Badge</Badge>
              <Badge variant="blue">Blue Badge</Badge>
              <Badge variant="gray">Gray Badge</Badge>
            </div>
          </section>
          
          {/* Spacing */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Espaçamentos</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 mb-2">Seções (Desktop): {styleGuide.spacing.sections.desktop}</p>
                <div className="h-4 rounded" style={{ width: styleGuide.spacing.sections.desktop, backgroundColor: '#2563EB' }}></div>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Seções (Mobile): {styleGuide.spacing.sections.mobile}</p>
                <div className="h-4 rounded" style={{ width: styleGuide.spacing.sections.mobile, backgroundColor: '#2563EB' }}></div>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Container Max Width: {styleGuide.spacing.container.maxWidth}</p>
                <div className="h-4 rounded" style={{ width: '100%', maxWidth: styleGuide.spacing.container.maxWidth, backgroundColor: '#2563EB' }}></div>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </div>
  )
}
