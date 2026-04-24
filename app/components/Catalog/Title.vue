<script setup lang='ts'>
    const route = useRoute();
    const props = withDefaults(defineProps<{
    catName?: string,
    count?: number,
    pending: boolean,
    categories: CatalogTitleCard[] | undefined
}>(), {
    catName: 'Каталог'    
})
</script>

<template>
    <div v-if="catName == 'Каталог'" class="flex gap-3">
        <p class="text-3xl text-text-black">Каталог</p>
    </div>
    <div v-else class="flex gap-3">
        <p class="text-3xl text-text-black">{{ catName }}</p>
        <p class="text-black-60 text-3xl">—</p>
        <p class="text-black-60 text-3xl">{{ count }}</p>
    </div>
    <div class="flex flex-wrap gap-4 w-full">
        <USkeleton v-if="pending" v-for="value in 6" class="w-57.25 h-27 rounded-lg "/>
        <CatalogTitleCard v-else v-for="value in categories" :category="value" />
    </div>
    
</template>

<style></style>




























