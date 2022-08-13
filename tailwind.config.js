/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      'lg': { 'max': "992px" },
      'md': { 'max': "768px" },
      'sm': { 'max': "480px" },
    },
    container: {
      padding: '20px',
      center: true,
    },
    extend: {
      colors: {
        lightBlack: '#4D4244',
        lightRed: '#FF0D38',
        darkRed: '#D70026',
        lightGray: '#747474',
        darkGray: '#272727'
      }
    },
  },
  plugins: [],
};
