/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': 'hsl(117, 90%, 97%)',
        'grey': {
          100: 'hsl(233, 100%, 93%)',
          300: 'hsl(235, 14%, 71%)',
          500: 'hsl(240, 8%, 51%)'
        },
        'black': 'hsl(225, 77%, 5%)',

        'dark-blue': {
          300: 'hsl(219, 85%, 61%)',
          400: 'hsl(221, 83%, 56%)',
          500: 'hsl(221, 81%, 51%)',
          700: 'hsl(222, 85%, 40%)'
        },
        'light-blue': {
          500: 'hsl(178, 97%, 40%)',
          700: 'hsl(176, 98%, 25%)',
        },
        'green': {
          400: 'hsl(146, 85%, 54%)',
          500: 'hsl(146, 100%, 45%)',
        }
      }
    },
  },
  plugins: [],
}
