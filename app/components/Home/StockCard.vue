<script setup lang='ts'>
defineProps<{
    data: HomeStockCardData
}>()

const config = useRuntimeConfig()
</script>

<template>
    <NuxtLink  :to="data.links.self" class="flex flex-col gap-6 w-102 h-88 shrink-0">
        <div class="w-full h-70 relative">
            <NuxtImg :src="data.attributes.images.desktop.src" placeholder loading="lazy"
                class="w-full h-full object-cover rounded-lg" />
            <div class="absolute bottom-8 left-8 flex gap-2">
                <span v-if="data.attributes.discount" class=" text-text-black bg-dark-yellow px-2 py-1 rounded-lg ">{{
                    data.attributes.discount }}</span>
                <div class="flex items-center bg-white px-2 py-1 rounded-lg gap-1">
                    <IconsFire />
                    <span v-if="data.attributes.active_period" class=" text-text-black ">{{
                        data.attributes.active_period }}</span>
                </div>

            </div>
        </div>

        <span class="text-lg text-text-black">
            {{ data.attributes.title }}
        </span>

    </NuxtLink>
</template>

<style></style>