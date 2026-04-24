<script setup lang='ts'>
const { data: banner, pending } = useLazyFetch<HomeWideData>('/api/include/banners/wide/');
</script>



<template >
    <section v-if="pending">
        <USkeleton class="w-full rounded-lg h-45" />
    </section>

    <section v-else class="w-full flex items-center h-45 justify-between bg-dark-yellow rounded-lg pl-6 2xl:pl-18">
        <p :style="{ color: banner?.data[0]?.attributes.styles.text_color }"
            class="text-lg 2xl:text-3xl font-circe leading-5.5 2xl:leading-10 line-clamp-4 2xl:line-clamp-3 text-text-black grow">
            {{ banner?.data[0]?.attributes.name }}
        </p>
        <NuxtImg class="max-w-[50%] md:max-w-[65%] xl:max-w-max  h-full  clip object-cover object-right" :src="banner?.data[0]?.attributes.images.desktop.src" :placeholder="banner?.data[0]?.attributes.images.preview" />
    </section>
</template>

<style>
.clip {
    clip-path: polygon(15% 0, 100% 0, 100% 100%, 0% 100%);
}
</style>