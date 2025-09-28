/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'font-a': ['FontA', 'sans-serif'],
        'font-b': ['FontB', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
