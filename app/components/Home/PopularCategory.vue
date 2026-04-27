<script setup lang='ts'>
const { data: hits, pending } = await useLazyFetch<HomePopularCategoryData>('/api/include/mainpage/popular-category/')
</script>

<template>
    <div class=" gap-10">
        <h3 class="text-xl md:text-3xl font-circe text-text-black mb-11.25">Популярные категории</h3>

        <UCarousel v-if="pending"  :items="[0, 0, 0]" :ui="{ item: 'basis-auto' }">
            <USkeleton  class="w-48 h-60 bg-white rounded-lg" />
        </UCarousel>

        <UCarousel v-else v-slot="{ item }" :items="hits?.data" :ui="{ item: 'basis-auto' }">
            <NuxtLink :to="item.links?.self || '/'" 
                class="group w-46 md:w-48 h-56 md:h-60 flex flex-col items-center justify-between">
                <div class="w-46 md:w-48 h-46 md:h-48 rounded-2xl bg-blue/5 p-8">
                    <NuxtImg :alt="item.attributes.name" placeholder loading="lazy"
                        class="w-full h-full group-hover:scale-110 transition duration-300"
                        :src="item.attributes.images.preview" />
                </div>

                <span class="font-content text-text-black group-hover:text-blue transition duration-300">{{
                    item.attributes.name }}</span>
            </NuxtLink>

        </UCarousel>
    </div>
</template>

<style></style>