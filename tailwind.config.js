/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
 
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens:{
        
      },
      backgroundImage:{
        'roadimage': "url('images/background-road-share 1.png')",
        'backgroundimage':"url('images/miguel-a-amutio-QDv-uBc-poY-unsplash 1.png')"
      }
    },
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant("open-menu", ".open-menu &");
    })
  ],
}

