/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/common/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
       colors:{
        main:"#027eb0",
        main_hover:"#026c97",
        light:"#e9edf8",
        warning:'#bf3131',
        blue_gray:'#636c8b'
       },
      maxWidth:{
        "fullScreen": "1920px",
        'container':"1440px"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
