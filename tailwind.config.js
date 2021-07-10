module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pavan: {
          50: "#ffe8e8",
          100: "#f3c1c3",
          200: "#e5999c",
          300: "#da7175",
          400: "#cf4a4e",
          500: "#b53035",
          600: "#8e2528",
          700: "#661a1d",
          800: "#3e0d10",
          900: "#1b0203",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
