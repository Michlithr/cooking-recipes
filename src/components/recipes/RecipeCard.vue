<script setup lang="ts">
import { RouteNames } from "@/enums/RouteNames";
import type Recipe from "@/interfaces/Recipe";
import { useRouter } from "vue-router";
import DifficultyStar from "@/components/recipes/DifficultyStar.vue";

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
    <p>
      Preparation time: <b>{{ props.recipe.preparationTime }}</b>
    </p>
    <div class="difficulty">
      <DifficultyStar :difficulty="props.recipe.difficulty" />
    </div>
  </div>
</template>

<style lang="scss">
.recipe-container {
  width: 200px;
  margin: 20px;
  background-color: $white__bg;
  border: 1px white solid;
  border-radius: 20px;
  cursor: pointer;

  img {
    height: 200px;
    width: 200px;
  }

  b {
    margin: 6px 4px;
    font-size: 16px;
  }

  p {
    height: 20px;
    margin: 6px 10px;
    font-size: 16px;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .difficulty {
    margin: 10px 10px;
    color: $primary;
  }
}
</style>
