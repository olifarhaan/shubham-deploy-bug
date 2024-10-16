/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // Custom class for gradient text hover
      colors: {
        "gradient-start": "#1A56DB", // blue color
        "gradient-end": "#E02424", // red color
      },
      backgroundImage: (theme) => ({
        "gradient-text": "linear-gradient(to right, #1A56DB, #E02424)", // Gradient definition
      }),
    },
  },
  plugins: [],
};
