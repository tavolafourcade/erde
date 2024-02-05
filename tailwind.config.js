/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1C322E',
        secondary: '#326259',
      },
      fontFamily: {
        stix: ['STIXIntegralsUp', 'serif'],
        gantari: ['Gantari', 'sans-serif']
      },
      fontSize: {
        '25': '25px',
      },
    },
  },
  plugins: [],
}