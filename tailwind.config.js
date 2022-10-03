/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/*.html', './public/pages/*.html'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Roboto']
      },
      fontSize: {
        'title': '3.5rem',
      },
      colors: {
        'primary': '#1D2130',
        'secondary': '#6B7CFF',
        'lightviolet': '#E0E4FC',
        'lightpink': '#D798E1',
        'grayish': '#2B2E3C',
        'footer': '#888888'
      }
    },
  },
  plugins: [],
}
