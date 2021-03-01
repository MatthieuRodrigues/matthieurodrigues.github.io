module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

      colors: {
        'snow': '#C3BFBA',
        'bear': '#473F34',
        'or': '#A98F5E',
        'dark-or' : '#90794D', 
        'night': '#373737',
        'sand': '#F5F2EC',
        'dark-blue': '#191D81',
        'moon': '#F2F4FA',
        'yellowsun': '#F4B414',
        'night': '#151515', 
      },
      backgroundImage: theme => ({
        'slider-1': "url('img/slider-1.png')",
        'rondin': "url('img/bg-rondin.png')",
       }),
    },
    fontFamily: {
      'medium' : ['Rubik'],
      'semibold' : ['Rubik'],
      'sans': ['Work Sans'],
     }, 
  },
  variants: {
    extend: {},
  },
  plugins: [],
}