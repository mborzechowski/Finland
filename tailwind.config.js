/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'finland-white': '#FFFFFF',  // Biały
        'finland-blue': '#006ab6',   // Fiński niebieski (odcień nieba)
        'finland-dark-blue': '#003b5c', // Ciemniejszy niebieski (odcień jeziora)
        'finland-gray': '#d1d5db',   // Fiński szary
        'finland-black': '#1f1f1f',  // Czarny
      },
    },
  },
  plugins: [],
};
