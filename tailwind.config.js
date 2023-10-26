/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      // '2xl': '1440px',
    },
    extend: {
      fontFamily:{
        elza:['Elza Text Trial']
      },
      fontSize:{
        smm:'0.9375rem',
        xls:['22px','1.65rem'],
        xlx:['1.75rem', '2.0625rem'],
        xll:['2.5rem', '2.96rem']
      },
      colors:{
        brand:{
          default:'#1D2939',
          gray:'#E2E2E2',
          second:'#4A5461'
        }
      },
      boxShadow:{
        card:'0px 4px 55px rgba(97, 63, 176, 0.64)'
      },
      spacing:{
        13:'3.125rem'
      }
    },
  },
  plugins: [],
}

