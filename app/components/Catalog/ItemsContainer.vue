<script setup lang='ts'>
    defineProps<{
        value:  "string" | "grid" | undefined,
        products: SharedProductData[] | undefined,
        loadMore: () => void
        count: number | undefined
        pending: boolean
    }>()
</script>

<template>
    <div class=" gap-6"
        :class="{ 'w-full max-w-126.25 md:max-w-full grid grid-cols-2 xl:grid-cols-3 2xl-3xl:grid-cols-4 3xl:grid-cols-5': value == 'grid', 'flex flex-col min-w-0': value == 'string' }">

        <HomeProductCard v-if="value == 'grid'" v-for="value in products" :data="value" class="w-full!" />
        <SharedProductCardHorizontal v-else-if="value == 'string'" v-for="value in products" :data="value" />
    </div>

    <div class="w-full flex justify-between">
        <UiButton class="py-2.5 px-5 xl:w-138 border-blue/20!" is="button" content="Показать ещё" type="outline"
            @click="loadMore" />
        <UiPagination :count-of-products="count" />
    </div>
</template>

<style></style>