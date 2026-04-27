<script setup lang='ts'>
import type { BreadcrumbItem } from '@nuxt/ui';

const { data, pending } = await useLazyFetch<CatalogMainEndpointData>('/api/catalog/', {
  transform: (data) => {
    return {data: data.data.filter((category) => category.attributes.parentId == undefined)} 
  },
})

const breadcrumb: BreadcrumbItem[] = [{label: 'Главная', to: '/'}, {label: 'Каталог', to: '/catalog'}]


</script>

<template>
    <div class="flex flex-col mx-auto w-full px-6 lg:px-27 max-w-[1920px] gap-17 pt-15.5 pb-17">
        <CatalogWideBanner class="mb-12" />
        <UiBreadCrumb :breadcrumb="breadcrumb" />
        <CatalogTitle :pending="pending" :categories="data?.data" />
    </div>
</template>

<style></style>