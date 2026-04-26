<script setup lang='ts'>

const value = ref<'string' | 'grid'>('grid')

const route = useRoute()
const router = useRouter()

const { count, products, loadMore } = await useCatalogProducts();

const { pending, breadcrumb, thisCategory, subcategories, meta } = await useAllCategoryCatalog();

</script>

<template>
  <div class="flex flex-col mx-auto w-full px-6 lg:px-27 max-w-480  gap-17 pt-15.5 pb-17">
    <CatalogWideBanner class="mb-12" />

    <UiBreadCrumb :pending="pending" :breadcrumb="breadcrumb"/>

    <CatalogTitle :pending="pending" :cat-name="thisCategory?.data.attributes.name"
      :count="thisCategory?.data.attributes.count" :categories="subcategories" />

    <div class="w-full flex gap-7">
      <div class="w-66 hidden md:flex flex-col gap-6 ">

        <UiSlider v-if="thisCategory?.included.filter.attributes.prices[0]"
          :data="thisCategory?.included.filter.attributes.prices[0]" />

        <template v-for="value in thisCategory?.included.filter.attributes.properties">
          <UiSlider v-if="value.type == 'N' && isObjectProperty(value)" :data="value" />
          <UiCheckers v-else-if="isListProperty(value)" :data="value" />
        </template>
      </div>

      <div class="grow flex flex-col items-center gap-12">
        <div class="w-full flex justify-between">
          <UiSorter />
          <div class="flex gap-2">
            <USlideover :ui="{ content: 'max-w-full w-fit p-3' }">
              <UButton class="md:hidden" label="Фильтры" icon="i-lucide-sliders-horizontal" color="neutral"
                variant="outline" />
              <template #content>
                <div class="w-66 flex flex-col gap-6">
                  <UScrollArea class="w-full h-screen">
                    <div class="w-full h-fit shrink-0">
                      <UiSlider v-if="thisCategory?.included.filter.attributes.prices[0]"
                        :data="thisCategory?.included.filter.attributes.prices[0]" />

                      <template v-for="value in thisCategory?.included.filter.attributes.properties">
                        <UiSlider v-if="value.type == 'N' && isObjectProperty(value)" :data="value" />
                        <UiCheckers v-else-if="isListProperty(value)" :data="value" />
                      </template>
                    </div>

                  </UScrollArea>

                </div>
              </template>
            </USlideover>
            <UiSwitch :value="value" @switch="value = value == 'string' ? 'grid' : 'string'" />
          </div>

        </div>

        <div class=" gap-6"
          :class="{ 'w-full max-w-126.25 md:max-w-full grid grid-cols-2 xl:grid-cols-3 2xl-3xl:grid-cols-4 3xl:grid-cols-5': value == 'grid', 'flex flex-col min-w-0': value == 'string' }">

          <HomeProductCard v-if="value == 'grid'" v-for="value in products" :data="value" class="w-full!"/>
          <SharedProductCardHorizontal v-else-if="value == 'string'" v-for="value in products" :data="value" />
        </div>

        <div class="w-full flex justify-between">
          <UiButton class="py-2.5 px-5 xl:w-138 border-blue/20!" is="button" content="Показать ещё" type="outline"
            @click="loadMore" />
          <UiPagination :count-of-products="count" />
        </div>

        <section class="flex flex-col gap-9 mt-3">
          <h3 class="text-2xl font-circe text-text-black">{{ meta?.seo.title }}</h3>
          <div class="description flex flex-col w-full gap-7" v-html="thisCategory?.meta.seo.text_bottom">
          </div>
        </section>
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