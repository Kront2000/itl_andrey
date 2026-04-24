export default defineEventHandler(async (event) => {

    const config = useRuntimeConfig()

    const data = await $fetch(config.public.baseUrl + '/include/mainpage/advantages', {
        method: 'GET',
    })

    return data;
})