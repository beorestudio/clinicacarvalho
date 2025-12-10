/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        rose: {
          DEFAULT: '#b46279',
          light: '#c88da0',
          dark: '#934a5d',
        },
        gold: {
          DEFAULT: '#cc9e43',
          muted: '#bda06d',
        },
        offwhite: '#FCFCFC',
        slate: {
          900: '#1a1a1a',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 20px 40px -15px rgba(180, 98, 121, 0.1)',
      }
    },
  },
  plugins: [],
}