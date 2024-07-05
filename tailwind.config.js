// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF9900",
        secondary: "#3366CC",
      },
      fontFamily: {
        custom: ["Roboto", "sans-serif"],
      },
      spacing: {
        128: "32rem",
      },
      boxShadow: {
        custom: "0 0 10px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
