import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        namanie: {
          bg: "var(--namanie-bg)",
          ink: "var(--namanie-ink)",
          red: "var(--namanie-red)",
          dim: "var(--namanie-dim)",
          border: "var(--namanie-border)",
        },
      },
      fontFamily: {
        serif: ["var(--font-noto-serif-jp)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
