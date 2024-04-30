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
      h1_tablet: ['2rem', { lineHeight: '1.25' }], // base for Tablet
      h1_desktop: ['2.5rem', { lineHeight: '1.25' }], // base for Small to Large Desktop
      h1_xl: ['3rem', { lineHeight: '1.25' }], // base for Extra Large screens

      subtitle: ['1.25rem', { lineHeight: '1.5' }], // base for Mobile
      subtitle_tablet: ['1.5rem', { lineHeight: '1.5' }], // base for Tablet
      subtitle_desktop: ['1.75rem', { lineHeight: '1.5' }], // base for Small to Large Desktop
      subtitle_xl: ['2rem', { lineHeight: '1.5' }], // base for Extra Large screens

      body: ['1rem', { lineHeight: '1.5' }], // base for Mobile
      body_tablet: ['1.125rem', { lineHeight: '1.5' }], // base for Tablet
      body_desktop: ['1.25rem', { lineHeight: '1.5' }], // base for Small to Large Desktop
      body_xl: ['1.375rem', { lineHeight: '1.5' }], // base for Extra Large screens

      cta: ['1rem', { lineHeight: '1.5' }], // base for Mobile
      cta_tablet: ['1.125rem', { lineHeight: '1.5' }], // base for Tablet
      cta_desktop: ['1.25rem', { lineHeight: '1.5' }], // base for Small to Large Desktop
      cta_xl: ['1.375rem', { lineHeight: '1.5' }], // base for Extra Large screens
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
