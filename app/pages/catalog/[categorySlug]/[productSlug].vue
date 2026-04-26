<script setup lang='ts'>
import type { BreadcrumbItem } from '@nuxt/ui';



const route = useRoute()
const { data, pending } = useAsyncData(`product-${route.params.productSlug}`, async () => {
    const [allCategory, productInfo, categoryInfo] = await Promise.all([
        $fetch<CatalogMainEndpointData>('/api/catalog/'),
        $fetch<ProductData>(`/api/catalog/${route.params.categorySlug}/${route.params.productSlug}/`),
        $fetch<CatalogFullInfoEndpointData>(`/api/catalog/${route.params.categorySlug}/`)
    ])
    const breadcrumb: BreadcrumbItem[] = [];
    breadcrumb.push({ label: productInfo.data.attributes.name, to: productInfo.links.self })
    pushBreadCrubm(categoryInfo.data.id, allCategory.data, breadcrumb);
    console.log(productInfo.data.id)
    console.log(allCategory.data)
    console.log(breadcrumb)
    return { breadcrumb, productInfo }
})
</script>

<template>
    <div class="flex flex-col mx-auto w-full px-6 lg:px-27 max-w-480 gap-17 pt-15.5 pb-17">
        <!-- ЗАГОЛОВОК -->
        <ProductTitle :product="data?.productInfo" :breadcrumb="data?.breadcrumb" :pending="pending"/>
        
        <ProductTopContent :product=""/>
    </div>
</template>

<style></style>