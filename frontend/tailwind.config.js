/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Nunito'],
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('./images/bg1.jpg') ",
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.custom-transition': {
          transitionDuration: `calc(sin((var(--index) / 12) * 45deg) * 0.475s)`,
        },
        '.bg-brightness-50': {
          filter: 'brightness(50%)',
        },
        '.bg-brightness-75': {
          filter: 'brightness(75%)',
        },
        '.bg-brightness-100': {
          filter: 'brightness(100%)',
        },
        '.bg-brightness-125': {
          filter: 'brightness(125%)',
        },
        '.bg-brightness-150': {
          filter: 'brightness(150%)',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    })
  ],
}
