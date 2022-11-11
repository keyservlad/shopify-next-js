/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
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
    aspectRatio: false,
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwindcss-animation-delay"),
    require("@tailwindcss/aspect-ratio"),
    require("tw-elements/dist/plugin"),
    ({ matchUtilities, theme /* … */ }) => {
      // …
      matchUtilities(
        // https://gist.github.com/olets/9b833a33d01384eed1e9f1e106003a3b
        {
          aspect: (value) => ({
            "@supports (aspect-ratio: 1 / 1)": {
              aspectRatio: value,
            },
            "@supports not (aspect-ratio: 1 / 1)": {
              // https://github.com/takamoso/postcss-aspect-ratio-polyfill

              "&::before": {
                content: '""',
                float: "left",
                paddingTop: `calc(100% / (${value}))`,
              },
              "&::after": {
                clear: "left",
                content: '""',
                display: "block",
              },
            },
          }),
        },
        { values: theme("aspectRatio") }
      );
    },
  ],
};
