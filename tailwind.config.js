export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        primaryOrange: "#FF6B00",
        primaryBlack: "#212121"
      }
    },
  },
  plugins: [require('tailwindcss-primeui')]
}