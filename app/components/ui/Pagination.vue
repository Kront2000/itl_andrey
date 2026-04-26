<script setup lang='ts'>
const route = useRoute()
const router = useRouter()
const props = defineProps<{
    countOfProducts: number | undefined,
}>();
const itemsPerPage = 24;
const totalItems = computed(() => props.countOfProducts || 0);
const page = ref(Number(route.query['page[offset]'] || '1'));
watch(
    () => route.query['page[offset]'],
    (newVal) => {
        page.value = Number(newVal || 1)
    }
)
const togglePage = (val: number) => {
    console.log(val)
    const query = { ...route.query }
    if (val != 1) {
        query['set_filter'] = 'Y',
            query['page[offset]'] = val.toString()
    } else {
        query['set_filter'] = 'Y',
            delete query['page[offset]']
    }
    router.push({ query })
}


</script>

<template>
    <ClientOnly>
        <UPagination v-model="page" :items-per-page="itemsPerPage" :total="totalItems" @update:page="togglePage"  />
    </ClientOnly>
</template>
