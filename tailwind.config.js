/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        blink: {
          " 0%": {
            transform: "scale(1)",
          },
          " 50%": {
            transform: "scale(1.005)",
            border: "3px #d72a76 solid",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },
      animation: {
        blink: "blink 1s ease-in-out infinite forwards",
      },
    },
  },
  plugins: [],
};
