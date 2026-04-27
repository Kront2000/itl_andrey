<script setup lang='ts'>
defineProps<{
    filter: FilterAttributes | undefined
    pending: boolean
    isMob?: boolean

}>()
</script>

<template>
    <USlideover :ui="{ content: 'max-w-full w-fit p-3' }">
        <UButton class="md:hidden" label="Фильтры" icon="i-lucide-sliders-horizontal" color="neutral"
            variant="outline" />
        <template #content>
            <CatalogFilters :is-mob="true" :pending="pending" :filter="filter" />
        </template>
    </USlideover>
</template>

<style></style>