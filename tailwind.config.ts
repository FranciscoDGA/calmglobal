import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Azul profundo — confiança e calma (cor primária)
        primary: {
          50: '#eef4ff',
          100: '#E0F2FE',
          200: '#c7ddf5',
          300: '#9bbde8',
          400: '#5f8ed1',
          500: '#1E3A8A',
          600: '#1a3378',
          700: '#152a63',
          800: '#11224f',
          900: '#0f1f4a',
        },
        // Ouro discreto — toque premium
        gold: {
          50: '#fbf6e7',
          100: '#f6ecc7',
          400: '#e0c05a',
          500: '#D4AF37',
          600: '#b8952c',
        },
        // Preto profundo — backgrounds escuros e headings
        dark: {
          800: '#1f2937',
          900: '#111827',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Playfair Display', 'serif'],
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.5s ease-out both',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
