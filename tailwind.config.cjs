/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#f8fafc",//FONDO
        secondary:{
          100:"#FEBD2F",//BOTONES
          200:"#11OEOD",//LETRA
          300:"#C4BFBD", //FONDO 2
          500:"#22D3EE"//MENU LATERAL

        }

        
      }
    },
  },
  plugins: [],
}