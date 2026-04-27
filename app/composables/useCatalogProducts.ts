export const useCatalogProducts = async () => {
  const route = useRoute()
  const router = useRouter()
  
  const { data: fullData, pending: fullDataPending } = await useAsyncData(`catalog-full-${route.params.categorySlug}`, async () => {
  const slug = route.params.categorySlug;
  const fullData = await $fetch<CatalogFullInfoEndpointData>(`/api/catalog/${slug}/`, {
    query: {
      include: 'items,filter,reviews-statistics,sections',
      ...route.query
    }
  });
  return { fullData };

}, { watch: [() => route.params.categorySlug, () => route.query] })

const products = ref<SharedProductData[]>([]); 
const isAppend = ref(false);


watch(() => fullData.value?.fullData.included.items, (newItems) => {
  if (!newItems) return;

 
  if (!route.query['page[offset]'] || route.query['page[offset]'] === '1' || !isAppend.value) {
    products.value = [...newItems];
  } else {
  
    products.value = [...products.value, ...newItems];
    isAppend.value = false;
  }
}, { immediate: true });

const loadMore = () => { 
  isAppend.value = true
  const currentPage = Number(route.query['page[offset]'] || '1');
  const nextPage = currentPage + 1;
  
 
  const total = fullData.value?.fullData.data.attributes.count || 0;
  if (products.value.length < total) {
    router.push({
      query: {
        ...route.query,
        'page[offset]': nextPage.toString(),
        'set_filter': 'Y'
      }
    });
  }
};

return {products, count: fullData.value?.fullData.data.attributes.count, loadMore, pending: fullDataPending}
}