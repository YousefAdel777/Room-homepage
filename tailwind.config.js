/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./src/**/.{html,js}"],
  theme: {
    colors: {
      "white": "hsl(0, 0%, 100%)",
      "transparent": "#0000",
      "black": "hsl(0, 0%, 0%)",
      "gray-600": "hsl(0, 0%, 63%)",
      "gray-800": "hsl(0, 0%, 27%)",
    },
    screens: {
      "md": "768px",
      "lg": "992px",
      "xl": "1200px",
      "2xl": "1400px",
      "3xl": "1441px",
    },
    fontFamily: {
      "league": ["League Spartan", "sans-serif"],
    },
    extend: {
      fontSize: {
        "normal": "0.75rem",
      },
      spacing: {
        "15": "3.75rem",
        "14": "3.5rem",
        "18": "4.5rem",
        "19": "4.75rem",
        "25": "6.25rem",
        "30": "7.5rem",
      },
    },
  },
  plugins: [],
}

