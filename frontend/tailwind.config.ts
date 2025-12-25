// tailwind.config.ts
import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'alabaster': '#F5F5EC', // [cite: 345]
        'lemon': '#EADD67',     // 
        'mint': '#4DCCA9',      // [cite: 347]
        'platinum': '#D8D8D0',  // [cite: 349]
        'olive-gold': '#9A9144', // [cite: 350]
        'teal-medium': '#30B2A0', // [cite: 351]
        'taupe': '#AFABA2',      // [cite: 353]
        'olive-dark': '#6B643A',  // [cite: 354]
        'teal-dark': '#1E837B',   // [cite: 355]
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite', // La que ya teníamos
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards', // La nueva
      },
    },
  },
  plugins: [],
} satisfies Config