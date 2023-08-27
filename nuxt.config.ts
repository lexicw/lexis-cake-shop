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
//   vite: {
//     plugins: [
//         {
//             name: "codespaces-hmr-fix",
//             transform(code, id) {
//                 if (id.endsWith("dist/client/client.mjs") || id.endsWith("dist/client/env.mjs")) {
//                     return code.replace(
//                         "`${__HMR_HOSTNAME__ || importMetaUrl.hostname}:${hmrPort || importMetaUrl.port}${__HMR_BASE__}`",
//                         JSON.stringify("upgraded-fiesta-wg7vj65gjgx2jv7-5175.app.github.dev:443/_nuxt/")
//                     );
//                 }
//                 return code;
//             },
//         },
//     ],
//     server: {
//         hmr: {
//             clientPort: 443,
//             port: 5175,
//             protocol: "wss",
//         },
//     },
// },
})