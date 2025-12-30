/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // New Year festive color palette
        primary: {
          50: '#fef7e7',
          100: '#fdefc9',
          200: '#fcd98e',
          300: '#fabf53',
          400: '#f7a325',
          500: '#f08c0c', // Gold
          600: '#d46a08',
          700: '#b0490b',
          800: '#8f3a10',
          900: '#763110',
        },
        secondary: {
          50: '#fdf2f4',
          100: '#fce7ea',
          200: '#f9d2d9',
          300: '#f4aebb',
          400: '#ec7f97',
          500: '#e05477',
          600: '#cb3361',
          700: '#ab2550',
          800: '#8f2248',
          900: '#7a2042', // Deep Red
        },
        festive: {
          gold: '#FFD700',
          red: '#C41E3A',
          green: '#228B22',
          silver: '#C0C0C0',
          midnight: '#191970',
        },
      },
      fontFamily: {
        display: ['Georgia', 'serif'],
        body: ['system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'sparkle': 'sparkle 1.5s ease-in-out infinite',
      },
      keyframes: {
        sparkle: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.5, transform: 'scale(1.1)' },
        },
      },
      backgroundImage: {
        'gradient-festive': 'linear-gradient(135deg, #191970 0%, #C41E3A 50%, #FFD700 100%)',
        'gradient-celebration': 'linear-gradient(180deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
      },
    },
  },
  plugins: [],
};
