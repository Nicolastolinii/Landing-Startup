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
        'primary-green': '#16a249',
        'muted' : '#f1f5f9',

      },
      textColor: {
        'hover' : '#09090b',
        'primary': '#16a249',
        'muted' : '#71717a' ,
        'foreground' : '#09090b',
      },
      fontFamily: {
        // sans: ["Onest", "sans-serif"]
        serif: ["Playfair Display", "serif"],
      },
      container: {
        center: true,
        padding: '2rem',
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