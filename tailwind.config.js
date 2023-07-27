/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      base_btn: "#9949FF",
      white: "#ffff",
      black: "#000000",
      purple: "#8000FF",
      darkpurple: "#251C30",
      green: "#31D7B9",
      darkgrey: "#161E25",
      grey: "#292929",
      lightgrey: "#C6C6C6",
    },

    extend: {
      fontFamily: {
        Inter: ["Inter"],
      },
    },
  },
  plugins: [require("daisyui")],
};
