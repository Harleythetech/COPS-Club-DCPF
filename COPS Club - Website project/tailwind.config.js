/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily:{
      inter: ["Inter","sans-script"],
      readex: ["Readex Pro","sans-script"]
    },
    extend: {},
    colors:{
      cops_blueg: 'rgba(9, 23, 44, 0.83);',
      btn_bgc: '#2B2B2B',
      font_colwhite: '#FFFFFF',
    },
    container:{
      center: true,
      padding: '1rem',
    },
  },
  plugins: [],
}
