<template>
  <div class="list-container">
    <h1>Recipes propositions</h1>
    <div class="recipes-container">
      <RecipeCard
        v-for="(recipe, key) in recipes"
        :key="key"
        :recipe="recipe.title"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import RecipeCard from "@/components/recipes/RecipeCard.vue";
import { ref } from "vue";

const recipes = ref([
  {
    id: 1,
    title: "title 1",
  },
  {
    id: 2,
    title: "title 2",
  },
  {
    id: 3,
    title: "title 3",
  },
  {
    id: 4,
    title: "title 4",
  },
  {
    id: 5,
    title: "title 5",
  },
  {
    id: 6,
    title: "title 5",
  },
  {
    id: 7,
    title: "title 5",
  },
]);
</script>

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
