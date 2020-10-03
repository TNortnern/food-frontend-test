/* eslint-disable nuxt/no-cjs-in-config */
const path = require('path')
export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'fe-code-sample-test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [{ src: 'https://cdn.jsdelivr.net/npm/alasql@0.6' }]
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/css/tailwind.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/composition-api'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: ' https://prod.everythingfood-api.com/api/v1/search/food_items'
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extractCSS: true,
    postcss: {
      plugins: { tailwindcss: path.resolve(__dirname, './tailwind.config.js') }
    }
  }
}
