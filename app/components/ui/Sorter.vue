<script setup lang='ts'>
interface RadioValue {
    label: string,
    value: string
}
const route = useRoute()
const router = useRouter()
const items = ref<RadioValue[]>([
    {
        label: 'По алфавиту',
        value: 'name'
    },
    {
        label: 'По популярности',
        value: 'shows'
    },
    {
        label: 'Сначала дешевле',
        value: 'price'
    },
    {
        label: 'Сначала дороже',
        value: '-price'
    },
    {
        label: 'По умолчанию',
        value: 'available'
    },
])

const value = ref<string | undefined>(route.query['sort']?.toString() || 'shows');

watch(
    () => route.query['sort'],
    (newVal) => {
        value.value = newVal?.toString()
    }
)
const toggleSort = (val: string) => {
    const query = { ...route.query }
    open.value = false;
    if (val) {
        query['sort'] = val
    } else {
        delete query['sort']
    }
    router.push({ query })
}

const open = ref(false)
</script>

<template>
    <UCollapsible v-model:open="open"
        :ui="{ root: 'relative', content: 'absolute top-full left-0 z-50 w-full min-w-[200px] mt-2 shadow-lg shadow-black/70 rounded-lg' }"
        class="flex flex-col gap-2 w-fit">
        <UButton class="group" :label="items.find((item) => item.value == value)?.label" color="neutral"
            variant="outline" trailing-icon="i-lucide-chevron-down" :ui="{
                trailingIcon: 'group-data-[state=open]:rotate-180 transition-transform duration-200', base: 'py-[6px] px-[20px]', label: 'text-base'
            }" block />

        <template #content>
            <div class=" bg-white p-2">
                <URadioGroup v-model="value" :items="items" @update:model-value="toggleSort" 
                    :ui="{ base: 'hidden', fieldset: 'gap-3 mb-1', label: 'hover:text-blue text-base' }" />
            </div>
        </template>
    </UCollapsible>
</template>

<style></style>