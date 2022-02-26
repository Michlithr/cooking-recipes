<script setup lang="ts">
import { onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute;

onMounted(() => {
  console.log(route.name);
});
</script>

<template>
  <h1>Recipe details</h1>
  <p>hi!</p>
</template>

<style lang="scss"></style>
