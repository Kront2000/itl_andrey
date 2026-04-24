<script setup lang='ts'>
const route = useRoute();

const { data, pending } = await useLazyFetch<CatalogMainEndpointData>('/api/catalog/', {
  transform: (data) => {
    return {data: data.data.filter((category) => category.attributes.parentId == undefined)} 
  },
})


</script>

<template>
    <div class="flex flex-col mx-auto w-full px-6 lg:px-27 max-w-[1920px] gap-17 pt-15.5 pb-17">
        <CatalogWideBanner class="mb-12" />
        <div class="flex gap-1">
            <NuxtLink to="/" class="font-circe text-sm text-text-gray">Главная</NuxtLink>
            <p class="font-circe text-sm text-text-gray">/</p><p class="font-circe text-sm text-text-black">Каталог</p>
        </div>
         
        <CatalogTitle :pending="pending" :categories="data?.data" />
    </div>
</template>

<style></style>