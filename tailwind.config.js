module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'custom': '28rem',
        '128': '32rem',
      },
      screens: {
        'tablet': '640px',

        'laptop': '1024px',

        'desktop': '1280px',

      },
      fontFamily: {
        'body': ['Mulish'],
      },
    },
  },
  plugins: [],
}
