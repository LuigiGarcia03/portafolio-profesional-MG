import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  // ¡LA CLAVE 'content' ES VITAL EN V3!
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', ...defaultTheme.fontFamily.sans],
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'primary-teal': '#2EC4B6',
        'primary-yellow': '#FFC83E',
        'primary-gray': '#F6F7F8',
        'dark-gray': '#6B7280',
        'text-dark': '#1F2937',
      },
    },
  },
  plugins: [],
} satisfies Config;