<script setup lang='ts'>
import type { ProductData } from '~~/shared/types/formBackendProduct';
defineProps<{
    data: ProductData | undefined
}>()
</script>

<template>
    <div class="flex flex-col w-102 shrink-0 sticky top-25 gap-3">
        <div class="w-full rounded-lg border border-blue/20 flex justify-between items-center py-5 px-8">
            <span class="text-text-black">
                <NuxtLink to="/login" class="text-blue">Авторизуйтесь</NuxtLink> и узнайте свою персональную цену.
            </span>
            <IconsTenge />
        </div>

        <div class="flex flex-col rounded-lg w-full bg-blue/4  gap-6">
            <div class="flex flex-col w-full gap-6 border-b border-blue/10 py-9 px-8">
                <div class="flex flex-col gap-1">
                    <p class="text-3xl">{{ data?.data.attributes.product.price.valueFormatted }}</p>
                    <p class="text-xs text-text-black/80">Цена указана с НДС и действительна при заказе в
                        интернет-магазине.
                    </p>
                </div>
                <div class="flex flex-col gap-1">
                    <UiButton content="Добавить в корзину">
                        <IconsPlus />
                    </UiButton>
                    <UButton :ui="{ base: 'py-2 px-5 border-blue/20 rounded-lg text-base text-black' }"
                        variant="outline">
                        Купить в 1 клик</UButton>
                </div>
            </div>

            <div class="flex justify-between items-center py-9 px-8">
                <div class="flex flex-col gap-5.75">
                    <div v-for="value in data?.data.attributes.sale">
                        <p class="text-sm text-text-black/80">Товар участвует в акции:</p>
                        <p class="text-text-black">{{ value.attributes.name }}</p>
                    </div>
                </div>
                <IconsPecrent />

            </div>


        </div>
    </div>
</template>

<style scoped></style>