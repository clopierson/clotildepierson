module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "osu-beaver-orange": "#D73F09",
        "osu-luminance": "#FFB500",
        "osu-candela": "#FDD26E",
        "osu-pine-stand": "#4A773C",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme("colors.osu-beaver-orange"),
              fontWeight: "400",
              "&:hover": {
                color: theme("colors.osu-luminance"),
                fontWeight: "400",
                textDecoration: "none",
              },
            },
          },
        },
      }),
      keyframes: {
        "slide-in": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "slide-in": "slide-in 500ms ease 200ms both",
        "fade-in": "fade-in 200ms",
        "fade-in-slow": "fade-in 600ms ease 400ms both",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
