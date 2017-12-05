module.exports = {
  mode: 'spa',
  env: {
    backendUrl: process.env.BACKEND_URL || 'http://localhost:3030',
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
  head: {
    title: 'nuxt-typescript-starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      'axios',
      'element-ui',
      'feathers-vuex',
      'nuxt-class-component',
      'vue-i18n',
      'vue-property-decorator'
    ]
  },
  modules: ['~modules/typescript.ts'],
  plugins: [
    '~/plugins/element-ui',
    { src: '~/plugins/feathers', ssr: false},
    '~/plugins/i18n'
  ],
  router: {
    middleware: [
      'i18n'
    ]
  }
}
