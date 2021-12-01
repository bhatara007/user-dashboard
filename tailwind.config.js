module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        "fast-bounce": "bounce 0.2s linear infinite",
        wiggle: "wiggle 1s ease-in-out",
      },
      keyframes: {
        wiggle: {
          "0%": { transform: "translateY(300px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
