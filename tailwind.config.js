/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lexend: ["Lexend"],
        lexendbold: ["Lexend-bold"],
        caveat: ["Caveat"],
      },
      colors: {
        redWine: "#A83D72",
        blueWine: "#51BBC9",
      },
    },
  },
  corePlugins: {
    aspectRatio: true,
  },
  plugins: [require("@tailwindcss/forms")],
};
