<script setup lang="ts">
const props = defineProps<{
  time: number;
  ingredients: number;
  servings: number;
}>();
</script>

<template>
  <div class="measures">
    <div class="measure">
      <h1>{{ props.time }}</h1>
      <h2>minutes</h2>
    </div>
    <div class="vertical-line" />
    <div class="measure">
      <h1>{{ props.ingredients }}</h1>
      <h2>ingredients</h2>
    </div>
    <div class="vertical-line" />
    <div class="measure">
      <h1>{{ props.servings }}</h1>
      <h2>servings</h2>
    </div>
  </div>
</template>

<style lang="scss">
.measures {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  .vertical-line {
    border-right: 2px solid $accent;
  }

  .measure {
    width: 100vw;
    display: flex;
    flex-direction: column;
    text-align: center;

    h1 {
      margin: 0 !important;
      font-size: 22px;
      font-weight: normal;
    }

    h2 {
      margin: 12px 0 0 0 !important;
      margin-top: 12px !important;
      font-size: 16px;
      font-weight: normal;
    }
  }
}
</style>
