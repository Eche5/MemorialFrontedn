/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Warm, quiet palette suited to a memorial page
        ivory: "#faf7f2",
        parchment: "#f3eee5",
        line: "#e6dfd3",
        ink: {
          DEFAULT: "#2a2622",
          soft: "#5b544c",
          muted: "#8a8178",
        },
        gold: {
          DEFAULT: "#a07f4f",
          soft: "#c9b38f",
          tint: "#f5efe4",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(42,38,34,0.04), 0 8px 24px -12px rgba(42,38,34,0.12)",
      },
    },
  },
  plugins: [],
};
