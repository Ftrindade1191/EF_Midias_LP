# PRD - EF Mídias Website Redesign

## 📋 VISÃO GERAL

### Objetivo
Redesign completo do site da EF Mídias, evoluindo de "agência de tráfego" para "consultoria tech + IA + desenvolvimento", apresentando 3 verticais de negócio: Tráfego Pago, IA Comercial (EF Vendas) e Desenvolvimento Sob Medida (BFD + projetos personalizados).

### Público-Alvo
- Empresários de negócios locais (Mogi Mirim e região)
- Imobiliárias e corretores
- Nutricionistas infantis (B2B para BFD)
- Empresas que buscam automação comercial

### Proposta de Valor
"Transformamos Dados em Leads. Leads em Vendas. Ideias em Tecnologia."

---

## 🏗️ ARQUITETURA TÉCNICA

### Stack
- **Frontend:** Next.js 14 (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **Animações:** Framer Motion
- **Deploy:** Vercel (com possibilidade de migrar para Hostinger depois)
- **Imagens:** Next/Image (otimização automática)
- **Analytics:** Meta Pixel + Google Tag Manager (implementar depois)

### Estrutura de Pastas
```
ef-midias-website/
├── public/
│   ├── images/
│   │   ├── logo-ef.svg
│   │   ├── fernando-photo.jpg
│   │   ├── ef-vendas-screenshot.png
│   │   └── bfd-screenshot.png
│   └── fonts/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx              # Home
│   │   ├── ef-vendas/
│   │   │   └── page.tsx
│   │   ├── bfd/
│   │   │   └── page.tsx
│   │   ├── styleguide/
│   │   │   └── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Container.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   └── Section.tsx
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── Numbers.tsx
│   │   │   ├── Solutions.tsx
│   │   │   ├── Cases.tsx
│   │   │   ├── Portfolio.tsx
│   │   │   ├── About.tsx
│   │   │   └── Consultation.tsx
│   │   ├── ef-vendas/
│   │   │   ├── HeroProduct.tsx
│   │   │   ├── Problem.tsx
│   │   │   ├── Solution.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── Differentials.tsx
│   │   │   ├── CaseStudy.tsx
│   │   │   ├── Interface.tsx
│   │   │   └── BusinessModels.tsx
│   │   └── bfd/
│   │       ├── HeroProduct.tsx
│   │       ├── TargetAudience.tsx
│   │       ├── Problem.tsx
│   │       ├── Solution.tsx
│   │       ├── WhiteLabel.tsx
│   │       ├── Features.tsx
│   │       ├── Benefits.tsx
│   │       ├── HowItWorks.tsx
│   │       └── Gallery.tsx
│   ├── styles/
│   │   ├── styleguide.json
│   │   └── globals.css
│   └── lib/
│       └── utils.ts
├── .cursorrules
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🎨 DESIGN SYSTEM

### Cores
```
Primary:
- Black: #000000
- White: #FFFFFF
- Gray 900: #0A0A0A
- Gray 800: #1A1A1A
- Gray 600: #666666

Accent (Azul):
- Blue 500: #2563EB (principal)
- Blue 600: #1D4ED8 (hover)
- Blue 400: #3B82F6 (claro)

Gradientes:
- Hero: linear-gradient(135deg, #000000 0%, #0A1628 100%)
- CTA: linear-gradient(90deg, #2563EB 0%, #1D4ED8 100%)
```

### Tipografia
```
Fonte: Inter (Google Fonts)

Desktop:
- Hero: 72px bold (line-height: 1.1)
- H2: 48px bold
- H3: 32px semibold
- Body: 18px regular (line-height: 1.6)
- Small: 14px

Mobile:
- Hero: 40px bold
- H2: 32px bold
- H3: 24px semibold
- Body: 16px regular
- Small: 14px
```

### Espaçamentos
```
Container: max-width 1280px
Section spacing: 120px (desktop) / 80px (mobile)
Element spacing: 40px (desktop) / 24px (mobile)
Padding lateral: 80px (desktop) / 24px (mobile)
```

### Efeitos
```
Border Radius:
- sm: 8px
- md: 12px
- lg: 16px

Box Shadow:
- sm: 0 2px 8px rgba(0,0,0,0.1)
- md: 0 4px 16px rgba(0,0,0,0.15)
- lg: 0 8px 32px rgba(0,0,0,0.2)
- blue: 0 4px 16px rgba(37,99,235,0.3)

Transitions:
- fast: 200ms ease
- normal: 300ms ease
- slow: 500ms ease
```

### Breakpoints
```
Mobile: 320px - 768px
Tablet: 768px - 1024px
Desktop: 1024px+
```

---

## 📱 RESPONSIVIDADE

### Mobile First
Todos os componentes devem ser desenvolvidos primeiro para mobile, depois adaptados para desktop.

### Ajustes por Breakpoint

**Mobile (< 768px):**
- Stack vertical em tudo
- Hero: texto acima, visual abaixo
- Grid de cards: 1 coluna
- Padding: 24px
- CTAs: full-width
- Menu: hamburger

**Tablet (768px - 1024px):**
- Grid de cards: 2 colunas
- Padding: 40px
- Hero: 50/50 ou stack

**Desktop (1024px+):**
- Grid de cards: 3 colunas
- Hero: 60/40 (texto/visual)
- Padding: 80px
- Menu: horizontal completo

---

## 📄 PÁGINAS E SEÇÕES

### HOME (/)

#### 1. Hero
- Layout: 60% texto / 40% visual (desktop)
- Headline: "Transformamos Dados em Leads. Leads em Vendas. Ideias em Tecnologia."
- Subheadline: "Engenharia de tráfego, IA comercial e desenvolvimento de apps personalizados para negócios locais"
- 2 CTAs: "Agende Consultoria" (primário) + "Ver Projetos" (secundário)
- Badges: R$35M gerados | +847% crescimento | 2 IAs proprietárias
- Visual: Elemento 3D abstrato ou gradiente com animação sutil
- Background: Gradiente escuro (preto → azul escuro)
- Animações: Fade in texto, elemento visual com rotação suave

#### 2. Numbers
- Grid 3 colunas (desktop) / stack (mobile)
- 3 métricas principais:
  - R$35M em vendas geradas
  - +847% crescimento médio clientes
  - 1.226 leads/mês (média)
- Animação: Count-up ao entrar no viewport
- Background: Cinza escuro (#1A1A1A)

#### 3. Solutions (3 Cards)
- Grid 3 colunas (desktop) / stack (mobile)
- Card 1: Tráfego Pago & Inteligência de Dados
  - Ícone: 📊
  - Descrição: 2-3 linhas sobre engenharia de dados
  - CTA: "Ver Cases"
- Card 2: EF Vendas (IA+CRM)
  - Ícone: 🤖
  - Descrição: 2-3 linhas sobre atendimento 24/7
  - CTA: "Conhecer Sistema"
- Card 3: Desenvolvimento Sob Medida
  - Ícone: 💻
  - Descrição: 2-3 linhas sobre apps personalizados
  - CTA: "Ver Portfólio"
- Background cards: Cinza escuro
- Hover: Lift + brilho azul sutil

#### 4. Cases (Tráfego)
- Grid 2x2 (desktop) / stack (mobile)
- 4 cases atuais:
  - Corretora MCMV: R$14.3K invest → R$11.4M vendas
  - Ótica: R$19.3K invest → R$732K vendas
  - Fazenda Madeira: R$20K invest → R$904K vendas
  - Imobiliária com IA: R$15.5K invest → +R$10M vendas
- Card: Ícone + Números destacados + Descrição + Badge
- Animação: Fade in ao scroll

#### 5. Portfolio Tech
- Título: "Tecnologia Proprietária que Desenvolvemos"
- Subtítulo: "Além de gerenciar campanhas, criamos sistemas sob medida"
- 2 cards lado a lado (desktop) / stack (mobile)

**Card EF Vendas:**
- Screenshot mockup (device frame)
- Badge: "IA Comercial da EF Mídias"
- 3 bullet points:
  - ✅ Atendimento WhatsApp 24/7
  - ✅ CRM automatizado
  - ✅ Qualificação inteligente
- Métrica: R$10M em vendas geradas
- CTA: "Conhecer Sistema" → /ef-vendas

**Card BFD:**
- Screenshot mockup (mobile)
- Badge: "Desenvolvido pela EF Mídias"
- 3 bullet points:
  - ✅ App personalizado com sua marca
  - ✅ Diferencial para nutricionistas
  - ✅ iOS + Android
- Badge: White-label disponível
- CTA: "Ver Solução" → /bfd

#### 6. About
- Layout: Foto (40%) + Texto (60%)
- Foto: Fernando (profissional)
- Texto atualizado: "Não somos só tráfego, desenvolvemos tecnologia"
- Localização: Mogi Mirim → Projetos no país
- Background: Cinza escuro

#### 7. Consultation
- CTA grande centralizado
- Título: "Consultoria Estratégica Gratuita"
- Descrição: 20 minutos, online, focada em crescimento
- CTA: "Agendar Consultoria" → WhatsApp
- Background: Gradiente azul sutil

#### 8. Footer
- Logo EF Mídias
- Links: Sobre, Serviços, EF Vendas, BFD, Contato
- Contato: WhatsApp, Email, Instagram
- Legal: Termos de Uso, Política de Privacidade
- Copyright: © 2025 EF Mídias
- Background: Preto total

---

### /EF-VENDAS (IA+CRM)

#### 1. Hero Product
- Badge: "IA Comercial da EF Mídias"
- Logo produto: EF Vendas (IA+CRM)
- Headline: "Nunca Mais Perca um Lead por Demora no Atendimento"
- Subheadline: "IA que conversa, qualifica, agenda e organiza. Seu time comercial focado em fechar, não em responder WhatsApp."
- Screenshot grande (mockup) ao lado (50/50 desktop)
- 2 CTAs: "Agendar Demo" + "Ver Como Funciona"
- Background: Gradiente escuro

#### 2. Problem
- Título: "60-70% dos Leads São Desperdiçados"
- 3 dores principais em cards:
  - Demora no atendimento (horas/dias)
  - Leads não qualificados misturados
  - Pipeline desorganizado, vendedor perdido
- Background: Vermelho escuro sutil (#2A0A0A)

#### 3. Solution
- Título: "IA que Atende, Qualifica e Organiza"
- Screenshot/vídeo demonstrativo
- 3 benefícios principais destacados
- Background: Azul escuro sutil (#0A1628)

#### 4. How It Works
- Timeline visual com 5 passos:
  1. Lead chega → WhatsApp dispara
  2. IA atende humanizado
  3. Qualificação inteligente
  4. Registro automático CRM
  5. Ação comercial (notifica vendedor)
- Linha conectando os passos
- Ícone + Título + Descrição em cada passo

#### 5. Differentials
- Grid 2x3 (desktop) / stack (mobile)
- 6 diferenciais:
  - Atendimento humanizado (não bot FAQ)
  - Aprendizado contínuo
  - Integração total (WhatsApp+CRM+Calendário)
  - Dashboard gerencial
  - Customização completa
  - Suporte dedicado
- Card: Ícone + Título + Texto curto
- Hover: Brilho azul

#### 6. Case Study
- Case expandido: Imobiliária
- Números grandes:
  - 1.226 leads atendidos
  - 3 minutos tempo médio resposta
  - 78% taxa qualificação
  - +R$10M em VGV
- Depoimento (se tiver)
- Background: Gradiente

#### 7. Interface
- Galeria de screenshots:
  - Conversa WhatsApp
  - Dashboard CRM
  - Pipeline de vendas
  - Relatórios
- Carousel ou grid
- Lightbox ao clicar

#### 8. Business Models
- 2 cards lado a lado:
  - **Full-Service:** R$2.500/mês (setup + gestão + otimização)
  - **White-Label:** R$4.000 setup + R$500/mês (licença + hospedagem + suporte)
- Sem "escolha um plano", só apresentação informativa
- O que inclui em cada modelo

#### 9. CTA Final
- Grande, destacado, centralizado
- "Agendar Demonstração"
- Background: Azul com brilho

---

### /BFD (White-Label)

#### 1. Hero Product
- Badge: "Desenvolvido pela EF Mídias"
- Logo: BabyFood Diary
- Headline: "App White-Label para Nutricionistas Infantis"
- Subheadline: "Suas pacientes com um aplicativo exclusivo e personalizado com sua marca para acompanhar a introdução alimentar"
- Screenshot mobile mockup ao lado
- CTA: "Solicitar Orçamento"
- Background: Gradiente claro/suave

#### 2. Target Audience
- Título: "Diferencial para Nutricionistas Infantis"
- 3 perfis ideais em cards:
  - Nutricionista que quer se destacar
  - Clínicas de nutrição materno-infantil
  - Profissionais que querem retenção
- Ícone + Descrição

#### 3. Problem
- Título: "Mercado Competitivo, Difícil se Destacar"
- 3 dores principais:
  - Concorrência acirrada
  - Difícil reter pacientes após consulta
  - Falta de diferencial profissional
- Background: Cinza escuro

#### 4. Solution
- Título: "App 100% Personalizado com Sua Marca"
- Screenshot de customização (logo/cores diferentes)
- Destaque: "Suas pacientes terão um app exclusivo"
- Background: Gradiente suave

#### 5. White-Label
- Título: "Sua Marca, Sua Identidade"
- Mockups mostrando apps com marcas diferentes (exemplo)
- Antes/depois: App genérico → App personalizado
- Destaque visual forte

#### 6. Features
- Grid de funcionalidades com screenshots:
  - Registro de alimentos (foto + nome)
  - Reações (adorou/experimentou/recusou)
  - Calendário visual
  - Histórico completo
  - Dashboard nutricionista (web)
  - Relatórios exportáveis
- Carousel ou grid

#### 7. Benefits (B2B)
- Grid 2x3 (desktop) / stack (mobile)
- 5 benefícios para a nutricionista:
  - ✅ Diferenciação competitiva
  - ✅ Retenção de pacientes
  - ✅ Autoridade profissional
  - ✅ Acompanhamento facilitado
  - ✅ Posicionamento premium
- Card: Ícone + Título + Texto explicativo

#### 8. How It Works
- Timeline: 5 passos
  1. Personalização (envia logo/cores)
  2. Desenvolvimento (criamos app)
  3. Distribuição (pacientes baixam)
  4. Uso (registro diário)
  5. Acompanhamento (dashboard web)
- Visual timeline com linha conectando

#### 9. Gallery
- Screenshots app + dashboard
- Grid com lightbox
- Mostra todas as telas principais

#### 10. CTA Final
- "Quero Diferenciar Meu Atendimento com Tecnologia"
- Formulário de contato ou WhatsApp
- Background: Gradiente suave

---

### /STYLEGUIDE

Página visual com todos os elementos do design system:
- Cores (swatches com hex)
- Tipografia (exemplos de tamanhos)
- Botões (todos os estilos)
- Cards (variações)
- Espaçamentos (exemplos visuais)
- Sombras (cards com diferentes elevações)
- Ícones
- Componentes (inputs, badges, etc)

---

## 🎬 ANIMAÇÕES

### Princípios
- Sutis e profissionais (não exageradas)
- Performance (use transform/opacity, evite layout shifts)
- Acessibilidade (respeitar prefers-reduced-motion)

### Animações Específicas

**Hero:**
- Texto: Fade in + translateY (de baixo pra cima)
- Visual 3D: Rotação contínua lenta (se usar)
- Badges: Fade in sequencial (delay entre eles)

**Cards:**
- Entrada: Fade in + translateY ao scroll
- Hover: translateY -4px + shadow aumenta

**Números:**
- Count-up animation (de 0 até valor final)
- Trigger: ao entrar no viewport

**Botões:**
- Hover: Scale 1.02 + shadow
- Active: Scale 0.98

**Screenshots:**
- Parallax sutil ao scroll
- Zoom suave no hover

---

## 🔧 COMPONENTES REUTILIZÁVEIS

### Button
Props: variant (primary/secondary/outline), size (sm/md/lg), href, onClick

### Card
Props: variant (default/elevated/bordered), children, hover effects

### Badge
Props: variant (primary/success/warning), text

### Section
Props: title, subtitle, background (default/dark/gradient), children

### Container
Props: maxWidth, padding, children

---

## 📦 BIBLIOTECAS NECESSÁRIAS

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^10.0.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "typescript": "^5.0.0",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0",
    "eslint": "^8.0.0",
    "eslint-config-next": "^14.0.0"
  }
}
```

---

## 🚀 DEPLOY

### Vercel (Recomendado)
1. Conectar repositório GitHub
2. Vercel detecta Next.js automaticamente
3. Deploy automático a cada push
4. Preview deployments para cada branch

### Configurações Vercel
```
Build Command: npm run build
Output Directory: .next
Install Command: npm install
Node Version: 18.x
```

### Variáveis de Ambiente (futuro)
```
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_FB_PIXEL_ID=123456789
```

### Migração para Hostinger (opcional, futuro)
- Export estático: `output: 'export'` no next.config.js
- Build gera pasta /out
- Upload via FTP para /public_html

---

## ✅ CHECKLIST DE IMPLEMENTAÇÃO

### Fase 1: Setup
- [ ] Criar projeto Next.js
- [ ] Configurar Tailwind CSS
- [ ] Instalar Framer Motion
- [ ] Criar styleguide.json
- [ ] Configurar .cursorrules
- [ ] Estruturar pastas

### Fase 2: Design System
- [ ] Componentes base (Button, Card, Badge)
- [ ] Layout (Header, Footer, Container)
- [ ] Página /styleguide
- [ ] Tailwind config importando styleguide.json

### Fase 3: Home
- [ ] Hero
- [ ] Numbers
- [ ] Solutions
- [ ] Cases
- [ ] Portfolio Tech
- [ ] About
- [ ] Consultation
- [ ] Footer

### Fase 4: EF Vendas
- [ ] Todas as 9 seções
- [ ] Screenshots/mockups
- [ ] Animações

### Fase 5: BFD
- [ ] Todas as 10 seções
- [ ] Screenshots/mockups
- [ ] Animações

### Fase 6: Polish
- [ ] Responsividade total (testar todos breakpoints)
- [ ] Animações suaves
- [ ] Loading states
- [ ] SEO (meta tags, open graph)
- [ ] Lighthouse score 90+

### Fase 7: Deploy
- [ ] Deploy Vercel
- [ ] Testar em devices reais
- [ ] Analytics (GTM + Pixel)
- [ ] Domínio (se migrar da Hostinger)

---

## 📊 MÉTRICAS DE SUCESSO

### Performance
- Lighthouse Score: 90+ (Performance, Accessibility, SEO)
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Cumulative Layout Shift: < 0.1

### Responsividade
- Testado em: iPhone SE, iPhone 14, iPad, Desktop 1920px
- Sem scroll horizontal em nenhum device
- Touch targets: mínimo 44x44px

### Acessibilidade
- Contraste: WCAG AA (mínimo 4.5:1 para texto)
- Keyboard navigation funcionando
- Screen reader friendly
- Alt text em todas as imagens

---

## 🎯 PRÓXIMOS PASSOS (PÓS-MVP)

### Melhorias Futuras
- [ ] Blog/Artigos (SEO)
- [ ] Calculadora de ROI
- [ ] Chat ao vivo
- [ ] Vídeos demo dos produtos
- [ ] Depoimentos em vídeo
- [ ] Casos de sucesso expandidos
- [ ] Portfólio completo com filtros
- [ ] Múltiplos idiomas (EN/ES)
- [ ] Dark mode toggle

### Integrações
- [ ] CRM (RD Station, Pipedrive)
- [ ] Email marketing (automação)
- [ ] Calendário (agendamento online)
- [ ] WhatsApp Business API

---

## 📝 NOTAS IMPORTANTES

1. **Mobile First:** Sempre desenvolver mobile primeiro, depois desktop
2. **Performance:** Usar next/image para todas as imagens
3. **SEO:** Meta tags em todas as páginas
4. **Acessibilidade:** Manter em mente durante todo desenvolvimento
5. **Git:** Commits frequentes com mensagens claras
6. **Testes:** Testar em múltiplos browsers (Chrome, Safari, Firefox)
7. **Screenshots:** Usar mockups profissionais (Figma, Sketch)

---

**Documento criado em:** 13/01/2025
**Última atualização:** 13/01/2025
**Versão:** 1.0
