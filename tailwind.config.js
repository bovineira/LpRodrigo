/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0C182E',
          dark: '#0A1425',
          light: '#1A2A4A',
        },
        accent: {
          DEFAULT: '#E79852',
          dark: '#C87A3A',
          light: '#F0B070',
        },
        background: '#F5F5F7',
        text: {
          DEFAULT: '#111827',
          light: '#6B7280',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
        body: ['Roboto', 'Lato', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'gold': '0 4px 14px 0 rgba(231, 152, 82, 0.3)',
      },
    },
  },
  plugins: [],
}


