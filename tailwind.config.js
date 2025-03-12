/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  "darkMode": "class",
  theme: {
    extend: {
      colors: {
        'primary-green': '#67952c',
      },
      fontFamily: {
        sans: ["Onest", "sans-serif"]
      },
      container: {
        center: true, 
        padding: '',
        screens: {
          sm: '600px',
          md: '720px',
          lg: '960px',
          xl: '1140px',
          '2xl': '1400px',
        },
      }

    },
  },
  plugins: [],
}