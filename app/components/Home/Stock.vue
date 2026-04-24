<script setup lang='ts'>
const { data: stock, pending } = useLazyFetch<HomeStockData>('/api/include/mainpage/sale/');
</script>

<template>
    <section class="flex flex-col gap-10">
        <NuxtLink class="flex gap-5.5 items-center group" to="/sale">
            <span class="text-xl md:text-3xl font-circe text-text-black ">Акции</span>
            <IconsArrow class="group-hover:translate-x-2 transition duration-300" />
        </NuxtLink>

        <UCarousel v-if="pending" :items="[0, 0, 0]" :ui="{ item: 'basis-auto' }">
            <USkeleton class="w-88 h-102 shrink-0" />
        </UCarousel>

        <UCarousel v-else v-slot="{ item }" :items="stock?.data" :ui="{ item: 'basis-auto' }">
            <HomeStockCard  :data="item"  />
        </UCarousel>
    </section>
</template>

<style></style>