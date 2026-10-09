/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0B1F2A',
          dark: '#07161F',
          card: '#0F2736',
          border: '#1E3A47',
          muted: '#8CA1AF',
        },
        gold: {
          light: '#FDE047',
          DEFAULT: '#F59E0B',
        },
        amber: {
          accent: '#D97706',
        },
        muted: '#5B7280',
        offwhite: '#F8FAFC',
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}
