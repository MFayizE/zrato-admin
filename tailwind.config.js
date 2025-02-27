import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        base: {
          white: "#FFFFFF",
          black: "#000000",
          transparent: "rgba(255, 255, 255, 0)",
        },
        gray: {
          25: "#FCFCFD",
          50: "#F9FAFB",
          100: "#F2F4F7",
          200: "#E4E7EC",
          300: "#D0D5DD",
          400: "#98A2B3",
          500: "#667085",
          600: "#475467",
          700: "#344054",
          800: "#1F2930",
          900: "#101828",
          950: "#0C111D",
        },
        "gray-dark": {
          25: "#FAFAFA",
          50: "#F5F5F6",
          100: "#F0F1F1",
          200: "#ECECED",
          300: "#CECFC2",
          400: "#94969C",
          500: "#85888E",
          600: "#61648C",
          700: "#333741",
          800: "#1F242F",
          900: "#16182B",
          950: "#0C111D",
        },
        "custom-green": {
          25: "#F3FCF5",
          50: "#E8FAEC",
          100: "#CFF6D8",
          200: "#A8EBBB",
          300: "#81E09E",
          400: "#6CD47F", // Base color
          500: "#52B96B",
          600: "#3C9555",
          700: "#2E7243",
          800: "#1F4E30",
          900: "#112C1B",
          950: "#08160E",
        },
        brand: {
          25: "#F4CAFF",
          50: "#F9F5FF",
          100: "#F4EBFF",
          200: "#E9D7FE",
          300: "#D6BBFB",
          400: "#B692F6",
          500: "#9E77ED",
          600: "#7F56D9",
          700: "#6941C6",
          800: "#53389E",
          900: "#42307D",
          950: "#2C105F",
        },
        error: {
          25: "#FFFBFA",
          50: "#FEF3F2",
          100: "#FEE4E2",
          200: "#FECDCA",
          300: "#FDA29B",
          400: "#F97066",
          500: "#F04438",
          600: "#D92D20",
          700: "#B42318",
          800: "#912018",
          900: "#7A271A",
          950: "#55160C",
        },
        warning: {
          25: "#FFFCF5",
          50: "#FFFAEB",
          100: "#FEF0C7",
          200: "#FECB89",
          300: "#FEC84B",
          400: "#FDB022",
          500: "#F79009",
          600: "#DC6803",
          700: "#B54708",
          800: "#933700",
          900: "#7A2E0E",
          950: "#4E1D09",
        },
        success: {
          25: "#F6FEF9",
          50: "#ECFDF3",
          100: "#DCFAE6",
          200: "#A6F6C8",
          300: "#72E5A7",
          400: "#4CDCA6",
          500: "#17B26A",
          600: "#0F9455",
          700: "#067647",
          800: "#085D3A",
          900: "#074D31",
          950: "#053321",
        },
       
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}
