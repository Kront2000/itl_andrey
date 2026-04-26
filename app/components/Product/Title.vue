<script setup lang='ts'>
import type { BreadcrumbItem } from '@nuxt/ui';
import type { ProductData } from '~~/shared/types/formBackendProduct';

const props = defineProps<{
    product: ProductData | undefined,
    pending: boolean ,
    breadcrumb: BreadcrumbItem[] | undefined;
}>()

const article = props.product?.data.attributes.properties?.cml2Article?.value;
</script>

<template>

    <div class="flex justify-between">
        <!-- ЛЕВАЯ ЧАСТЬ -->
        <div class="flex flex-col gap-4">
            <!-- ХЛЕБНЫЕ КРОШКИ -->
            <UiBreadCrumb :pending="pending" :breadcrumb="breadcrumb" />

            <!-- СРЕДНЯЯ ЧАСТЬ -->
            <div class="flex items-center gap-2">
                <p class="text-3xl text-text-black mr-1">{{ product?.data.attributes.name }}</p>
                <UiPropertySticker v-for="value in product?.data.attributes.stikers.value" :sticker="value" />
            </div>

            <!-- НИЖНЯЯ ЧАСТЬ -->
            <div class="flex gap-9">
                <span v-if="article" class="text-sm min-w-0 text-text-gray">Код товара: <span
                        class="text-base text-text-black">{{ article }}</span></span>
                <UiButton is="button" class="text-text-black" type="ghost" content="Избранное">
                    <IconsHeart class="text-blue h-4 w-4" />
                </UiButton>
                <UiButton is="button" class="text-text-black" type="ghost" content="Сравнить">
                    <IconsComparison class="text-blue h-5 w-5" />
                </UiButton>
                <UiButton is="button" class="text-text-black" type="ghost" content="Поделиться">
                    <IconsShare class="text-blue h-5 w-5" />
                </UiButton>
            </div>
        </div>

        <!-- ЛОГО -->
        <NuxtImg class="h-9 max-w-25.5 object-contain"
            :src="product?.data.attributes.brand[0]?.attributes.images.preview" :to="product?.links.self" />
    </div>
</template>

<style></style>