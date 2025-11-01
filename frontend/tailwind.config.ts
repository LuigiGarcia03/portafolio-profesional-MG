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
        // Tu paleta de DATOS CV
        'alabaster': '#F5F5EC', // Blanco hueso
        'lemon': '#EADD67',     // Amarillo limón
        'mint': '#4DCCA9',      // Menta / Aguamarina
        'platinum': '#D8D8D0',  // Gris claro
        'olive-gold': '#9A9144', // Oliva dorado
        'teal-medium': '#30B2A0', // Verde azulado medio
        'taupe': '#AFABA2',      // Gris pardo
        'olive-dark': '#6B643A',  // Oliva oscuro
        'teal-dark': '#1E837B',   // Verde azulado oscuro
      }
    },
  },
  plugins: [],
} satisfies Config