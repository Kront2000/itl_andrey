<script setup lang="ts">
defineProps<{
    active: boolean
}>()
</script>
<template>
    <button class="px-4 text-sm font-circe rounded-lg border" :class="{'border-blue': active, 'border-blue/40': !active}">
        <slot />
    </button>
</template>
