/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'
import plugin from 'flowbite/plugin'

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
    "./.storybook/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.blue
      }
    },
  },
  plugins: [
    plugin
  ],
  darkMode: 'class',
}
