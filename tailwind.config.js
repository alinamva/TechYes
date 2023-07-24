/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      base_btn: "#9949FF",
      white: "#ffff",
      black: "#000000",
      darkpurple: "#251C30",
      secondary: "#12c6ff",
    },

    extend: {
      fontFamily: {
        Inter: ["Inter"],
      },
    },
  },
  plugins: [require("daisyui")],
};
