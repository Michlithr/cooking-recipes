<script setup lang="ts">
import type Recipe from "@/interfaces/Recipe";
import RecipesService from "@/services/RecipesService";
import { ref, reactive, onMounted } from "vue";
import { useRoute } from "vue-router";

const id = ref(0);
const recipe = reactive({} as Recipe);
const route = useRoute();

onMounted(() => {
  id.value = +route.params.id;
  RecipesService.fetchRecipe(id.value)
    .then((response) => {
      if (response) assignValuesToRecipe(response);
    })
    .catch((error) => console.log(error.message));
});

function assignValuesToRecipe(data: Recipe) {
  recipe.id = data.id;
  recipe.title = data.title;
  recipe.description = data.description;
  recipe.image = data.image;
  recipe.difficulty = data.difficulty;
  recipe.preparationTime = data.preparationTime;
}
</script>

<template>
  <div class="details-container">
    <h1>Recipe details</h1>
    <p>{{ recipe.id }}</p>
    <p>{{ recipe.title }}</p>
    <p>{{ recipe.image }}</p>
    <p>{{ recipe.description }}</p>
    <p>{{ recipe.difficulty }}</p>
    <p>{{ recipe.preparationTime }}</p>
  </div>
</template>

<style lang="scss">
.details-container {
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
</style>
