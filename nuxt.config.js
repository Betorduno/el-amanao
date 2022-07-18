export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Amañao',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet",  href: "/assets/css/bootstrap.min.css" },
      { rel: "stylesheet",  href: "/assets/css/revoulation.css" },
      { rel: "stylesheet",  href: "/assets/css/plugins.min.css" },
      { rel: "stylesheet",  href: "/assets/style.css" }
    ],
    script: [
      { src: "/assets/js/vendor/vendor.min.js" },
      { src: "/assets/js/plugins.min.js" },
      { src: "/assets/js/revolution.tools.min.js" },
      { src: "/assets/js/revolution.extension.min.js" },
      { src: "/assets/js/main.js" },
      { src: "/assets/js/revoulation.js" }
    ]    
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/iconBootstrap.js',
    '~/plugins/vueCarousel.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
