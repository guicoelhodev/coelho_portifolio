// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  srcDir: './src',
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
})
