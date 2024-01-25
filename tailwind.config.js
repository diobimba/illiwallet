/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange': '#F09819',
        'gray-dark': '#515054',
        'gray': '#C4C4C4',
        'gray-light': '#F1F1F1',
      },
      fontFamily: {
        'montserrat': ['Montserrat']
      },
      letterSpacing: {
        widest: '.3em',
      },
      blur: {
        '5xl': '125px',
      },
      container: {
        screens: {
          sm: '600px',
          md: '728px',
          lg: '900px',
          xl: '900px',
          '2xl': '900px',
        },
      },
    },
  },
  plugins: [],
}
