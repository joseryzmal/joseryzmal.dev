/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.md',
    './*.html',
  ],
  theme: {
    fontFamily: {
      'body': ['Poppins'],
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.translate-x-1\\/5': {
          '--tw-translate-x': '20%;',
          'transform': 'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));'
        },
        '.translate-x-2\\/5': {
          '--tw-translate-x': '40%;',
          'transform': 'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));'
        },
        '.translate-x-3\\/5': {
          '--tw-translate-x': '60%;',
          'transform': 'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));'
        },
        '.translate-x-4\\/5': {
          '--tw-translate-x': '80%;',
          'transform': 'translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));'
        },
      })
    })
  ]
}
