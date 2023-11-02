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
        yellow: "#FFBA00",
        black: "#03121C",
        gray: "#F2F2F2",
        blue: "#0D5991",
        "light-blue": "#6BA8D6",
        "medium-blue": "#0F8CD9",
      },
      fontFamily: {
        lato: "var(--font-lato)",
        nunito: "var(--font-nunito)",
      },
    },
  },
  plugins: [],
};
export default config;
