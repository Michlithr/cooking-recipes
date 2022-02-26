<script setup lang="ts">
import RecipeCard from "@/components/recipes/RecipeCard.vue";
import type Recipe from "@/interfaces/Recipe";
import RecipesService from "@/services/RecipesService";
import { onMounted, reactive } from "vue";
const recipes: Recipe[] = reactive([]);

onMounted(async () => {
  await RecipesService.fetchRecipes()
    .then((response) => {
      recipes.push(...response);
      console.log(recipes);
    })
    .catch((error) => console.log(error));
});
</script>

<template>
  <div class="list-container">
    <h1>Recipes propositions</h1>
    <div class="recipes-container">
      <RecipeCard
        v-for="(recipe, key) in recipes"
        :key="key"
        :recipe="recipe"
      />
    </div>
  </div>
</template>

<style lang="scss">
.list-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin-bottom: 60px;
  }

  .recipes-container {
    width: 60vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
}
</style>
