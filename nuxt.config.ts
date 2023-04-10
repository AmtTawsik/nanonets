// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app:{
        head: {
            link: [
              { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.3/flowbite.min.css' }
            ],
            script: [
              { src: 'https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.3/flowbite.min.js' }
            ]
          }          
    },
    modules: [
        '@nuxtjs/tailwindcss',
    ]
})
