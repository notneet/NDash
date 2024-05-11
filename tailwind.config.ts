import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      primary: "#E6B31E",
      background: "#343434",
      tertiary: "#0000FF",
      font: "#FCFAF1",
      foreground: "#CACACA",
      green: "#65B741",
      red: "#C73659",
      yellow: "#FDDE55",
    },
  },
  plugins: [],
};
export default config;
