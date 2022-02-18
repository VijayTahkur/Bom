module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sansation': ['Sansation', 'sans-serif'],
        'rubik': ['Rubik', 'sans-serif'],
        'roboto' : ['Roboto', 'sans-serif'],
      },
      backgroundSize:{
        '100%': '100%',
      },
      backgroundImage: {
        'bodyBg': "url('/src/Images/body-bg.jpg')",
        'visionBg': "url('/src/Images/vision-bg.png')",
        'rgtIcon': "url('/src/Images/rgt-icon.png')",
        'lftIcon': "url('/src/Images/lft-icon.png')",
      },
      borderRadius: {
        "10":"10px",
        "20":"20px"
      },
      zIndex: {
        '-1': '-1',
       },
      inset: {
        '1px': '1px',
        '2px': '2px',
        '3px': '3px',
        '4px': '4px',
        '5px': '5px',
        '6px': '6px',
        '7px': '7px',
        '8px': '8px',
        '9px': '9px',
        '10px': '10px',
        '11px': '11px',
        '12px': '12px',
        '13px': '13px',
        '14px': '14px',
        '15px': '15px',
        '20px': '20px',
      },
      height: {
        "30":"30px",
        "40":"40px",
        '99': '99%',
        '100': '100%',
      },
      width: {
        "30":"30px",
        "40":"40px",
        '99': '99%',
        '100': '100%',
      },
      maxWidth:{
        "400":"400px",
        "450":"450px",
        "500":"500px",
        "510":"510px",
        "520":"520px",
        "530":"530px",
        "500":"500px",
        "560":"560px",
        "750":"750px",
        "1000":"1000px",
        "1280":"1280px",
        "1400":"1400px",
        "1555":"1555px",
      },
      colors:{
        "primary":"#FFB800",
        "blMenu":"#246BFD",
        "grLeft":"#FBDB03",
        "grRight":"#FA9113"
      },
      fontSize: {
        "12":'12px',
        "14":'14px',
        "16":'16px',
        "18":'18px',
        "20":'20px',
        "22":'22px',
        "24":'24px',
        "25":'25px',
        "26":'26px',
        "28":'28px',
        "30":'30px',
        "40":'40px',
        "42":'42px',
        "44":'44px',
        "46":'46px',
        "48":'48px',
        "50":'50px',
      },
      lineHeight: {
        "12":'12px',
        "14":'14px',
        "16":'16px',
        "18":'18px',
        "20":'20px',
        "22":'22px',
        "24":'24px',
        "26":'26px',
        "28":'28px',
        "30":'30px',
        "40":'40px',
        "42":'42px',
        "44":'44px',
        "46":'46px',
        "48":'48px',
        "50":'50px',
      }
    },
    
  },
  plugins: [],
}
