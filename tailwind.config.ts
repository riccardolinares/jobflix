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
      colors: {
        yellow: { DEFAULT: "#FFBA00" },
        black: { DEFAULT: "#03121C" },
        gray: { DEFAULT: "#F2F2F2" },
        blue: {
          DEFAULT: "#0D5991",
          light: "#6BA8D6",
          medium: "#0F8CD9",
        },
      },
      fontFamily: {
        lato: "var(--font-lato)",
        nunito: "var(--font-nunito)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
