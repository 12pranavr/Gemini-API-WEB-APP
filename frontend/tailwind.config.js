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
        'hero-pattern': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./images/bg1.jpg') ",
        'navbar-bg': " url('./images/navbarbg.jpg')",
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.custom-transition': {
          transitionDuration: `calc(sin((var(--index) / 12) * 45deg) * 0.475s)`,
        },
        
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    })
  ],
}
