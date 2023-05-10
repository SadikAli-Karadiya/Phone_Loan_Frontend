/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"]
      }
    },
    screens: {
      xxs: "220px",
      xs: "330px",
      ...defaultTheme.screens,
    },
  },
  plugins: [
    require("tailwindcss-debug-screens"),
  ],
}