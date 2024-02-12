/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(0,0%,81.57%)",
        secondary: "hsl(240,21.31%,11.96%)",
        tertiary: "hsl(179.71,84.62%,48.43%)",
        red: "#FF0000",
      },
    },
  },
  plugins: [],
};
