/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,ts,jsx,js}"],
  theme: {
    extend: {
      screens: {
        xs: "400px",

        "xs-sm": "560px",

        sm: "640px",
        // => @media (min-width: 640px) { ... }

        "sm-md": "690px",

        md: "748px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        silver: "#CFC0BD",
        timberWolf: "#DDD5D0",
        ashGrey: "#B8B8AA",
        battleshipGrey: "#7F9183",
        battleshipGreyHover: "#6E8473",
        feldgrau: "#586F6B",
        feldgrauHover: "#546461",
        feldgrauAccent: "#518980",
        smoky: "#62586f",
        smokyHover: "#544a61",
        smokyAccent: "#766d82",
        outerSpace: "#4E5856",
      },
      backgroundColor: {
        silver: "#CFC0BD",
        timberWolf: "#DDD5D0",
        ashGrey: "#B8B8AA",
        battleshipGrey: "#7F9183",
        battleshipGreyHover: "#6E8473",
        feldgrau: "#586F6B",
        feldgrauHover: "#546461",
        feldgrauAccent: "#518980",
        smoky: "#62586f",
        smokyHover: "#544a61",
        smokyAccent: "#766d82",
        outerSpace: "#4E5856",
      },
    },
  },
  plugins: [],
};
