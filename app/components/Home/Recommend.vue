<script setup lang='ts'>
const { data: hits } = await useLazyFetch<HeroHitsData>('/api/include/mainpage/hit/recommend/')

const isActive = ref<HeroHitsCategoryData | null | undefined>(null)

watch(hits, (newHits) => {
    if (newHits?.data?.length && !isActive.value) {
        isActive.value = newHits.data[0]
    }
}, { immediate: true })

const { data: products, pending: pendingOfProdcts } = useLazyFetch<HomeHitsProductData>(() => {
    const url = isActive.value?.links?.self ? `/api${isActive.value.links.self}` : '' 
    return url as string 
}, {
    watch: [isActive]
})

</script>

<template>
    <div class="flex flex-col gap-4">
        <h3 class="font-circe text-xl md:text-3xl">Рекомендуем</h3>
        <UCarousel v-slot="{ item }" :items="hits?.data" :ui="{ item: 'basis-auto' }">
            <UiCategoryButton :active="isActive?.id == item.id ? true : false" 
                @click="isActive = item">
                {{ item.attributes.name }}
            </UiCategoryButton>
        </UCarousel>
        
        <UCarousel v-if="pendingOfProdcts"  :items="[0, 0, 0, 0]" :ui="{ item: 'basis-auto' }">
            <USkeleton  class="w-66 h-124 bg-white rounded-lg"/>  
        </UCarousel>

        <UCarousel v-else v-slot="{ item }" :items="products?.data" :ui="{ item: 'basis-auto' }">
            <HomeProductCard class="w-46 md:w-66" :data="item" />  
        </UCarousel>



    </div>
</template>

<style></style>