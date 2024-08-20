/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: '"Poppins", sans-serif',
        title: '"Raleway", serif',
      },
      colors: {
        primary: {
          1: "#701F23",
          2: "#AD2224",
          3: "#B11E29",
          4: "#D82227",
        },
        brand: {
          red: "#A82327",
          grey: "#433F40",
        },
        system: {
          white50: "#ffffff80",
          bg: "#FDFDFD",
          bgHeader: "#F9F9F9",
          grey: "#CACACA",
        },
        grey: {
          1: "#1E130F",
          2: "#3C3C3E",
          3: "#403E41",
          4: "#999A9B",
          5: "#E3E3E3",
          6: "#ffffff",
        },
      },
    },
  },
  plugins: [],
};
