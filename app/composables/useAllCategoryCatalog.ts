import { breadcrumb } from "#build/ui";
import type { BreadcrumbItem } from "@nuxt/ui";
import pushBreadcrumb from "~/utils/pushBreadCrubm";

export const useAllCategoryCatalog = async () => {
    const route = useRoute()
    const { data, pending } = await useAsyncData(`catalog-${route.params.categorySlug}`, async () => {
        const slug = route.params.categorySlug;

        const [allCategories, thisCategory] = await Promise.all([
            $fetch<CatalogMainEndpointData>('/api/catalog/'),
            $fetch<CatalogFullInfoEndpointData>(`/api/catalog/${slug}/?include=filter`),
        ])
        //Хлебные крошки
        const breadcrumb: BreadcrumbItem[] = [];
        pushBreadcrumb(thisCategory.data.id, allCategories.data, breadcrumb);
        //Под категрии у данной категории
        const subcategories: CatalogTitleCard[] = allCategories.data.filter((item) => item.attributes.parentId == thisCategory.data.id)
        
        return { allCategories, breadcrumb, thisCategory, subcategories };
    }, { watch: [() => route.params.categorySlug] })

    return {breadcrumb: data.value?.breadcrumb, pending, subcategories: data.value?.subcategories, thisCategory: data.value?.thisCategory, meta: data.value?.thisCategory.meta}
}