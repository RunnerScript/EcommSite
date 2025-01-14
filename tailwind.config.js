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

      },
      keyframes: {
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

