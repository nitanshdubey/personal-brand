/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          accent: "var(--color-accent)",
          background: "var(--color-background)",
          surface: "var(--color-surface)",
          text: "var(--color-text)",
        },
  
        fontFamily: {
          sans: ["Inter", "sans-serif"],
          heading: ["Sora", "sans-serif"],
        },
  
        container: {
          center: true,
          padding: {
            DEFAULT: "1.5rem",
            sm: "2rem",
            lg: "3rem",
            xl: "4rem",
          },
          screens: {
            "2xl": "1280px",
          },
        },
  
        boxShadow: {
          glow: "0 0 40px rgba(124, 92, 255, 0.25)",
        },
  
        borderRadius: {
          "4xl": "2rem",
        },
      },
    },
    plugins: [],
  };