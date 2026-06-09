import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Semantic tokens — all resolve to CSS custom properties so dark mode
        // is handled entirely in CSS without any Tailwind dark: prefix overhead.
        bg: "var(--color-bg)",
        "bg-elevated": "var(--color-bg-elevated)",
        text: "var(--color-text)",
        "text-secondary": "var(--color-text-secondary)",
        "text-muted": "var(--color-text-muted)",
        accent: "var(--color-accent)",
        "accent-subtle": "var(--color-accent-subtle)",
        "border-subtle": "var(--color-border-subtle)",
        // Legacy aliases — repointed at the semantic CSS-var tokens so pages that
        // still reference them (about, journey, contact, blog) inherit dark mode
        // automatically. Do NOT use the `/NN` alpha modifier on these (var-backed).
        ground: "var(--color-bg)",
        surface: "var(--color-bg-elevated)",
        glass: "var(--glass-bg)",
        "glass-dark": "var(--glass-bg)",
        ink: "var(--color-text)",
        "ink-2": "var(--color-text-secondary)",
        "ink-3": "var(--color-text-muted)",
        slate: "var(--color-text-secondary)",
        "slate-light": "var(--color-accent-subtle)",
        edge: "var(--color-border-subtle)",
        "edge-strong": "var(--color-border-subtle)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": [
          "clamp(52px, 6vw, 86px)",
          { lineHeight: "1.03", letterSpacing: "-0.025em" },
        ],
        "display-lg": [
          "clamp(38px, 4.5vw, 62px)",
          { lineHeight: "1.08", letterSpacing: "-0.02em" },
        ],
        "display-md": [
          "clamp(26px, 3vw, 40px)",
          { lineHeight: "1.15", letterSpacing: "-0.015em" },
        ],
        "body-lg": ["18px", { lineHeight: "1.75" }],
        "body-md": ["16px", { lineHeight: "1.7" }],
        "body-sm": ["14px", { lineHeight: "1.65" }],
        label: ["11px", { lineHeight: "1", letterSpacing: "0.13em" }],
      },
      backdropBlur: {
        glass: "20px",
        "glass-sm": "12px",
      },
      borderRadius: {
        card: "14px",
        "card-sm": "10px",
        btn: "10px",
        pill: "999px",
      },
      boxShadow: {
        "surface-1": "0 1px 2px rgba(20,24,31,0.05)",
        "surface-2": "0 4px 12px rgba(20,24,31,0.06)",
        "surface-3": "0 10px 24px rgba(20,24,31,0.08)",
        glass: "0 2px 8px rgba(20,24,31,0.05)",
        "glass-dark": "0 2px 6px rgba(0,0,0,0.2)",
        "glass-lift":
          "0 12px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)",
      },
      spacing: {
        section: "128px",
        "section-sm": "72px",
        "page-x": "80px",
        "page-x-sm": "24px",
      },
    },
  },
  plugins: [],
};

export default config;
