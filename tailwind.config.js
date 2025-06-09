/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF', // Deep blue from reference
        secondary: '#0F766E', // Teal accent
        accent: '#EAB308', // Gold accent
        'hospital-blue': '#1E40AF',
        'hospital-teal': '#0F766E',
        'hospital-gold': '#EAB308',
        'hospital-gray': '#4B5563',
        'hospital-light': '#F3F4F6',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 