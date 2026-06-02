<script setup lang='ts'>
import Viewed from '~/components/Product/Viewed.vue'

const { breadcrumb, pending, productInfo, propertiesArray, seo } = await useProduct()
const cleanDescription = computed(() => {
    const desc = seo?.seo?.description || productInfo?.data?.attributes?.description || ''
    return desc.replace(/<[^>]*>/g, '').slice(0, 160)
})

useSeoMeta({
    title: () => seo?.seo?.title || productInfo?.data?.attributes?.name || 'Товар',
    ogTitle: () => seo?.og?.['og:title'] || seo?.seo?.title || productInfo?.data?.attributes?.name,
    description: () => cleanDescription.value,
    ogDescription: () => seo?.og?.['og:description'] || cleanDescription.value,
    ogImage: () => seo?.og?.['og:image'] || '',
    twitterCard: 'summary_large_image',
})
</script>

<template>
    <div class="flex flex-col mx-auto w-full px-6 lg:px-27 max-w-480 gap-17 pt-15.5 pb-17">
        <!-- ЗАГОЛОВОК -->
        <ProductTitle :product="productInfo" :breadcrumb="breadcrumb" :pending="pending" />

        <!-- ПЕРВАЯ ЧАСТЬ С ИНФОРМАЦИЕЙ О ПРОДУКТЕ -->
        <div class="flex gap-24 h-fit items-start">
            <!-- ЛЕВАЯ ЧАСТЬ -->
            <div class="flex flex-col grow gap-18 min-w-0">
                <!-- ЗАГОЛОВОК -->
                <div class="flex justify-between w-full">
                    <ProductSlider :pending="pending" :product="productInfo" />
                    <div class="flex flex-col grow max-w-102">
                        <ProductProperty :properties="propertiesArray" />
                    </div>
                </div>

                <!-- ВСЯ ИНФА -->
                <ProductTabs :quantity="productInfo?.data.attributes.product.quantity" :stores="productInfo?.included.stores" :pending="pending" :attributes="productInfo?.data.attributes" />
            </div>
            <!-- ПРАВАЯ ЧАСТЬ -->
            <ProductPurchaseBlock :quantity="productInfo?.data.attributes.product.quantity" :stores="productInfo?.included.stores" :pending="pending" :data="productInfo" />
        </div>

        <!-- ВТОРАЯ ЧАСТЬ С ОТЗЫВАМИ -->
        <div class="flex gap-24">
            <!-- левая часть -->
            <div class="flex flex-col grow gap-18 min-w-0">
                <ProductReviews />
            </div>

            <!-- правая часть -->
            <ProductReviewsStatistics />
        </div>

        <!-- С этим товаром покупают -->
        <ProductAlsoBought />

    </div>
</template>

<style></style>