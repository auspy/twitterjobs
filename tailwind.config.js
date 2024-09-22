/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      display: [
        "clamp(2.75rem, 4.25vw, 4.5rem)",
        { lineHeight: "96.5%", letterSpacing: "-3.5%", fontWeight: "700" },
      ],
      h1: "3.5rem",
      h2: "3rem",
      h3: "2.5rem",
      h4: "2rem",
      h5: "1.5rem",
      h6: "1.25rem",
      base: "1.125rem",
      sm: "1rem",
      xs: "0.875rem",
      xxs: "0.75rem",
    },
    colors: {
      transparent: "transparent",
      bg: "#0C0D0E",
      blue: "#6EC7EA",
      "dark-charcoal": "#101214",
      "super-dark-gray": "#1A1A1A",
      "dim-gray": "#555555",
      "light-gray": "#878787",
      gray: "#D1D1D1",
      accent: "#F7F7F7",
      text: "#CCCCCC",
      primary: "#EFECE6",
      outline: "#D1D1D1",
      gradient: "#D0C7B3",
      gradient2: "#968A73",
      gradient3: "#675E4C",
    },
    extend: {
      fontFamily: {
        overusedgrotesk: ["var(--font-overusedgrotesk)"],
      },
      letterSpacing: {
        close: "-3.5%",
        base: "-1%",
      },
      lineHeight: {
        base: "150%",
      },
      boxShadow: {
        shine: "0px 0px 58px 20px rgba(85, 85, 85, 0.20);",
        bright: "0px 0px 58px 20px rgba(85, 85, 85, 0.35);",
      },
      borderOpacity: {
        15: "0.15",
      },
      transitionTimingFunction: {
        "in-out-circ": "cubic-bezier(0.85, 0, 0.15, 1)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [
    "prettier-plugin-tailwindcss",
    require("@tailwindcss/container-queries"),
    require("tailwindcss-animate"),
  ],
};
