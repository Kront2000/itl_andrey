<script setup lang='ts'>

const props = withDefaults(defineProps<{
    content?: string,
    to?: string,
    is?: string, 
    type?: 'ghost' | 'default' | 'outline', 
    text?: 'sm' | 'base'
}>(), {
    is: 'button',      
    type: 'default',   
    text: 'base'        
})

const componentTag = computed(() => {
    if (props.to) return resolveComponent('NuxtLink')
    return props.is
})

enum Type { 
  Default = 'default', 
  Outline = 'outline', 
  Ghost = 'ghost',
}

</script>

<template>
    <component 
        :is="componentTag" 
        :to="to" 
        class="flex rounded-md items-center justify-center text-text-black gap-2" 
        :class="{
            'bg-yellow-400 px-4 py-3': type == Type.Default, 
            '': type == Type.Ghost, 
            'border border-current/40 px-4 py-1 ': type == 'outline'
        }"
    >
        <slot />
        <span class="font-content line-clamp-1" :class="{'text-base': text == 'base', 'text-sm': text == 'sm', 'text-current': type == 'outline'}">
            {{ content }}
        </span>
    </component>
</template>