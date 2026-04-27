<script setup lang='ts'>
const props = withDefaults(defineProps<{
  filter: FilterAttributes | undefined
  pending: boolean
  isMob?: boolean

}>(), {
  isMob: false
}) 
</script>

<template>

  <div v-if="pending || !filter" class="w-66 flex-col gap-6" :class="{ 'hidden md:flex': !isMob, 'flex': isMob }">
    <USkeleton class="w-full h-20 rounded-lg" />
  </div>

  <template v-else>
    <div v-if="!isMob" class="w-66 hidden md:flex flex-col gap-6">
      <UiSlider  v-if="filter.prices[0]" :data="filter.prices[0]"/>
      <template v-for="value in filter.properties">
        <UiSlider v-if="value.type == 'N' && isObjectProperty(value)" :data="value" />
        <UiCheckers v-else-if="isListProperty(value)" :data="value" />
      </template>
    </div>

    <div v-else class="w-66 flex flex-col gap-6">
      <UScrollArea class="w-full h-screen">
        <div class="w-full h-fit shrink-0">
          <UiSlider v-if="filter.prices[0]" :data="filter.prices[0]" />
          <template v-for="value in filter.properties">
            <UiSlider v-if="value.type == 'N' && isObjectProperty(value)" :data="value" />
            <UiCheckers v-else-if="isListProperty(value)" :data="value" />
          </template>
        </div>
      </UScrollArea>
    </div>
  </template>

</template>

<style></style>