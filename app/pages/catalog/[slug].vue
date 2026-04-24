<script setup lang='ts'>
import type { BreadcrumbItem } from '@nuxt/ui';
import pushBreadcrumb from '~/utils/pushBreadCrubm';

const route = useRoute()
const router = useRouter()

const { data, pending } = await useAsyncData(`catalog-${route.params.slug}`, async () => {
  const slug = route.params.slug;

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
}, {watch: [() => route.params.slug]})

const {data: fullData, pending: fullDataPending} = await useAsyncData(`catalog-full-${route.params.slug}`, async () => {
  const slug = route.params.slug;
  const fullData = await $fetch<CatalogFullInfoEndpointData>(`/api/catalog/${slug}/`, {
      query: {
        include: 'items,filter,reviews-statistics,sections',
        ...route.query 
      }
    });
    return {fullData};

}, {watch: [() => route.params.slug, () => route.query]})
</script>

<template>
  <div class="flex flex-col mx-auto w-full px-6 lg:px-27 max-w-480  gap-17 pt-15.5 pb-17">
    <CatalogWideBanner class="mb-12" />

    <UBreadcrumb :items="data?.breadcrumb">
      <template #separator>
        <span class="mx-2 text-muted">/</span>
      </template>
    </UBreadcrumb>

    <CatalogTitle :pending="pending" :cat-name="data?.thisCategory.data.attributes.name"
      :count="data?.thisCategory.data.attributes.count" :categories="data?.subcategories" />

    <div class="w-full flex gap-6">
      <div class="w-66 flex flex-col">

        <UiSlider v-if="data?.thisCategory.included.filter.attributes.prices[0]"
          :data="data?.thisCategory.included.filter.attributes.prices[0]" />

        <UiCheckers v-if="data?.thisCategory.included.filter.attributes.properties[0]?.type == 'L'" :data="data?.thisCategory.included.filter.attributes.properties[0] as any"/>

      </div>

      <div class="flex-1 grid grid-cols-2 xl:grid-cols-3 2xl-3xl:grid-cols-4 3xl:grid-cols-5  gap-6 ">
        <HomeProductCard v-for="value in fullData?.fullData.included.items" :data="value" />
      </div>
    </div>

  </div>
</template>

<style></style>