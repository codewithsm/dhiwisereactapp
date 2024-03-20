module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { 900: "#000000" },
        gray: { 300: "#e4e4e4", 900: "#181924" },
        white: { A700: "#ffffff", A700_65: "#ffffff65", A700_7f: "#ffffff7f" },
        purple: { A200_01: "#ff3bff" },
        indigo: { A400: "#4e4be4", A400_01: "#4f4ce5" },
      },
      boxShadow: { xs: "0px 5px  15px 0px #205bf133" },
      fontFamily: { spacegrotesk: "Space Grotesk", urbanist: "Urbanist", opensans: "Open Sans", abeezee: "ABeeZee" },
      backgroundImage: {
        gradient: "linear-gradient(90deg, #ff3bff,#ecbebe,#5c24ff,#d94fd5)",
        gradient1: "linear-gradient(91deg, #4e4be4,#e862fd)",
        gradient2: "linear-gradient(90deg, #4f4ce5,#e863fe)",
      },
      opacity: { 0.12: 0.12 },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
