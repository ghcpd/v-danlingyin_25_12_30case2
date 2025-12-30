/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef3e2',
          100: '#fde4b5',
          200: '#fbd487',
          300: '#fac459',
          400: '#f8b42b',
          500: '#f7a500',
          600: '#c68400',
          700: '#946300',
          800: '#634200',
          900: '#312100',
        },
        festive: {
          gold: '#FFD700',
          red: '#DC143C',
          green: '#228B22',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
