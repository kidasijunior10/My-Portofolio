import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#111827",
        "dark-secondary": "#1F2937",
        "dark-tertiary": "#374151",
        primary: "#F1F1F1",
        secondary: "#A0A0A0",
        accent: "#F97316",
      },
      fontFamily: {
        sora: ["var(--font-sora)"],
        inter: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};

export default config;
