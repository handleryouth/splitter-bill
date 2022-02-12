module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkCyan: "#00494d",
        darkGrayishCyan: "#5e7a7d",
        darkGrayishCyan2: " 	#7f9c9f",
        lightGrayishCyan: " 	#c5e4e7",
        lightGrayishCyan2: "#f4fafa",
      },
      screens: {
        "custom-breakpoint": "834px",
      },
    },
  },
  plugins: [],
};
