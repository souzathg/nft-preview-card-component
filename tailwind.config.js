/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif']
      },
      colors: {
        primary: {
          soft_blue: "hsl(215, 51%, 70%)",
          cyan: "hsl(178, 100%, 50%)"
        },
        neutral: {
          main: "hsl(217, 54%, 11%)",
          card: "hsl(216, 50%, 16%)",
          line: "hsl(215, 32%, 27%)",
          white: "hsl(0, 0%, 100%)"
        },
      },
    },
  },
  plugins: [],
};
