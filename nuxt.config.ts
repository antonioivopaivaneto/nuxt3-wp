// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app:{
        head:{
            charset:'utf-8',
            title:"Elon musk",
            viewport:"width=device-width, inicital-scale=1",
        },
    },

    modules: ["@nuxtjs/tailwindcss"],

    runtimeConfig:{
        public:{
            wpUri: process.env.WP_URI,
        }
    }
})
