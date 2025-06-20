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
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom DataOps colors
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
      typography: ({ theme }: { theme: any }) => ({
        DEFAULT: {
          css: {
            // Custom H2 border
            h2: {
              borderBottom: `1px solid ${theme("colors.dataops.saffron.DEFAULT")}`,
              paddingBottom: theme("spacing.2"),
            },
            // Custom UL styling (golden arrow)
            ul: {
              listStyle: "none",
              paddingLeft: "0",
              "& li": {
                position: "relative",
                paddingLeft: theme("spacing.6"), // Space for custom bullet
              },
              "& li::before": {
                content: '"\\27A4"', // Unicode for a right-pointing triangle
                color: theme("colors.dataops.saffron.DEFAULT"),
                position: "absolute",
                left: "0",
                top: "0.25em",
                fontSize: "0.8em",
              },
            },
            // Custom OL styling (accent blue numbers)
            ol: {
              listStyle: "none",
              paddingLeft: "0",
              counterReset: "list-counter",
              "& li": {
                position: "relative",
                paddingLeft: theme("spacing.8"), // Space for custom number
              },
              "& li::before": {
                counterIncrement: "list-counter",
                content: 'counter(list-counter) ". "',
                color: theme("colors.dataops.blue.accent"),
                fontWeight: theme("fontWeight.bold"),
                position: "absolute",
                left: "0",
                top: "0",
              },
            },
            // Custom Blockquote styling
            blockquote: {
              borderLeft: `4px solid ${theme("colors.dataops.blue.accent")}`,
              backgroundColor: theme("colors.dataops.blue.light", "rgba(200, 220, 255, 0.2)"), // Fallback if variable not ready
              padding: theme("spacing.4"),
              margin: `${theme("spacing.6")} 0`,
              fontStyle: "italic",
              boxShadow: theme("boxShadow.sm"),
            },
            // Custom Image styling
            img: {
              borderRadius: theme("borderRadius.lg"),
              boxShadow: theme("boxShadow.md"),
              margin: `${theme("spacing.8")} 0`,
            },
          },
        },
      }),
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config

export default config
