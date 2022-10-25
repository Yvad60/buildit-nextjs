/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,jsx}', './src/components/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        noto_sans: ['Noto Sans', 'sans-serif'],
      },
      colors: {
        primary_text: '#678C92',
      },
    },
  },
  plugins: [],
};
