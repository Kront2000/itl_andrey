<script setup lang='ts'>
import type { PropertyItem } from '~~/shared/types/formBackendProduct';



defineProps<{
    properties: (PropertyItem | null)[] 
}>()
</script>

<template>
    <div v-for="value in properties" class="w-full flex items-end">
        <p class="text-text-gray">{{ value?.name }}</p>
        <div class="flex grow border border-dashed -translate-y-1 border-text-gray/20"></div>
        <p class="text-text-black">{{ value?.value }}</p>
    </div>
</template>