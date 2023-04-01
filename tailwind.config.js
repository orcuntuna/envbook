/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
  safelist: [
    {
      pattern: /bg-(red|green|blue)-(500|600|700)/, // You can display all the colors that you need
      variants: ['hover', 'focus'],
    },
  ],
}
