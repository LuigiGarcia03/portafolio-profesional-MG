// frontend/tailwind.config.ts

import type { Config } from 'tailwindcss';

export default {
  content: [
    './index.html', 
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      // Basado en tu paleta de colores
      colors: {
        'background-light': '#F7F7F7', // Blanco hueso
        'primary-yellow': '#E0D65A',
        'primary-teal': '#5BC0B5',
        'accent-olive': '#9A9144',
        'accent-teal-dark': '#2E8B83',
        'text-dark': '#222222', // Un gris oscuro para texto
        'text-light': '#F7F7F7', // Para texto sobre fondos oscuros
      },
      fontFamily: {
        // Fuentes que importaremos en index.html
        sans: ['Lato', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config; // 'satisfies Config' te da autocompletado