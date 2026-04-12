import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ground: "#F3EEE4",
        surface: "#ECE6DD",
        glass: "rgba(248, 244, 238, 0.9)",
        "glass-dark": "rgba(28, 26, 23, 0.82)",
        ink: "#1C1A17",
        "ink-2": "#6A6158",
        "ink-3": "#9C9188",
        slate: "#2B4865",
        "slate-light": "rgba(43, 72, 101, 0.12)",
        edge: "#D4CEC4",
        "edge-strong": "rgba(43, 72, 101, 0.25)",
      },
      fontFamily: {
        sans: ["Manrope", "system-ui", "sans-serif"],
        display: ["Newsreader", "Georgia", "serif"],
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
        card: "16px",
        "card-sm": "10px",
        btn: "8px",
        pill: "999px",
      },
      boxShadow: {
        "surface-1": "0 1px 2px rgba(0,0,0,0.04)",
        "surface-2": "0 3px 8px rgba(0,0,0,0.06)",
        "surface-3": "0 6px 16px rgba(0,0,0,0.08)",
        glass: "0 2px 6px rgba(0,0,0,0.04)",
        "glass-dark": "0 2px 6px rgba(0,0,0,0.2)",
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
