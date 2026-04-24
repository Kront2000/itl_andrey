<script setup lang='ts'>
    const {data: blog, pending} = useLazyFetch<HomeBlogData>('/api/include/mainpage/blog/');

</script>

<template>
    <section class="flex flex-col gap-10">
        <NuxtLink class="flex gap-5.5 items-center group" to="/blog">
            <span class="text-xl md:text-3xl font-circe text-text-black ">Блог</span>
            <IconsArrow class="group-hover:translate-x-2 transition duration-300" />
        </NuxtLink>

        <UCarousel v-if="pending" :items="[0, 0, 0]" :ui="{ item: 'basis-auto' }">
            <USkeleton class="w-71.5 h-80.5 shrink-0" />
        </UCarousel>

        <UCarousel v-else v-slot="{ item }" :items="blog?.data" :ui="{ item: 'basis-auto' }">
            <NuxtLink  class="w-71.5 flex flex-col gap-5">
                <NuxtImg class="w-full h-48 object-cover" :src="item.attributes.image"
                 placeholder loading="lazy" />
                 <span class="max-w-full line-clamp-3 hover:text-blue">{{ item.attributes.title }}</span>
            </NuxtLink>
        </UCarousel>
    </section>
</template>

<style></style>