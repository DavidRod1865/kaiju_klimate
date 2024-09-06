/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        creepster: ["Creepster", "cursive"],
      },
      keyframes: {
        fade: {
          "0%": { opacity: 0 },
          "50%": { opacity: 1 },
          "100%": { opacity: 0 }, 
        },
      },
      animation: {
        fade: "fade 1.75s linear infinite",
      },
    },
  },
  plugins: [],
};

