/** @type {import('tailwindcss').Config} */
module.exports = {
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
        "bg-gradient-from": "#8364e8",
        "bg-gradient-to": "#d397fa",
      },
    },
  },
  plugins: [],
};
// #9747FF
// #7D4BFF

// #8364e8
// #d397fa

// #b84fce
// #d4acfb

// #ab2aed
// #fffbaf

// #ea72ad
// #faff89

// #5b6cf9
// #ea98da

// #b57bee
// #392d69

// #a7bdea
// #f7c0ec
