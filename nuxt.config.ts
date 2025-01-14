// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  css: [
    '~/assets/styles/global.scss'
  ],

  plugins: [
    '~/plugins/fontawesome.ts'
  ],

  runtimeConfig: {
    public:{
      appName: process.env.NAME,
      baseApiUrl: process.env.API_BASE_URL,
      version: process.env.VERSION,
    }
  },

  modules: [
    'nuxt-auth-sanctum',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
  ],

  sanctum: {
    baseUrl: process.env.API_BASE_URL,
    redirect: {
      onLogin: '/',
      onAuthOnly: '/auth/login',
      onGuestOnly: '/',
      onLogout: '/auth/login',
    },
    globalMiddleware: {
        enabled: true,
        allow404WithoutAuth: true,
    },
    endpoints: {
      csrf: '/sanctum/csrf-cookie',
      login: '/login',
      logout: '/logout',
      user: '/v1/user',
    },
  },

  tailwindcss: {
    configPath: 'tailwind.config',
    exposeConfig: {
      level: 2
    },
    config: {},
    viewer: true,
  },

  compatibilityDate: '2025-01-09',
})