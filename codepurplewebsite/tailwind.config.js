/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cooper: ['"Cooper Hewitt"', 'sans-serif'],
        kode: ['Kode Mono', 'sans-serif'],
      },
      fontWeight: {
        thin: 100,
        light: 300,
        book: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        heavy: 800,
      },
      colors: {
        codePurple: "#7E44CE",
        code: "#f27100",
        build: "#D23A3F",
        design: "#F1E31F",
        business: "#a7abff",
        electronics: "#2c6ad0",
        safety: "#99F11F"
      },
    },
  },
  plugins: [],
}

