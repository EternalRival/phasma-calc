// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxtjs/stylelint-module', '@nuxtjs/seo'],
  devtools: { enabled: true },
  css: ['modern-normalize/modern-normalize.css'],
  compatibilityDate: '2024-11-01',
  site: {
    name: 'Phasma Calc',
    description: 'Калькулятор для Phasmophobia',
    defaultLocale: 'ru',
  },
  stylelint: { configFile: 'stylelint.config.mjs' },
})
