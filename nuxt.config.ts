// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/google-fonts",
],
googleFonts: {
    families: {
        'PT Sans': [200, 300, 400, 500, 600, 700, 800],
        'Caveat': [200, 300, 400, 500, 600, 700, 800],
    },
},
  devtools: { enabled: true },
  pages: true,
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
