<script setup lang='ts'>
import type { ReviewStaticData } from '~~/shared/types/formBackendProduct';
const route = useRoute()
const { pending, data } = useLazyFetch<ReviewStaticData>(`/api/catalog/${route.params.categorySlug}/${route.params.productSlug}/relationships/reviews-statistics/`)
const totalNumberOfReviews = computed(() => {
    let total = 0;
    if (data && !pending.value) {
        data.value?.data.forEach((elem) => {
            total += elem.attributes.count;
        })
    }
    return total;
})
</script>

<template>
    <USkeleton v-if="pending" class="rounded-lg w-102 h-[384px]"/>

    <div v-else-if="totalNumberOfReviews > 0" class="flex flex-col w-102 shrink-0 sticky top-25 gap-8 py-9 px-8 border border-blue/20 rounded-lg h-fit">
        <div class="flex justify-between items-end">
            <p class="text-3xl text-text-black">{{ data?.meta.rating + " из 5" }}</p>
            <p class="text-text-black">{{ totalNumberOfReviews + (totalNumberOfReviews == 1 ? " отзыв" : " отзыва") }}</p>
        </div>
        <UButton :ui="{ base: 'text-base py-[12px] px-[20px] bg-yelow hover:bg-yelow/80 text-text-black' }">Написать отзыв
        </UButton>
        <div class="flex flex-col gap-2.5">
            <div v-for="value in data?.data" class="flex justify-between ">
                <div class="flex gap-1 items-center">
                    <IconsStar class="text-dark-yellow" v-for="items in value.id" />
                    <IconsStar class="text-black-40" v-for="items in 5 - value.id" />
                </div>

                <p class="text-text-black">{{ value.attributes.count + (value.attributes.count == 1 ? " отзыв" : " отзыва") }}</p>
            </div>
        </div>
    </div>

    <div v-else class="w-102"></div>
</template>

<style scoped></style>