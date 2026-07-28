// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // https://nuxt.com/modules
  modules: ["@nuxthub/core", "@nuxt/eslint", "@nuxt/ui", "@vite-pwa/nuxt"],

  // https://devtools.nuxt.com
  devtools: { enabled: true },

  // Build for Cloudflare workers, not pages
  nitro: {
    preset: "cloudflare-module",
  },

  // https://nuxt.com/docs/getting-started/upgrade#testing-nuxt-4
  future: { compatibilityVersion: 4 },
  compatibilityDate: "2025-03-01",

  // https://hub.nuxt.com/docs/getting-started/installation#options
  hub: {
    database: true,
  },

  // Development config
  eslint: {
    config: {
      stylistic: {
        quotes: "single",
        commaDangle: "never",
      },
    },
  },

  pwa: {
    registerType: "autoUpdate",
    manifest: {
      name: "Sportfish Survey",
      short_name: "Sportfish",
      theme_color: "#000000",
    },
    workbox: {
      navigateFallback: "/",
    },
  },
});
