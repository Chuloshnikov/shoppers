const {fontFamily} = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    maxWidth: {
      container: "1520px",
      contentContainer: "1280px",
    },
    extend: {
      xs: "320px",
      sm: "375px",
      sml: "500px",
      md: "667px",
      mdl: "768px",
      lg: "960px",
      lgl: "1024px",
      xl: "1280px",
      "2x1": "1400px",
    },
    colors: {
      white: "#ffffff",
      black: "#000000",
      blue: "#0071dc",
      lightBlue: "#e6f1fc",
      yellow: "#ffc220",
      hoverBg: "#004f9a",
      lightText: "#46474a",
    },
    boxShadow: {
      bannerShadow: "0 1px 2px 1px #00000026"
    },
    fontFamily: {
      sans: ["var(--font-open_sans)", ...fontFamily.sans],
    },
  },
  plugins: [],
}