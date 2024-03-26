/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        'primary-orange': '#FF5722',
        'olive_green': '#435334',
        'darker_leaf_green': '#8ea177',
        'darker_green': "#5e7703",
        'leaf_green': '#b1c29d',
        'beige': '#E3DCC0',
        'brown': '#765038',
        'lighter_brown': '#84624c',
        'dark_brown':"#2f2016",
        'charcoal': '#171717',
        'obsidian': "#0B1215"
      },
    },
  },
  plugins: [],
};
