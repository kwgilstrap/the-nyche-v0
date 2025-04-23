import type { Config } from "tailwindcss"
const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "Cambria", "Times New Roman", "Times", "serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "75ch",
            color: "var(--tw-prose-body)",
            lineHeight: "1.5",
            p: {
              marginTop: "1.25em",
              marginBottom: "1.25em",
            },
            h1: {
              fontWeight: "800",
              letterSpacing: "-0.025em",
            },
            h2: {
              fontWeight: "700",
              letterSpacing: "-0.0125em",
            },
            h3: {
              fontWeight: "600",
              letterSpacing: "-0.0125em",
            },
            h4: {
              fontWeight: "600",
            },
            "h1, h2, h3, h4": {
              fontFamily: "var(--font-playfair)",
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
        tightest: "-.075em",
        tighter: "-.05em",
        tight: "-.025em",
        normal: "0",
        wide: ".025em",
        wider: ".05em",
        widest: ".25em",
        optical: "var(--optical-kerning)",
      },
      lineHeight: {
        "extra-tight": "1.1",
        tight: "1.25",
        snug: "1.375",
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
