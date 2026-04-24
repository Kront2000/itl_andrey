<script setup lang='ts'>
const {data, pending} = useLazyFetch<WideCatalog>('/api/include/banners/wide-catalog/');
</script>

<template>
    <section class="flex justify-between items-center w-full bg-BG h-50 py-[30px] px-18">
        <p class="w-130.5 text-4xl font-circe leading-11">{{ data?.data[0]?.attributes.name }}</p>
        <NuxtImg class="h-full object-cover" :src="data?.data[0]?.attributes.images.desktop.src" :alt="data?.data[0]?.attributes.images.preview"/>
    </section>
</template>

<style>
</style>