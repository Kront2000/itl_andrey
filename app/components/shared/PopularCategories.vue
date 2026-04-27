<script setup lang="ts">

interface Category {
  id: number | string;
  links: {
    self: string
  };
  attributes: {
    name: string,
  };
}

const { data, pending } = await useFetch('/api/include/menu/main', {
  transform: (response: any) => {
    return Array.isArray(response) ? response : response.data;
  }
});

const list = computed<Category[]>(() => {
  const categories = Array.isArray(data.value) ? data.value : [];
  return [
    { id: 0, links: { self: '/catalog' }, attributes: { name: 'Каталог товаров' } },
    ...categories
  ];
});


</script>
<template>

  <UCarousel v-if="pending" :items="[0, 0, 0, 0, 0, 0]" :ui="{ item: 'basis-auto' }">
    <USkeleton class="w-18 h-6 rounded-lg shrink-0" />
  </UCarousel>

  <UCarousel v-else v-slot="{ item }" :items="list" :ui="{ item: 'basis-auto' }">
    <NuxtLink v-if="item.attributes.name == 'Каталог товаров'" class="flex items-center gap-2 text-base font-normal text-ultra-dark-blue font-circe line-clamp-1 md:hidden py-2 px-5 rounded-lg bg-white "
      :to="item.links?.self || '/'"><IconsMenu />{{ item.attributes.name }}</NuxtLink>
    <NuxtLink v-else class="text-base font-normal text-ultra-dark-blue font-circe line-clamp-1 shrink-0 py-2 px-5 rounded-lg bg-white "
      :to="item.links?.self || '/'">{{ item.attributes.name }}</NuxtLink
      >
  </UCarousel>
</template>