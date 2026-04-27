<script setup lang='ts'>
import type { BreadcrumbItem } from '@nuxt/ui';
import type { ProductData, PropertyItem } from '~~/shared/types/formBackendProduct';

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

const propertiesArray = computed(() => {
    const props = data.value?.productInfo.data.attributes.properties;
    if (!props) return [] as PropertyItem[];
    return Array.isArray(props) ? props as PropertyItem[] : Object.values(props) as PropertyItem[];
});
</script>

<template>
    <div class="flex flex-col mx-auto w-full px-6 lg:px-27 max-w-480 gap-17 pt-15.5 pb-17">
        <!-- ЗАГОЛОВОК -->
        <ProductTitle :product="data?.productInfo" :breadcrumb="data?.breadcrumb" :pending="pending" />

        <div class="flex gap-24">
            <!-- ЛЕВАЯ ЧАСТЬ -->
            <div class="flex flex-col grow gap-18 min-w-0">
                <!-- ЗАГОЛОВОК -->
                <div class="flex justify-between w-full">
                    <ProductSlider :pending="pending" :product="data?.productInfo" />
                    <div class="flex flex-col grow max-w-102">
                        <ProductProperty :properties="propertiesArray" />
                    </div>
                </div>
                
                <!-- ВСЯ ИНФА -->
                <ProductTabs :attributes="data?.productInfo.data.attributes" />
            </div>


            <!-- ПРАВАЯ ЧАСТЬ -->
            <div class="w-102 h-155 bg-blue/20 shrink-0">

            </div>
        </div>




    </div>
</template>

<style></style>