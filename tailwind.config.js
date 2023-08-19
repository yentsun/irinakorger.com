const colors = require('tailwindcss/colors');


module.exports = {
    mode: 'jit',
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
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
                    primary: '#876c5b',
                    violet: '#6e2c67',
                    green: '#2b7e76',
                    eggshell: '#f4f1ee'
                },
                gray: colors.gray,
                white: colors.white
            },
            borderRadius: {
                extraLarge: '12rem',
            },
            fontFamily: {
                primary: ["Roboto, Arial, sans-serif"],
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
