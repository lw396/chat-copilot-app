/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx}"],
  theme: {
    colors: {
      slate: colors.slate,
      white: colors.white,
      zinc: colors.zinc,
      indigo: colors.indigo,
      black: colors.black,
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Georgia", "serif"],
    },
    extend: {
      scrollbar: {
        thumb: "bg-blue-500 hover:bg-blue-700",
        track: "bg-gray-100",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
