import type { Config } from 'tailwindcss'
import styleGuide from './src/styles/styleguide.json'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          400: styleGuide.colors.accent.blue[400],
          500: styleGuide.colors.accent.blue[500],
          600: styleGuide.colors.accent.blue[600],
        },
        gray: styleGuide.colors.primary.gray,
      },
      fontFamily: {
        sans: styleGuide.typography.fontFamily.body.split(',').map((font: string) => font.trim()),
      },
      fontSize: {
        'hero-desktop': styleGuide.typography.sizes.hero.desktop,
        'hero-mobile': styleGuide.typography.sizes.hero.mobile,
        'h2-desktop': styleGuide.typography.sizes.h2.desktop,
        'h2-mobile': styleGuide.typography.sizes.h2.mobile,
        'body-desktop': styleGuide.typography.sizes.body.desktop,
        'body-mobile': styleGuide.typography.sizes.body.mobile,
      },
      spacing: {
        'section-desktop': styleGuide.spacing.sections.desktop,
        'section-mobile': styleGuide.spacing.sections.mobile,
        'container-padding-desktop': styleGuide.spacing.container.padding.desktop,
        'container-padding-mobile': styleGuide.spacing.container.padding.mobile,
      },
      maxWidth: {
        'container': styleGuide.spacing.container.maxWidth,
      },
      borderRadius: {
        'card': styleGuide.components.card.borderRadius,
      },
    },
  },
  plugins: [],
}
export default config
