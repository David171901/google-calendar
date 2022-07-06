/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'react-red': '#ff0000',
        'react-green': '#00ff00',
        'react-blue': '#0000ff',
        'react-yellow': '#ffff00',
        'react-purple': '#ff00ff',
        'react-cyan': '#00ffff',
      },
    }
  },
  plugins: [],
}
