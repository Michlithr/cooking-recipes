<script setup lang="ts">
import SearchRecipes from "@/components/SearchRecipes.vue";
import SideMenu from "@/components/SideMenu.vue";
</script>

<template>
  <div class="home-container">
    <header>
      <SideMenu />
    </header>
    <main>
      <SearchRecipes />
    </main>
  </div>
</template>

<style lang="scss">
.home-container {
  display: flex;
  justify-content: flex-start;
}
</style>
