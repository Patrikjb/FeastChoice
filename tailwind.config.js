/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'purple1' : '#CC0052',
        'blue1' : '#0052cc'
      }
    }
  },
  plugins: [],
}
