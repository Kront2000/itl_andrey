export default defineEventHandler(async (event) => {

    const config = useRuntimeConfig()

    const data = await $fetch(config.public.baseUrl + '/include/menu/info/', {
        method: 'GET',
        
    })

    return data;
})