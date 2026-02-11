/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#050508',
          secondary: '#0a0a12',
          card: 'rgba(255,255,255,0.03)',
        },
        accent: {
          indigo: '#6366f1',
          purple: '#8b5cf6',
          cyan: '#06b6d4',
          emerald: '#10b981',
          gold: '#f59e0b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
