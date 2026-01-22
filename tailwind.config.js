/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#1e1e1f',
          card: '#2b2b2c',
          border: '#383838',
        },
        accent: {
          yellow: '#ffdb70',
          purple: '#7c3aed',
        }
      }
    },
  },
  plugins: [],
}

