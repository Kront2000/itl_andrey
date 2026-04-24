<script setup lang='ts'>
const props = defineProps<{
  data: {
    name: string,
    values: NTypeValues,
  }
}>()

const route = useRoute()
const router = useRouter()

const sliderValue = ref<number[]>([
  Number(route.query[props.data.values.min.id]) || props.data.values.min.value,
  Number(route.query[props.data.values.max.id]) || props.data.values.max.value
])

watch(
  () => [route.query[props.data.values.min.id], route.query[props.data.values.max.id]],
  ([newMin, newMax]) => {
    sliderValue.value = [
      newMin ? Number(newMin) : props.data.values.min.value,
      newMax ? Number(newMax) : props.data.values.max.value
    ]
  }
)

function handleChange() {
  const minId = props.data.values.min.id
  const maxId = props.data.values.max.id

  const newQuery = {
    ...route.query,
    ['set_filter']: 'Y',
    [minId]: !sliderValue.value[0] ? props.data.values.min.value : sliderValue.value[0].toString(),
    [maxId]: !sliderValue.value[1] ? props.data.values.min.value : sliderValue.value[1].toString()
  }

  router.push({ query: newQuery })
}
</script>

<template>
  <div class="flex flex-col gap-5">
    <p class="text-lg text-black">{{ data.name == 'Розничная цена' ? 'Цена' : data.name }}</p>
    <div class="w-65 h-13 flex justify-between items-center  rounded-lg border border-blue/30 px-3.5 py-5 relative">
      <p class="font-circe text-sm text-dark-blue/70">{{ sliderValue[0] }}</p>
      <p class="font-circe text-sm text-dark-blue/70">{{ sliderValue[1] }}</p>
      <USlider class="absolute bottom-0 w-[95%] right-1/2 translate-x-1/2" v-model="sliderValue"
        :min="data.values.min.value" :max="data.values.max.value" :step="1" @change="handleChange" />
    </div>
  </div>
</template>

<style></style>