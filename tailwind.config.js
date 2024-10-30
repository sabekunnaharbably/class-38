/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        // google font Start
        fontFamily: {
          'open': ['Open Sans'],
          'papri': ['Paprika'],
          'nuni': ['Nunito'], 
           'Quick': ['Quicksand'],            
        },
        // google font End  
        // colors Start
        colors: {
          hdBg: '#160C6D',
          hbColor: '#FDBB57',
          btnColor: '#1BBF00',
          bdrColor: '#FFD687',
          cardColor: '#6B62C5',
          starColor: '#FF7628',
          lastColor: '#48409C',
          },
        
       // colors End 
      //  container Start
      maxWidth: {
        'headerContainer': '1170px',
        'banerContainer': '962px',
        counterContainer: '1209px',
        chooseContainer: '1147px',
        'whatContainer': '1170.61px',
        'upcreateContainer': '558px',
         'createContainer': '1079px',

      },

      //  container End

        //  Image Part Start

        backgroundImage: {

          bannerimage: "url('./images/logo2.png')",
  
          gallarybanner: "url('./images/logo7.png')",
  
          choosebanner: "url('./images/logo8.png')",
          createbanner: "url('./images/img8.png')",
  
        },
  
        //  Image Part End
  
  
    },
  },
  plugins: [],
}

