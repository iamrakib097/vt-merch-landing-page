import flattenColors from "tailwindcss/src/util/flattenColorPalette";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"], // Adding Montserrat font
        montserratitalic: ["Montserrat-italic", "sans-serif"],
        ActOfRejection: ["ActOfRejection", "sans-serif"],
      },
      textShadow: {
        custom:
          "3px 3px 0 #000, -3px 3px 0 #000, -3px -3px 0 #000, 3px -3px 0 #000",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow-border": {
          textShadow:
            "3px 3px 0 #000, -3px 3px 0 #000, -3px -3px 0 #000, 3px -3px 0 #000",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
