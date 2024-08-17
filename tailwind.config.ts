import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: {
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
      },
      borderColor: {
        primary: "var(--border-primary)",
      },
    },
  },
  plugins: [],
};
export default config;
