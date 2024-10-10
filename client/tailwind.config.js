/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBg: '#222e50',
        secondaryBg: '#89BD9E',
        primaryAcc: '#b5ca8d',
        secondaryAcc: '#8bb174',
        callToAction: '#ba2d0b',
        primaryText: '#263B4D',
        secondaryText: '#28424B',
      },
    },
  },
  plugins: [],
}

