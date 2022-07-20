/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lexend: ["Lexend"],
        caveat: ["Caveat"],
      },
      colors: {
        redWine: "#A83D72",
        blueWine: "#51BBC9",
        sky: colors.sky,
        teal: colors.teal,
      },
    },
  },
  corePlugins: {
    aspectRatio: true,
  },
  plugins: [require("@tailwindcss/forms")],
};
