/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Roboto_Serif': ["Roboto Serif",'sans serif'],
        'Source_Sans_Pro':[ "Source Sans 3", 'serif'],
        'Exo':["Exo",'sans serif'],
            },
        colors:{
          'background':'#f5f7fb',
          'select-sidebar':'#f0f8ff',
          'select-title':' #3B5998',
          'orange':'#FD7D00',
          'credits':'#1366D9',
          'table-text': '#7D7D7D',
          'user-text': '#95A5A6',
          'user-title-text':'#2B3674'
        }
    },
  },
  plugins: [],
}

