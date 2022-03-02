<script setup lang="ts">
import { RouteNames } from "@/enums/RouteNames";
import { StarType } from "@/enums/StarType";
import type Recipe from "@/interfaces/Recipe";
import { useRouter } from "vue-router";

const props = defineProps<{
  recipe: Recipe;
}>();

const maxDifficulty = 5;
const difficultyStars: StarType[] = [];
const router = useRouter();

setupDifficultyStars();

function setupDifficultyStars() {
  for (let i = 0; i < maxDifficulty; i++) {
    difficultyStars.push(StarType.Empty);
  }

  let index = 0;
  let tempDifficultyValue = props.recipe.difficulty;

  while (tempDifficultyValue > 0 && index <= maxDifficulty) {
    if (tempDifficultyValue - 1 >= 0) {
      difficultyStars[index] = StarType.Full;
      tempDifficultyValue -= 1;
    } else if (tempDifficultyValue - 0.5 >= 0) {
      difficultyStars[index] = StarType.Half;
      tempDifficultyValue -= 0.5;
    }

    index++;
  }
}

function showDetails() {
  router.push({
    name: RouteNames.RecipeDetails,
    params: { id: props.recipe.id },
  });
}

function getImagePath() {
  return `/src/assets/${props.recipe.image}.jpg`;
}

function getFontAwesomeStarIconName(starType: StarType) {
  switch (starType) {
    case StarType.Full:
      return "star";
    case StarType.Half:
      return "star-half-stroke";
    case StarType.Empty:
    default:
      return ["far", "star"];
  }
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
      <FontAwesomeIcon
        v-for="(starType, key) in difficultyStars"
        class="icon"
        :key="key"
        :icon="getFontAwesomeStarIconName(starType)"
      />
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
