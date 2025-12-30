/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'new-year': {
          primary: '#D4AF37',
          secondary: '#FF6B6B',
          dark: '#1a1a2e',
          light: '#f8f9fa'
        }
      },
      fontFamily: {
        'heading': ['Georgia', 'serif'],
        'body': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
