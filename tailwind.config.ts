/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.tsx",
    "./src/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/screens/**/*.{ts,tsx}",
    "./src/navigation/**/*.{ts,tsx}",
    "./src/components/atom/**/*.{ts,tsx}",
    "./src/components/molecules/**/*.{ts,tsx}",
    "./src/components/organism/**/*.{ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#008488', // Primary SF Color
          50:  '#e0f7f8',
          100: '#b3ecee',
          200: '#80e0e3',
          300: '#4dd3d8',
          400: '#26c9d0',
          500: '#008488',
          600: '#00767a',
          700: '#005e62',
          800: '#00474a',
          900: '#003133',
        },
        secondary: '#F59E42',  // orange-400
        accent: '#10B981',     // emerald-500
        muted: '#6B7280',      // gray-500
        background: '#F3F4F6', // gray-100
        surface: '#FFFFFF',    // white
        error: '#EF4444',      // red-500
        warning: '#F59E42',    // orange-400
        info: '#3B82F6',       // blue-500
        success: '#22C55E',    // green-500
      },
    },
  },
  plugins: [],
}

