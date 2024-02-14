/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        angryRed: "#F9404E",
        happyYellow: "#FFBF2D",
        sadBlue: "#7690FE",
        peaceGreen: "#46D691",
      },
    },
  },
  plugins: [require("daisyui")],
};
