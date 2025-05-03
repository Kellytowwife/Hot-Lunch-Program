/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
      extend: {
        colors: {
          primary: "#00A651",   // your logo green
          secondary: "#FF6F00"  // your logo orange
        },
        fontFamily: {
          sans: ["Inter", "system-ui", "sans-serif"]
        }
      }
    },
    plugins: []
  }

  