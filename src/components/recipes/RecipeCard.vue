<script setup lang="ts">
import { RouteNames } from "@/enums/RouteNames";
import type Recipe from "@/interfaces/Recipe";
import { useRouter } from "vue-router";

const props = defineProps<{
  recipe: Recipe;
}>();

const router = useRouter();

function showDetails() {
  router.push({
    name: RouteNames.RecipeDetails,
    params: { id: props.recipe.id },
  });
}

function getImagePath() {
  return `/src/assets/${props.recipe.image}.jpg`;
}
</script>

<template>
  <div class="recipe-container" @click="showDetails">
    <img :src="getImagePath()" />
    <b>{{ props.recipe.title }}</b>
    <p>{{ props.recipe.description }}</p>
    <p>Preparation time: {{ props.recipe.preparationTime }}</p>
    <p>Difficulty: {{ props.recipe.difficulty }}/5</p>
  </div>
</template>

<style lang="scss">
.recipe-container {
  width: 180px;
  margin: 20px;
  cursor: pointer;

  img {
    height: 180px;
    width: 180px;
  }

  b {
    font-size: 16px;
  }

  p {
    height: 20px;
    margin: 6px 0;
    font-size: 16px;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
