<script setup lang='ts'>
defineProps({
    placeholder: String,
})
</script>

<template>
    <div class="relative w-full h-full">
        <input :placeholder="placeholder" type="text" class="w-full h-full md:border-2 rounded-md bg-white pl-10   border-blue-300 md:pl-5 pr-10 focus:border-input-blue
             text-blue-300 focus:text-input-blue outline-none">

        <div class="absolute top-1/2 left-3 md:left-auto md:right-3 right-auto -translate-y-1/2 flex items-center">
            <slot />
        </div>
    </div>
</template>

<style></style>