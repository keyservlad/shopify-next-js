/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        redWine: "#A83D72",
      },
    },
  },
  corePlugins: {
    aspectRatio: true,
  },
  plugins: [],
};
