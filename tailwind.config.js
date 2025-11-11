/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "forest-green": "#2E5D3A",
        "earth-brown": "#5C3D2E",
        "soft-blue": "#A7C7E7",
        charcoal: "#333333",
        "muted-green": "#4A7856",
      },
      fontFamily: {
        organic: ['"Playfair Display"', "serif"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
