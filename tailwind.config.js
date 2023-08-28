/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit' ,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        NavBg: 'hsl(0, 0%, 94%)',
        BarBg: 'hsl(0,0%,20%)',
        LinkColor: 'hsl(253.2,93.5%,63.7%)',
        headerColor: '#212529',
        facebook: '#3b5998',
        twitter: '#00acee',
        youtube: '#ff0000',
        instagram: '#fbad50',
        btnColor: '#724cf9',
        btnHover: '#5a2ff3',
        menuActive: '#0041bb',
        btnBoxColor: 'rgba(0,0,0,.5)',
        cheese: '#F7C946',
        tomato: '#D84B2A',
        crust: '#D19952',
        peperoni: '#A2371D',
        olive: '#1D1D1D',
        inputBg: '#ddd',
        inputFocus: '#888',
        inputHover: '#bbb',
        registerLink: '#0d6efd',
        goggle: '#757575',
        tableBorder: '#dee2e6',
        errorBg: '#f8d7da',
        errorBorder: '#f5c6cb',
        errorColor: '#721c24',
        loadingBody: 'hsl(0, 0%, 94%)',
        pencilPrimary: '#232123',
        pencilSec: 'hsl(253.2,93.5%,63.7%)',
      },
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif']
      },
      keyframes: {
        comeout: {
          '0%' : { left: '-70%' },
          '100%' : { left: '0%' }
        },
        goout: {
          '0%' : { left: '0%' },
          '100%' : { left: '-70%' }
        },
        pencil: {
          '0%': { transform: 'rotate(135deg)' },
          '20%': {transform: 'rotate(315deg)' },
          '45%': { transform: 'translateX(300px) rotate(315deg)' },
          '55%' : {transform: 'translateX(300px) rotate(495deg)'},
          '100%' : { transform: 'rotate(495deg)'}
        },
        line: {
          '20%': { transform: 'scaleX(0)' },
          '45%': { transform: 'scaleX(0.6)' },
          '55%' : { transform: 'scaleX(0.6)' },
          '100%': { transform: 'scaleX(0)' }
        }
       },
       animation: {
        pencil: 'pencil 10s infinite',
        line: 'line 10s infinite',
       },
       screens: {
        'xsm': '340px',
        'xs': '450px',
        'xmd': '900px',
        'ssm' : '520px',
        'xssm': '590px'
       },
       clipPath: {
        mypolygon: "polygon(50% 100%, 0 0, 100% 0)",
        pencilCap: "polygon(20% 40%, 100% 0%, 100% 100%, 20% 60%)"
       },
       dropShadow: {
        '5xl': '0 0 8px #888888',
        '4xl': '0 0 8px #724cf9'
       }
    },
  },
  plugins: [
    require('tailwind-clip-path'),
    require('tailwindcss'),
    require('autoprefixer'),
    require("tailwindcss-animation-delay"),
    require("tailwind-scrollbar")({ nocampatible: true })
  ],
}
