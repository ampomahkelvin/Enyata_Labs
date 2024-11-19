/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#0079FF",
        "light-background": "#FEFEFE",
        "light-card": "#F6F8FF",
        "light-gray": "#697C9A",
        "text-primary": "#2B3442",
        "text-secondary": "#4B6A9B",
        "dark-background": "#1E2A47",
        "dark-card": "#141D2F",
        "dark-html-background": "#141D2F",
      },
      fontFamily: {
        "spacemono": ["Space Mono", "sans-serif"],
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
