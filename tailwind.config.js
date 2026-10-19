/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'genie-purple': '#8B5CF6',
        'genie-pink': '#EC4899',
        'genie-blue': '#3B82F6',
      }
    },
  },
  plugins: [],
}
