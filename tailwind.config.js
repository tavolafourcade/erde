/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  plugins: [],
  theme  : {
    extend: {
      colors: {
        light    : '#F5F4EE',
        primary  : '#1C322E',
        secondary: '#326259'
      },
      fontFamily: {
        gantari: [ 'var(--font-gantari)' ],
        onest  : [ 'var(--font-onest)' ]
      }
    }
  }
}
