<script setup lang="ts">
import type Recipe from "@/interfaces/Recipe";
import RecipesService from "@/services/RecipesService";
import { reactive } from "vue";
import { useRoute } from "vue-router";
import DifficultyStar from "@/components/recipes/DifficultyStar.vue";
import RecipeMeasure from "../components/recipes/RecipeMeasure.vue";
import IngredientsList from "../components/recipes/IngredientsList.vue";
import DirectionsList from "../components/recipes/DirectionsList.vue";

const route = useRoute();
const id = +route.params.id;
const recipe = reactive({} as Recipe);

RecipesService.fetchRecipe(id)
  .then((response) => {
    if (response) assignValuesToRecipe(response);
  })
  .catch((error) => console.log(error.message));

function assignValuesToRecipe(data: Recipe) {
  recipe.id = data.id;
  recipe.title = data.title;
  recipe.description = data.description;
  recipe.image = data.image;
  recipe.difficulty = data.difficulty;
  recipe.preparationTime = data.preparationTime;
  recipe.servings = data.servings;
  recipe.ingredients = data.ingredients;
  recipe.directions = data.directions;
}

function getImagePath() {
  return `/src/assets/${recipe.image}.jpg`;
}
</script>

<template>
  <div class="details-container">
    <div class="main-info-container">
      <div class="important-details">
        <h1>{{ recipe.title }}</h1>
        <p>{{ recipe.description }}</p>
        <h3>Difficulty</h3>
        <div class="difficulty">
          <DifficultyStar :difficulty="recipe.difficulty" />
        </div>
        <RecipeMeasure
          :time="recipe.preparationTime"
          :ingredients="recipe.ingredients.length"
          :servings="recipe.servings"
        />
      </div>
      <img :src="getImagePath()" />
    </div>
    <hr />
    <IngredientsList :ingredients="recipe.ingredients" />
    <hr />
    <DirectionsList :directions="recipe.directions" />
  </div>
</template>

<style lang="scss">
.details-container {
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;

  h1 {
    margin: 20px 0;
  }

  .difficulty {
    margin: 10px 0px;
    color: $primary;
  }

  hr {
    margin: 30px 0;
    width: 50vw;
  }

  .main-info-container {
    width: 50vw;
    display: flex;
    flex-direction: row;
    justify-content: center;

    .important-details {
      width: 25vw;
    }

    img {
      margin-top: 20px;
      width: 25vw;
      border-radius: 10px;
    }
  }
}
</style>
