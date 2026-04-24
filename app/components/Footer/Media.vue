<script setup lang="ts">

const { data: phones } = await useFetch<FooterPhonesData>('/api/include/static-info/phone');
const { data: media } = await useFetch<FooterSocialMediaData>('/api/include/static-info/social-media/');
const { data: info } = await useFetch<FooterInfoData>('/api/include/menu/info/');


</script>
<template>
    <div class="flex flex-col ">
        <p class="text-3xl font-circe">{{ phones?.data[0]?.attributes.name }}</p>
        <p class="font-content text-base text-text-gray">Задать вопрос или оформить покупку.</p>
    </div>
    <div class="flex gap-3">
        <NuxtLink :to="value.links.self" v-for="value in media?.data" :key="value.id">
            <IconsMedia :name="value.attributes.name" />
        </NuxtLink>
    </div>
    <div class="flex flex-col gap-2">
        <NuxtLink :to="value.links.self" v-for="value in info?.data" :key="value.id" class="font-circe text-sm text-text-black">
            {{ value.attributes.name }}
        </NuxtLink>
    </div>
</template>