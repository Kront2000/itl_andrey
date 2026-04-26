<script setup lang='ts'>
import type { BreadcrumbItem } from '@nuxt/ui';

defineProps<{
    breadcrumb: BreadcrumbItem[] | undefined,
    pending?: boolean
}>();
</script>

<template>
    <USkeleton v-if="pending" class="w-67.75 h-6 rounded-lg"/>
    <UBreadcrumb v-else :items="breadcrumb">
        <template #separator>
            <span class="mx-2 text-muted">/</span>
        </template>
    </UBreadcrumb>
</template>

<style></style>