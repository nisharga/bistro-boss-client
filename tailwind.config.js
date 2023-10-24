/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        gradient:
          "linear-gradient(90deg, rgba(131,93,35,1) 0%, rgba(181,129,48,1) 100%)",
      },
    },
  },
  plugins: [require("daisyui")],
};
