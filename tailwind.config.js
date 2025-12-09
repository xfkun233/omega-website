/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        night: {
          900: '#0b0f1a',
          800: '#111827',
        },
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0,0,0,0.35)',
      },
      fontFamily: {
        serif: ['"Noto Serif SC"', '"Noto Serif JP"', 'serif'],
        display: ['"Cinzel"', 'serif'],
      },
    },
  },
  plugins: [],
}
