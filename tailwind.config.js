/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    fontFamily: {
      'sans': ['Red\\ Hat\\ Text', 'sans-serif']
    },
    extend: {
        fontSize: {
            '2.5xl': '1.75rem',
            '3.5xl': '2.05rem',
            '4.5xl': '2.5rem',
        },
      colors:
          {
            red: {
                DEFAULT: 'hsl(14, 86%, 42%)',
                '700': 'hsl(14, 68%, 32%)'
            },
            green: 'hsl(159, 69%, 38%)',
            rose: {
              50 : 'hsl(20, 50%, 98%)',
              100 : 'hsl(13, 31%, 94%)',
              300 : 'hsl(14, 25%, 72%)',
              400 : 'hsl(7, 20%, 60%)',
              500 : 'hsl(12, 20%, 44%)',
              900 : 'hsl(14, 65%, 9%)',

            },
          }
    },
  },
  plugins: [],
}

