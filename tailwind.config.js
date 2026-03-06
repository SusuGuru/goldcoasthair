// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#eebd2b",
        "background-light": "#f8f7f6",
        "background-dark": "#221d10",
      },
      fontFamily: {
        display: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};