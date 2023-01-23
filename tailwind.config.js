/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage:{
        'iceland': "url(../assets/iceland.jpg)"
      },
      width:{
        '1200': '1200rem'
      } 
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif']
    }
  },
  plugins: [],
}
