const animate = require("tailwindcss-animate");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: ["class"],
  safelist: ["dark"],
  theme: {
    extend: {},
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
      "color-primary": "#07261E",
      "color-primary-light": "#136450",
      "color-grey-dark": "#7F7F7F",
      "color-grey-light": "#f5f5f5",

      "b-color-green-dark": "#005842",
      "b-color-green-light": "#B8E0D6",
      "b-color-browm": "#FAE7C3",
      "color-eva-dark-green": "#0c1d00",
      "color-eva-dark-purple": "#5d0f66",
      "color-eva-dark-orange": "#E6770B",
      "color-eva-dark-yellow": "#f5c024",
      "color-eva-light-purple": "#916CAF",
      "color-eva-light-green": "#76FF00",
      "color-eva-light-red": "#E31427",
      "color-validate-error": "#a91b00",
      white: "#fff",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    screens: {
      sm: "599px",
      md: "780px",
      mr: "950px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [animate],
};
