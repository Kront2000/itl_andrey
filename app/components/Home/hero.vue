<script setup lang='ts'>
const { data: slider, pending: SliderPending } = await useFetch<HeroSliderData>('/api/include/banners/slider/');
const { data: advantages, pending: advantagesPending } = await useFetch<HeroAdvantagesData>('/api/include/mainpage/advantages');

const config = useRuntimeConfig()
</script>

<template>
    <div class="flex flex-col w-full bg-blue/5 py-9 px-6 lg:px-27 gap-8">

        <USkeleton v-if="SliderPending" class="w-full h-41 md:h-80 rounded-lg bg-dark-yellow" />

        <UCarousel
            :ui="{ dots: 'bottom-3 md:bottom-11 left-4 lg:left-17 w-fit gap-1 ', dot: ['w-1 h-1 bg-blue/20 ui-active:w-4',], }" dots
            v-slot="{ item }" :items="slider?.data" class="w-full ">
            <NuxtLink class="" :to="item.links?.self || '/'">
                <div class="w-full h-41 md:h-80 bg-dark-yellow overflow-hidden rounded-lg relative">
                    <div
                        class="absolute flex flex-col left-0 top-0 px-4 py-8 lg:p-16 gap-2 lg:gap-6 2xl:gap-9 max-w-[50%] sm:max-w-full">
                        <span class="text-xl lg:text-3xl 2xl:text-[40px] lg:leading-11 text-text-black">
                            {{ item.attributes.text.title }}
                        </span>
                        <span class="text-xs lg:text-sm 2xl:text-lg text-dark-blue">
                            {{ item.attributes.text.text }}
                        </span>
                    </div>
                    <picture>
                        <source :srcset="config.public.baseUrl + item.attributes.images.mobile.src"
                            media="(width <= 768px)" />
                        <img class="absolute right-0 clip object-cover object-right w-[50%] md:w-[70%] h-full"
                            loading="lazy" :src="config.public.baseUrl + item.attributes.images.desktop.src"
                            :alt="item.attributes.name" />
                    </picture>
                </div>

            </NuxtLink>
        </UCarousel>

        <UCarousel v-if="advantagesPending" v-slot="{ item }" :items="[0, 0, 0, 0, 0, 0,]" :ui="{ item: 'basis-auto' }">
            <USkeleton  class="w-46 sm:w-80 h-33 sm:h-22 bg-white rounded-lg shrink-0" />
        </UCarousel>

        <UCarousel v-else v-slot="{ item }" :items="advantages?.data" :ui="{ item: 'basis-auto' }">
            <HomeAdvantage :data="item" />
        </UCarousel>

    </div>
</template>

<style scoped>
.clip {
    clip-path: polygon(12% 0, 100% 0, 100% 100%, 0% 100%);
}
</style>