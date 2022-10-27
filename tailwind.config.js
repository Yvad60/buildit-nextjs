/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,jsx}', './src/components/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans', 'sans-serif'],
      },
      colors: {
        primary_text: '#678C92',
      },
      backgroundImage: {
        banner: 'linear-gradient(42.43deg, #C6DBFF 0%, #E1EBFA 52.25%)',
      },
    },
  },
  plugins: [],
};
