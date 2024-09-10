/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  container: {
    padding: {
      DEFAULT: "1rem",
      sm: "1rem",
      md: "1rem",
      lg: "3rem",
      xl: "4rem",
      "2xl": "5rem",
    },
  },
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        mont: ['Montserrat', 'serif']
      },
    },
  },
  plugins: [],
}

