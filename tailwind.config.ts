import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
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
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        dataops: {
          blue: {
            dark: "hsl(var(--dataops-blue-dark))",
            light: "hsl(var(--dataops-light-blue))",
            accent: "hsl(var(--dataops-accent-blue))",
          },
          saffron: {
            DEFAULT: "hsl(var(--dataops-saffron))",
            light: "hsl(var(--dataops-saffron-light))",
          },
          black: "hsl(var(--dataops-black))",
          gray: "hsl(var(--dataops-gray))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography")({
      // Extend the default typography styles
      DEFAULT: {
        css: {
          // Remove default list styles
          ul: {
            "list-style": "none",
            "padding-left": "0",
          },
          ol: {
            "list-style": "none",
            "padding-left": "0",
            "counter-reset": "list-counter",
          },
          // Custom unordered list bullets (golden arrow)
          "ul > li": {
            position: "relative",
            "padding-left": "1.75em", // Increased padding for text
            "&::before": {
              content: '"\\27A4"', // Unicode for right-pointing triangle
              color: "hsl(var(--dataops-saffron))",
              position: "absolute",
              left: "0",
              top: "0.25em", // Adjust vertical alignment
              "font-size": "0.8em",
            },
          },
          // Custom ordered list numbering (accent blue)
          "ol > li": {
            position: "relative",
            "padding-left": "2.25em", // Increased padding for text
            "&::before": {
              "counter-increment": "list-counter",
              content: 'counter(list-counter) "."',
              color: "hsl(var(--dataops-accent-blue))",
              "font-weight": "bold",
              position: "absolute",
              left: "0",
              top: "0",
            },
          },
          // Blockquote styling
          blockquote: {
            "border-left-color": "hsl(var(--dataops-accent-blue))",
            "background-color": "hsl(var(--dataops-light-blue) / 0.2)", // 20% opacity
            padding: "1rem",
            "margin-top": "1.5rem",
            "margin-bottom": "1.5rem",
            "font-style": "italic",
            "box-shadow": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)", // subtle shadow
          },
          // Image styling
          img: {
            "border-radius": "0.5rem", // rounded-lg
            "box-shadow": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)", // shadow-lg
            "margin-top": "2rem",
            "margin-bottom": "2rem",
          },
          // H2 border color
          h2: {
            "border-bottom-color": "hsl(var(--dataops-saffron))",
          },
        },
      },
    }),
  ],
} satisfies Config

export default config
