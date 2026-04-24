<script setup lang='ts'>
const { data: banners, pending } = useLazyFetch<HomePopularBrends>('/api/include/mainpage/brands/')
const firstEight = computed(() => {
    return banners.value?.data ? [...banners.value.data.slice(0, 8), ...banners.value.data.slice(0, 8)] : []
})
</script>

<template>
    <section class="flex flex-col gap-10 w-full ovv">

        <h3 class="font-circe  text-xl md:text-3xl">Популярные бренды</h3>

        <UCarousel v-if="pending" v-slot="{ item }" :items="[1,2,3,4,5]"  :ui="{ item: 'basis-auto' }">
            <USkeleton class="w-48 h-31 bg-white rounded-lg" />
        </UCarousel>

        <UCarousel v-else-if="firstEight.length > 0" v-slot="{ item }" :items="firstEight" loop auto-scroll
            :ui="{ item: 'basis-auto', container: 'gap-6'  }">
            <NuxtLink :to="item.attributes.main_page.url" class="w-48 h-31 bg-blue/5 flex justify-center items-center">
                <NuxtImg :src="item.attributes.main_page.image" :alt="item.attributes.name"
                    class="max-h-[35%] max-w-[80%]" loading="lazy" placeholder />
            </NuxtLink>
        </UCarousel>

    </section>

</template>

<style></style>