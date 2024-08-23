/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        backgroundImage: {
          'bg_img': "url('/assets/bg.jpg')",
        
        }
      },
    },
    plugins: [],
  }