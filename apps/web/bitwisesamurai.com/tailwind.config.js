/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,md,ts}"],
  theme: {
    extend: {
      fontFamily: {
        bold: ["open_sans_condensed_bold", ...defaultTheme.fontFamily.sans],
        light: ["open_sans_condensed_light", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
