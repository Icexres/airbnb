/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Make sure this includes all your React file types
  ],
  theme: {
    extend: {
      fontFamily:{
        Cereal:['Cereal'],
      }
    },
  },
  plugins: [],
};
