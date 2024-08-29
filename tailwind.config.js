/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '5xl': ['60px', '70px'],
      '6xl': ['72px', '82px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        fira: ['Fira Sans', 'sans-serif'],
      },
      colors: {
        'primary': "#ECEEFF",
        "background-colour": "#001220",
        'wave-blue': "#3b4374",
        'blue-purple': "#645d92",
        'light-purple': "#8e79b1",
        'purple-pink': "#b996cf",
        'light-pink': "#e5b4ed",
        'deep-blue': "#150e40"
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      screens: {
        "wide": "1440px"
      },
      animation: {
        'bounce-once': 'bounce-once 1s ease',
      }
    },
  },
  plugins: [],
}

