// tailwind.config.js
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ... (căile tale)
  ],
  theme: {
    extend: {
      colors: {
        // Noua Paletă Verde Mantis
        "mantis-green": {
          DEFAULT: "#296A41",
          50: "#F0F5F2", // Crem deschis / Alb murdar (pentru fundaluri subtile)
          200: "#C2D1C8", // Nuanță mai deschisă (pentru hover/border Light Mode)
          600: "#296A41", // Verdele tău Principal (Text, Iconițe)
          700: "#1A4D31", // Verde Foarte Închis (Dark Mode Text/Accent)
        },
        // NOU: Nu mai folosim mantis-action (indigo)
        // Utilizăm mantis-green-500 ca accent pentru butoane CTA.
        "mantis-accent-light": "#70997F", // Un verde moale pentru link-uri/iconițe

        // Culoarea de bază
        gray: colors.neutral,
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        sans: ["var(--font-nunito)", "Open Sans", "ui-sans-serif", "system-ui"],
        subheading: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
