/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        'dark-primary': '#0F1C2E',
        'dark-secondary': '#1f2b3e',
        'dark-tertiary': '#374357',
        'light-primary': '#fffefb',
        'light-secondary': '#f5f4f1',
        'light-tertiary': '#cccbc8',
        'accent-premium': '#71c4ef',
      }
    },
  },
  plugins: [],
}