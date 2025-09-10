/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#005A9C',
          dark: '#004B80'
        },
        action: {
          DEFAULT: '#F37021',
          hover: '#D8601C'
        },
        success: {
          DEFAULT: '#2E8540',
          hover: '#246B33'
        },
        severity: {
          high: '#D92D20',
          medium: '#F79009',
          low: '#10B981'
        }
      }
    }
  },
  plugins: [],
}
