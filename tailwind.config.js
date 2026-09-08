/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          darkest: '#0d0e12',
          dark: '#13151c',
          card: '#181b24',
          cardHover: '#1f2330',
          border: 'rgba(255, 255, 255, 0.08)',
          borderLight: 'rgba(255, 255, 255, 0.15)',
        },
        spider: {
          red: '#e62429',
          redGlow: '#ff3b3f',
          blue: '#0f52ba',
          blueGlow: '#2563eb',
          accent: '#ef4444',
          web: '#e2e8f0',
          gold: '#f59e0b',
        },
        brand: {
          red: '#e62429',
          blue: '#2563eb',
          indigo: '#6366f1',
          slate: '#94a3b8',
        },
        text: {
          primary: '#f8fafc',
          secondary: '#94a3b8',
          muted: '#64748b',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
        cursive: ['Caveat', 'cursive'],
        mono: ['"JetBrains Mono"', 'Consolas', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'web-pulse': 'webPulse 2s ease-in-out infinite',
        'spider-wiggle': 'spiderWiggle 0.6s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        webPulse: {
          '0%, 100%': { opacity: '0.6', filter: 'drop-shadow(0 0 2px #e62429)' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 8px #e62429)' },
        },
        spiderWiggle: {
          '0%': { transform: 'rotate(-4deg)' },
          '100%': { transform: 'rotate(4deg)' },
        }
      }
    },
  },
  plugins: [],
}
