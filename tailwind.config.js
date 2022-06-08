
	module.exports = {

  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,ts,jsx,tsx}'
  ],

  theme: {
    fontFamily : {
        serif: ['Italiana', 'serif'] 
    },
    extend: {},
  },

  plugins: [
    require('flowbite/plugin')
  ],
}