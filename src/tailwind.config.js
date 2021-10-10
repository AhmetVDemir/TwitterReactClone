module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary : {
          base:"hsl(203, 89%, 53%)",
          dark:"hsl(203, 89%, 46%)",
          light:"hsl(203, 89%, 96%)"
        },
        gray : {
          dark:"#657786",
          light:"#aabbc2",
          extraLight:"#e1e8ed",
          lightest:""

        },
        black : "#14171A"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
