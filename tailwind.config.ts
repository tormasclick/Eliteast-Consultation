import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",       // Scans files in the 'app' directory
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // Scans files in 'components' directory
    "./src/**/*.{js,ts,jsx,tsx,mdx}",            // Ensures all src files are scanned
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // Custom background color
        foreground: "var(--foreground)", // Custom foreground color
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"], // Adding Open Sans globally
      },
    },
  },
  plugins: [],
};

export default config;