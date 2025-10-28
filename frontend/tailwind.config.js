// frontend/tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ¡Importante!
  ],
  theme: {
    extend: {
      // Aquí puedes extender la paleta de colores del documento,
      // ej: usando los colores que definiste [cite: 292]
      colors: {
        'primary-light': '#[color-ejemplo-claro]', // Reemplaza con tus HEX
        'primary-dark': '#[color-ejemplo-oscuro]',
      }
    },
  },
  plugins: [],
}
