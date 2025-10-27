import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: '#0b1020',
          light: '#141b2e',
          lighter: '#1e2740',
        },
        azure: {
          DEFAULT: '#2dd4bf',
          light: '#5eead4',
          dark: '#14b8a6',
        },
        warm: {
          DEFAULT: '#ff8a65',
          light: '#ffab91',
          dark: '#ff7043',
        },
        soft: {
          DEFAULT: '#e6eef6',
          dark: '#cbd5e1',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(45, 212, 191, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(45, 212, 191, 0.8)' },
        },
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(45, 212, 191, 0.3)',
        'glow-md': '0 0 20px rgba(45, 212, 191, 0.4)',
        'glow-lg': '0 0 30px rgba(45, 212, 191, 0.5)',
      },
    },
  },
  plugins: [],
}

export default config
