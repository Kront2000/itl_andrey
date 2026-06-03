<script setup lang='ts'>
const route = useRoute()
const {data, pending} = useLazyFetch<HomeHitsProductData>(`/api/catalog/${route.params.categorySlug}/${route.params.productSlug}/relationships/expandables/`);

</script>

<template>
    <div v-if="data?.data && data?.data.length > 0" class="flex flex-col w-full gap-10">
        <h3 class="text-2xl text-text-black">С этим товаром покупают</h3>

        <UCarousel v-if="!data?.data" :items="[0, 0, 0, 0]" :ui="{ item: 'basis-auto' }">
            <USkeleton class="w-46 md:w-66 h-124 bg-white rounded-lg" />
        </UCarousel>

        <UCarousel v-else v-slot="{ item }" :items="data.data" :ui="{ item: 'basis-auto' }">
            <SharedProductCard class="w-46 md:w-66" :data="item" />
        </UCarousel>
    </div>
</template>

<style scoped></style>