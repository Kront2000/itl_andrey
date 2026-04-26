<script setup lang='ts'>
const {data, pending} = useLazyFetch<WideCatalog>('/api/include/banners/wide-catalog/');
</script>

<template>
    <section class="flex  rounded-lg md:flex-row justify-between items-center w-full bg-BG h-30 md:h-50 py-7.5 px-5 lg:px-18">
        <p class="w-50 sm:w-60 md:w-70 xl:w-130.5 text-[0.7rem] sm:text-sm md:text-xl  lg:text-xl xl:text-4xl font-circe leading-4 sm:leading-9 xl:leading-11">{{ data?.data[0]?.attributes.name }}</p>
        <NuxtImg class="h-[90%] sm:h-full object-cover" :src="data?.data[0]?.attributes.images.desktop.src" :alt="data?.data[0]?.attributes.images.preview"/>
    </section>
</template>

<style>
</style>