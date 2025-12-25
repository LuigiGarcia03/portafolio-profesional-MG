// frontend/postcss.config.mjs

export default {
  plugins: {
    tailwindcss: {}, // <-- ¡ARREGLADO! Este es el plugin correcto de v3.
    autoprefixer: {},
  },
};