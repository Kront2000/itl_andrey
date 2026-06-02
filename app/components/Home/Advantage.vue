<script setup lang='ts'>
    defineProps<{data: HeroAdvantagesItem}>()
</script>

<template>
    <div class="flex flex-col sm:flex-row w-46 sm:w-80  py-5 px-7 gap-4 bg-white shrink-0 rounded-lg border border-blue/20 sm:border-0">
        <NuxtImg class="w-6.5 h-6.5" placeholder :src="data.attributes.image" :alt="data.attributes.name"/>
        <p class="line-clamp-2" v-html="data.attributes.text"></p>
    </div>
</template>

<style>
</style>