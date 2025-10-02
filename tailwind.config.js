
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     
    extend: {
     screens: {
     'sm': '50rem',     // 800px
        'md': '64rem',     // 1024px
        'lg': '80rem',     // 1280px (default is 1024px)
        'xl': '100rem',    // 1600px (default is 1280px)
        '2xl': '120rem',   // 1920px
        '3xl': '130rem', 
        
      },
    },
  },
  plugins: [],
};
