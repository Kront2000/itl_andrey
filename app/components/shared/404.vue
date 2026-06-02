<script setup lang='ts'>
const props = withDefaults(defineProps<{
    message?: string,
}>(), { message: "Страница не найдена" })

// Переделает дефолтное сообщение nuxt на русский
const title = computed(() => {
    return props.message.includes('Page not found') ? "Сраница не найдена" : props.message
})
</script>

<template>
    <div class="w-screen h-screen flex items-center justify-center  bg-blue/5">
        <div class="flex flex-col items-center max-w-80 gap-2">
            <h1 class="text-9xl font-circe text-blue">404</h1>
            <h2 class="text-3xl text-text-black">{{ title }}</h2>
            <p v-if="title == 'Сраница не найдена'" class="text-center text-text-black">Похоже эта страницы потерялась в
                дебрях нашего магазина. Мы не смогли найти то, что вы искали</p>
            <p v-else class="text-center text-text-black">
                Похоже этот товар потерялася в
                дебрях нашего магазина. Мы не смогли найти то, что вы искали
            </p>
            <UButton to="/" class="bg-dark-yellow active:bg-amber-500 hover:bg-dark-yellow/80  text-text-black">Вернуться на главную</UButton>
        </div>
    </div>
</template>

<style scoped></style>