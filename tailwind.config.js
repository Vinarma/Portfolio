/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          black: '#050505',
          charcoal: '#0D0D0D',
          grid: '#1A1A1A',
          accent: '#A0A0A0',
          cyan: '#00f0ff',
          purple: '#bd00ff',
          green: '#00ff66',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 15px rgba(0, 240, 255, 0.15)',
        'glow-cyan-strong': '0 0 25px rgba(0, 240, 255, 0.4)',
        'glow-purple': '0 0 15px rgba(189, 0, 255, 0.15)',
        'glow-green': '0 0 15px rgba(0, 255, 102, 0.15)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'grid-glow': 'gridGlow 8s ease-in-out infinite',
        'matrix-fade': 'matrixFade 2s ease-out infinite',
        'terminal-blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        gridGlow: {
          '0%, 100%': { opacity: 0.12 },
          '50%': { opacity: 0.25 },
        },
        blink: {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: 'currentColor' },
        }
      }
    },
  },
  plugins: [],
}
