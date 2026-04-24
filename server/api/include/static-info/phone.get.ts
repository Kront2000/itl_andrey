export default defineEventHandler(async (event) => {

    const config = useRuntimeConfig()

    const phone = await $fetch(config.public.baseUrl + '/include/static-info/phone/', {
        method: 'GET',
    })

    return phone;
})