import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Bahnschrift", '"DIN Alternate"', '"Segoe UI"', "sans-serif"],
        raleway: ["Bahnschrift", '"DIN Alternate"', '"Segoe UI"', "sans-serif"],
        poppins: ["Bahnschrift", '"DIN Alternate"', '"Segoe UI"', "sans-serif"],
        bahnschrift: ["Bahnschrift", '"DIN Alternate"', '"Segoe UI"', "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#f59e0b",
          dark: "#ea580c",
          light: "#fbbf24",
          soft: "#fef3c7",
        },
        navy: {
          DEFAULT: "#0a2540",
          deep: "#040e1b",
          surface: "#081a30",
          card: "#0b223d",
          border: "#163861",
          light: "#123358",
        },
        azure: {
          DEFAULT: "#0070f3",
          dark: "#0051b3",
          light: "#38bdf8",
          soft: "#e0f2fe",
        },
        accent: {
          DEFAULT: "#0070f3",
          dark: "#0051b3",
          light: "#38bdf8",
          soft: "#e0f2fe",
        },
        nest: {
          dark: "#040e1b",
          card: "#081a30",
          surface: "#0b223d",
          border: "#163861",
        },
      },
    },
  },
  plugins: [],
};
export default config;
