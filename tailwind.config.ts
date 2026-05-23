import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
      colors: {
        rust: '#C8522E',
        'rust-dim': '#9A3E20',
        shopee: '#EE4D2D',
        pinterest: '#E60023',
        'bg-base': '#000000',
        'bg-2': '#0A0908',
        'bg-3': '#111009',
        'bg-4': '#171511',
        surface: '#1C1A15',
        'divide-soft': 'rgba(255,255,255,0.07)',
        'divide-mid': 'rgba(255,255,255,0.13)',
        't-primary': '#F0EBE3',
        't-muted': '#8A8278',
        't-faint': '#4A453F',
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter2: '-0.03em',
        tighter3: '-0.025em',
        widest2: '0.18em',
        widest3: '0.2em',
      },
      fontSize: {
        micro: ['0.6875rem', { lineHeight: '1.4' }],
        small: ['0.8125rem', { lineHeight: '1.6' }],
      },
    },
  },
  plugins: [],
}

export default config
