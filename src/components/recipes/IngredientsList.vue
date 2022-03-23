<script setup lang="ts">
import type Ingredient from "@/interfaces/Ingredient";

const props = defineProps<{
  ingredients: Ingredient[];
}>();

function getIngredientMeasure(ingredient: Ingredient) {
  return `${ingredient.amount} ${ingredient.measure}`;
}
</script>

<template>
  <h1>Ingredients</h1>
  <ul>
    <li v-for="(ingredient, key) in props.ingredients" :key="key">
      <div class="ingredient">
        <p>{{ getIngredientMeasure(ingredient) }}</p>
        <b>{{ ingredient.name }}</b>
      </div>
    </li>
  </ul>
</template>

<style lang="scss">
h1 {
  margin: 12px 0 0 0;
}

ul {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0;
  width: 40vw;

  .ingredient {
    display: flex;
    margin: 10px 0;
    font-size: 18px;

    p {
      padding: 0;
      margin: 0 6px 0 0;
    }
  }
}
</style>
