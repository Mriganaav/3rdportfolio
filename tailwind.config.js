/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Elms Sans"', "sans-serif"],
        cursive: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
