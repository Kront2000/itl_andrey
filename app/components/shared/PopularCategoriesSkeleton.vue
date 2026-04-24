<script setup lang="ts">
const scrollContainer = ref<HTMLElement | null>(null)

const handleWheel = (e: WheelEvent) => {
    if (!scrollContainer.value) return
    scrollContainer.value.scrollLeft += e.deltaY
}
const items = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
}))



</script>
<template>
    <div ref="scrollContainer"
        class="flex overflow-x-auto hide-scrollbar gap-8 w-full cursor-grab active:cursor-grabbing"
        @wheel.prevent="handleWheel">
        <USkeleton class="w-32 h-7 shrink-0" v-for="item in items" />
    </div>

</template>
