module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Calibri', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      inset: {
        '1/5': '20%',
        '1/10': '10%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
