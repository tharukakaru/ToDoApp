/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      ltb: "#FFFFFF",
      dtb: "#161221",
      ltf: "#EDE6FF",
      dtf: "#2D2A37",
      primary1: "#FDBC1C",
      primary2: "#5F33E1",
      white: "#FFFFFF",
      black: "#000000",
      red: "#F52E31",
      bb: "#0000001a",
      customPurple: "#EDE6FF", //light mode cards colour
      PrimePurple: "#5F33E1", //primary colour of site
    },
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
