/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:"jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'softblack': '#1a1a1a',
        'softwhite': '#d2d2d2',
      }
    },
  },
  plugins: [],
}
