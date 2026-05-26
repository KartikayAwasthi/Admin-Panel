/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF6347",
        secondary: "#FF8C69",
        dark: "#1F1F1F",
        darkBg: "#0f0f0f",
        secondaryDark: "#1a1a1a",
        grayBg: "#f5f5f5",
        lightGray: "#e5e5e5",
        darkCard: "#1a1a1a",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundColor: {
        darkPanel: "#0f0f0f",
        darkCard: "#1a1a1a",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
