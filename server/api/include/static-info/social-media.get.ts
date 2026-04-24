export default defineEventHandler(async (event) => {

    const config = useRuntimeConfig()

    const phone = await $fetch(config.public.baseUrl + '/include/static-info/social-media/', {
        method: 'GET',
    })

    return phone;
})