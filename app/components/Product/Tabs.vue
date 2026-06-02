<script setup lang='ts'>
const prop = defineProps<{
    attributes: Attributes | undefined,
    pending: boolean,
    stores: Record<string, StoreDetail> | undefined,
    quantity: number | undefined
}>()
const list = computed(() => {
    return [{ title: 'Описание', info: prop.attributes?.description } as ProductTab, { title: 'Характеристики' } as ProductTab, { title: 'Наличие в магазинах' } as ProductTab, ...(tabsArray.value || [])]
})
const active = ref('Описание');

const propertiesArray = computed(() => {
    const props = prop.attributes?.properties;
    if (!props) return [] as PropertyItem[];
    return Array.isArray(props) ? props as PropertyItem[] : Object.values(props) as PropertyItem[];
});

const tabsArray = computed(() => {
    const props = prop.attributes?.tabs;
    if (!props) return [] as ProductTab[];
    return Array.isArray(props) ? props as ProductTab[] : Object.values(props) as ProductTab[];
});

//Утилиты для разделения характеристик на 2 колонки
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
        <UCarousel v-if="pending" class="border-b border-b-blue/20  w-full" v-slot="{ item }"
            :items="[0, 0, 0, 0, 0, 0, 0, 0]" :ui="{ container: 'flex gap-4', item: 'basis-auto' }">
            <USkeleton class="h-6 w-30 m-2 transition duration-300 " />

        </UCarousel>

        <UCarousel v-else :key="list.length" class="border-b border-b-blue/20  w-full" v-slot="{ item }" :items="list"
            :ui="{ container: 'flex gap-4', item: 'basis-auto' }">
            <button @click="active = item.title" class="py-5 px-4 transition duration-300"
                :class="{ 'text-text-black': active != item.title, 'text-blue border-b border-b-blue': active == item.title }">
                {{ item.title }}
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

        <div v-else-if="active == 'Наличие в магазинах' && quantity && quantity > 0"
            class="w-full grid grid-cols-10 grid-rows-1 gap-4">
            <p className="col-span-3 text-text-gray text-sm">Адрес</p>
            <p className="col-span-5 col-start-4 text-text-gray text-sm">Режим работы</p>
            <p className="col-span-2 col-start-9 text-text-gray text-sm">Телефон</p>
            <template v-for="value in stores">
                <p v-html="value.address" className="col-span-3 text-text-black "></p>
                <p v-html="value.schedule" className="col-span-5 col-start-4 text-text-black "></p>
                <p v-html="value.phone" className="col-span-2 col-start-9 text-text-black"></p>
            </template>
        </div>

        <div v-else v-html="list.find((item) => item.title == active)?.info" class="w-full container">
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