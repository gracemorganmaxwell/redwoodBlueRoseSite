/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        darkBlue: '#314063',
        white: '#fefefe',
        greyViolet: '#B6B7C8',
        blueGrey: '#738BAC',
        slateBlue: '#535F93',
        royalBlue: '#233277',
        darkerGreyViolet: '#7E7F9A',
        black: '#000000',
      },
      backgroundImage: {
        'blue-blackbkgroundgradient':
          'linear-gradient(90deg, #222147 , #535F93)',
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      gfs_didot_regular: ['GFS Didot', 'serif'],
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  plugins: [],
}
