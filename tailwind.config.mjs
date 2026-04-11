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
        DEFAULT: "1.5rem",
        xl: "5rem",
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
        "surface-elevated": "var(--surface-elevated)",
        foreground: "var(--foreground)",
        "foreground-soft": "var(--foreground-soft)",
        "foreground-muted": "var(--foreground-muted)",
        border: "var(--border)",
        "border-strong": "var(--border-strong)",
        accent: "var(--accent)",
        "accent-strong": "var(--accent-strong)",
        "accent-soft": "var(--accent-soft)",
        "accent-glow": "var(--accent-glow)",
        "accent-foreground": "var(--accent-foreground)",
        warm: "var(--warm)",
        "warm-soft": "var(--warm-soft)",
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
