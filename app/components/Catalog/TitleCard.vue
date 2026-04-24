<script setup lang='ts'>
import CategoryButton from '../ui/CategoryButton.vue';

defineProps<{
    category: CatalogTitleCard
}>()
</script>

<template>
    <NuxtLink :to="category.links.self" class="flex justify-between items-center h-27 border border-blue/20 rounded-lg py-6 px-7 w-fit gap-5 
    transition duration-200 hover:scale-105">
        <NuxtImg :src="category.attributes.img" :alt="category.attributes.name" class="w-15 h-15 object-cover"/>
        <div class="flex flex-col justify-between  h-12.5">
            <span class="text-lg font-circe text-dark-blue">{{ category.attributes.name }}</span>
            <span class="font-circe text-sm text-text-gray">{{ category.attributes.count + ' товаров' }}</span>
        </div>
    </NuxtLink>
</template>

<style>
</style>