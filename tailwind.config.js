/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        pawBgOne: '#99F6E4', //green-minty
        pawBgTwo: '#F5F7FB', //white with abit of gray
        pawBgThree: '#FBCBC9', //pinkish
        pawBgFour: '#00a19d' //parisian green
      }
    },
  },
  plugins: [],
}

