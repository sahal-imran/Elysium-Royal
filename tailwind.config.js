module.exports = {
  future: {},
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "1000px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      white: "#fff",
      pink: "#BC26FB",
      blue: "#4A46F7",
    },
    fontFamily: {
      Ubuntu: ["Ubuntu", "sans-serif"],
      Oswald: ["Oswald", "sans-serif"],
    },
    extend: {},
  },
  variants: {},
};
