<script setup lang='ts'>
import type { ProductReviewsData } from '~~/shared/types/formBackendProduct';


const route = useRoute()
const { data, pending } = useLazyFetch<ProductReviewsData>(`/api/catalog/${route.params.categorySlug}/${route.params.productSlug}/relationships/reviews/`)
</script>

<template>
    <section class="flex flex-col gap-10">
        <h3 class="text-2xl text-text-black">Отзывы о товаре <span v-if="!pending && data && data.data.length > 0"
                class="text-black-60 text-2xl">{{ " — " +
                    data?.data.length }}</span></h3>

        <ProductReviewCard v-if="data?.data && data?.data.length > 0" v-for="value in data?.data" :data="value" />

        <p class="text-text-black">Мы ценим ваше мнение! Пожалуйста, поделитесь своими впечатлениями о продукте. Ваш
            отзыв поможет не только нам улучшить наш сервис, но и другим покупателям сделать осознанный выбор.
            Благодарим за то, что делитесь своим опытом!</p>

        <UButton class="max-w-96" :ui="{ base: 'text-base py-[12px] px-[20px] bg-yelow hover:bg-yelow/80 text-text-black' }">Написать отзыв
        </UButton>
    </section>
</template>

<style scoped></style>