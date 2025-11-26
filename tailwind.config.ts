import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00A3FF",
        "primary-light": "#4CCBFF",
        "primary-dark": "#0077B8",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      backgroundColor: {
        glass: "rgba(255, 255, 255, 0.08)",
        "glass-strong": "rgba(255, 255, 255, 0.14)",
        "glass-dark": "rgba(0, 0, 0, 0.25)",
      },
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "20px",
      },
      boxShadow: {
        soft: "0 8px 32px rgba(0, 0, 0, 0.12)",
        glass: "0 4px 24px rgba(255, 255, 255, 0.08)",
        "inner-soft": "inset 0 0 12px rgba(255, 255, 255, 0.04)",
      },
      animation: {
        fade: "fade 0.3s ease-out",
        slide: "slide 0.3s ease-out",
      },
      keyframes: {
        fade: { from: { opacity: 0 }, to: { opacity: 1 } },
        slide: {
          from: { opacity: 0, transform: "translateY(6px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate")],
}

export default config
