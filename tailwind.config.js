/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-color': '#0E7A81',
        'heading-color': '#131313',
        'text-color': '#131313',
        'border-color': 'rgb(19, 19, 19, 0.1);',
        'bg-color': '#131313',
        'accent-color': '#E7FE29',
      },
      fontFamily: {
        manrope: ['Sora', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
