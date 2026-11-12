/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cream: '#FFF8E8',
        espresso: {
          DEFAULT: '#2A1B12',
          ink: '#2A1B12',
          muted: '#7C6A58',
        },
        kowhai: {
          DEFAULT: '#F6B81A',
          deep: '#E39B0B',
          soft: '#FDF1CC',
        },
        flax: {
          DEFAULT: '#4F6B3A',
          soft: '#E6EDD8',
        },
        oat: {
          DEFAULT: '#F3E6C8',
          line: '#EBDFC4',
        },
      },
      fontFamily: {
        heading: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        body: ['Manrope', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '24px',
        banner: '36px',
        pill: '9999px',
      },
    },
  },
  plugins: [],
}
