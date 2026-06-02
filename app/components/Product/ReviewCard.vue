<script setup lang='ts'>

const props = defineProps<{
    data: Review,
}>()

const date = new Date(props.data.attributes.created_at);

</script>

<template>
    <div class="w-full flex flex-col gap-8">
        <!-- Верхняя строка -->
        <div class="flex h-12.5 gap-4 justify-between">
            <div class="flex h-full">
                <div class="size-12 rounded-full bg-black-30 relative">
                    <span class="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 text-2xl">
                        {{ data.attributes.author[0] }}
                    </span>
                </div>
                <div class="flex flex-col h-full justify-between ">
                    <div class="flex gap-2.5">
                        <span class="font-content">{{ data.attributes.author }}</span>
                        <div class="flex gap-1 items-center">
                            <IconsStar class="text-dark-yellow" v-for="value in props.data.attributes.rating" />
                            <IconsStar class="text-black-40" v-for="value in 5 - props.data.attributes.rating" />
                        </div>
                    </div>

                    <span class="text-sm pl-2">{{ date.toLocaleDateString('ru-RU') + " / Опты использования: " +
                        data.attributes.user_experience}}</span>
                </div>
            </div>

            <div class="flex items-center h-fit rounded-lg px-3 py-1 bg-green/10 gap-2">
                <IconsCheckMark class="text-green"/>
                <span class="text-green text-xs">Проверенный покупатель</span>
            </div> 
        </div>

        <!-- Непосердственно отзыв -->
         <div class="flex flex-col gap-6 pb-9 border-b border-blue/10">
            <div v-if="data.attributes.advantages" class="flex flex-col gap-1">
                <p class="font-bold text-text-black">Достоинства:</p>
                <p class="font-content text-text-black leading-6">{{ data.attributes.advantages }}</p>
            </div>

            <div v-if="data.attributes.disadvantages" class="flex flex-col gap-1">
                <p class="font-bold text-text-black">Недостатки:</p>
                <p class="font-content text-text-black leading-6">{{ data.attributes.disadvantages }}</p>
            </div>

            <div v-if="data.attributes.text" class="flex flex-col gap-1">
                <p class="font-bold text-text-black">Комментарий:</p>
                <p class="font-content text-text-black leading-6">{{ data.attributes.text }}</p>
            </div>
         </div>
    </div>
</template>

<style scoped></style>