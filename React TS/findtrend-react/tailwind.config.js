/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Effra: ["Effra", "sans-serif"],
      },
      content: {
        webDoodle: "url('./assets/arrow vector web.png')",
        mobileDoodle: "url('./assets/arrow vector.png')",
        heroDoodle: "url('./assets/img-hero.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
