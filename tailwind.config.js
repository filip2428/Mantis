// tailwind.config.js
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  // Asigură-te că aceste căi sunt corecte pentru fișierele tale JSX/TSX
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Culoarea Mantis Principală (Verde Pădure)
        "mantis-green": {
          DEFAULT: "#296A41", // Culoarea ta: #296a41
          50: colors.emerald[50], // Folosim nuanțe de emerald pentru o bază mai curată
          100: colors.emerald[100],
          600: "#296A41", // Verdele tău principal
          700: "#1A4D31", // Nuanță mai închisă
        },
        // Culoarea Accentului (Contrast) - Păstrăm un Indigo/Albastru pentru CTA
        "mantis-action": colors.indigo,

        // Culoarea accentului din logo (Verde deschis)
        "mantis-light-leaf": "#90B47F",

        // Culoarea de bază
        gray: colors.neutral,
      },
      fontFamily: {
        // 🚨 NOU: Fontul pentru Titluri & Nume Brand (Poppins)
        // Folosește variabila CSS definită în layout.tsx
        heading: ["var(--font-poppins)", "sans-serif"],

        // 🚨 NOU: Fontul principal pentru Corp Text (Nunito / Open Sans)
        // Folosește variabila CSS definită în layout.tsx
        sans: ["var(--font-nunito)", "Open Sans", "ui-sans-serif", "system-ui"],

        // Poți folosi 'subheading' pentru Roboto, dacă dorești să-l separi
        subheading: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
