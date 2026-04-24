<script setup lang='ts'>
import type { BreadcrumbItem } from '@nuxt/ui';





// const route = useRoute()
// const router = useRouter()
// // 1. Получаем slug текущей категории (например, 'elektronika')
// const categorySlug = route.params.slug
// // 2. Формируем запрос данных. 
// // Nuxt 4 крут тем, что useAsyncData умеет следить за изменениями.
// const { data: catalogData, pending } = await useAsyncData(
//   `catalog-${categorySlug}`, // уникальный ключ
//   () => {
//     // Собираем параметры из URL (query), чтобы передать их в API
//     const queryParams = new URLSearchParams(route.query).toString()

//     // Запрашиваем данные текущей категории + передаем фильтры/пагинацию
//     return $fetch(`https://api.retail.itl.digital/catalog/${categorySlug}/?include=items,filter,reviews-statistics,sections&${queryParams}`)
//   },
//   {
//     // МАГИЯ: Заставляем Nuxt перезапрашивать данные каждый раз, когда меняется URL (query параметры)
//     watch: [() => route.query] 
//   }
// )
// // Функция для обновления URL при клике на фильтр/пагинацию
// const updateFilters = (newFilters) => {
//   router.push({
//     query: {
//       ...route.query, // сохраняем старые параметры
//       ...newFilters,  // добавляем новые (например, { page: 2 } или { sort: 'price_asc' })
//     }
//   })
// }

const route = useRoute()
const slug = route.params.slug;

const { data: fullData, pending } = await useAsyncData(async (_nuxtApp, { signal }) => {
  const [fullData, allCategories] = await Promise.all([
    $fetch<CatalogFullInfoEndpointData>(`/api/catalog/${slug}/?include=items,filter,reviews-statistics,sections`, { signal }),
    $fetch<CatalogMainEndpointData>('/api/catalog/', { signal }),
  ])
  const subcategories = allCategories.data.filter((category) => category.attributes.parentId == fullData.data.id);
  const breadcrumb: BreadcrumbItem[] = [];
  fullData.meta.breadcrumb.map((items) => breadcrumb.push({ label: items.attributes.name, to: items.links.self }))
  return { fullData, subcategories, breadcrumb }
}, { watch: [() => slug] })

// const {data: fullInfo, pending: fullInfoPending} = useLazyFetch<CatalogFullInfoEndpointData>(`/api/catalog/${slug}/?include=items,filter,reviews-statistics,sections`);
// const { data: subcategories, pending: subcategoriesPending } = await useLazyFetch<CatalogMainEndpointData>('/api/catalog/', {
//   transform: (data) => {
//     return {data: data.data.filter((category) => category.attributes.parentId == undefined)} 
//   },
// })
</script>

<template>
  <div class="flex flex-col mx-auto w-full px-6 lg:px-27 max-w-[1920px] gap-17 pt-15.5 pb-17">
    <CatalogWideBanner class="mb-12" />

    <UBreadcrumb :items="fullData?.breadcrumb">
      <template #separator>
        <span class="mx-2 text-muted">/</span>
      </template>
    </UBreadcrumb>

    <CatalogTitle :pending="pending" :cat-name="fullData?.fullData.data.attributes.name"
      :count="fullData?.fullData.data.attributes.count" :categories="fullData?.subcategories" />

  </div>
</template>

<style></style>