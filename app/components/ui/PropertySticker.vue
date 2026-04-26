<script setup lang='ts'>
    defineProps<{
        sticker: string,
    }>()
</script>

<template>
    <p  class="text-sm md:text-base h-fit text-white px-3 rounded-lg w-fit"
        :class="{ 'bg-blue': sticker == 'Хит', 'bg-green': sticker == 'Новинка', 'bg-strawberry': sticker == 'Акция', 'bg-violet': sticker == 'Советуем' }">
        {{ sticker }}
    </p>
</template>
