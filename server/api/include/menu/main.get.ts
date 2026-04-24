export default defineEventHandler(async (event) => {

    const config = useRuntimeConfig()

    const categories = await $fetch(config.public.baseUrl + '/include/menu/main/', {
        method: 'GET',
        
    })

    return categories;
})