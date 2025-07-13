/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        'primary-red': '#EF476F',
        'secondary-green': '#06D6A0',
        'secondary-dark-green': '#0A785B',
        'tertiary-yellow': '#FFD166',
        'netral-background': '#F7F7F7',
        'default-gray': '#717171',
        'black-text': '#212121'
      },
      fontFamily: {
        'helvetica': ['Helvetica', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'xs': '0.625rem',
        'sm': '0.75rem',
        'base': '0.875rem',
        'lg': '1.5rem',
      },
      fontWeight: {
        'light': 300,
        'normal': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
      },
    },
  },
  plugins: [],
}

