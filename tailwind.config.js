/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
   
    extend: {
      height: {
        "sm-100": "calc(100vh - 100px)",
        "sm-50": "calc(100vh - 50px)",
        "sm-75": "calc(100vh - 75px)",
      },
      colors: {
        pri: "#00b397",
        sec: "#333333",
        tri: "#d3d3d3",
      },
    },
  },
  plugins: [],
};
