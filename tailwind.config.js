/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        amber: "#FFBD38",
        navy: "#0000AC",
        "navy-light": "#0000AC66",
        "gray-light": "#D9D9D982",
        white: "#FFFFFF",
        "red-transparent": "#F0373840",
        red: "#F03738",
        yellow: "#FBBC04",
        border: "#757575",
        "tertiary-green": "#27AE60",
        "tertiary-red": "#EB5757",
        "red-light": "#FF3B3B24",
      },
      boxShadow: {
        "custom-green": "0 4px 15px 0 rgba(121, 207, 166, 1)", // Custom shadow matching #79CFA6
      },
    },
  },
  plugins: [],
};
