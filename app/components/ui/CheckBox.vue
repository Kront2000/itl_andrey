<script setup lang='ts'>
const route = useRoute()
const router = useRouter()

const props = defineProps<{
    data: {
        id: string,
        name: string,
        value: string,

    }
}>()
const isChecked = ref(route.query[props.data.id] === 'Y')
watch(
  () => route.query[props.data.id],
  (newVal) => {
    isChecked.value = newVal === 'Y'
  }
)
const toggleFilter = (val: boolean | 'indeterminate') => {
  const query = { ...route.query }
  if (val) {
    query['set_filter'] = 'Y',
    query[props.data.id] = 'Y'
  } else {
    delete query[props.data.id] 
  }
  router.push({ query })
}
</script>
<template>
    <UCheckbox 
      v-model="isChecked" 
      :label="data.name" 
      @update:model-value="toggleFilter" 
    />
</template>
<style></style>