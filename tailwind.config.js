/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blacks: "#181818",
        white: "#CCCCCC",
        green: "#10B981",
        blue: "#3B82F6",
        yellow: "#FACC15",
        purple: "#8B5CF6",
      },
    },
  },
  plugins: [],
};
