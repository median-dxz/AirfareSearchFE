/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  safelist: ["animate-[fade-in_0.3s_ease]", "animate-[fade-out_0.3s_ease]"],
  theme: {
    extend: {
      borderWidth: {
        1: "1px",
      },
      boxShadow: {
        container: "0 4px 8px 0 rgba(39,36,43,.24)",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
};
