module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        '-1' : '-1',
      },
      fontFamily:{
        'pfont' : ['Poppins', 'sans-serif'],
        "hfont" : ['Volkhov', 'serif']
      },
      colors: {
        'blacki' : '#212832',
        'redi' : '#DF6951',
        'orangi' : '#F1A501',
        'pcolor' : '#5E6282',
        'hcolor' : '#181E4B'
      },
      spacing: {
        'for10' : '0.63rem',
      },
      borderRadius: {
        'pers-round' : '36px',
      },
      borderWidth: {
        '1' : '1px',
      }
    },
  },
  variants: {
    extend: {

      // outline: ["focus",'active'],
      // borderColor: ["focus",'active'],
    },
  },
  plugins: [],
}
