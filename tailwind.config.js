/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}", "node_modules/flowbite/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      fontFamily: {
        sans: ["Figtree"],
      },
      colors: {
        primary: "#ffd60a",
        abu: "#f3f6f6",
        abuDark: "#a6a6a6",
        dark: "#1d1d1d",
        bodytext: "#44566c",
        gold: {
          50: "#fefde8",
          100: "#fffcc2",
          200: "#fff687",
          300: "#ffe943",
          400: "#ffd60a",
          500: "#efbe03",
          600: "#ce9300",
          700: "#a46804",
          800: "#88510b",
          900: "#734210",
          950: "#432205",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
