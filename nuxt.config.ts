// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxt/image'],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/api/**': { 
      proxy: {
        to: `${process.env.NUXT_PUBLIC_BASE_URL}/**`,
        
        cookieDomainRewrite: 'localhost' 
      }
    },
    '/upload/**': { 
      proxy: { to: `${process.env.NUXT_PUBLIC_BASE_URL}/upload/**` }
    },
  },

  image: {
    provider: 'twicpics',
    twicpics: {
      baseURL: `${process.env.NUXT_PUBLIC_BASE_URL}/`
    }
  },

  runtimeConfig: {
    public: {
      baseUrl: '',
    }
  },

  colorMode: {
    preference: 'light',
    fallback: 'light',
    classSuffix: ''
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})