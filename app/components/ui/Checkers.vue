<script setup lang='ts'>

    const props = defineProps<{
        data: {
            name: string,
            values: LTypeValues[]
        }
    }>()
</script>

<template>
    <UCollapsible  :default-open="true" class="flex flex-col text-lg text-text-black! gap-2 w-full pl-0!">
    <UButton
      class="group"
      :label="data.name"
      color="neutral"
      variant="ghost"
      trailing-icon="i-heroicons-chevron-down-20-solid"
      :ui="{
        base: 'pl-0',
        trailingIcon: 'group-data-[state=open]:rotate-180 transition-transform duration-200',
        label: 'text-lg text-text-black'
      }"
      block
    />

    <template class="" #content>
      <div class="w-full py-2 flex flex-col gap-2">
        <UiCheckBox v-for="value in data.values" :data="value" />
      </div>
      
    </template>
  </UCollapsible>
</template>

<style>
</style>q