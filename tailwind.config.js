/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '0px',
        'sm': '440px',
        'ms': '570px',
        'md': '800px',
        'lg': '1024px',
        'xl': '1200px',
        '2xl': '1600px',
        '3xl': '2000px',
      },
      colors: {
        'themeColor': '#FAB702',
        'darkColor': "#cd2122",
        'bgLight': "rgb(226, 232, 240)",
        'bgDark': "rgb(55, 65, 81)",
      },
    },
  },
  plugins: [require("daisyui")],
}
