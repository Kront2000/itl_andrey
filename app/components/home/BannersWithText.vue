<script setup lang='ts'>
const { data: banners, pending } = useLazyFetch<HomeBannerWithTextData>('/api/include/banners/banner-with-text/')
</script>

<template>
    
    <UCarousel v-if="pending"  :items="[0, 0, 0]" :ui="{ item: 'basis-auto' }">
        <USkeleton  class="w-95 md:w-138 h-50 md:h-95 bg-white rounded-lg" />
    </UCarousel>

    <UCarousel v-else v-slot="{ item }" :items="banners?.data" :ui="{ item: 'basis-auto' }">
        <div  class=" w-95 md:w-138 h-50 md:h-95 rounded-lg relative shrink-0"  >
            <NuxtImg class="w-full h-full object-cover" loading="lazy"
                :placeholder="item.attributes.images.preview" :alt="item.attributes.name"
                :src="item.attributes.images.detail" />
            <div class="w-full absolute bottom-0 left-0 p-6 md:p-8 flex flex-col gap-2 bg-linear-0 from-black/30 to-black/0">
                <p class="font-content text-white">{{ item.attributes.text.text }}</p>
                <p class="font-circe text-dark-yellow text-lg leading-8">{{ item.attributes.text.title }}</p>
                <div class="flex gap-4">
                    <UiButton class="text-white w-fit" is="NuxtLink" :to="button.link"
                        v-for="button in item.attributes.buttons" :content="button.text" type="outline" />
                </div>
            </div>
        </div>
    </UCarousel>

</template>

<style></style>