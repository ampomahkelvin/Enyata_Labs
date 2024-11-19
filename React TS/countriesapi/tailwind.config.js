/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Nunito Sans"', ...defaultTheme.fontFamily.sans],
      },
    },
    screens: {
      sm: "580px",
      md: "860px",
      lg: "1200px",
      xl: "1400px",
    },
    colors: {
      black: {
        100: "#2B3844",
        200: "#202C36",
      },
      white: "#FFFFFF",
    },
  },
  plugins: [],
};
