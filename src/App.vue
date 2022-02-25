<template>
  <div class="home-container">
    <header>
      <SideMenu />
    </header>
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import SideMenu from "@/components/SideMenu.vue";
</script>

<style>
.home-container {
  display: flex;
  justify-content: flex-start;
}
</style>
