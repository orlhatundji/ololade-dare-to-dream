/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFDE59",
        secondary: {
          100: "#FAF2E9",
          200: "#EBE7E4",
        },
      },
      boxShadow: {
        'custom': '0px 6px 10px 2px rgba(16, 16, 17, 0.1)',
      },
      fontFamily: {
        body: ["Montserrat", "sans-serif"],
        header: ["The Seasons"],
      },
    },
  },
  plugins: [],
}

