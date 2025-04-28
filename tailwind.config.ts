import type { Config } from "tailwindcss"
const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#FFFFFF",
        gray: {
          100: "#F5F5F5",
          200: "#EEEEEE",
          300: "#E0E0E0",
          400: "#BDBDBD",
          500: "#9E9E9E",
          600: "#757575",
          700: "#616161",
          800: "#424242",
          900: "#212121",
        },
        accent: "#4B5067",
      },
      borderRadius: {
        lg: "12px",
        md: "8px",
        sm: "4px",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "75ch",
            color: "inherit",
            lineHeight: "1.5",
            p: {
              marginTop: "1.25em",
              marginBottom: "1.25em",
              fontFamily: "sans",
            },
            h1: {
              fontWeight: "800",
              fontFamily: "serif",
            },
            h2: {
              fontWeight: "700",
              fontFamily: "serif",
            },
            h3: {
              fontWeight: "600",
              fontFamily: "serif",
            },
            h4: {
              fontWeight: "500",
              fontFamily: "serif",
            },
            "h1, h2, h3, h4": {
              letterSpacing: "normal",
            },
            a: {
              textDecoration: "none",
              fontWeight: "500",
              "&:hover": {
                textDecoration: "underline",
                textDecorationThickness: "1px",
                textUnderlineOffset: "2px",
              },
            },
          },
        },
      },
      letterSpacing: {
        tight: "-.025em",
        normal: "0",
        wide: ".025em",
      },
      lineHeight: {
        normal: "1.5",
        relaxed: "1.625",
        loose: "2",
        article: "1.8",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
