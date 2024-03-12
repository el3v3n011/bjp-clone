/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'bjp-orange':'#F97E0F',
        'bjp-saffron':'#F36523',
      },
      
    },
  },
  plugins: [],
}