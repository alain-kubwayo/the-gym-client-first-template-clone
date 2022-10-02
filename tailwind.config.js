/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/*.html'],
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
        'tertiary': '#E0E4FC'
      }
    },
  },
  plugins: [],
}
