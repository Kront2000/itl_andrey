<script setup lang='ts'>
import type { ProductData } from '~~/shared/types/formBackendProduct';

const props = defineProps<{
  product: ProductData | undefined,
  pending: boolean,
}>()

const items = computed(() => {
  const attributes = props.product?.data?.attributes
  if (!attributes) return []
  
  const mainImage = attributes.images?.detail
  const moreImages = Array.isArray(attributes.images?.more) ? attributes.images.more : []
  
  // Собираем всё в один массив и убираем битые элементы
  return [mainImage, ...moreImages].filter(item => item && item.src)
})

const carousel = useTemplateRef('carousel')
const carouselMini = useTemplateRef('carouselMini')
const activeIndex = ref(0)

function onClickPrev() {
  activeIndex.value--
  carousel.value?.emblaApi?.scrollTo(activeIndex.value)
}
function onClickNext() {
  activeIndex.value++
  carousel.value?.emblaApi?.scrollTo(activeIndex.value)
}
function onSelect(index: number) {
  activeIndex.value = index
  carouselMini.value?.emblaApi?.scrollTo(index)
}

function select(index: number) {
  activeIndex.value = index
  carousel.value?.emblaApi?.scrollTo(index)

}

</script>

<template>
  <USkeleton v-if="pending" class="w-174 h-120 rounded-lg" />

  <div v-else class="flex w-174 h-120 gap-17">
    <div class="h-full flex-col flex justify-between">
      <UButton @click="onClickPrev"
        class="bg-white hover:bg-blue/5 w-19 h-6.5 border justify-center border-blue/20 hover: rounded-lg text-blue active:bg-blue/10"
        icon="i-lucide-chevron-up" />

      <UCarousel ref="carouselMini" orientation="vertical" :items="items"
        :ui="{ container: 'h-[418px]', item: 'basis-auto' }" class="h-104.5">
        <template #default="{ item, index }">
          <div class="size-19 p-2 transition-all cursor-pointer border-blue"
            :class="[activeIndex === index ? 'border-2  rounded-lg' : 'border-0']" @click="select(index)">
            <NuxtImg :src="item.src" :alt="item.alt" class="w-full h-full object-cover rounded-md" loading="lazy" />
          </div>
        </template>
      </UCarousel>

      <UButton @click="onClickNext"
        class="bg-white hover:bg-blue/5 w-19 h-6.5 border justify-center border-blue/20 hover: rounded-lg text-blue active:bg-blue/10"
        icon="i-lucide-chevron-down" />
    </div>

    <UCarousel ref="carousel" v-slot="{ item }" :items="items" class="w-130.5 h-120" @select="onSelect">
      <NuxtImg :src="item.src" :alt="item.alt" class="rounded-lg w-130.5 h-120 object-contain" loading="lazy"
        draggable="false" />
    </UCarousel>
  </div>
</template>

<style></style>