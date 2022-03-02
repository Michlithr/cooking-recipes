<script setup lang="ts">
import { RouterView } from "vue-router";
import SideMenu from "@/components/SideMenu.vue";
</script>

<template>
  <div class="home-container">
    <header>
      <SideMenu />
    </header>
    <RouterView />
  </div>
</template>

<style>
.home-container {
  display: flex;
  justify-content: flex-start;
}
</style>
