<script setup lang='ts'>
defineProps<{
    categories: CatalogTreeElement,
}>()
defineEmits(['close-catalog'])
const show = ref(false)
</script>

<template>
    <div @mouseenter="show = true" @mouseleave="show = false" class="">
        <UButton @click="$emit('close-catalog')" :to="categories.data.links.self" variant="ghost" class="text-text-black text-lg  py-4 w-full text-center" :class="{ 'bg-blue/10': show }">{{
            categories.data.attributes.name }}</UButton>
        <div class="w-60 h-screen fixed bg-white top-0 left-70 flex-col gap-4 py-4"
            :class="{ 'hidden': !show, 'flex': show }">
            <UButton v-for="value in categories.subcategory" @click="$emit('close-catalog')" :to="value.data.links.self" variant="ghost" class="text-text-black text-lg text-center py-4 w-full" >{{
                value.data.attributes.name }}</UButton>
        </div>
    </div>


</template>

<style scoped></style>