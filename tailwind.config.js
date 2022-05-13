module.exports = {
  content: ["./src/**/*.{html,ts}"],
  safelist: ["bg-blue-400", "bg-green-400", "bg-red-400"], // This configuration makes TailwindCSS to ignore the following classes from toggling
  theme: {
    extend: {},
  },
  plugins: [],
};
