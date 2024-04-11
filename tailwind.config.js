/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    fontFamily: {
      opensans: ["GoogleOpenSans"],
      roboto: ["Roboto"],
      googlesans: ["GoogleSans"],
      googlesansregular: ["GoogleSansRegular"],
    },
    extend: {
      keyframes: {
        wave: {
          "0%, 60%, 100%": { transform: "rotate(0deg);" },
          "10%, 30%": { transform: "rotate(18deg);" },
          "20%%": { transform: "rotate(-8deg);" },
          "40%": { transform: "rotate(-8deg);" },
          "50%": { transform: "rotate(10deg);" },
        },
      },
      animation: {
        wave: "wave 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
