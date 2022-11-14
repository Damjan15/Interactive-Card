/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#262E38",
        lightGray: "#969FAD",
        mediumGray: "#7C8798",
        orange: "#FC7614",
        veryDarkBlue: "#131518", 
      },
      fontFamily: {
        sans: ['Overpass', 'sans-serif']
      }
    },
  },
  plugins: [],
}
