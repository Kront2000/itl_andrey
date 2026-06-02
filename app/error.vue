<script setup lang='ts'>
import type { NuxtError } from '#app'
const props = defineProps<{ error: NuxtError }>()
</script>

<template>
    <Shared404 v-if="error.status == 404" :message="error.message"/>
</template>

<style scoped></style>