/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        80: "80vh",
      },
      transition: {
        cust: "all 1s ease ",
      },
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
        appear: {
          "from ": {
            opacity: "0",
            scale: "0",
            transform: "translateX(-150px)",
          },
          to: {
            opacity: "1",
            scale: "1",
            transform: "translateX(0px)",
          },
        },
      },
      animation: {
        blink: "blink 1s ease-in-out infinite forwards",
        appear: "appear linear ease-in",
      },
    },
  },
  plugins: [],
};
