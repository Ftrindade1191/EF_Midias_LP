# EF Mídias Website

Website completo em Next.js 14 para a EF Mídias, consultoria especializada em tráfego pago, IA comercial e desenvolvimento de apps.

## 🚀 Tecnologias

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animações)
- **Fonte**: Inter (Google Fonts)

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── layout.tsx              # Layout global com Inter font
│   ├── page.tsx                # Home
│   ├── ef-vendas/
│   │   └── page.tsx
│   ├── bfd/
│   │   └── page.tsx
│   ├── styleguide/
│   │   └── page.tsx
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Container.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Badge.tsx
│   └── home/
│       ├── Hero.tsx
│       ├── Numbers.tsx
│       └── Solutions.tsx
├── styles/
│   └── styleguide.json
└── lib/
    └── utils.ts
```

## 🎨 Design System

O design system está definido em `src/styles/styleguide.json` com:
- Cores principais (background preto, texto branco, accent azul)
- Tipografia (Inter, tamanhos responsivos)
- Espaçamentos (seções, container, padding)
- Componentes (cards, botões, badges)

## 🛠️ Instalação

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar servidor de produção
npm start
```

## 📱 Páginas

- **/** - Homepage com todas as seções
- **/ef-vendas** - Showcase do sistema de IA comercial
- **/bfd** - Showcase do app white-label para nutricionistas
- **/styleguide** - Página visual do design system

## ✨ Funcionalidades

- ✅ Design responsivo (mobile-first)
- ✅ Animações suaves com Framer Motion
- ✅ Count-up animado nos números
- ✅ Hover effects nos cards
- ✅ Navegação entre páginas
- ✅ TypeScript para type safety
- ✅ Tailwind CSS configurado com design tokens

## 🎯 Próximos Passos

1. Adicionar screenshots reais em `/public/images`
2. Expandir seções de Cases com mais detalhes
3. Adicionar mais seções em /ef-vendas e /bfd
4. Configurar formulário de contato
5. Deploy no Vercel

## 📝 Notas

- Todas as cores e valores vêm do `styleguide.json`
- Componentes são reutilizáveis e modulares
- Código segue padrões TypeScript e Next.js 14
- Mobile-first approach em todo o design
