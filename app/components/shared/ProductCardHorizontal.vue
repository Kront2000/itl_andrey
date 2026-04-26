<script setup lang='ts'>
const props = defineProps<{
    data: SharedProductData
}>()

const article = props.data.attributes.properties?.cml2Article?.value;

const storeCount = computed(() => {
    const items = props.data.attributes.product?.stores?.items;
    if (!items || Array.isArray(items)) {
        return 0;
    }
    return Object.keys(items).length;
});

console.log(props.data)
</script>

<template>
    <!-- Вся карточка -->
    <div
        class="flex justify-between items-center h-50 xl:h-71 min-w-0 w-full p-2 xl:py-9 xl:px-8 border rounded-2xl border-blue/20 hover:border-blue">
        <!-- ЛЕВАЯ СТОРНА С КАРТИНКОЙ И ОПИСАНИЕМ -->
        <div class="flex h-full min-w-0 gap-8">
            <!-- БЛОК С КАРТИНКОЙ -->
            <div class="h-[80%] lg:h-full  aspect-square relative">
                <NuxtImg :src="data.attributes.preview" :alt="data.attributes.name" loading="lazy" placeholder
                    class="w-full h-full object-contain" />
                <div class="absolute top-0  left-0  flex flex-col gap-1">
                    <span v-for="value in data.attributes.stikers"
                        class="text-sm md:text-base text-white px-3 rounded-lg w-fit"
                        :class="{ 'bg-blue': value == 'Хит', 'bg-green': value == 'Новинка', 'bg-strawberry': value == 'Акция', 'bg-violet': value == 'Советуем' }">
                        {{ value }}
                    </span>
                </div>
            </div>
            <!-- БЛОК С ОПИСАНИЕМ -->
            <div class="h-full min-w-0 flex flex-col">
                <!-- НАЗВАНИЕ -->
                <span class="text-base min-w-0 font-circe hover:text-blue line-clamp-1" :to="data.links.self">{{
                    data.attributes.name }}
                </span>
                <!-- СТРОКА С ОТЗЫВАМИ КОДОМ ТОВАРА И МАГАЗИНАМИ -->
                <div class="flex gap-4 min-w-0 xl:mb-5 flex-col xl:flex-row">
                    <!-- КОД ТОВАРА -->
                    <span v-if="article" class="text-sm min-w-0 text-text-gray">Код товара: <span
                            class="text-base text-text-black">{{ article }}</span></span>
                    <!-- МАГАЗИНЫ -->
                    <span v-if="storeCount > 0" class="text-sm min-w-0 font-circe">
                        В наличии в <NuxtLink :to="data.links.self"
                            class="text-sm font-circe text-blue hover:border-b border-dashed">
                            {{ Object.keys(data.attributes.product.stores.items).length +
                                (Object.keys(data.attributes.product.stores.items).length == 1 ? ' магазине' : ' магазинах')
                            }}
                        </NuxtLink>
                    </span>
                    <span v-else class="text-base min-w-0 font-circe">Нет в наличии</span>
                </div>
                <!-- ПРОПЕРТИ -->
                <span v-for="value in Object.values(props.data.attributes.properties).slice(0, 4)"
                    class="text-sm min-w-0 text-text-gray line-clamp-1">{{ value?.name +
                        ' — ' }}<span class="text-base text-text-black">{{ value?.value }}</span></span>
            </div>
        </div>
        <div class="flex flex-col w-25.25 xl:w-fit gap-4 h-full">
            <span class="text-2xl text-nowrap font-circe">{{ data.attributes.product.price.valueFormatted }}</span>
            <div v-if="data.attributes.product?.stores?.items != null"
                class="flex flex-col xl:flex-row xl:justify-between w-fit xl:w-50">
                <UiButton is="button" class="text-text-black gap-1! px-2!" text="sm" content="В корзину">
                    <IconsPlus class="text-text-black" />
                </UiButton>
                <div class="flex gap-4">
                    <UiButton is="button" class="text-text-black" type="ghost">
                        <IconsHeart class="text-blue h-4 w-4" />
                    </UiButton>
                    <UiButton is="button" class="text-text-black" type="ghost">
                        <IconsComparison class="text-blue h-5 w-5" />
                    </UiButton>
                </div>

            </div>
        </div>

    </div>

</template>

<style></style>