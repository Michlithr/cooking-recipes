<script setup lang="ts">
import SearchRecipes from "@/components/SearchRecipes.vue";
import RegionPicker from "@/components/RegionPicker.vue";
import RecommendedRecipesList from "@/components/recipes/RecommendedRecipesList.vue";
</script>

<template>
  <main>
    <SearchRecipes />
    <RegionPicker />
    <RecommendedRecipesList />
  </main>
</template>

<style lang="scss">
main {
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
