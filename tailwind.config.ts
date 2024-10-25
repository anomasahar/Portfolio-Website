import type { Config } from "tailwindcss";

const colors = require("tailwindcss/colors");

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
      ...colors,
      primary: colors.purple,
      secondary: colors.pink,
      sky: colors.sky, // Replacing lightBlue with sky
      stone: colors.stone, // Replacing warmGray with stone
      neutral: colors.neutral, // Replacing trueGray with neutral
      gray: colors.gray, // Replacing coolGray with gray
      slate: colors.slate, // Replacing blueGray with slate
    },
  },
  plugins: [],
};
export default config;
