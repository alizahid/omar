const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['pages/**/*.js'],
  darkMode: 'media',
  mode: 'jit',
  theme: {
    colors,
    extend: {},
    fontFamily: {
      body: ['Inter', 'system-ui', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
