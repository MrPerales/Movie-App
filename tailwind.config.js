/** * @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'background': 'rgba(36, 42, 50, 1)',
        'score':'rgba(255, 135, 0, 1)',
        'description':'rgba(146, 146, 157, 1)',
        'body':'rgb(46, 52, 60,1)'

      }
    },
  },
  plugins: [],
}

