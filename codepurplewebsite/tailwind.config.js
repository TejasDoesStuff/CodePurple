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
      },
    },
  },
  plugins: [],
}

