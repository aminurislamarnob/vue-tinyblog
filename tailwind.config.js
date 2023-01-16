const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'dmsans' : ['DM Sans', 'sans-serif'],
      'barlow' : ['Barlow', 'sans-serif'],
    },
    container: {
      // you can configure the container to be centered
      center: true,

      // or have default horizontal padding
      padding: '1rem',

      // default breakpoints but with 40px removed
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1240px',
        '2xl': '1280px',
      },
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
