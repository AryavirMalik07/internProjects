/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        heroImage: "url(./images/hero.jpg)",
      }),
    },
  },
  plugins: [],
};
