module.exports = {
  purge: ['./pages/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gunmetal: '#252b33',
        oldlav: '#675d7b',
        wisteria: '#c59ad5',
        capri: '#11bbfd',
      },
    },
    fontFamily: {
      sans: `'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
