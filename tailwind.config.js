module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  theme: {
    extend: {
      colors: {
        'dark-gray': '#262626',
        'light-gray': '#C5C5C5'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
      width: {
        '23%': '23%'
      },
      cursor: {
        zoom: 'zoom-in'
      }
    }
  },
  variants: {
    display: ['responsive', 'hover', 'focus', 'group-hover']
  },
  plugins: [require('@tailwindcss/ui')],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
