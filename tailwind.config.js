module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "900px",
      lg: "1200px",
      xl: "1440px",
    },
    colors: {
      white: "#fff",
      black: "#34313D",
      "dark-blue": "#3A3054",
      "pale-blue": "#4B3F6B",
      grey: "#9E9AA8",
      "light-grey": "#EFF1F7",
      green: "#2BD0D0",
      "light-green": "#9AE3E3",
      red: "#F46363",
    },
    extend: {},
  },
  plugins: [],
};
