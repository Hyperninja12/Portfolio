/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        dark: {
          950: '#030712',
          900: '#0a0f1a',
          800: '#111827',
          700: '#1a2235',
          600: '#243049',
        },
        neon: {
          cyan: '#00f0ff',
          blue: '#4d7cff',
          purple: '#a855f7',
          emerald: '#10b981',
          pink: '#ec4899',
        },
        primary: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
          950: '#083344',
        },
        secondary: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out infinite 2s',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'spin-reverse': 'spin 25s linear infinite reverse',
        'shimmer': 'shimmer 3s linear infinite',
        'gradient-shift': 'gradient 4s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(0, 240, 255, 0.15)',
        'glow': '0 0 20px rgba(0, 240, 255, 0.2)',
        'glow-lg': '0 0 40px rgba(0, 240, 255, 0.25)',
        'glow-emerald': '0 0 20px rgba(16, 185, 129, 0.2)',
        'glow-purple': '0 0 20px rgba(168, 85, 247, 0.2)',
        'inner-glow': 'inset 0 0 20px rgba(0, 240, 255, 0.1)',
      },
    },
  },
  plugins: [],
}
