<script setup lang='ts'>
const props = defineProps<{
  product: ProductData | undefined,
}>()

const items = [
  'https://picsum.photos/640/640?random=1',
  'https://picsum.photos/640/640?random=1',
  'https://picsum.photos/640/640?random=1',
  'https://picsum.photos/640/640?random=2',
  'https://picsum.photos/640/640?random=3',
  'https://picsum.photos/640/640?random=4',
  'https://picsum.photos/640/640?random=5',
  'https://picsum.photos/640/640?random=6'
]

const carousel = useTemplateRef('carousel')
const activeIndex = ref(0)

function onClickPrev() {
  activeIndex.value--
}
function onClickNext() {
  activeIndex.value++
}
function onSelect(index: number) {
  activeIndex.value = index
}

function select(index: number) {
  activeIndex.value = index

  carousel.value?.emblaApi?.scrollTo(index)
}
</script>

<template>
    <div class="flex w-174 h-120">
        <div class="flex flex-col gap-1 justify-between pt-4 max-w-xs mx-auto">
            <div v-for="(item, index) in items" :key="index"
                class="size-11 opacity-25 hover:opacity-100 transition-opacity"
                :class="{ 'opacity-100': activeIndex === index }" @click="select(index)">
                <img :src="item" width="44" height="44" class="rounded-lg" loading="lazy">
            </div>
        </div>
        <UCarousel ref="carousel" v-slot="{ item }" arrows :items="items" :prev="{ onClick: onClickPrev }"
            :next="{ onClick: onClickNext }" class="w-80 h-120" @select="onSelect">
            <NuxtImg :src="item"  class="rounded-lg w-80 h-120" loading="lazy"/>
            <img :src="item" width="320" height="320" class="rounded-lg" loading="lazy">
        </UCarousel>

        
    </div>
</template>

<style></style>