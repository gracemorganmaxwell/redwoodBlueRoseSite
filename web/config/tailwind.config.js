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
    fontSize: {
      h1: ['1.5rem', { lineHeight: '1.25' }], // base for Mobile
      subtitle: ['1.25rem', { lineHeight: '1.5' }], // base for Mobile
      body: ['1rem', { lineHeight: '1.5' }], // base for Mobile
      cta: ['1rem', { lineHeight: '1.5' }], // base for Mobile
    },
    screens: {
      sm: '480px', // Mobile to Tablet
      md: '768px', // Tablet to Small Desktop
      lg: '1024px', // Small Desktop to Large Desktop
      xl: '1440px', // Extra large screens
    },
  },
  plugins: [],
}
