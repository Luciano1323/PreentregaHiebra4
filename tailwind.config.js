/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  daisyui: {
    themes: [
      {
        theme: {
          primary: "#88715c",

          "primary-content":"#ffffff",

          secondary: "#693b26",

          accent: "#dfd2c2",

          neutral: "#0f0f0f",

          "base-100": "#e9eef3",

          info: "#38bdf8",

          success: "#4ade80",

          warning: "#fde047",

          error: "#fb7185",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}