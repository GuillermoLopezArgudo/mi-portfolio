/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0c1219',
          soft: '#1a2330',
          mute: '#5c6b7a',
        },
        mist: {
          DEFAULT: '#e8eef2',
          deep: '#d2dde6',
        },
        foam: '#f4f7f9',
        signal: {
          DEFAULT: '#0f9b8e',
          bright: '#14b8a6',
          deep: '#0b7a70',
        },
      },
      fontFamily: {
        display: ['"Syne"', 'system-ui', 'sans-serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        lift: '0 18px 40px -24px rgba(12, 18, 25, 0.35)',
      },
      keyframes: {
        rise: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        sweep: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
      animation: {
        rise: 'rise 0.7s ease-out both',
        'rise-delay': 'rise 0.7s ease-out 0.15s both',
        'rise-late': 'rise 0.7s ease-out 0.3s both',
        fade: 'fade 1s ease-out both',
        sweep: 'sweep 0.8s ease-out 0.35s both',
      },
    },
  },
  plugins: [],
}
