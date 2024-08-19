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
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'primary': "#ECEEFF",
        "background": "#001220",
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      screens: {
        "wide": "1440px"
      },
      backgroundImage: {
        'wave1': "url('./assets/svg-waves/waves-1.svg')",
        'wave2': "url('./assets/svg-waves/waves-2.svg')",
        'wave3': "url('./assets/svg-waves/waves-3.svg')",
        'wave4': "url('./assets/svg-waves/waves-4.svg')",
        'wave5': "url('./assets/svg-waves/waves-5.svg')",
        'wave6': "url('./assets/svg-waves/waves-6.svg')",
        'wave7': "url('./assets/svg-waves/waves-7.svg')",
        'wave8': "url('./assets/svg-waves/waves-8.svg')",
        'wave9': "url('./assets/svg-waves/waves-9.svg')",
        'wave10': "url('./assets/svg-waves/waves-10.svg')",
      }
    },
  },
  plugins: [],
}

