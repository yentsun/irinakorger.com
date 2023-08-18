const colors = require('tailwindcss/colors');


module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      height: theme => ({
        '112': '28rem',
        '120': '30rem',
        '140': '35rem',
        '160': '40rem',
      }),      
      colors: {
        palette: {
          lighter: '#F5F3FF',
          light: '#DDD6FE',
          primary: '#7C3AED',
          dark: '#6D28D9',
        },
        gray: colors.gray,
      },
      borderRadius: {
        extraLarge: '12rem',
      },
      fontFamily: {
        primary: ['Poppins'],
        secondary: ['"Open Sans"'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
