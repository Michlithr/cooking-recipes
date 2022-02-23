<template>
  <main>
    <SearchRecipes />
    <RegionPicker />
  </main>
</template>

<script setup lang="ts">
import SearchRecipes from "@/components/SearchRecipes.vue";
import RegionPicker from "@/components/RegionPicker.vue";
</script>

<style lang="scss">
main {
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
