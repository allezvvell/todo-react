/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {},
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
    },
    fontFamily: {
      list: ['GowunBatang', 'sans-serif'],
      nanumBold: ['NanumGothicBold'],
      nanum: ['NanumGothic'],
    },
  },
  plugins: [],
};
