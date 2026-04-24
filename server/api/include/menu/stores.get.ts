export default defineEventHandler(async (event) => {

    const config = useRuntimeConfig()

    const data = await $fetch(config.public.baseUrl + '/include/menu/stores/', {
        method: 'GET',
        
    })

    return data;
})