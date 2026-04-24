<script setup lang='ts'>

const { data: menu } = await useFetch<FooterMenuData>('/api/include/menu/footer');
const { data: stores } = await useFetch<FooterStoresData>('/api/include/menu/stores');

</script>

<template>
    <footer class="flex flex-col px-6 lg:px-27 mx-auto w-full max-w-[1920px] gap-14">

        <!-- Верхняя часть -->
        <div class="flex flex-col lg:flex-row  items-center bg-bg-blue/5 rounded-lg p-7 gap-4">
            <div class="flex flex-col gap-1 w-full lg:w-auto">
                <p class="font-circe text-xl text-text-black">Подпишитесь на нашу рассылку</p>
                <p class="font-circe text-base text-text-black">Вы первыми будете узнавать о наших акциях и эксклюзивных
                    предложениях.</p>
            </div>
            <form class="w-full lg:w-auto lg:grow h-12">
                <UiInput placeholder="Укажите ваш email" />
            </form>
            <UiButton class="w-full lg:w-fit" is="button" content="Подписаться"></UiButton>
        </div>

        <!-- Нижняя часть -->
        <div class="w-full grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-6 gap-6">

            <div class="col-span-1 md:col-span-3 2xl:col-span-2 flex flex-col gap-6 w-full">
                <FooterMedia />
            </div>

            <div class="">
                <p class="text-xl font-circe font-normal mb-5 text-text-black">Магазины</p>
                <div class="flex flex-col gap-3">
                    <div v-for="value in stores?.data" :key="value.id">
                        <p class="font-circe text-base text-text-black">
                            {{ 'г.' + value.attributes.name + ', ' + value.attributes.address }}
                        </p>
                        <p v-html="value.attributes.schedule.TEXT" class="font-circe text-sm text-text-gray whitespace-pre-line">
                        </p>
                    </div>
                </div>
            </div>

            <div class="">
                <p class="text-xl font-circe font-normal mb-5 text-text-black">{{ menu?.data.company.title }}</p>
                <div class="flex flex-col gap-3">
                    <NuxtLink v-for="value in menu?.data.company.submenu[0]" :key="value.id" :to="value.links.self"
                        class="font-circe text-base text-text-black hover:text-text-black/60">{{ value.name }}
                    </NuxtLink>
                </div>
            </div>

            <div class="">
                <p class="text-xl font-circe font-normal mb-5 text-text-black">{{ menu?.data.help.title }}</p>
                <div class="flex flex-col gap-3">
                    <NuxtLink v-for="value in menu?.data.help.submenu[0]" :key="value.id" :to="value.links.self"
                        class="font-circe text-base text-text-black hover:text-text-black/60">{{ value.name }}
                    </NuxtLink>
                </div>
            </div>
        </div>

        <div class="flex w-full justify-between items-end h-18 border-t border-blue/5">
            <p class="font-circe text-sm">© ITL.B2C 2023</p>
            <img src="/img/Logo.svg" alt="logo">
        </div>

    </footer>
</template>

<style></style>