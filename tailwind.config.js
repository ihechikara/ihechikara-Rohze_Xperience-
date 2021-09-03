module.exports = {
  mode: 'jit',
  purge: [
    './public/*.html'

  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend: {
      colors:{
        blue:{
          450: '#3b5998'
        },
        yellow:{
          450: '#fbad50',
          550: '#FFD700'
        },
        red:{
          450: '#dd4b39'
        },
        green:{
          450: '#25D366'
        }
    },
  },
    },
  variants: {
    extend: {},
  },
  plugins: [],
}
