module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      blue: {
        light: "#2a75bb",
        dark: "#3c5aa6",
      },
      yellow: {
        DEFAULT: "#ffcb05",
      },
      white: {
        DEFAULT: "#ebebeb",
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      cursor: ["disabled"],
    },
  },
  plugins: [],
};
