/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
    darkMode: 'class',
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
      },
      boxShadow: {
        'customRed': '0px 0px 30px rgba(255, 13, 56, 0.21);'
      }
    },
  },
  plugins: [],
};
