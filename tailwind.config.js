/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : {
          base : "hsl(203, 89%, 53%)",
          dark : "hsl(203, 89%, 46%)",
          light : "hsl(203, 89%, 96%)"
        },
        black : "hsl(210, 13%, 9%)",
        gray : {
          dark : "hsl(207, 14%, 46%)",
          light : "hsl(205, 16%, 71%)",
          extralight: "hsl(205, 25%, 91%)",
          lightest : "hsl(204, 33%, 97%)"
        }
      }
    },
  },
  plugins: [],
}
