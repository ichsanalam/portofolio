const { transform } = require('sucrase');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#FF6500',
        hColor: '#14b8a6',
        secondary: '#64748b',
        secondarylight: '#2D3250',
        cardlight: '#F3F0CA',
        carddark: '#1e293b',
        dark: '#0f172a',
        light: '#FFE5B4'
      },
      screens: {
        '2xl': '1320px',
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

