// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["modern-normalize/modern-normalize.css"],
  modules: [
    "@nuxt/eslint",
    "@nuxtjs/stylelint-module",
    "@nuxtjs/seo",
  ],
  stylelint: { configFile: "stylelint.config.mjs", },
});