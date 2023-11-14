/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {

        RedHatDisplay: ['Red Hat Display', 'sans-serif']
      },
      screens: {
        'custom': { 'max': '360px' }
      },
    },
  },
  plugins: [],
}

// font - family: 'Red Hat Display', sans - serif;
