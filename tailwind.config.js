/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Quicksand", "sans-serif"],
    },
    colors: {
      grayBg: "#FAFAFE",
      yellowBg: "#FFF0DE",
      darkRed: "#80485B",
      mainYellow: "#F9A109",
      fullDark: "#454545",
      lightDark: "#34333A",
      lightGray: "#BDBDBD",
      white: "#FFFFFF",
      gray: "#C1C1C4",
      darkGray: "#828282",
      red: "#EB5757",
      blue: "#56CCF2",
    },
  },
  plugins: [],
};
