/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        skyblue: {
          50: '#508F89',
          100: '#347A8A',
          200: '#265C57',
        },
      },
      fontFamily: {
        'fontfb': ['Font_FB', 'Sans-serif']
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

