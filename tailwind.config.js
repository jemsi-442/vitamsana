module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff8f1',
          100: '#ffe9d3',
          200: '#ffd1a6',
          300: '#ffb066',
          400: '#f68f32',
          500: '#d96a12',
          600: '#b8570f',
          700: '#8b420f',
          800: '#5e2d0d',
          900: '#311606',
        },
        sand: {
          50: '#fffdf9',
          100: '#f8f1e7',
          200: '#eadac3',
          300: '#d8bc93',
        },
        ink: {
          700: '#40332a',
          800: '#281f19',
          900: '#16110d',
        },
      },
      fontFamily: {
        display: ['Georgia', 'Cambria', '"Times New Roman"', 'serif'],
        body: ['"Trebuchet MS"', '"Segoe UI"', 'sans-serif'],
      },
      boxShadow: {
        warm: '0 18px 45px -20px rgba(110, 53, 14, 0.45)',
      },
    },
  },
  plugins: [],
}
