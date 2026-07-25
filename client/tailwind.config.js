/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0A0E14',
          soft: '#111823',
          line: '#1E2731',
        },
        paper: {
          DEFAULT: '#F6F3EC',
          soft: '#FFFFFF',
          line: '#E4DFD2',
        },
        teal: {
          DEFAULT: '#4FD1C5',
          dim: '#0F9488',
        },
        amber: {
          DEFAULT: '#F2A65A',
          dim: '#C2740C',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        grid: 'linear-gradient(to right, rgb(30 39 49 / 0.35) 1px, transparent 1px), linear-gradient(to bottom, rgb(30 39 49 / 0.35) 1px, transparent 1px)',
        'grid-light': 'linear-gradient(to right, rgb(228 223 210 / 0.7) 1px, transparent 1px), linear-gradient(to bottom, rgb(228 223 210 / 0.7) 1px, transparent 1px)',
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: 1 },
          '50%, 100%': { opacity: 0 },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(16px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.35 },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        fadeUp: 'fadeUp 0.6s ease-out forwards',
        pulseDot: 'pulseDot 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
