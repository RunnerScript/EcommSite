/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      animation: {
        'bounce-slow': 'bounceSlow 1s linear infinite',
        'bounce-medium': 'bounceMedium 1.2s linear infinite',
        'bounce-fast': 'bounceFast 1.3s linear infinite',
        'fade-in': 'fadeIn 1s forwards',

      },
      boxShadow: {
        'dramatic-inset': 'inset 0 0 50px rgba(0, 0, 0, 0.3)',
      },
      keyframes: {
        fadeIn: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-25%)' },
        },
        bounceMedium: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15%)' },
        },
        bounceFast: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10%)' },
        },
      },
    },
  },
  plugins: [],
}

