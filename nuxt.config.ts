// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-vue3-google-signin'],
  googleSignIn: {
    clientId: '27765672117-fv60ot4b11egmemmfc521d24p2irl4j6.apps.googleusercontent.com',
  },
})
