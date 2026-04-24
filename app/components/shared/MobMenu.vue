<script setup lang='ts'>
const route = useRoute();
</script>

<template>
    <nav class="h-22 w-full md:hidden flex justify-center border border-blue/10 fixed 
    px-5.5 pt-2.5 bottom-0 bg-white gap-7.75">

        <div class="w-full max-w-112.5 flex justify-between">
            <NuxtLink to="/" class="flex flex-col items-center" :class="{'text-blue': route.fullPath == '/'}">
                <IconsHome />
                <span class="font-circe text-sm">Главная</span>
            </NuxtLink>

            <NuxtLink to="/catalog" class="flex flex-col items-center" :class="{'text-blue': route.fullPath == '/catalog'}">
                <IconsCatalog />
                <span class="font-circe text-sm">Каталог</span>
            </NuxtLink>

            <NuxtLink class="flex flex-col items-center">
                <IconsHeart />
                <span class="font-circe text-sm">Избранное</span>
            </NuxtLink>

            <NuxtLink class="flex flex-col items-center">
                <IconsCart />
                <span class="font-circe text-sm">Корзина</span>
            </NuxtLink>

            <NuxtLink class="flex flex-col items-center">
                <IconsMenu />
                <span class="font-circe text-sm">Меню</span>
            </NuxtLink>
        </div>

    </nav>
</template>

<style></style>