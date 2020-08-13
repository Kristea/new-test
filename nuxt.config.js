
export default {
  mode: 'universal',
  target: 'static',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || 'Kata Site',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
      '~assets/scss/global.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/slices',
    // '~/plugins/filters'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
      '@nuxt/content', // Doc: https://github.com/nuxt/content
    '@nuxtjs/style-resources',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/markdownit'
  ],
  markdownit: {
    injected: true,
  },
  /*
  ** Content module configuration
  ** See https://content.nuxtjs.org/configuration
  */
 content: {
  dir: 'assets/content'
 },
  styleResources: {
   // WARNING - DO NOT IMPORT ACTUAL CSS STYLES HERE! They would be imported into EVERY component!!
    // https://github.com/nuxt-community/style-resources-module#warning
   sass: [
     "bulma/sass/utilities/_all.sass"
   ]
  },
  components: true,
  /*
  ** Build configuration
  */
  build: {
    // analyze: true,
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  generate: {
  },
}
