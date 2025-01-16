/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        90: "90vh",
        45: "45%",
        30: "30%",
      },
      width: {
        60: "60%",
        40: "40%",
        25: "15rem",
        102: "35rem",
      },
      borderRadius: {
        half: "50%",
      },
      transition: {
        cust: "all 1s ease ",
      },
      fontFamily: {
        viet: ["Playwrite VN", "sans-serif"],
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
          },
          to: {
            opacity: "1",
            scale: "1",
          },
        },
        appearTop: {
          " 0% ": { opacity: "0", scale: "0" },

          "100%": {
            opacity: "1",
            scale: "1",
          },
        },
        //   typing: {
        //     from: {
        //       width: "50%",
        //     },
        //     to: {
        //       width: "100%",
        //     },
        //   },
        //   typeWritterBlink: {
        //     "50%": {
        //       borderColor: "transparent",
        //     },
        //   },
      },

      animation: {
        blink: "blink 1s ease-in-out infinite forwards",
        appear: "appear linear ease-in",
        appearTop: "appearTop 2s ease-in ",
        // typing: "typing 3s steps(11) forwards ",
        // typeWritterBlink: " typeWritterBlink 1s step-end infinite",
      },
    },
  },

  plugins: [],
};
