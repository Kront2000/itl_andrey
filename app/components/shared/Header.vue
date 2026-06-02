<script setup lang="ts">


</script>

<template>
  <header class="w-full max-w-[1920px] mx-auto px-[2vw] py-[2vw] flex flex-col gap-7 bg-blue/5 md:md:bg-white">
    <div class="flex gap-6 w-full justify-between items-center">

      <NuxtLink :to="'/'">
        <img class="hidden lg:block" src="/logo.svg" alt="">
      </NuxtLink>
      

      <UiButton class="hidden sm:flex" is="NuxtLink" content="Каталог товара" to="/catalog">
        <IconsMenu class="w-4 h-4" />
      </UiButton>

      <form @submit.prevent class="flex grow h-12 relative">
        <UiInput placeholder="Поиск товаров и категорий">
          <IconsSearch class="text-input-blue" />
        </UiInput>
      </form>

      <div class="hidden sm:flex">
        <button type="button" class="button">
          <IconsUser class="w-6 h-6 text-blue-600" />
          <span class="text-sm font-circe">Войти</span>
        </button>

        <button type="button" class="button">
          <IconsHeart class="w-6 h-6 text-blue-600" />
          <span class="text-sm font-circe">Избранное</span>
        </button>

        <button type="button" class="button">
          <IconsCart class="w-6 h-6 text-blue-600" />
          <span class="text-sm font-circe">Корзина</span>
        </button>
      </div>
    </div>


    <SharedPopularCategories />


  </header>
</template>

<style scoped>
  @reference "~/assets/css/main.css";

  .button{
    @apply flex items-center gap-2 hover:bg-blue/5 p-2 rounded-lg transition duration-150
  }
</style>