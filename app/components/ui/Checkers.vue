<script setup lang='ts'>
    defineProps<{
        data: {
            name: string,
            values: LTypeValues[]
        }
    }>()
</script>

<template>
    <UCollapsible class="flex flex-col gap-2 w-48">
    <UButton
      class="group"
      label="Open"
      color="neutral"
      variant="subtle"
      trailing-icon="i-heroicons-chevron-down-20-solid"
      :ui="{
        trailingIcon: 'group-data-[state=open]:rotate-180 transition-transform duration-200'
      }"
      block
    />

    <template #content>
      <div class="h-48 w-48 bg-blue" />
    </template>
  </UCollapsible>
</template>

<style>
</style>q