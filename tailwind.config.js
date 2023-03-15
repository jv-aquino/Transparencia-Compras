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
        'dark-blue': 'hsl(221, 81%, 51%)',
        'light-blue': 'hsl(178, 97%, 40%)',
        'green': 'hsl(146, 100%, 45%)',
      }
    },
  },
  plugins: [],
}
