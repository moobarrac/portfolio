/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        code: "Bebas Neue, sans-serif",
      },
      colors: {
        primary: "#4FC3F7",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
