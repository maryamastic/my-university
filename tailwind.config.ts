import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0a0f1e",
          mid: "#111827",
          light: "#1e2d4a",
        },
        gold: {
          DEFAULT: "#c9a84c",
          light: "#e8c97a",
          dark: "#a07c30",
        },
        cream: {
          DEFAULT: "#f5f0e8",
          dark: "#ede6d6",
        },
      },
      fontFamily: {
        heading: ["Cormorant Garamond", "serif"],
        body: ["DM Sans", "sans-serif"],
      },
      fontSize: {
        "7xl": "5rem",
        "8xl": "6.5rem",
      },
      letterSpacing: {
        widest: "0.2em",
      },
    },
  },
  plugins: [],
};

export default config;