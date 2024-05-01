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
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      gfs_didot_regular: ['GFS Didot', 'serif'],
    },
    screens: {
      sm: '200px',
      // => @media (min-width: 276px) { ... };

      md: '850px',
      // => @media (min-width: 800px) { ... };

      lg: '992px',
      // => @media (min-width: 992px) { ... };

      xl: '1200px',
      // => @media (min-width: 1200px) { ... };
    },
  },
  plugins: [],
}
