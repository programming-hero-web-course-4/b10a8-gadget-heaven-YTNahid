/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-color': '#9538E2',
        'heading-color': '#0B0B0B',
        'text-color': 'rgb(9, 8, 15, .6)',
        'border-color': 'rgb(9, 8, 15, .1)',
        'bg-color': '#f7f7f7',
        'accent-color': '#E7FE29',
      },
      fontFamily: {
        manrope: ['Sora', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
