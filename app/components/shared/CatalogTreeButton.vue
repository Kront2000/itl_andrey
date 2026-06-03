<script setup lang='ts'>
const { data, pending } = useCatalogTree();
const show = ref(false)
</script>

<template>
    <USlideover v-model:open="show" side="left" :ui="{ content: 'w-70 py-4 h-full overflow-y-auto [direction:rtl]' }">
        <UButton label="Каталог товаров" class="text-text-black bg-yelow  px-5 py-3 hover:bg-amber-500 h-12 w-45.25"
            icon="i-lucide-menu" variant="ghost" />

        <template #content [direction:ltr]>
            <div v-if="data.subcategory" class="">
                <SharedButtonInTree @close-catalog="show = false" v-for="value in data.subcategory"  :categories="value" />
            </div>


            <div v-else class="w-full flex flex-col gap-2">
                <USkeleton v-for="value in 7" class="w-full h-8" />
            </div>
        </template>
    </USlideover>

</template>

<style scoped></style>