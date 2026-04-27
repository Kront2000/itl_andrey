<script setup lang='ts'>
    defineProps<{
        category: CatalogFullInfoEndpointData | undefined,
        pending: boolean
    }>()
</script>

<template>

    <section v-if="pending || !category" class="flex flex-col gap-9 mt-3">
        <USkeleton class="w-148 h-8 rounded-lg" />
        <USkeleton class="w-full h-50 rounded-lg"/>
    </section>
    

    <section v-else class="flex flex-col gap-9 mt-3">
        <h3 class="text-2xl font-circe text-text-black">{{ category?.meta.seo.title }}</h3>
        <div class="description flex flex-col w-full gap-7" v-html="category?.meta.seo.text_bottom">
        </div>
    </section>
</template>

<style></style>