<template>
  <div class="recipe-container">
    <p>{{ props.recipe }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  recipe?: string;
}>();
</script>

<style lang="scss">
.recipe-container {
  width: 180px;
  height: 180px;
  margin: 20px;
  border: 1px solid black;
  box-shadow: 1px black;
}
</style>
