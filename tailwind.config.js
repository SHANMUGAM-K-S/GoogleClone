
const colors=require('tailwindcss/colors')

module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors:{
          'fuchsia':colors.fuchsia
        }
        
      },
    },
    plugins: [],
   
    
  };
  