/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx,md,mdx}", "./docs/**/*.{md,mdx}"],
    theme: { 
      extend: {
        colors: {
          "darkest": "#111412",
          "dark": "#1C1B1B"
        },
        fontFamily: {
          poppins: ["Poppins", "sans-serif"],
          inter: ["Inter", "sans-serif"]
        }, screens: {
          "3xl": "1900px"
        }
      } 
    },
    plugins: [],
    darkMode: ["class", '[data-theme="dark"]'], // Support dark mode
    corePlugins: { preflight: false }, // Prevent Docusaurus defaults to be overwritten
    blocklist: ["container"], // Disable built-in classes to not interfere with Docusaurus classes
}