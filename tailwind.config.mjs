/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Avenir"],
      },
      colors: {
        accent: {
          light: "#8f6c9d",
          DEFAULT: "#6d4d79",
        },
      },
      height: {
        19: "4.75rem",
      },
      width: {
        78: "19.50rem",
      },
      padding: {
        22: "5.50rem",
      },
      content: {
        bullet: 'url("/images/bullet.png")',
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
