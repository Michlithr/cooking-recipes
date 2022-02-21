<script setup lang="ts">
import SearchRecipes from "@/components/SearchRecipes.vue";
import SideMenu from "@/components/SideMenu.vue";
</script>

<template>
  <div class="home-container">
    <header class="side-menu">
      <SideMenu />
    </header>
    <main class="content">
      <SearchRecipes />
    </main>
  </div>
</template>

<style lang="scss">
.home-container {
  display: flex;
  justify-content: flex-start;

  .side-menu {
    min-width: 200px;
    background: $header__bg;
  }

  .content {
    width: 100vw;
    display: flex;
    justify-content: center;
    background: $main__bg;
  }
}
</style>
