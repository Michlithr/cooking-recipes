<script setup lang="ts">
import { reactive } from "vue";
import { StarType } from "@/enums/StarType";

const maxDifficulty = 5;
const difficultyStars: StarType[] = reactive([]);

const props = defineProps<{
  difficulty: number;
}>();

setupDifficultyStars();

function setupDifficultyStars() {
  for (let i = 0; i < maxDifficulty; i++) {
    difficultyStars.push(StarType.Empty);
  }

  let index = 0;
  let tempDifficultyValue = props.difficulty;

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
  <FontAwesomeIcon
    v-for="(starType, key) in difficultyStars"
    :key="key"
    :icon="getFontAwesomeStarIconName(starType)"
  />
</template>

<style lang="scss"></style>
