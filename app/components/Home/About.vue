<script setup lang='ts'>
const { data: about, pending } = useLazyFetch<HomeCompanyData>('/api/company');
</script>

<template>
    <USkeleton v-if="pending" class="w-full h-96.75 rounded-lg" />


    <section v-else class="w-full rounded-lg p-10 flex flex-col-reverse xl:flex-row justify-between items-center gap-13 border border-blue/20">
        <div class="flex flex-col xl:w-[40%] gap-10 justify-center">
            <h3 class="text-text-black text-3xl">{{ about?.data[0]?.attributes.name }}</h3>
            <p class="text-text-black leading-10">{{ cleanText(about?.data[0]?.attributes.preview_text) }}</p>
            <UiButton class="w-fit" content="Подробнее" :to="about?.data[0]?.links.self" is="NuxtLink" />
        </div>
        <NuxtImg class="flex h-76.25 xl:w-[65%] object-cover rounded-lg"
            :src="about?.data[0]?.attributes.images.detail"
            :placeholder="about?.data[0]?.attributes.images.preview" />
    </section>


</template>

<style></style>