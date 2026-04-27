<script setup lang='ts'>
import MobCatalogButton from '~/components/Catalog/MobCatalogButton.vue';


const value = ref<'string' | 'grid'>('grid');

const { count, products, loadMore, pending: fullDataPending } = await useCatalogProducts();

const { pending, breadcrumb, thisCategory, subcategories} = await useAllCategoryCatalog();

</script>

<template>
  <div class="flex flex-col mx-auto w-full px-6 lg:px-27 max-w-480  gap-17 pt-15.5 pb-17">
    <CatalogWideBanner class="mb-12" />

    <UiBreadCrumb :pending="pending" :breadcrumb="breadcrumb"/>

    <CatalogTitle :pending="pending" :cat-name="thisCategory?.data.attributes.name"
      :count="thisCategory?.data.attributes.count" :categories="subcategories" />

    <div class="w-full flex gap-7">
      <!-- ФИЛЬТРЫ -->
      <CatalogFilters :pending="pending" :filter="thisCategory?.included.filter.attributes"/>


      <div class="grow flex flex-col items-center gap-12">

        <!-- БЛОК ПЕРЕД ТОВАРАМИ (Сортировка, фильтры для телефона, переключение ввида карточек) -->
        <div class="w-full flex justify-between">
          <UiSorter />
          <div class="flex gap-2">
            <MobCatalogButton :pending="pending" :filter="thisCategory?.included.filter.attributes"/>
            <UiSwitch :value="value" @switch="value = value == 'string' ? 'grid' : 'string'" />
          </div>
        </div>

        <CatalogItemsContainer :pending="fullDataPending" :count="count" :products="products" :loadMore="loadMore" :value="value"/>

        <CatalogDescription :category="thisCategory" :pending="pending"/>
      </div>
    </div>

  </div>
</template>

<style scoped>
.description:deep(p) {
  line-height: 1.5rem;
  font-family: 'circe', sans-serif;
  color: var(--your-black-color);
}
</style>