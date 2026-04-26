<script setup lang='ts'>
const props = defineProps<{
    data: SharedProductData
}>()

</script>

<template>
    <div
        class="w-46  md:w-66 p-2 shrink-0 md:p-8 flex md:min-w-66  h-99.75 md:h-124 flex-col border rounded-2xl border-blue/20 hover:border-blue justify-between relative @container">

        <NuxtLink :to="data.links.self" class="absolute inset-0 z-0 shadow-none" aria-label="Открыть товар" />

        <NuxtImg :src="data.attributes.preview" :alt="data.attributes.name" loading="lazy" placeholder
            class=" md:w-full aspect-square object-contain" />

        <div class="absolute top-2 md:top-8 left-2 md:left-8 flex flex-col gap-1">
            <UiPropertySticker v-for="value in data.attributes.stikers" :sticker="value"/>
        </div>

        <div class="flex grow flex-col justify-end gap-2">

            <p class="text-base font-circe hover:text-blue line-clamp-2 h-12" :to="data.links.self">{{
                data.attributes.name }}
            </p>

            <p v-if="!!data.attributes.product?.stores?.items && !Array.isArray(data.attributes.product.stores.items) && Object.keys(data.attributes.product.stores.items).length > 0"
                class="text-sm font-circe">
                В наличии в <NuxtLink :to="data.links.self"
                    class="text-sm font-circe text-blue hover:border-b border-dashed relative z-10">
                    {{ Object.keys(data.attributes.product.stores.items).length +
                        (Object.keys(data.attributes.product.stores.items).length == 1 ? ' магазине' : ' магазинах') }}
                </NuxtLink>
            </p>
            <p v-else class="text-base font-circe">Нет в наличии</p>

            <p class="text-6 font-circe">{{ data.attributes.product.price.valueFormatted }}</p>

            <div v-if="data.attributes.product?.stores?.items != null" class="flex justify-between">
                <UiButton is="button" class="text-text-black gap-1! px-2!" text="sm" content="В корзину">
                    <IconsPlus class="text-text-black" />
                </UiButton>
                <UiButton is="button" class="text-text-black" type="ghost">
                    <IconsHeart class="text-blue h-4 w-4" />
                </UiButton>
                <UiButton is="button" class="text-text-black" type="ghost">
                    <IconsComparison class="text-blue h-5 w-5" />
                </UiButton>
            </div>

            <UiButton v-else class="w-full" is="NuxtLink" content="Подробнее" />

        </div>

    </div>
</template>

<style></style>