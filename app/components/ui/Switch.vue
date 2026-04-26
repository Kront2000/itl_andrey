<script setup lang='ts'>
    defineProps<{
        value: 'string' | 'grid'
    }>()
</script>

<template>
    <button @click="$emit('switch')"
     class="flex w-15.75 h-8 p-2 bg-blue/10 rounded-lg overflow-hidden items-center justify-between relative">
        <IconsGrid  class="z-5"/>
        <IconsString class="z-5"/>
        <div class="w-7 h-7 left-1 bg-white rounded-lg absolute transition duration-300" 
        :class="{'translate-x-full': value == 'string'}" />
    </button>
</template>

<style>
</style>