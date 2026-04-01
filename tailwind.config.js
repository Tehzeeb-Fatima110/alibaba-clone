/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff6a00",
        "primary-dark": "#e55a00",
        secondary: "#1677ff",
        "secondary-dark": "#0958d9",
        surface: "#f5f5f5",
        "text-main": "#1a1a1a",
        "text-muted": "#6b7280",
      },
      fontFamily: {
        sans: ["'DM Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};

