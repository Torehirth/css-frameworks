/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: {
    files: ["./**/*.{html,js}", "!./node_modules/**/*.{html,js}"],
    // Tailwind removes unused CSS in production builds using PurgeCSS (built into Tailwind). If a class is not found in the HTML or JavaScript at build time, Tailwind won’t include it in the final CSS. The safelist ensures that specific classes are always included, even if they don’t appear in your code at build time.
    safelist: [
      { pattern: /^(bg|text|max|h|mb)-.+$/ },
      "xs:h-72",
      "sm:h-80",
      "md:h-96",
      "lg:h-auto",
      "xs:max-h-72",
      "sm:max-h-80",
      "md:max-h-96",
      "warning",
      "error",
      "success",
    ],
  },
  darkMode: "selector",
  theme: {
    extend: {
      screens: {
        xs: "425px",
        sm: "550px",
        md: "650px",
        lg: "768px",
        xl: "1024px",
        xxl: "1280px",
      },
      fontFamily: {
        sans: ["Open-Sans", "sans-serif"],
      },
      colors: {
        darkGray: "#323436",
        black: "#181A1C",
        white: "#F9F9F9",
        eden: {
          50: "#F0FDF9",
          100: "#CBFCEE",
          200: "#97F8DC",
          300: "#5BEDC9",
          400: "#2AD7B2",
          500: "#11BB99",
          600: "#0A977D",
          700: "#0D7866",
          800: "#106356",
          900: "#124F45",
          950: "#03302B",
        },
      },
    },
  },
  plugins: [],
};
