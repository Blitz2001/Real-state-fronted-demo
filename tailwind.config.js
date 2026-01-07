/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Luxury Theme
        luxury: {
          dark: '#0f172a', // Slate 900
          light: '#f8fafc', // Slate 50
          accent: '#059669', // Emerald 600
        },
        // Neo-Brutalist Theme
        neo: {
          white: '#ffffff',
          black: '#000000',
          orange: '#ff5a1f',
          green: '#ccff00',
        },
        // Organic Theme
        organic: {
          bg: '#f3f1e7', // Warm beige
          text: '#2c3e2e', // Dark green/grey
          sage: '#9caf88',
          terra: '#cda992',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        mono: ['Space Mono', 'monospace'], // For Neo
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
}
