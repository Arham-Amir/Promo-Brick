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
      fontFamily: {
        text: ['var(--font-text)'],
        heading: ['var(--font-heading)']
      },
      colors: {
        'themeColor': "#F1A208",
        'darkColor': '#393939',
        'bgLight': "#CCCACA",
        'textColor': "#052F5F",
        'bgDark': "rgb(55, 65, 81)",
        'bg' : "white",
      },
    },
  },
  plugins: [require("daisyui")],
}
