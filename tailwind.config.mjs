/** @type {import('tailwindcss').Config} */

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        lg: "2rem",
      },
      screens: {
        xl: "1280px",
      },
    },
    fontFamily: {
      sans: ["var(--font-sans)"],
      mono: ["var(--font-mono)"],
    },
    extend: {
      colors: {
        background: "var(--background)",
        "background-muted": "var(--background-muted)",
        surface: "var(--surface)",
        "surface-strong": "var(--surface-strong)",
        foreground: "var(--foreground)",
        "foreground-soft": "var(--foreground-soft)",
        border: "var(--border)",
        accent: "var(--accent)",
        "accent-strong": "var(--accent-strong)",
        "accent-soft": "var(--accent-soft)",
        "accent-foreground": "var(--accent-foreground)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 4px)",
        sm: "calc(var(--radius) - 8px)",
      },
      boxShadow: {
        soft: "var(--shadow-sm)",
        lift: "var(--shadow-lg)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
