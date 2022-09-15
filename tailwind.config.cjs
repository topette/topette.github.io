/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,jsx,js}",
  ],
  theme: {
    extend: {
      colors: {
        'topettefondo': '#292759',
        'topettehover': '#464AA6',
        'topettegreen': '#B0DB00',
        'topettegreenhover': '#84d620',
        'menuheader1':'#3B3F8C',
        'menuheader2':'#464AA6',
        'menuheader3':'#252B8E',      
      },
      backgroundImage: {
        'projects-pattern': "url('https://firebasestorage.googleapis.com/v0/b/miportafolio-cd3e1.appspot.com/o/oriental-tiles.png?alt=media&token=1821d4a0-6a96-44ac-9c6e-78a5bf7fcbc0')",
      },
    },
  },
  plugins: [],
}
