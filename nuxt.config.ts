export default defineNuxtConfig({
  srcDir: 'client/',
  app: {
    head: {
      title: process.env.npm_package_name || '',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
      script: [
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.8.1/lottie.min.js' },
      ],
    },
    keepalive:true
  },
  css: [
    '@/assets/css/main.css',
    '@/assets/css/device.css',

  ],

  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */

  /**
   * @see https://v3.nuxtjs.org/api/configuration/nuxt.config#modules
   */
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt'
  ],

  pinia: {
    autoImports: [
      'defineStore', // import { defineStore } from 'pinia'
    ],
  },
  /**
   * @see https://v3.nuxtjs.org/guide/features/runtime-config#exposing-runtime-config
   */
  runtimeConfig: {
    public: {
      MIX_IGNITION_THEME:process.env.IGNITION_THEME,
      webURL: process.env.WEB_URL || 'http://localhost:3000',
      apiURL: process.env.API_URL || 'http://localhost',
    },
  },

  /**
   * WindiCSS configuration
   * @see https://github.com/windicss/nuxt-windicss
   */
  // windicss: {
  //   analyze: false,
  // },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  build: {
    extend(config, { isDev, isClient }) {
      // ..
      config.module.rules.push({
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: 'file-loader',
      })
      // Sets webpack's mode to development if `isDev` is true.
      if (isDev)
        config.mode = 'development'
    },
    transpile: ['vuetify'],
  },

  "types": [
    // ...
    "@pinia/nuxt"
  ]
})
