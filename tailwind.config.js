const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'dmsans' : ['DM Sans', 'sans-serif'],
      'barlow' : ['Barlow', 'sans-serif'],
    },
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      slate: colors.slate,
      red: colors.red,
      'primary': {
        'green': '#42b883',
        'green-light': '#42d392',
        'green-lighter': '#35eb9a',
        'blue': '#213547'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
