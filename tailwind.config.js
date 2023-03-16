/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
       fontFamily: {
        hind: ["Hind", " sans-serif"],
      },
      colors: {
        orangem: "#FFBE00",
        bluem: "#4CCFF9",
      }
    },
  },
  plugins: [],
};
