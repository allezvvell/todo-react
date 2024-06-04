/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      width: {
        100: '28rem',
        110: '32rem',
      },
      boxShadow: {
        custom: '0 -0.1rem 1rem rgba(100,100,100,0.1)',
      },
    },
    colors: {
      white: '#ffffff',
      green: '#50E3A4',
      beige: '#f0efe9',
      light: '#f9f9f9',
      chacol: '#5A5A5A',
      gray: '#ABABAB',
      peacock: '#71F2EA',
      darkNavy: '#0B2740',
      navy: '#103557',
      lightGray: '#ECECEC',
      transparent: 'transparent',
      lightDark: '#4b4b4b',
      dark: '#3b3b3b',
      deepDark: '#202020',
    },
    fontFamily: {
      list: ['GowunBatang', 'sans-serif'],
    },
  },
  plugins: [],
};
