/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        code: ["'Bebas Neue'", "sans-serif"],
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      colors: {
        accent: "#4FC3F7",
        bg: {
          DEFAULT: "#0a0a0a",
          elevated: "#161616",
        },
        fg: {
          DEFAULT: "#fafafa",
          muted: "#a3a3a3",
          subtle: "#737373",
        },
        line: "#262626",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
