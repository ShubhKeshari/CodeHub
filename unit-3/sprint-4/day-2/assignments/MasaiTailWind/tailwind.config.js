/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        opsan: ["Open Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        "5bs": "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      },
      colors: {},
    },
  },
  plugins: [],
};
