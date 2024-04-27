import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ['selector', '[data-mode="dark"]'],
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
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#007bff",
          "secondary": "#6e8f00",
          "accent": "#0000ff",
          "neutral": "#0a0714",
          "base-100": "#272a25",
          "info": "#00d6ff",
          "success": "#64e70c",
          "warning": "#ff9400",
          "error": "#e20a39",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
};
export default config;
