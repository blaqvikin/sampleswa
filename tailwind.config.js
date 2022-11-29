module.exports = {
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        open: ["Open Sans", "sans-serif"],
        pacifico: ["Pacifico", "cursive"],
        dancing: ["Dancing Script", "cursive"],
        noto: ["Noto Serif", "serif"],
      },
      colors: {
        primary: "rgb(34, 197, 94)",
        secondary: "#F44B07",
      },
    },
  },
  variants: {
    extend: {
      margin: ["group-hover", "hover"],
      transitionProperty: ["hover", "focus"],
      scale: ["active", "group-hover"],
      padding: ["group-hover", "hover"],
      fontWeight: ["hover", "focus"],
      keyframes: {
        fade: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        "fade-in": "bounce 5s ease-in-out 3",
        fade: "fade 5s ease-in-out",
      },
    },
  },
  plugins: [],
  content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./public/index.html"],
};
