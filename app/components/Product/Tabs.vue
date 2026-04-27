<script setup lang='ts'>
import type { Attributes, PropertyItem } from '~~/shared/types/formBackendProduct';
const prop = defineProps<{
    attributes: Attributes | undefined
}>()
const list = computed(() => {
    return [{ name: 'Описание', value: prop.attributes?.description }, { name: 'Характеристики' }, ...(propertiesArray.value || [])]
})
const active = ref('Описание');

const propertiesArray = computed(() => {
    const props = prop.attributes?.properties;
    if (!props) return [] as PropertyItem[];
    return Array.isArray(props) ? props as PropertyItem[] : Object.values(props) as PropertyItem[];
});

const firstHalf = computed(() => {
    const halfIndex = Math.ceil(propertiesArray.value.length / 2);
    return propertiesArray.value.slice(0, halfIndex);
})

const secondHalf = computed(() => {
    const halfIndex = Math.ceil(propertiesArray.value.length / 2);
    return propertiesArray.value.slice(halfIndex);
})

</script>

<template>
    <section class="w-full flex flex-col gap-9">
        <UCarousel :key="list.length" class="border-b border-b-blue/20  w-full" v-slot="{ item }" :items="list"
            :ui="{ container: 'flex gap-4', item: 'basis-auto' }">
            <button @click="active = item.name" class="py-5 px-4 transition duration-300"
                :class="{ 'text-text-black': active != item.name, 'text-blue border-b border-b-blue': active == item.name }">
                {{ item.name }}
            </button>
        </UCarousel>

        <div v-if="active == 'Характеристики'" class="w-full flex gap-24">
            <div class="flex flex-col grow">
                <ProductProperty :properties="firstHalf" />
            </div>
            <div class="flex flex-col grow">
                <ProductProperty :properties="secondHalf" />
            </div>
        </div>
        <div v-else v-html="list.find((item) => item.name == active)?.value" class="w-full container">
        </div>
    </section>
</template>

<style scoped>
.container:deep(h3) {
    line-height: 24px;
    margin-top: 10px;
    font-family: var(--font-circe);
    color: var(--color-text-black);
    font-size: var(--text-2xl);
    font-weight: var(--font-weight-medium);
}

.container:deep(p) {
    line-height: 24px;
    font-family: var(--font-circe);
    color: var(--color-text-black)
}

.container:deep(li) {
    list-style-position: inside;
    line-height: 24px;
    list-style-type: disc;
    font-family: var(--font-circe);
    color: var(--color-text-black)
}

.container:deep(div) {
    display: flex;
    flex-direction: column;
    gap: 34px;
    width: 100%;
}

.container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
}

.container:deep(table) {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
}

.container:deep(th) {
    padding: 16px 20px;
    font-family: var(--font-circe);
    font-weight: var(--font-weight-medium);
    color: var(--color-text-black);
    border-bottom: 2px solid var(--color-text-gray);
    background-color: rgba(0, 0, 0, 0.03);
}


.container:deep(td) {
    padding: 16px 20px;
    font-family: var(--font-circe);
    color: var(--color-text-black);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    vertical-align: top;
}

.container:deep(tbody tr:nth-child(even)) {
    background-color: rgba(0, 0, 0, 0.015);
}

.container:deep(tbody tr:hover) {
    background-color: rgba(0, 0, 0, 0.04);
}
</style>