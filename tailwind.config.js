/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
        shake: 'shake 0.5s infinite',
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        shake: {
            '0%, 100%': { transform: 'translateX(0)' },
            '25%': { transform: 'translateX(-10px)' },
            '50%': { transform: 'translateX(10px)' },
            '75%': { transform: 'translateX(-10px)' },
          },
      },
    },
  },
  plugins: [],
  animation: {
    marquee: "marquee 25s linear infinite",
    marquee2: "marquee2 25s linear infinite",
    shake: 'shake 0.5s infinite',
  },
};
