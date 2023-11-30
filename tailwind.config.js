/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/atoms/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/molecules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/organisms/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        DEFAULT: "0 2px 4px 0 rgba(0, 0, 0, 0.1)",
        md: "0 4px 8px rgba(0, 0, 0, 0.1)",
        lg: "0 8px 16px 0 rgba(0, 0, 0, 0.1)",
        xl: "0 12px 24px 0 rgba(0, 0, 0, 0.1)",
        "2xl": "0 24px 48px 0 rgba(0, 0, 0, 0.1)",
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#1A614A",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(), require("tailwindcss")],
};
