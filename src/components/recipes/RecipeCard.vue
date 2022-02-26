<script setup lang="ts">
import type Recipe from "@/interfaces/Recipe";
import { useRouter } from "vue-router";

const props = defineProps<{
  recipe: Recipe;
}>();

const router = useRouter();

function showDetails() {
  router.push({
    path: "/recipeDetails",
    params: { recipeId: props.recipe.id },
  });
}
</script>

<template>
  <div class="recipe-container" @click="showDetails">
    <h1>{{ props.recipe.title }}</h1>
    <h2>{{ props.recipe.difficulty }}</h2>
    <h2>{{ props.recipe.preparationTime }}</h2>
    <p>{{ props.recipe.image }}</p>
    <p>{{ props.recipe.description }}</p>
  </div>
</template>

<style lang="scss">
.recipe-container {
  width: 180px;
  height: 180px;
  margin: 20px;
  border: 1px solid black;
  box-shadow: 1px black;
}
</style>
