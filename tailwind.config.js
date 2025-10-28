// tailwind.config.js
// eslint-disable-next-line @typescript-eslint/no-require-imports
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "mantis-cream": "#F6F1E4",
        "mantis-sand": "#E5D8B9",
        "mantis-bark": "#243627",
        "mantis-leaf": {
          100: "#D8EAC6",
          200: "#C0E09C",
          300: "#A8D372",
          400: "#8BC04D",
          500: "#6FA93F",
        },
        "mantis-green": {
          DEFAULT: "#2D6843",
          50: "#EEF5EF",
          100: "#DBE9DF",
          200: "#B6D3C0",
          300: "#8EBEA1",
          400: "#5D9D77",
          500: "#3F825D",
          600: "#2D6843",
          700: "#1F5031",
          800: "#143921",
          900: "#0B2515",
        },
        gray: colors.neutral,
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        sans: ["var(--font-nunito)", "Open Sans", "ui-sans-serif", "system-ui"],
        subheading: ["Roboto", "sans-serif"],
      },
      boxShadow: {
        "mantis-card": "0 25px 45px -25px rgba(31, 80, 49, 0.35)",
        "mantis-soft": "0 12px 30px -18px rgba(45, 104, 67, 0.45)",
      },
      borderRadius: {
        xl: "1.25rem",
      },
    },
  },
  plugins: [],
};
