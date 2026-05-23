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
        sans: ['Geist', 'sans-serif'],
        mono: ['Geist Mono', 'monospace'],
      },
      colors: {
        // Off-black (never pure #000)
        ink:     '#0A0908',
        ink2:    '#111009',
        ink3:    '#171511',
        surface: '#1C1A15',
        // Borders
        line:    'rgba(255,255,255,0.07)',
        line2:   'rgba(255,255,255,0.13)',
        // Accent — single rust
        rust:    '#C8522E',
        'rust-dark': '#9A3E20',
        // Platforms
        shopee:    '#EE4D2D',
        pinterest: '#E60023',
        // Text
        hi:  '#F2EDE5',
        mid: '#8A8278',
        lo:  '#4A453F',
      },
      fontSize: {
        'display': ['clamp(3.5rem,10vw,10rem)', { lineHeight: '0.9', letterSpacing: '-0.04em' }],
        'hero':    ['clamp(2.4rem,5vw,5.5rem)',  { lineHeight: '0.95', letterSpacing: '-0.035em' }],
        'title':   ['clamp(1.5rem,2.5vw,2.2rem)', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        'label':   ['0.6875rem', { lineHeight: '1.4', letterSpacing: '0.2em' }],
        'small':   ['0.8125rem', { lineHeight: '1.6' }],
      },
      animation: {
        'ticker': 'ticker 28s linear infinite',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        ticker: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseDot: {
          '0%,100%': { opacity: '1' },
          '50%':     { opacity: '0.2' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
