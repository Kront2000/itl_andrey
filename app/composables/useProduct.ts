import { breadcrumb } from '#build/ui';
import type { BreadcrumbItem } from '@nuxt/ui';
import type { ProductData, PropertyItem } from '~~/shared/types/formBackendProduct';
export const useProduct = async () => {
    const route = useRoute()
    const { data, pending } = await useAsyncData(`product-${route.params.productSlug}`, async () => {
    const [allCategory, productInfo, categoryInfo] = await Promise.all([
        $fetch<CatalogMainEndpointData>('/api/catalog/'),
        $fetch<ProductData>(`/api/catalog/${route.params.categorySlug}/${route.params.productSlug}/`),
        $fetch<CatalogFullInfoEndpointData>(`/api/catalog/${route.params.categorySlug}/`)
    ])
    const breadcrumb: BreadcrumbItem[] = [];
    breadcrumb.push({ label: productInfo.data.attributes.name, to: productInfo.links.self })
    pushBreadCrubm(categoryInfo.data.id, allCategory.data, breadcrumb);
    return { breadcrumb, productInfo }
})

const propertiesArray = computed(() => {
    const props = data.value?.productInfo.data.attributes.properties;
    if (!props) return [] as PropertyItem[];
    return Array.isArray(props) ? props as PropertyItem[] : Object.values(props) as PropertyItem[];
});

    return { pending, productInfo: data.value?.productInfo, breadcrumb: data.value?.breadcrumb, propertiesArray, seo: data.value?.productInfo.meta }
}