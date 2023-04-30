/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing:{
        '30':'51rem',
      },
      screens:{
        'xl':'1281px',
        'sz':'1900px',
      },
    },
  },
  plugins: [],
}
