module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    container:{
      center: true
    },
    extend: {
      fontSize:{
        "h1": ['58px', {lineHeight: '80px' }],
        "h2": ['40px', {lineHeight: '50px' }],
        "h3": ['24px', {lineHeight: '32px' }],
        "h4": ['20px', {lineHeight: '30px' }],
        "h5": ['16px', {lineHeight: '24px' }],
        "h6": ['14px', {lineHeight: '24px' }],
        "btn": ['14px', {lineHeight: '22px' }],
        "small": ['12px', {lineHeight: '16px' }],
        "paragraph": ['14px', {lineHeight: '20px' }],

      },
      backgroundColor:{
        'primary': "#FF6551",
        'danger-color': 'E74040',
        'faded-secondary-color-2': '#B6D7FF'
      },
      textColor:{
        'secondary-color-1': '#2435A1',
        'secondary-text-color-2': '#FFC652',
        'color': '#252B42',
        'second-text-color': '#737373'
      }

    },
    fontFamily:{
      'sans': ['Montserrat', 'sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
