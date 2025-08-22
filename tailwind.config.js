/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          blue: '#B8E6FF',
          green: '#C8F4D9',
          yellow: '#FFF2CC',
          pink: '#FFE6F0',
          purple: '#E6E6FF',
          orange: '#FFE6CC',
          mint: '#CCF4E6',
          lavender: '#F0E6FF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
