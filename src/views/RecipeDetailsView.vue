<script setup lang="ts">
import type Recipe from "@/interfaces/Recipe";
import type Measure from "@/interfaces/Measure";
import { Measures } from "@/enums/Measures";
import RecipesService from "@/services/RecipesService";
import { reactive } from "vue";
import { useRoute } from "vue-router";
import DifficultyStar from "@/components/recipes/DifficultyStar.vue";
import RecipeMeasure from "../components/recipes/RecipeMeasure.vue";

const route = useRoute();
const id = +route.params.id;
const recipe = reactive({} as Recipe);
const measures = reactive([] as Measure[]);

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
        <div class="measures">
          <RecipeMeasure
            :value="recipe.preparationTime"
            :measure="Measures.Time"
          />
          <div class="vertical-line" />
          <RecipeMeasure
            :value="recipe.ingredients.length"
            :measure="Measures.Ingredients"
          />
          <div class="vertical-line" />
          <RecipeMeasure
            :value="recipe.servings"
            :measure="Measures.Servings"
          />
        </div>
      </div>
      <img :src="getImagePath()" />
    </div>
    <hr />
    <div>
      <p v-for="(ingredient, key) in recipe.ingredients" :key="key">
        {{ ingredient.amount }}, {{ ingredient.measure }}, {{ ingredient.name }}
      </p>
    </div>
    <div>
      <p v-for="(step, key) in recipe.directions" :key="key">
        {{ key }}: {{ step }}
      </p>
    </div>
  </div>
</template>

<style lang="scss">
.details-container {
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

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

      .measures {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;

        .vertical-line {
          border-right: 2px solid $accent;
        }
      }
    }

    img {
      margin-top: 20px;
      width: 25vw;
      border-radius: 10px;
    }
  }
}
</style>
