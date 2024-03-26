/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        'cerise-red': {
          '200': '#fbd0d9',
          '300': '#f7aab9',
          '400': '#f27a93',
          '500': '#e63f66',
          '600': '#d42a5b',
          '700': '#b21e4b',
          '800': '#951c45',
        },
        'malachite': {
          '50': '#effef1',
          '100': '#dafedf',
          '200': '#b8fac2',
          '300': '#80f593',
          '400': '#3de659',
          '500': '#19ce38',
          '600': '#0eab29',
          '700': '#0f8623',
          '800': '#116a21',
          '900': '#10571e',
          '950': '#03300d',
        },
        'mercury': {
          '50': '#f7f8f7',
          '100': '#eef0ef',
          '200': '#dfe1e0',
          '300': '#babfbd',
          '400': '#959b98',
          '500': '#787f7b',
          '600': '#616864',
          '700': '#4f5552',
          '800': '#444846',
          '900': '#3b3f3e',
          '950': '#272a28',
        },

      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  }

}

